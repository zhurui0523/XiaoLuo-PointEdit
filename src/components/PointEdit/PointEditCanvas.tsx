import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type SyntheticEvent,
} from 'react';
import type {
  AnnotationPoint,
  ImageAnnotation,
  ImageAnnotationTool,
  TextImageAnnotation,
} from '../../types/annotation';
import { AnnotationGraphics } from './AnnotationLayer';

export interface PointEditCanvasProps {
  imageSrc: string;
  annotations: ImageAnnotation[];
  activeTool: ImageAnnotationTool;
  selectedColor: string;
  selectedStrokeWidth: number;
  selectedId: string | null;
  zoom: number;
  onAnnotationsChange: (annotations: ImageAnnotation[]) => void;
  onSelectedIdChange: (id: string | null) => void;
  onImageSizeChange: (size: { width: number; height: number }) => void;
}

interface ImageSize {
  width: number;
  height: number;
}

interface TextEditorState {
  id: string | null;
  x: number;
  y: number;
  value: string;
  color: string;
  fontSize: number;
}

type InteractionKind = 'draw' | 'move' | 'resize-rectangle' | 'arrow-start' | 'arrow-end' | 'erase';

interface InteractionState {
  kind: InteractionKind;
  pointerId: number;
  start: AnnotationPoint;
  source?: ImageAnnotation;
}

const MIN_SHAPE_SCREEN_SIZE = 5;
const HIT_TARGET_SCREEN_SIZE = 10;

function createAnnotationId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `ann_${crypto.randomUUID()}`;
  }
  return `ann_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function distanceToSegment(point: AnnotationPoint, start: AnnotationPoint, end: AnnotationPoint): number {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  if (dx === 0 && dy === 0) return Math.hypot(point.x - start.x, point.y - start.y);
  const lengthSquared = dx * dx + dy * dy;
  const projection = Math.max(0, Math.min(1, (
    (point.x - start.x) * dx + (point.y - start.y) * dy
  ) / lengthSquared));
  const x = start.x + projection * dx;
  const y = start.y + projection * dy;
  return Math.hypot(point.x - x, point.y - y);
}

function getTextBounds(annotation: TextImageAnnotation) {
  const lines = annotation.text.split('\n');
  let longestLine = 0;
  for (const line of lines) longestLine = Math.max(longestLine, line.length);
  return {
    width: Math.max(annotation.fontSize, longestLine * annotation.fontSize * 0.64),
    height: Math.max(annotation.fontSize, lines.length * annotation.fontSize * 1.25),
  };
}

function hitTestAnnotation(
  annotation: ImageAnnotation,
  point: AnnotationPoint,
  scale: number,
): boolean {
  const margin = HIT_TARGET_SCREEN_SIZE / Math.max(scale, 0.001);
  switch (annotation.type) {
    case 'rectangle':
      return point.x >= annotation.x - margin
        && point.x <= annotation.x + annotation.width + margin
        && point.y >= annotation.y - margin
        && point.y <= annotation.y + annotation.height + margin;
    case 'brush':
      return annotation.points.some((brushPoint) => (
        Math.hypot(point.x - brushPoint.x, point.y - brushPoint.y) <= margin
      ));
    case 'arrow':
      return distanceToSegment(
        point,
        { x: annotation.startX, y: annotation.startY },
        { x: annotation.endX, y: annotation.endY },
      ) <= margin;
    case 'marker':
      return Math.hypot(point.x - annotation.x, point.y - annotation.y) <= annotation.size + margin;
    case 'text': {
      const bounds = getTextBounds(annotation);
      return point.x >= annotation.x - margin
        && point.x <= annotation.x + bounds.width + margin
        && point.y >= annotation.y - margin
        && point.y <= annotation.y + bounds.height + margin;
    }
  }
}

function findAnnotationAt(
  annotations: ImageAnnotation[],
  point: AnnotationPoint,
  scale: number,
  type?: ImageAnnotation['type'],
): ImageAnnotation | undefined {
  for (let index = annotations.length - 1; index >= 0; index -= 1) {
    const annotation = annotations[index];
    if ((!type || annotation.type === type) && hitTestAnnotation(annotation, point, scale)) {
      return annotation;
    }
  }
  return undefined;
}

function moveAnnotation(annotation: ImageAnnotation, dx: number, dy: number): ImageAnnotation {
  switch (annotation.type) {
    case 'rectangle':
      return { ...annotation, x: annotation.x + dx, y: annotation.y + dy };
    case 'brush':
      return {
        ...annotation,
        points: annotation.points.map((point) => ({ x: point.x + dx, y: point.y + dy })),
      };
    case 'arrow':
      return {
        ...annotation,
        startX: annotation.startX + dx,
        startY: annotation.startY + dy,
        endX: annotation.endX + dx,
        endY: annotation.endY + dy,
      };
    case 'marker':
      return { ...annotation, x: annotation.x + dx, y: annotation.y + dy };
    case 'text':
      return { ...annotation, x: annotation.x + dx, y: annotation.y + dy };
  }
}

function replaceAnnotation(
  annotations: ImageAnnotation[],
  replacement: ImageAnnotation,
): ImageAnnotation[] {
  return annotations.map((annotation) => (
    annotation.id === replacement.id ? replacement : annotation
  ));
}

function isValidDraw(annotation: ImageAnnotation, scale: number): boolean {
  const minimum = MIN_SHAPE_SCREEN_SIZE / Math.max(scale, 0.001);
  switch (annotation.type) {
    case 'rectangle':
      return annotation.width >= minimum || annotation.height >= minimum;
    case 'arrow':
      return Math.hypot(
        annotation.endX - annotation.startX,
        annotation.endY - annotation.startY,
      ) >= minimum;
    case 'brush':
      return annotation.points.length >= 2;
    default:
      return true;
  }
}

export default function PointEditCanvas({
  imageSrc,
  annotations,
  activeTool,
  selectedColor,
  selectedStrokeWidth,
  selectedId,
  zoom,
  onAnnotationsChange,
  onSelectedIdChange,
  onImageSizeChange,
}: PointEditCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const textEditorRef = useRef<HTMLTextAreaElement>(null);
  const interactionRef = useRef<InteractionState | null>(null);
  const draftRef = useRef<ImageAnnotation[] | null>(null);
  const tempRef = useRef<ImageAnnotation | null>(null);
  const composingRef = useRef(false);

  const [naturalSize, setNaturalSize] = useState<ImageSize | null>(null);
  const [viewportSize, setViewportSize] = useState<ImageSize>({ width: 800, height: 600 });
  const [draftAnnotations, setDraftAnnotations] = useState<ImageAnnotation[] | null>(null);
  const [tempAnnotation, setTempAnnotation] = useState<ImageAnnotation | null>(null);
  const [textEditor, setTextEditor] = useState<TextEditorState | null>(null);

  const renderedAnnotations = draftAnnotations ?? annotations;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;
    const updateSize = () => {
      setViewportSize({
        width: Math.max(160, container.clientWidth),
        height: Math.max(120, container.clientHeight),
      });
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const textEditorKey = textEditor ? textEditor.id ?? 'new' : null;
  useEffect(() => {
    if (!textEditorKey) return undefined;
    const frame = requestAnimationFrame(() => {
      textEditorRef.current?.focus();
      textEditorRef.current?.select();
    });
    return () => cancelAnimationFrame(frame);
  }, [textEditorKey]);

  const display = useMemo(() => {
    if (!naturalSize) return { width: 0, height: 0, scale: 1 };
    const availableWidth = Math.max(120, viewportSize.width - 80);
    const availableHeight = Math.max(100, viewportSize.height - 164);
    const fitScale = Math.min(
      availableWidth / naturalSize.width,
      availableHeight / naturalSize.height,
    );
    const scale = Math.max(0.01, fitScale * (zoom / 100));
    return {
      width: naturalSize.width * scale,
      height: naturalSize.height * scale,
      scale,
    };
  }, [naturalSize, viewportSize.height, viewportSize.width, zoom]);

  const handleImageLoad = useCallback((event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    const size = { width: image.naturalWidth, height: image.naturalHeight };
    setNaturalSize(size);
    onImageSizeChange(size);
  }, [onImageSizeChange]);

  const getNativePoint = useCallback((event: ReactPointerEvent<SVGSVGElement>): AnnotationPoint => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (!naturalSize || rect.width === 0 || rect.height === 0) return { x: 0, y: 0 };
    return {
      x: ((event.clientX - rect.left) / rect.width) * naturalSize.width,
      y: ((event.clientY - rect.top) / rect.height) * naturalSize.height,
    };
  }, [naturalSize]);

  const setDraft = useCallback((next: ImageAnnotation[] | null) => {
    draftRef.current = next;
    setDraftAnnotations(next);
  }, []);

  const setTemp = useCallback((next: ImageAnnotation | null) => {
    tempRef.current = next;
    setTempAnnotation(next);
  }, []);

  const resetInteraction = useCallback(() => {
    interactionRef.current = null;
    setDraft(null);
    setTemp(null);
  }, [setDraft, setTemp]);

  const beginTextEdit = useCallback((annotation: TextImageAnnotation) => {
    setTextEditor({
      id: annotation.id,
      x: annotation.x,
      y: annotation.y,
      value: annotation.text,
      color: annotation.color,
      fontSize: annotation.fontSize,
    });
    onSelectedIdChange(annotation.id);
  }, [onSelectedIdChange]);

  const saveTextEdit = useCallback(() => {
    if (!textEditor) return;
    const value = textEditor.value.trim();
    let next = annotations;
    if (textEditor.id) {
      next = value
        ? annotations.map((annotation) => (
          annotation.id === textEditor.id && annotation.type === 'text'
            ? { ...annotation, text: value }
            : annotation
        ))
        : annotations.filter((annotation) => annotation.id !== textEditor.id);
    } else if (value) {
      const id = createAnnotationId();
      next = [...annotations, {
        id,
        type: 'text',
        color: textEditor.color,
        strokeWidth: selectedStrokeWidth / display.scale,
        text: value,
        x: textEditor.x,
        y: textEditor.y,
        fontSize: textEditor.fontSize,
      }];
      onSelectedIdChange(id);
    }
    setTextEditor(null);
    if (next !== annotations) onAnnotationsChange(next);
  }, [annotations, display.scale, onAnnotationsChange, onSelectedIdChange, selectedStrokeWidth, textEditor]);

  const handlePointerDown = useCallback((event: ReactPointerEvent<SVGSVGElement>) => {
    if (!naturalSize || event.button !== 0) return;
    event.preventDefault();

    if (textEditor) {
      saveTextEdit();
      return;
    }

    const point = getNativePoint(event);
    const scale = display.scale;
    const selected = annotations.find((annotation) => annotation.id === selectedId);

    if (activeTool === 'text') {
      const existingText = findAnnotationAt(annotations, point, scale, 'text');
      if (existingText?.type === 'text') {
        beginTextEdit(existingText);
      } else {
        setTextEditor({
          id: null,
          x: point.x,
          y: point.y,
          value: '',
          color: selectedColor,
          fontSize: 18 / scale,
        });
        onSelectedIdChange(null);
      }
      return;
    }

    if (activeTool === 'marker') {
      let number = 1;
      for (const annotation of annotations) {
        if (annotation.type === 'marker') number = Math.max(number, annotation.number + 1);
      }
      const id = createAnnotationId();
      onAnnotationsChange([...annotations, {
        id,
        type: 'marker',
        color: selectedColor,
        strokeWidth: selectedStrokeWidth / scale,
        number,
        x: point.x,
        y: point.y,
        size: 16 / scale,
      }]);
      onSelectedIdChange(id);
      return;
    }

    if (activeTool === 'eraser') {
      const hit = findAnnotationAt(annotations, point, scale);
      const next = hit ? annotations.filter((annotation) => annotation.id !== hit.id) : annotations;
      setDraft(next);
      interactionRef.current = { kind: 'erase', pointerId: event.pointerId, start: point };
      event.currentTarget.setPointerCapture(event.pointerId);
      return;
    }

    if (activeTool === 'select') {
      if (selected?.type === 'rectangle') {
        const handleDistance = Math.hypot(
          point.x - (selected.x + selected.width),
          point.y - (selected.y + selected.height),
        ) * scale;
        if (handleDistance <= HIT_TARGET_SCREEN_SIZE) {
          interactionRef.current = {
            kind: 'resize-rectangle',
            pointerId: event.pointerId,
            start: point,
            source: selected,
          };
          event.currentTarget.setPointerCapture(event.pointerId);
          return;
        }
      }

      if (selected?.type === 'arrow') {
        const startDistance = Math.hypot(point.x - selected.startX, point.y - selected.startY) * scale;
        const endDistance = Math.hypot(point.x - selected.endX, point.y - selected.endY) * scale;
        const kind = startDistance <= HIT_TARGET_SCREEN_SIZE
          ? 'arrow-start'
          : endDistance <= HIT_TARGET_SCREEN_SIZE ? 'arrow-end' : null;
        if (kind) {
          interactionRef.current = {
            kind,
            pointerId: event.pointerId,
            start: point,
            source: selected,
          };
          event.currentTarget.setPointerCapture(event.pointerId);
          return;
        }
      }

      const hit = findAnnotationAt(annotations, point, scale);
      onSelectedIdChange(hit?.id ?? null);
      if (hit) {
        interactionRef.current = {
          kind: 'move',
          pointerId: event.pointerId,
          start: point,
          source: hit,
        };
        event.currentTarget.setPointerCapture(event.pointerId);
      }
      return;
    }

    const id = createAnnotationId();
    const nativeStrokeWidth = selectedStrokeWidth / scale;
    const base = { id, color: selectedColor, strokeWidth: nativeStrokeWidth };
    if (activeTool === 'rectangle') {
      setTemp({ ...base, type: 'rectangle', x: point.x, y: point.y, width: 0, height: 0 });
    } else if (activeTool === 'brush') {
      setTemp({ ...base, type: 'brush', points: [point] });
    } else if (activeTool === 'arrow') {
      setTemp({
        ...base,
        type: 'arrow',
        startX: point.x,
        startY: point.y,
        endX: point.x,
        endY: point.y,
      });
    }
    interactionRef.current = { kind: 'draw', pointerId: event.pointerId, start: point };
    event.currentTarget.setPointerCapture(event.pointerId);
  }, [
    activeTool,
    annotations,
    beginTextEdit,
    display.scale,
    getNativePoint,
    naturalSize,
    onAnnotationsChange,
    onSelectedIdChange,
    saveTextEdit,
    selectedColor,
    selectedId,
    selectedStrokeWidth,
    setDraft,
    setTemp,
    textEditor,
  ]);

  const handlePointerMove = useCallback((event: ReactPointerEvent<SVGSVGElement>) => {
    const interaction = interactionRef.current;
    if (!interaction || interaction.pointerId !== event.pointerId) return;
    event.preventDefault();
    const point = getNativePoint(event);
    const scale = display.scale;

    if (interaction.kind === 'erase') {
      const current = draftRef.current ?? annotations;
      const hit = findAnnotationAt(current, point, scale);
      if (hit) setDraft(current.filter((annotation) => annotation.id !== hit.id));
      return;
    }

    if (interaction.kind === 'draw') {
      const current = tempRef.current;
      if (!current) return;
      if (current.type === 'rectangle') {
        setTemp({
          ...current,
          x: Math.min(interaction.start.x, point.x),
          y: Math.min(interaction.start.y, point.y),
          width: Math.abs(point.x - interaction.start.x),
          height: Math.abs(point.y - interaction.start.y),
        });
      } else if (current.type === 'brush') {
        setTemp({ ...current, points: [...current.points, point] });
      } else if (current.type === 'arrow') {
        setTemp({ ...current, endX: point.x, endY: point.y });
      }
      return;
    }

    const source = interaction.source;
    if (!source) return;
    const dx = point.x - interaction.start.x;
    const dy = point.y - interaction.start.y;
    let replacement: ImageAnnotation = source;
    if (interaction.kind === 'move') {
      replacement = moveAnnotation(source, dx, dy);
    } else if (interaction.kind === 'resize-rectangle' && source.type === 'rectangle') {
      const minimum = MIN_SHAPE_SCREEN_SIZE / scale;
      replacement = {
        ...source,
        width: Math.max(minimum, source.width + dx),
        height: Math.max(minimum, source.height + dy),
      };
    } else if (interaction.kind === 'arrow-start' && source.type === 'arrow') {
      replacement = { ...source, startX: source.startX + dx, startY: source.startY + dy };
    } else if (interaction.kind === 'arrow-end' && source.type === 'arrow') {
      replacement = { ...source, endX: source.endX + dx, endY: source.endY + dy };
    }
    setDraft(replaceAnnotation(annotations, replacement));
  }, [annotations, display.scale, getNativePoint, setDraft, setTemp]);

  const finishInteraction = useCallback((event: ReactPointerEvent<SVGSVGElement>) => {
    const interaction = interactionRef.current;
    if (!interaction || interaction.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const draft = draftRef.current;
    const temp = tempRef.current;
    if (draft && draft !== annotations) {
      onAnnotationsChange(draft);
      if (selectedId && !draft.some((annotation) => annotation.id === selectedId)) {
        onSelectedIdChange(null);
      }
    } else if (temp && isValidDraw(temp, display.scale)) {
      onAnnotationsChange([...annotations, temp]);
      onSelectedIdChange(temp.id);
    }
    resetInteraction();
  }, [
    annotations,
    display.scale,
    onAnnotationsChange,
    onSelectedIdChange,
    resetInteraction,
    selectedId,
  ]);

  const cancelInteraction = useCallback((event: ReactPointerEvent<SVGSVGElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    resetInteraction();
  }, [resetInteraction]);

  const handleDoubleClick = useCallback((event: ReactPointerEvent<SVGSVGElement>) => {
    const point = getNativePoint(event);
    const hit = findAnnotationAt(annotations, point, display.scale, 'text');
    if (hit?.type === 'text') beginTextEdit(hit);
  }, [annotations, beginTextEdit, display.scale, getNativePoint]);

  const handleTextKeyDown = useCallback((event: ReactKeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setTextEditor(null);
      return;
    }
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey) && !composingRef.current) {
      event.preventDefault();
      saveTextEdit();
    }
  }, [saveTextEdit]);

  const selected = renderedAnnotations.find((annotation) => annotation.id === selectedId);
  const cursorClass = activeTool === 'select'
    ? 'is-selecting'
    : activeTool === 'text' ? 'is-text'
      : activeTool === 'eraser' ? 'is-erasing' : 'is-drawing';

  return (
    <div ref={containerRef} className="point-edit-stage">
      <div
        className="point-edit-viewport"
        style={{ width: display.width || undefined, height: display.height || undefined }}
      >
        <img
          src={imageSrc}
          alt="待标注图片"
          className={`point-edit-image${naturalSize ? ' is-ready' : ''}`}
          draggable={false}
          onLoad={handleImageLoad}
          style={naturalSize ? { width: display.width, height: display.height } : undefined}
        />
        {naturalSize ? (
          <svg
            ref={svgRef}
            className={`point-edit-canvas ${cursorClass}`}
            viewBox={`0 0 ${naturalSize.width} ${naturalSize.height}`}
            preserveAspectRatio="none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishInteraction}
            onPointerCancel={cancelInteraction}
            onDoubleClick={handleDoubleClick}
          >
            <AnnotationGraphics annotations={renderedAnnotations} selectedId={selectedId} />
            {tempAnnotation ? <AnnotationGraphics annotations={[tempAnnotation]} /> : null}
            {selected?.type === 'rectangle' ? (
              <circle
                className="point-edit-resize-handle"
                cx={selected.x + selected.width}
                cy={selected.y + selected.height}
                r={7 / display.scale}
                strokeWidth={2 / display.scale}
              />
            ) : null}
          </svg>
        ) : null}
        {textEditor && naturalSize ? (
          <textarea
            ref={textEditorRef}
            className="point-edit-text-editor"
            value={textEditor.value}
            rows={Math.max(1, textEditor.value.split('\n').length)}
            placeholder="输入标注文字"
            onChange={(event) => setTextEditor((current) => (
              current ? { ...current, value: event.target.value } : current
            ))}
            onBlur={saveTextEdit}
            onKeyDown={handleTextKeyDown}
            onCompositionStart={() => { composingRef.current = true; }}
            onCompositionEnd={() => { composingRef.current = false; }}
            style={{
              left: textEditor.x * display.scale,
              top: textEditor.y * display.scale,
              color: textEditor.color,
              fontSize: textEditor.fontSize * display.scale,
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Annotation, Point, TextAnnotation, ToolType } from '../../types/annotation';
import { Image as ImageIcon, Sparkles, Upload } from 'lucide-react';

export interface CanvasProps {
  imageSrc: string | null;
  annotations: Annotation[];
  onAddAnnotation: (ann: Annotation) => void;
  onUpdateAnnotation: (ann: Annotation) => void;
  onDeleteAnnotation: (id: string) => void;
  selectedId: string | null;
  onSelectId: (id: string | null) => void;
  activeTool: ToolType;
  selectedColor: string;
  selectedStrokeWidth: number;
  zoom: number; // e.g., 100 for 100%
  onUploadImage: (file: File) => void;
  onLoadSample?: (url: string, name: string) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  imageSrc,
  annotations,
  onAddAnnotation,
  onUpdateAnnotation,
  onDeleteAnnotation,
  selectedId,
  onSelectId,
  activeTool,
  selectedColor,
  selectedStrokeWidth,
  zoom,
  onUploadImage,
  onLoadSample,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Natural dimensions of the loaded image
  const [naturalSize, setNaturalSize] = useState<{ width: number; height: number } | null>(null);

  // Automatically load and set natural size of image programmatically when imageSrc changes
  useEffect(() => {
    if (!imageSrc) {
      setNaturalSize(null);
      return;
    }
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setNaturalSize({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
  }, [imageSrc]);
  // Dimensions of the parent viewport
  const [viewportSize, setViewportSize] = useState({ width: 800, height: 600 });

  // Drawing state
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawStartPos, setDrawStartPos] = useState<Point | null>(null);
  const [brushPoints, setBrushPoints] = useState<Point[]>([]);
  const [currentTempAnnotation, setCurrentTempAnnotation] = useState<Annotation | null>(null);

  // Manipulation (drag / resize) state
  const [dragType, setDragType] = useState<'none' | 'move' | 'resize-br' | 'arrow-start' | 'arrow-end'>('none');
  const [dragStartMouse, setDragStartMouse] = useState<Point | null>(null);
  const [dragStartAnn, setDragStartAnn] = useState<Annotation | null>(null);

  // Text editing state
  const [editingTextId, setEditingTextId] = useState<string | null>(null);
  const [editingTextValue, setEditingTextValue] = useState('');
  const [newTextPos, setNewTextPos] = useState<Point | null>(null);
  const textEditorRef = useRef<HTMLTextAreaElement>(null);
  const isComposingRef = useRef(false);

  // Update viewport size on container resize
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    const updateSize = () => {
      setViewportSize({
        width: Math.max(100, container.clientWidth - 48), // pad sides
        height: Math.max(100, container.clientHeight - 136), // pad top (24px) + bottom (112px) to clear toolbar
      });
    };

    updateSize();
    const observer = new ResizeObserver(() => {
      updateSize();
    });
    observer.observe(container);
    
    return () => observer.disconnect();
  }, []);

  // When image loads, read its natural dimensions
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setNaturalSize({
      width: img.naturalWidth,
      height: img.naturalHeight,
    });
  };

  // Calculate standard fitted size of the image in the current viewport
  const displaySize = useMemo(() => {
    if (!naturalSize) return { width: 0, height: 0 };
    const ratio = naturalSize.width / naturalSize.height;

    let width = viewportSize.width;
    let height = viewportSize.width / ratio;

    if (height > viewportSize.height) {
      height = viewportSize.height;
      width = viewportSize.height * ratio;
    }

    // Apply the zoom scale multiplier
    const zoomMultiplier = zoom / 100;
    return {
      width: width * zoomMultiplier,
      height: height * zoomMultiplier,
    };
  }, [naturalSize, viewportSize, zoom]);

  // Scale factor: displayWidth / naturalWidth
  const scale = useMemo(() => {
    if (!naturalSize || displaySize.width === 0) return 1;
    return displaySize.width / naturalSize.width;
  }, [naturalSize, displaySize]);

  // Translate client coordinates in the SVG back to native pixel space
  const getNativeCoords = (e: React.MouseEvent<SVGSVGElement>): Point => {
    const svgRect = e.currentTarget.getBoundingClientRect();
    const xCanvas = e.clientX - svgRect.left;
    const yCanvas = e.clientY - svgRect.top;

    return {
      x: xCanvas / scale,
      y: yCanvas / scale,
    };
  };

  // Focus the text editor when editing starts
  useEffect(() => {
    if (editingTextId && textEditorRef.current) {
      // Use setTimeout to avoid browser focus stealing from click events
      const timer = setTimeout(() => {
        if (textEditorRef.current) {
          textEditorRef.current.focus();
          textEditorRef.current.select();
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [editingTextId]);

  // Save text annotation edit
  const saveTextEdit = () => {
    if (!editingTextId) return;

    const trimmed = editingTextValue.trim();

    if (editingTextId === 'new_temp_text') {
      if (trimmed !== '') {
        const newId = `ann_${Date.now()}`;
        const newText: Annotation = {
          id: newId,
          type: 'text',
          color: selectedColor,
          strokeWidth: selectedStrokeWidth,
          text: trimmed,
          x: newTextPos?.x ?? 0,
          y: newTextPos?.y ?? 0,
          fontSize: 18 / scale, // target visual font size: 18px on screen
        };
        onAddAnnotation(newText);
        onSelectId(newId);
      }
      setNewTextPos(null);
    } else {
      const currentAnn = annotations.find((ann) => ann.id === editingTextId);
      if (currentAnn && currentAnn.type === 'text') {
        if (trimmed === '') {
          onDeleteAnnotation(editingTextId);
        } else {
          onUpdateAnnotation({
            ...currentAnn,
            text: trimmed,
          });
        }
      }
    }
    setEditingTextId(null);
  };

  const handleTextBlur = () => {
    if (isComposingRef.current) {
      // 正在用中文/拼音输入法输入时不处理失焦，防止有些浏览器在输入法选词时因失焦而提前保存/消失
      return;
    }
    saveTextEdit();
  };

  // Keyboard save for text overlay
  const handleTextKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing || isComposingRef.current || e.keyCode === 229) {
      return;
    }
    if (e.key === 'Escape') {
      saveTextEdit();
    }
  };

  // Erase helper to find and delete an annotation at specific native coordinates
  const eraseAt = (mousePos: Point) => {
    for (let i = annotations.length - 1; i >= 0; i--) {
      const ann = annotations[i];
      let hit = false;

      if (ann.type === 'rectangle') {
        const margin = 10 / scale; // generous margin for easy erasing
        const left = ann.x;
        const right = ann.x + ann.width;
        const top = ann.y;
        const bottom = ann.y + ann.height;
        if (
          mousePos.x >= left - margin &&
          mousePos.x <= right + margin &&
          mousePos.y >= top - margin &&
          mousePos.y <= bottom + margin
        ) {
          hit = true;
        }
      } else if (ann.type === 'marker') {
        const dist = Math.hypot(mousePos.x - ann.x, mousePos.y - ann.y);
        if (dist <= ann.size * 2.0) hit = true;
      } else if (ann.type === 'text') {
        const lines = ann.text.split('\n');
        const longestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);
        const widthEst = (longestLine * ann.fontSize * 0.7) + 12 / scale;
        const heightEst = (lines.length * ann.fontSize * 1.35) + 12 / scale;
        if (
          mousePos.x >= ann.x - 6 / scale &&
          mousePos.x <= ann.x + widthEst &&
          mousePos.y >= ann.y - 6 / scale &&
          mousePos.y <= ann.y + heightEst
        ) {
          hit = true;
        }
      } else if (ann.type === 'arrow') {
        const d = distToSegment(mousePos, { x: ann.startX, y: ann.startY }, { x: ann.endX, y: ann.endY });
        if (d <= 16 / scale) hit = true;
      } else if (ann.type === 'brush') {
        hit = ann.points.some((pt) => Math.hypot(mousePos.x - pt.x, mousePos.y - pt.y) <= 16 / scale);
      }

      if (hit) {
        onDeleteAnnotation(ann.id);
        break; // delete one per click/movement step
      }
    }
  };

  // --- MOUSE EVENT HANDLERS ---

  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!imageSrc || !naturalSize) return;

    // Deselect if editing text and clicking outside
    if (editingTextId) {
      saveTextEdit();
      return;
    }

    const mousePos = getNativeCoords(e);

    // If active tool is 'text', check if we clicked on an existing text annotation to edit it immediately
    if (activeTool === 'text') {
      const hitText = annotations.find((ann): ann is TextAnnotation => {
        if (ann.type !== 'text') return false;
        const lines = ann.text.split('\n');
        const longestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);
        const widthEst = longestLine * ann.fontSize * 0.7;
        const heightEst = lines.length * ann.fontSize * 1.35;
        const margin = 8 / scale;
        return (
          mousePos.x >= ann.x - margin &&
          mousePos.x <= ann.x + widthEst + margin &&
          mousePos.y >= ann.y - margin &&
          mousePos.y <= ann.y + heightEst + margin
        );
      });

      if (hitText) {
        setEditingTextId(hitText.id);
        setEditingTextValue(hitText.text);
        onSelectId(hitText.id);
        return;
      }
    }

    // 0. ERASER MODE: Check for erasing immediately
    if (activeTool === 'eraser') {
      setIsDrawing(true); // Treat as an active drawing/erasing stroke session
      eraseAt(mousePos);
      return;
    }

    // 1. SELECT MODE: Check for selection / dragging
    if (activeTool === 'select') {
      // Check if clicked inside a handle
      if (selectedId) {
        const selected = annotations.find((a) => a.id === selectedId);
        if (selected) {
          // Check rectangle bottom-right resize handle
          if (selected.type === 'rectangle') {
            const brX = selected.x + selected.width;
            const brY = selected.y + selected.height;
            const dist = Math.hypot(mousePos.x - brX, mousePos.y - brY) * scale;
            if (dist < 10) {
              setDragType('resize-br');
              setDragStartMouse(mousePos);
              setDragStartAnn(selected);
              return;
            }
          }
          // Check arrow start/end handles
          if (selected.type === 'arrow') {
            const distStart = Math.hypot(mousePos.x - selected.startX, mousePos.y - selected.startY) * scale;
            const distEnd = Math.hypot(mousePos.x - selected.endX, mousePos.y - selected.endY) * scale;

            if (distStart < 10) {
              setDragType('arrow-start');
              setDragStartMouse(mousePos);
              setDragStartAnn(selected);
              return;
            }
            if (distEnd < 10) {
              setDragType('arrow-end');
              setDragStartMouse(mousePos);
              setDragStartAnn(selected);
              return;
            }
          }
        }
      }

      // Check if we clicked on any annotation to select and drag it
      // Search in reverse order to select top-most element first
      for (let i = annotations.length - 1; i >= 0; i--) {
        const ann = annotations[i];
        let hit = false;

        if (ann.type === 'rectangle') {
          // Hit test rectangle borders (with some margin)
          const margin = 8 / scale;
          const left = ann.x;
          const right = ann.x + ann.width;
          const top = ann.y;
          const bottom = ann.y + ann.height;
          // check if inside or on border
          if (
            mousePos.x >= left - margin &&
            mousePos.x <= right + margin &&
            mousePos.y >= top - margin &&
            mousePos.y <= bottom + margin
          ) {
            hit = true;
          }
        } else if (ann.type === 'marker') {
          const dist = Math.hypot(mousePos.x - ann.x, mousePos.y - ann.y);
          if (dist <= ann.size * 1.5) hit = true;
        } else if (ann.type === 'text') {
          // Approximate text bounds
          const widthEst = (ann.text.length * ann.fontSize * 0.65);
          const heightEst = ann.fontSize * 1.3;
          if (
            mousePos.x >= ann.x &&
            mousePos.x <= ann.x + widthEst &&
            mousePos.y >= ann.y &&
            mousePos.y <= ann.y + heightEst
          ) {
            hit = true;
          }
        } else if (ann.type === 'arrow') {
          // Check distance to line segment
          const d = distToSegment(mousePos, { x: ann.startX, y: ann.startY }, { x: ann.endX, y: ann.endY });
          if (d <= 12 / scale) hit = true;
        } else if (ann.type === 'brush') {
          // Check distance to any point
          hit = ann.points.some((pt) => Math.hypot(mousePos.x - pt.x, mousePos.y - pt.y) <= 12 / scale);
        }

        if (hit) {
          onSelectId(ann.id);
          setDragType('move');
          setDragStartMouse(mousePos);
          setDragStartAnn(ann);
          return;
        }
      }

      // Clicked on empty space: deselect
      onSelectId(null);
      return;
    }

    // 2. DRAWING MODES: start creation
    setIsDrawing(true);
    setDrawStartPos(mousePos);
    const newId = `ann_${Date.now()}`;

    switch (activeTool) {
      case 'rectangle': {
        const newRect: Annotation = {
          id: newId,
          type: 'rectangle',
          color: selectedColor,
          strokeWidth: selectedStrokeWidth,
          x: mousePos.x,
          y: mousePos.y,
          width: 0,
          height: 0,
        };
        setCurrentTempAnnotation(newRect);
        break;
      }
      case 'brush': {
        const newBrush: Annotation = {
          id: newId,
          type: 'brush',
          color: selectedColor,
          strokeWidth: selectedStrokeWidth,
          points: [mousePos],
        };
        setBrushPoints([mousePos]);
        setCurrentTempAnnotation(newBrush);
        break;
      }
      case 'arrow': {
        const newArrow: Annotation = {
          id: newId,
          type: 'arrow',
          color: selectedColor,
          strokeWidth: selectedStrokeWidth,
          startX: mousePos.x,
          startY: mousePos.y,
          endX: mousePos.x,
          endY: mousePos.y,
        };
        setCurrentTempAnnotation(newArrow);
        break;
      }
      case 'marker': {
        // Find next incremental number
        const markers = annotations.filter((a) => a.type === 'marker') as any[];
        const nextNum = markers.length > 0 ? Math.max(...markers.map((m) => m.number)) + 1 : 1;

        const newMarker: Annotation = {
          id: newId,
          type: 'marker',
          color: selectedColor,
          strokeWidth: selectedStrokeWidth,
          number: nextNum,
          x: mousePos.x,
          y: mousePos.y,
          size: 16 / scale, // target visual size: 16px on screen
        };
        onAddAnnotation(newMarker);
        setIsDrawing(false);
        break;
      }
      case 'text': {
        e.preventDefault(); // Prevents browser focus stealing from the newly created textarea
        setNewTextPos(mousePos);
        setEditingTextId('new_temp_text');
        setEditingTextValue('');
        setIsDrawing(false);
        break;
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!imageSrc || !naturalSize) return;

    const mousePos = getNativeCoords(e);

    // 0. ERASER INTERACTION
    if (activeTool === 'eraser') {
      if (isDrawing) {
        eraseAt(mousePos);
      }
      return;
    }

    // 1. SELECT DRAG / RESIZE INTERACTION
    if (activeTool === 'select' && dragStartMouse && dragStartAnn) {
      const dx = mousePos.x - dragStartMouse.x;
      const dy = mousePos.y - dragStartMouse.y;

      switch (dragType) {
        case 'move': {
          if (dragStartAnn.type === 'rectangle') {
            onUpdateAnnotation({
              ...dragStartAnn,
              x: dragStartAnn.x + dx,
              y: dragStartAnn.y + dy,
            });
          } else if (dragStartAnn.type === 'arrow') {
            onUpdateAnnotation({
              ...dragStartAnn,
              startX: dragStartAnn.startX + dx,
              startY: dragStartAnn.startY + dy,
              endX: dragStartAnn.endX + dx,
              endY: dragStartAnn.endY + dy,
            });
          } else if (dragStartAnn.type === 'marker') {
            onUpdateAnnotation({
              ...dragStartAnn,
              x: dragStartAnn.x + dx,
              y: dragStartAnn.y + dy,
            });
          } else if (dragStartAnn.type === 'text') {
            onUpdateAnnotation({
              ...dragStartAnn,
              x: dragStartAnn.x + dx,
              y: dragStartAnn.y + dy,
            });
          } else if (dragStartAnn.type === 'brush') {
            onUpdateAnnotation({
              ...dragStartAnn,
              points: dragStartAnn.points.map((pt) => ({
                x: pt.x + dx,
                y: pt.y + dy,
              })),
            });
          }
          break;
        }
        case 'resize-br': {
          if (dragStartAnn.type === 'rectangle') {
            // Protect against zero or negative dimensions
            const newWidth = Math.max(5 / scale, dragStartAnn.width + dx);
            const newHeight = Math.max(5 / scale, dragStartAnn.height + dy);
            onUpdateAnnotation({
              ...dragStartAnn,
              width: newWidth,
              height: newHeight,
            });
          }
          break;
        }
        case 'arrow-start': {
          if (dragStartAnn.type === 'arrow') {
            onUpdateAnnotation({
              ...dragStartAnn,
              startX: dragStartAnn.startX + dx,
              startY: dragStartAnn.startY + dy,
            });
          }
          break;
        }
        case 'arrow-end': {
          if (dragStartAnn.type === 'arrow') {
            onUpdateAnnotation({
              ...dragStartAnn,
              endX: dragStartAnn.endX + dx,
              endY: dragStartAnn.endY + dy,
            });
          }
          break;
        }
      }
      return;
    }

    // 2. CREATING DRAWING INTERACTION
    if (!isDrawing || !drawStartPos || !currentTempAnnotation) return;

    switch (activeTool) {
      case 'rectangle': {
        const x = Math.min(drawStartPos.x, mousePos.x);
        const y = Math.min(drawStartPos.y, mousePos.y);
        const width = Math.abs(mousePos.x - drawStartPos.x);
        const height = Math.abs(mousePos.y - drawStartPos.y);

        setCurrentTempAnnotation({
          ...currentTempAnnotation,
          type: 'rectangle',
          x,
          y,
          width,
          height,
        });
        break;
      }
      case 'brush': {
        const nextPoints = [...brushPoints, mousePos];
        setBrushPoints(nextPoints);
        setCurrentTempAnnotation({
          ...currentTempAnnotation,
          type: 'brush',
          points: nextPoints,
        });
        break;
      }
      case 'arrow': {
        setCurrentTempAnnotation({
          ...currentTempAnnotation,
          type: 'arrow',
          startX: drawStartPos.x,
          startY: drawStartPos.y,
          endX: mousePos.x,
          endY: mousePos.y,
        });
        break;
      }
    }
  };

  const handleMouseUp = () => {
    // Eraser finalization
    if (activeTool === 'eraser') {
      setIsDrawing(false);
      return;
    }

    // Select drag finalization
    if (activeTool === 'select') {
      setDragType('none');
      setDragStartMouse(null);
      setDragStartAnn(null);
      return;
    }

    // Drawing finalization
    if (!isDrawing) return;
    setIsDrawing(false);

    if (currentTempAnnotation) {
      // Avoid tiny annotations for accidental clicks
      let valid = true;
      if (currentTempAnnotation.type === 'rectangle') {
        if (currentTempAnnotation.width < 5 / scale && currentTempAnnotation.height < 5 / scale) {
          valid = false;
        }
      } else if (currentTempAnnotation.type === 'arrow') {
        const len = Math.hypot(
          currentTempAnnotation.endX - currentTempAnnotation.startX,
          currentTempAnnotation.endY - currentTempAnnotation.startY
        );
        if (len < 5 / scale) valid = false;
      } else if (currentTempAnnotation.type === 'brush') {
        if (currentTempAnnotation.points.length < 2) valid = false;
      }

      if (valid) {
        onAddAnnotation(currentTempAnnotation);
        onSelectId(currentTempAnnotation.id); // auto select newly created shapes
      }
    }

    setCurrentTempAnnotation(null);
    setDrawStartPos(null);
    setBrushPoints([]);
  };

  // Distance from point to line segment helper (for arrow selection)
  function distToSegment(p: Point, v: Point, w: Point) {
    const l2 = Math.hypot(v.x - w.x, v.y - w.y) ** 2;
    if (l2 === 0) return Math.hypot(p.x - v.x, p.y - v.y);
    let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(p.x - (v.x + t * (w.x - v.x)), p.y - (v.y + t * (w.y - v.y)));
  }

  return (
    <div
      ref={containerRef}
      className="flex-1 h-full flex items-center justify-center pt-6 px-6 pb-28 bg-slate-100 overflow-auto relative"
    >
      {imageSrc && naturalSize ? (
        <div
          className="relative shadow-lg border border-gray-200 rounded-xl select-none bg-white"
          style={{
            width: `${displaySize.width}px`,
            height: `${displaySize.height}px`,
            transition: isDrawing || dragType !== 'none' ? 'none' : 'width 0.2s, height 0.2s',
          }}
        >
          {/* Background Display Image */}
          <img
            ref={imageRef}
            src={imageSrc}
            alt="Annotated"
            className="absolute inset-0 w-full h-full object-fill rounded-xl pointer-events-none"
            onLoad={handleImageLoad}
          />

          {/* SVG Annotation Drawing & Selection Overlay Layer */}
          <svg
            id="editor-canvas-svg"
            className="absolute inset-0 w-full h-full rounded-xl z-10 overflow-visible"
            style={{
              cursor:
                activeTool === 'select'
                  ? 'default'
                  : activeTool === 'text'
                  ? 'text'
                  : activeTool === 'eraser'
                  ? 'pointer'
                  : 'crosshair',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* Draw permanent Annotations */}
            {annotations.map((ann) => {
              // Skip drawing text annotation when actively editing it in HTML input overlay
              if (editingTextId === ann.id) return null;

              const isSelected = selectedId === ann.id;

              switch (ann.type) {
                case 'rectangle': {
                  return (
                    <g key={ann.id}>
                      <rect
                        id={`rect-${ann.id}`}
                        x={ann.x * scale}
                        y={ann.y * scale}
                        width={ann.width * scale}
                        height={ann.height * scale}
                        stroke={ann.color}
                        strokeWidth={ann.strokeWidth}
                        fill="transparent"
                        className="transition-all"
                      />
                      {/* Highlight Selection borders */}
                      {isSelected && activeTool === 'select' && (
                        <>
                          <rect
                            x={ann.x * scale - 2}
                            y={ann.y * scale - 2}
                            width={ann.width * scale + 4}
                            height={ann.height * scale + 4}
                            stroke="#818CF8"
                            strokeWidth={1}
                            strokeDasharray="4 4"
                            fill="transparent"
                          />
                          {/* Resize Handle - bottom right corner */}
                          <circle
                            cx={(ann.x + ann.width) * scale}
                            cy={(ann.y + ann.height) * scale}
                            r={6}
                            fill="#FFFFFF"
                            stroke="#4F46E5"
                            strokeWidth={2}
                            style={{ cursor: 'se-resize' }}
                          />
                        </>
                      )}
                    </g>
                  );
                }
                case 'brush': {
                  if (ann.points.length < 2) return null;
                  const dPath = ann.points
                    .map((pt, index) => `${index === 0 ? 'M' : 'L'} ${pt.x * scale} ${pt.y * scale}`)
                    .join(' ');

                  return (
                    <g key={ann.id}>
                      <path
                        id={`brush-${ann.id}`}
                        d={dPath}
                        stroke={ann.color}
                        strokeWidth={ann.strokeWidth}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {isSelected && activeTool === 'select' && (
                        <path
                          d={dPath}
                          stroke="#818CF8"
                          strokeWidth={ann.strokeWidth + 4}
                          fill="none"
                          strokeOpacity={0.3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}
                    </g>
                  );
                }
                case 'arrow': {
                  const sX = ann.startX * scale;
                  const sY = ann.startY * scale;
                  const eX = ann.endX * scale;
                  const eY = ann.endY * scale;

                  // Direction Angle
                  const angle = Math.atan2(eY - sY, eX - sX);
                  const headLength = Math.max(12, ann.strokeWidth * 3);

                  const arrow1X = eX - headLength * Math.cos(angle - Math.PI / 6);
                  const arrow1Y = eY - headLength * Math.sin(angle - Math.PI / 6);
                  const arrow2X = eX - headLength * Math.cos(angle + Math.PI / 6);
                  const arrow2Y = eY - headLength * Math.sin(angle + Math.PI / 6);

                  return (
                    <g key={ann.id}>
                      {/* Arrow shaft line */}
                      <line
                        id={`arrow-shaft-${ann.id}`}
                        x1={sX}
                        y1={sY}
                        x2={eX}
                        y2={eY}
                        stroke={ann.color}
                        strokeWidth={ann.strokeWidth}
                        strokeLinecap="round"
                      />
                      {/* Arrowhead tip */}
                      <polygon
                        id={`arrow-tip-${ann.id}`}
                        points={`${eX},${eY} ${arrow1X},${arrow1Y} ${arrow2X},${arrow2Y}`}
                        fill={ann.color}
                      />

                      {/* Highlight Selection Handles */}
                      {isSelected && activeTool === 'select' && (
                        <>
                          <line
                            x1={sX}
                            y1={sY}
                            x2={eX}
                            y2={eY}
                            stroke="#818CF8"
                            strokeWidth={ann.strokeWidth + 6}
                            strokeOpacity={0.15}
                            strokeLinecap="round"
                          />
                          {/* Start Point Handle */}
                          <circle
                            cx={sX}
                            cy={sY}
                            r={6}
                            fill="#FFFFFF"
                            stroke="#4F46E5"
                            strokeWidth={2}
                            style={{ cursor: 'move' }}
                          />
                          {/* End Point Handle */}
                          <circle
                            cx={eX}
                            cy={eY}
                            r={6}
                            fill="#FFFFFF"
                            stroke="#4F46E5"
                            strokeWidth={2}
                            style={{ cursor: 'move' }}
                          />
                        </>
                      )}
                    </g>
                  );
                }
                case 'marker': {
                  const mX = ann.x * scale;
                  const mY = ann.y * scale;
                  const radius = ann.size * scale;

                  return (
                    <g key={ann.id} id={`marker-${ann.id}`}>
                      {isSelected && activeTool === 'select' && (
                        <circle
                          cx={mX}
                          cy={mY}
                          r={radius + 6}
                          fill="transparent"
                          stroke="#818CF8"
                          strokeWidth={1.5}
                          strokeDasharray="3 3"
                        />
                      )}
                      {/* Circle backdrop */}
                      <circle cx={mX} cy={mY} r={radius} fill={ann.color} stroke="#FFFFFF" strokeWidth={2} />
                      {/* Label Text */}
                      <text
                        x={mX}
                        y={mY}
                        fill="#FFFFFF"
                        fontSize={`${radius * 1.05}px`}
                        fontWeight="bold"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontFamily="sans-serif"
                      >
                        {ann.number}
                      </text>
                    </g>
                  );
                }
                case 'text': {
                  const tX = ann.x * scale;
                  const tY = ann.y * scale;
                  const size = ann.fontSize * scale;
                  const lines = ann.text.split('\n');
                  const longestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);
                  const widthEst = longestLine * size * 0.7 + 16;
                  const heightEst = lines.length * size * 1.35 + 16;

                  return (
                    <g
                      key={ann.id}
                      id={`text-${ann.id}`}
                      onDoubleClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setEditingTextId(ann.id);
                        setEditingTextValue(ann.text);
                      }}
                      style={{ cursor: activeTool === 'select' ? 'pointer' : activeTool === 'text' ? 'text' : 'crosshair' }}
                    >
                      {/* Invisible pointer-events target rectangle behind the text for easy selection/editing */}
                      <rect
                        x={tX - 8}
                        y={tY - 8}
                        width={widthEst}
                        height={heightEst}
                        fill="transparent"
                        pointerEvents="all"
                      />
                      {isSelected && activeTool === 'select' && (
                        <rect
                          x={tX - 4}
                          y={tY - 4}
                          width={widthEst - 8}
                          height={heightEst - 8}
                          fill="transparent"
                          stroke="#818CF8"
                          strokeWidth={1}
                          strokeDasharray="3 3"
                          pointerEvents="none"
                        />
                      )}
                      <text
                        x={tX}
                        y={tY}
                        fill={ann.color}
                        fontSize={`${size}px`}
                        fontWeight="500"
                        fontFamily="sans-serif"
                        dominantBaseline="hanging"
                        pointerEvents="none"
                      >
                        {lines.map((line, index) => (
                          <tspan key={index} x={tX} dy={index === 0 ? 0 : `${size * 1.25}px`}>
                            {line}
                          </tspan>
                        ))}
                      </text>
                    </g>
                  );
                }
                default:
                  return null;
              }
            })}

            {/* Render temporary live Annotation under construction */}
            {currentTempAnnotation && (
              <>
                {currentTempAnnotation.type === 'rectangle' && (
                  <rect
                    x={currentTempAnnotation.x * scale}
                    y={currentTempAnnotation.y * scale}
                    width={currentTempAnnotation.width * scale}
                    height={currentTempAnnotation.height * scale}
                    stroke={currentTempAnnotation.color}
                    strokeWidth={currentTempAnnotation.strokeWidth}
                    fill="transparent"
                  />
                )}
                {currentTempAnnotation.type === 'brush' && currentTempAnnotation.points.length >= 2 && (
                  <path
                    d={currentTempAnnotation.points
                      .map((pt, index) => `${index === 0 ? 'M' : 'L'} ${pt.x * scale} ${pt.y * scale}`)
                      .join(' ')}
                    stroke={currentTempAnnotation.color}
                    strokeWidth={currentTempAnnotation.strokeWidth}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
                {currentTempAnnotation.type === 'arrow' && (
                  <g>
                    <line
                      x1={currentTempAnnotation.startX * scale}
                      y1={currentTempAnnotation.startY * scale}
                      x2={currentTempAnnotation.endX * scale}
                      y2={currentTempAnnotation.endY * scale}
                      stroke={currentTempAnnotation.color}
                      strokeWidth={currentTempAnnotation.strokeWidth}
                    />
                    {/* Tiny endpoint dot while drawing */}
                    <circle
                      cx={currentTempAnnotation.endX * scale}
                      cy={currentTempAnnotation.endY * scale}
                      r={4}
                      fill={currentTempAnnotation.color}
                    />
                  </g>
                )}
              </>
            )}
          </svg>

          {/* HTML Active Text Editor overlay layer for Text Annotation Editing */}
          {editingTextId && (
            <div
              className="absolute z-40 overflow-visible animate-in zoom-in-95 duration-100 select-text"
              onMouseDown={(e) => e.stopPropagation()}
              onMouseUp={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              style={{
                left: `${
                  (editingTextId === 'new_temp_text'
                    ? newTextPos?.x ?? 0
                    : annotations.find(
                      (a): a is TextAnnotation => a.id === editingTextId && a.type === 'text',
                    )?.x ?? 0) * scale
                }px`,
                top: `${
                  (editingTextId === 'new_temp_text'
                    ? newTextPos?.y ?? 0
                    : annotations.find(
                      (a): a is TextAnnotation => a.id === editingTextId && a.type === 'text',
                    )?.y ?? 0) * scale
                }px`,
              }}
            >
              <textarea
                ref={textEditorRef}
                value={editingTextValue}
                onChange={(e) => setEditingTextValue(e.target.value)}
                onBlur={handleTextBlur}
                onKeyDown={handleTextKeyDown}
                onCompositionStart={() => {
                  isComposingRef.current = true;
                }}
                onCompositionEnd={() => {
                  isComposingRef.current = false;
                }}
                placeholder="输入标注文字..."
                className="bg-transparent border-0 focus:border-0 focus:ring-0 p-0 shadow-none font-semibold outline-none resize-none overflow-hidden max-w-md block select-text leading-tight"
                style={{
                  fontSize: `${
                    (editingTextId === 'new_temp_text'
                      ? 18
                      : (annotations.find((a) => a.id === editingTextId) as any)?.fontSize ?? 18) * scale
                  }px`,
                  color:
                    editingTextId === 'new_temp_text'
                      ? selectedColor
                      : annotations.find((a) => a.id === editingTextId)?.color ?? '#EF4444',
                  minWidth: '200px',
                  lineHeight: '1.25',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  padding: '0',
                  margin: '0',
                  caretColor:
                    editingTextId === 'new_temp_text'
                      ? selectedColor
                      : annotations.find((a) => a.id === editingTextId)?.color ?? '#EF4444',
                  resize: 'none',
                  userSelect: 'text',
                  WebkitUserSelect: 'text',
                }}
                rows={editingTextValue.split('\n').length || 1}
              />
              <div className="absolute top-full left-0 mt-1.5 bg-indigo-600 text-[10px] text-white px-2 py-0.5 rounded-md font-semibold tracking-wide pointer-events-none whitespace-nowrap shadow-md">
                点击空白处自动保存
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Empty Upload State Landing View - High fidelity clean theme */
        <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center gap-8 shadow-xl relative overflow-hidden group">
          {/* Subtle Decorative Elements */}
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-violet-500/5 blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

          <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-gray-150 shadow-inner text-indigo-500 group-hover:scale-110 transition-transform duration-300">
            <ImageIcon size={30} className="stroke-1.5" />
          </div>

          <div className="space-y-2.5 max-w-md">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
              <span>智能改图</span>
              <span className="inline-flex items-center gap-1 bg-indigo-550/10 text-indigo-600 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold border border-indigo-100">
                <Sparkles size={10} />
                <span>V1.0</span>
              </span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              打开并在线标注图片：框选区域、自由手绘、添加箭头、编号徽章和文字。不涉及 AI，纯客户端离线安全编辑。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
            <button
              id="btn-upload-landing"
              type="button"
              onClick={() => {
                const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
                fileInput?.click();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm shadow-md shadow-indigo-600/15 hover:shadow-indigo-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Upload size={15} />
              <span>选择本地图片</span>
            </button>
          </div>


        </div>
      )}
    </div>
  );
};

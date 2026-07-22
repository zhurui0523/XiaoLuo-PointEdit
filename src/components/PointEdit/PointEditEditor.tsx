import './point-edit.css';
/** Controlled PointEdit editor. All edits stay local until onSave is called. */
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ZoomIn, ZoomOut } from 'lucide-react';
import type {
  ImageAnnotation,
  ImageAnnotationLayer,
  ImageAnnotationTool,
} from '../../types/annotation';
import {
  IMAGE_ANNOTATION_LAYER_VERSION,
  resizeImageAnnotationLayer,
} from '../../types/annotation';
import PointEditToolbar from './PointEditToolbar';
import { ANNOTATE_COLORS } from './pointEditConstants';
import PointEditCanvas from './PointEditCanvas';

export interface PointEditEditorProps {
  isOpen: boolean;
  imageUrl: string;
  initialAnnotationLayer?: ImageAnnotationLayer;
  onClose: () => void;
  onSave: (layer: ImageAnnotationLayer) => void;
  theme?: 'light' | 'dark' | 'inherit';
}

interface AnnotationHistory {
  past: ImageAnnotation[][];
  present: ImageAnnotation[];
  future: ImageAnnotation[][];
}

const HISTORY_LIMIT = 50;

function createHistory(annotations: ImageAnnotation[]): AnnotationHistory {
  return { past: [], present: annotations, future: [] };
}

function pushHistory(history: AnnotationHistory, annotations: ImageAnnotation[]): AnnotationHistory {
  if (history.present === annotations) return history;
  return {
    past: [...history.past, history.present].slice(-HISTORY_LIMIT),
    present: annotations,
    future: [],
  };
}

function undoHistory(history: AnnotationHistory): AnnotationHistory {
  const previous = history.past.at(-1);
  if (!previous) return history;
  return {
    past: history.past.slice(0, -1),
    present: previous,
    future: [history.present, ...history.future],
  };
}

function redoHistory(history: AnnotationHistory): AnnotationHistory {
  const next = history.future[0];
  if (!next) return history;
  return {
    past: [...history.past, history.present].slice(-HISTORY_LIMIT),
    present: next,
    future: history.future.slice(1),
  };
}

export default function PointEditEditor({
  isOpen,
  imageUrl,
  initialAnnotationLayer,
  onClose,
  onSave,
  theme = 'inherit',
}: PointEditEditorProps) {
  const initializedImageRef = useRef(false);
  const [activeTool, setActiveTool] = useState<ImageAnnotationTool>('select');
  const [selectedColor, setSelectedColor] = useState<string>(ANNOTATE_COLORS[0]);
  const [selectedStrokeWidth, setSelectedStrokeWidth] = useState(4);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);
  const [imageSize, setImageSize] = useState<{ width: number; height: number } | null>(null);
  const [history, setHistory] = useState<AnnotationHistory>(() => (
    createHistory(initialAnnotationLayer?.annotations ?? [])
  ));

  const handleImageSizeChange = useCallback((size: { width: number; height: number }) => {
    setImageSize(size);
    if (initializedImageRef.current) return;
    initializedImageRef.current = true;
    const annotations = initialAnnotationLayer
      ? resizeImageAnnotationLayer(initialAnnotationLayer, size.width, size.height).annotations
      : [];
    setHistory(createHistory(annotations));
  }, [initialAnnotationLayer]);

  const handleAnnotationsChange = useCallback((annotations: ImageAnnotation[]) => {
    setHistory((current) => pushHistory(current, annotations));
    setSelectedId((current) => (
      current && !annotations.some((annotation) => annotation.id === current) ? null : current
    ));
  }, []);

  const handleUndo = useCallback(() => {
    setHistory(undoHistory);
    setSelectedId(null);
  }, []);

  const handleRedo = useCallback(() => {
    setHistory(redoHistory);
    setSelectedId(null);
  }, []);

  const handleClear = useCallback(() => {
    setHistory((current) => pushHistory(current, []));
    setSelectedId(null);
  }, []);

  const handleDeleteSelected = useCallback(() => {
    if (!selectedId) return;
    setHistory((current) => pushHistory(
      current,
      current.present.filter((annotation) => annotation.id !== selectedId),
    ));
    setSelectedId(null);
  }, [selectedId]);

  const handleColorChange = useCallback((color: string) => {
    setSelectedColor(color);
    if (!selectedId) return;
    setHistory((current) => {
      const next = current.present.map((annotation) => (
        annotation.id === selectedId ? { ...annotation, color } : annotation
      ));
      return pushHistory(current, next);
    });
  }, [selectedId]);

  const handleSave = useCallback(() => {
    if (!imageSize) return;
    onSave({
      version: IMAGE_ANNOTATION_LAYER_VERSION,
      width: imageSize.width,
      height: imageSize.height,
      annotations: history.present,
    });
  }, [history.present, imageSize, onSave]);

  const zoomIn = useCallback(() => setZoom((current) => Math.min(250, current + 25)), []);
  const zoomOut = useCallback(() => setZoom((current) => Math.max(50, current - 25)), []);
  const resetZoom = useCallback(() => setZoom(100), []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isEditingText = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA';
      if (isEditingText) return;

      const commandKey = event.ctrlKey || event.metaKey;
      if (commandKey && event.key.toLowerCase() === 'z') {
        event.preventDefault();
        if (event.shiftKey) handleRedo();
        else handleUndo();
        return;
      }
      if (commandKey && event.key.toLowerCase() === 'y') {
        event.preventDefault();
        handleRedo();
        return;
      }

      switch (event.key.toLowerCase()) {
        case 'escape':
          onClose();
          break;
        case 'delete':
        case 'backspace':
          event.preventDefault();
          handleDeleteSelected();
          break;
        case 'v':
          setActiveTool('select');
          break;
        case 'r':
          setActiveTool('rectangle');
          break;
        case 'b':
          setActiveTool('brush');
          break;
        case 'a':
          setActiveTool('arrow');
          break;
        case 'm':
          setActiveTool('marker');
          break;
        case 't':
          setActiveTool('text');
          break;
        case 'e':
          setActiveTool('eraser');
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleDeleteSelected, handleRedo, handleUndo, isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="point-edit-overlay" data-theme={theme === 'inherit' ? undefined : theme}>
      <PointEditCanvas
        imageSrc={imageUrl}
        annotations={history.present}
        activeTool={activeTool}
        selectedColor={selectedColor}
        selectedStrokeWidth={selectedStrokeWidth}
        selectedId={selectedId}
        zoom={zoom}
        onAnnotationsChange={handleAnnotationsChange}
        onSelectedIdChange={setSelectedId}
        onImageSizeChange={handleImageSizeChange}
      />

      <div className="point-edit-toolbar-dock">
        <PointEditToolbar
          activeTool={activeTool}
          activeColor={selectedColor}
          strokeWidth={selectedStrokeWidth}
          canUndo={history.past.length > 0}
          canRedo={history.future.length > 0}
          onCancel={onClose}
          onSave={handleSave}
          onToolChange={setActiveTool}
          onColorChange={handleColorChange}
          onStrokeWidthChange={setSelectedStrokeWidth}
          onUndo={handleUndo}
          onRedo={handleRedo}
          onClear={handleClear}
        />

        <div className="point-edit-zoom-controls" aria-label="标注画布缩放">
          <button
            type="button"
            className="point-edit-zoom-btn"
            data-tooltip="缩小"
            aria-label="缩小"
            onClick={zoomOut}
            disabled={zoom <= 50}
          >
            <ZoomOut size={14} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="point-edit-zoom-value"
            data-tooltip="重置缩放"
            aria-label="重置缩放"
            onClick={resetZoom}
          >
            {zoom}%
          </button>
          <button
            type="button"
            className="point-edit-zoom-btn"
            data-tooltip="放大"
            aria-label="放大"
            onClick={zoomIn}
            disabled={zoom >= 250}
          >
            <ZoomIn size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

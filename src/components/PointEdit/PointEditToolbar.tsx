import { memo, useEffect, useRef, useState } from 'react';
import {
  Brush,
  Check,
  Download,
  Eraser,
  Hash,
  MousePointer2,
  MoveUpRight,
  Redo2,
  Square,
  Trash2,
  Type,
  Undo2,
  X,
  type LucideIcon,
} from 'lucide-react';
import type { ImageAnnotationTool } from '../../types/annotation';
import { ANNOTATE_COLORS } from './pointEditConstants';

const TOOL_BUTTONS: Array<{
  tool: ImageAnnotationTool;
  label: string;
  shortcut: string;
  icon: LucideIcon;
}> = [
  { tool: 'select', label: '选择', shortcut: 'V', icon: MousePointer2 },
  { tool: 'rectangle', label: '矩形', shortcut: 'R', icon: Square },
  { tool: 'brush', label: '画笔', shortcut: 'B', icon: Brush },
  { tool: 'arrow', label: '箭头', shortcut: 'A', icon: MoveUpRight },
  { tool: 'marker', label: '序号', shortcut: 'M', icon: Hash },
  { tool: 'text', label: '文字', shortcut: 'T', icon: Type },
  { tool: 'eraser', label: '橡皮擦', shortcut: 'E', icon: Eraser },
];

const STROKE_WIDTHS = [2, 4, 8, 12] as const;

export interface PointEditToolbarProps {
  activeTool: ImageAnnotationTool;
  activeColor: string;
  strokeWidth: number;
  canUndo: boolean;
  canRedo: boolean;
  onCancel: () => void;
  onSave: () => void;
  onToolChange: (tool: ImageAnnotationTool) => void;
  onColorChange: (color: string) => void;
  onStrokeWidthChange: (width: number) => void;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
}

function PointEditToolbar({
  activeTool,
  activeColor,
  strokeWidth,
  canUndo,
  canRedo,
  onCancel,
  onSave,
  onToolChange,
  onColorChange,
  onStrokeWidthChange,
  onUndo,
  onRedo,
  onClear,
}: PointEditToolbarProps) {
  const [showStyleMenu, setShowStyleMenu] = useState(false);
  const styleMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showStyleMenu) return undefined;
    const handlePointerDown = (event: PointerEvent) => {
      if (!styleMenuRef.current?.contains(event.target as Node)) {
        setShowStyleMenu(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => document.removeEventListener('pointerdown', handlePointerDown, true);
  }, [showStyleMenu]);

  return (
    <div className="point-edit-toolbar" role="toolbar" aria-label="图片标注工具">
      <button
        type="button"
        className="point-edit-btn point-edit-clear"
        title="清空标注"
        aria-label="清空标注"
        onClick={onClear}
      >
        <Trash2 size={16} aria-hidden="true" />
      </button>

      <div className="point-edit-divider" />

      <div className="point-edit-tool-group" aria-label="标注工具">
        {TOOL_BUTTONS.map(({ tool, label, shortcut, icon: ToolIcon }) => (
          <button
            key={tool}
            type="button"
            className={`point-edit-btn${activeTool === tool ? ' active' : ''}`}
            title={`${label} ${shortcut}`}
            aria-label={label}
            aria-pressed={activeTool === tool}
            onClick={() => onToolChange(tool)}
          >
            <ToolIcon size={16} aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className="point-edit-style-control" ref={styleMenuRef}>
        <button
          type="button"
          className={`point-edit-btn point-edit-style-trigger${showStyleMenu ? ' active' : ''}`}
          title="标注颜色与线宽"
          aria-label="标注颜色与线宽"
          aria-haspopup="dialog"
          aria-expanded={showStyleMenu}
          onClick={() => setShowStyleMenu((open) => !open)}
        >
          <span className="point-edit-style-preview" style={{ backgroundColor: activeColor }}>
            <span
              className="point-edit-style-preview-core"
              style={{ width: Math.max(3, strokeWidth), height: Math.max(3, strokeWidth) }}
            />
          </span>
        </button>

        {showStyleMenu ? (
          <div className="point-edit-style-menu" role="dialog" aria-label="标注样式">
            <div className="point-edit-style-section">
              <div className="point-edit-style-heading">
                <span>标注颜色</span>
                <span>{activeColor.toUpperCase()}</span>
              </div>
              <div className="point-edit-colors">
                {ANNOTATE_COLORS.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`point-edit-color-swatch${activeColor === color ? ' active' : ''}`}
                    style={{ backgroundColor: color }}
                    title={color}
                    aria-label={`颜色 ${color}`}
                    aria-pressed={activeColor === color}
                    onClick={() => onColorChange(color)}
                  >
                    {activeColor === color ? <Check size={12} aria-hidden="true" /> : null}
                  </button>
                ))}
              </div>
            </div>

            <div className="point-edit-style-menu-divider" />

            <div className="point-edit-style-section">
              <div className="point-edit-style-heading">
                <span>线宽</span>
                <span>{strokeWidth}px</span>
              </div>
              <div className="point-edit-stroke-options" aria-label="线宽">
                {STROKE_WIDTHS.map((width) => (
                  <button
                    key={width}
                    type="button"
                    className={`point-edit-stroke-option${strokeWidth === width ? ' active' : ''}`}
                    title={`线宽 ${width}`}
                    aria-label={`线宽 ${width}`}
                    aria-pressed={strokeWidth === width}
                    onClick={() => onStrokeWidthChange(width)}
                  >
                    <span style={{ width: Math.max(3, width), height: Math.max(3, width) }} />
                    <small>{width}px</small>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="point-edit-divider" />

      <button
        type="button"
        className="point-edit-btn"
        title="撤销 Ctrl+Z"
        aria-label="撤销"
        onClick={onUndo}
        disabled={!canUndo}
      >
        <Undo2 size={15} aria-hidden="true" />
      </button>
      <button
        type="button"
        className="point-edit-btn"
        title="重做 Ctrl+Shift+Z"
        aria-label="重做"
        onClick={onRedo}
        disabled={!canRedo}
      >
        <Redo2 size={15} aria-hidden="true" />
      </button>

      <div className="point-edit-divider" />

      <button
        type="button"
        className="point-edit-btn"
        title="保存标注"
        aria-label="保存标注"
        onClick={onSave}
      >
        <Download size={15} aria-hidden="true" />
      </button>

      <div className="point-edit-divider" />

      <button
        type="button"
        className="point-edit-btn point-edit-cancel"
        title="取消 Esc"
        aria-label="取消标注"
        onClick={onCancel}
      >
        <X size={16} aria-hidden="true" />
      </button>
    </div>
  );
}

export default memo(PointEditToolbar);

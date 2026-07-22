import { ImageAnnotationTool } from '../../types/annotation';
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
declare function PointEditToolbar({ activeTool, activeColor, strokeWidth, canUndo, canRedo, onCancel, onSave, onToolChange, onColorChange, onStrokeWidthChange, onUndo, onRedo, onClear, }: PointEditToolbarProps): import("react").JSX.Element;
declare const _default: import('react').MemoExoticComponent<typeof PointEditToolbar>;
export default _default;

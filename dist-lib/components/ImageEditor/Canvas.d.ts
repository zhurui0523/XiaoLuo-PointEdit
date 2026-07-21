import { default as React } from 'react';
import { Annotation, ToolType } from '../../types/annotation';
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
    zoom: number;
    onUploadImage: (file: File) => void;
    onLoadSample?: (url: string, name: string) => void;
}
export declare const Canvas: React.FC<CanvasProps>;

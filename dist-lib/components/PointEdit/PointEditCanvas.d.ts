import { ImageAnnotation, ImageAnnotationTool } from '../../types/annotation';
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
    onImageSizeChange: (size: {
        width: number;
        height: number;
    }) => void;
}
export default function PointEditCanvas({ imageSrc, annotations, activeTool, selectedColor, selectedStrokeWidth, selectedId, zoom, onAnnotationsChange, onSelectedIdChange, onImageSizeChange, }: PointEditCanvasProps): import("react").JSX.Element;

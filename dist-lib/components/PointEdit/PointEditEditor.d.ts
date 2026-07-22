import { ImageAnnotationLayer } from '../../types/annotation';
export interface PointEditEditorProps {
    isOpen: boolean;
    imageUrl: string;
    initialAnnotationLayer?: ImageAnnotationLayer;
    onClose: () => void;
    onSave: (layer: ImageAnnotationLayer) => void;
    theme?: 'light' | 'dark' | 'inherit';
}
export default function PointEditEditor({ isOpen, imageUrl, initialAnnotationLayer, onClose, onSave, theme, }: PointEditEditorProps): import('react').ReactPortal;

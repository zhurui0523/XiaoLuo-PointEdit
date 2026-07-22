import { ImageAnnotation, ImageAnnotationLayer as ImageAnnotationLayerData } from '../../types/annotation';
export interface AnnotationGraphicsProps {
    annotations: ImageAnnotation[];
    selectedId?: string | null;
}
export declare function AnnotationGraphics({ annotations, selectedId }: AnnotationGraphicsProps): import("react").JSX.Element[];
export interface AnnotationLayerProps {
    layer: ImageAnnotationLayerData;
    className?: string;
    fit?: 'contain' | 'cover';
    title?: string;
}
export declare function AnnotationLayer({ layer, className, fit, title, }: AnnotationLayerProps): import("react").JSX.Element;
declare const _default: import('react').MemoExoticComponent<typeof AnnotationLayer>;
export default _default;

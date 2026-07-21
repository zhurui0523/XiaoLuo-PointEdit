import { default as React } from 'react';
import { Annotation } from '../../types/annotation';
export interface ImageEditorProps {
    initialImageSrc?: string | null;
    initialFileName?: string;
    onSave?: (dataUrl: string, annotations: Annotation[]) => void;
    onCancel?: () => void;
    className?: string;
}
export declare const ImageEditor: React.FC<ImageEditorProps>;

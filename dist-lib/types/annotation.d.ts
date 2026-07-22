export type AnnotationType = 'rectangle' | 'brush' | 'arrow' | 'marker' | 'text';
export type ToolType = 'select' | 'rectangle' | 'brush' | 'arrow' | 'marker' | 'text' | 'eraser';
export interface BaseAnnotation {
    id: string;
    type: AnnotationType;
    color: string;
    strokeWidth: number;
}
export interface RectangleAnnotation extends BaseAnnotation {
    type: 'rectangle';
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface Point {
    x: number;
    y: number;
}
export interface BrushAnnotation extends BaseAnnotation {
    type: 'brush';
    points: Point[];
}
export interface ArrowAnnotation extends BaseAnnotation {
    type: 'arrow';
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}
export interface MarkerAnnotation extends BaseAnnotation {
    type: 'marker';
    number: number;
    x: number;
    y: number;
    size: number;
}
export interface TextAnnotation extends BaseAnnotation {
    type: 'text';
    text: string;
    x: number;
    y: number;
    fontSize: number;
}
export type Annotation = RectangleAnnotation | BrushAnnotation | ArrowAnnotation | MarkerAnnotation | TextAnnotation;
export declare const IMAGE_ANNOTATION_LAYER_VERSION: 1;
export type ImageAnnotationType = AnnotationType;
export type ImageAnnotationTool = ToolType;
export type AnnotationPoint = Point;
export type BaseImageAnnotation = BaseAnnotation;
export type RectangleImageAnnotation = RectangleAnnotation;
export type BrushImageAnnotation = BrushAnnotation;
export type ArrowImageAnnotation = ArrowAnnotation;
export type MarkerImageAnnotation = MarkerAnnotation;
export type TextImageAnnotation = TextAnnotation;
export type ImageAnnotation = Annotation;
export interface ImageAnnotationLayer {
    version: typeof IMAGE_ANNOTATION_LAYER_VERSION;
    width: number;
    height: number;
    annotations: ImageAnnotation[];
}
export declare function isImageAnnotation(value: unknown): value is ImageAnnotation;
export declare function isImageAnnotationLayer(value: unknown): value is ImageAnnotationLayer;
export declare function resizeImageAnnotationLayer(layer: ImageAnnotationLayer, width: number, height: number): ImageAnnotationLayer;

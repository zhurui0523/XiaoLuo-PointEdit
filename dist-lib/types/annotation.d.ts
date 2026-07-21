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

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
  x: number; // native image x
  y: number; // native image y
  width: number;
  height: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface BrushAnnotation extends BaseAnnotation {
  type: 'brush';
  points: Point[]; // native image coordinates
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
  size: number; // radius or font size
}

export interface TextAnnotation extends BaseAnnotation {
  type: 'text';
  text: string;
  x: number;
  y: number;
  fontSize: number;
}

export type Annotation =
  | RectangleAnnotation
  | BrushAnnotation
  | ArrowAnnotation
  | MarkerAnnotation
  | TextAnnotation;

export const IMAGE_ANNOTATION_LAYER_VERSION = 1 as const;

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

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function isBaseAnnotation(value: unknown): value is BaseImageAnnotation {
  if (!value || typeof value !== 'object') return false;
  const annotation = value as Record<string, unknown>;
  return typeof annotation.id === 'string'
    && typeof annotation.color === 'string'
    && isFiniteNumber(annotation.strokeWidth);
}

export function isImageAnnotation(value: unknown): value is ImageAnnotation {
  if (!isBaseAnnotation(value)) return false;
  const annotation = value as unknown as Record<string, unknown>;

  switch (annotation.type) {
    case 'rectangle':
      return isFiniteNumber(annotation.x)
        && isFiniteNumber(annotation.y)
        && isFiniteNumber(annotation.width)
        && isFiniteNumber(annotation.height);
    case 'brush':
      return Array.isArray(annotation.points)
        && annotation.points.every((point) => (
          !!point
          && typeof point === 'object'
          && isFiniteNumber((point as Record<string, unknown>).x)
          && isFiniteNumber((point as Record<string, unknown>).y)
        ));
    case 'arrow':
      return isFiniteNumber(annotation.startX)
        && isFiniteNumber(annotation.startY)
        && isFiniteNumber(annotation.endX)
        && isFiniteNumber(annotation.endY);
    case 'marker':
      return isFiniteNumber(annotation.number)
        && isFiniteNumber(annotation.x)
        && isFiniteNumber(annotation.y)
        && isFiniteNumber(annotation.size);
    case 'text':
      return typeof annotation.text === 'string'
        && isFiniteNumber(annotation.x)
        && isFiniteNumber(annotation.y)
        && isFiniteNumber(annotation.fontSize);
    default:
      return false;
  }
}

export function isImageAnnotationLayer(value: unknown): value is ImageAnnotationLayer {
  if (!value || typeof value !== 'object') return false;
  const layer = value as Record<string, unknown>;
  return layer.version === IMAGE_ANNOTATION_LAYER_VERSION
    && isFiniteNumber(layer.width)
    && layer.width > 0
    && isFiniteNumber(layer.height)
    && layer.height > 0
    && Array.isArray(layer.annotations)
    && layer.annotations.every(isImageAnnotation);
}

function scaleAnnotation(
  annotation: ImageAnnotation,
  scaleX: number,
  scaleY: number,
): ImageAnnotation {
  const uniformScale = Math.sqrt(scaleX * scaleY);

  switch (annotation.type) {
    case 'rectangle':
      return {
        ...annotation,
        strokeWidth: annotation.strokeWidth * uniformScale,
        x: annotation.x * scaleX,
        y: annotation.y * scaleY,
        width: annotation.width * scaleX,
        height: annotation.height * scaleY,
      };
    case 'brush':
      return {
        ...annotation,
        strokeWidth: annotation.strokeWidth * uniformScale,
        points: annotation.points.map((point) => ({
          x: point.x * scaleX,
          y: point.y * scaleY,
        })),
      };
    case 'arrow':
      return {
        ...annotation,
        strokeWidth: annotation.strokeWidth * uniformScale,
        startX: annotation.startX * scaleX,
        startY: annotation.startY * scaleY,
        endX: annotation.endX * scaleX,
        endY: annotation.endY * scaleY,
      };
    case 'marker':
      return {
        ...annotation,
        strokeWidth: annotation.strokeWidth * uniformScale,
        x: annotation.x * scaleX,
        y: annotation.y * scaleY,
        size: annotation.size * uniformScale,
      };
    case 'text':
      return {
        ...annotation,
        strokeWidth: annotation.strokeWidth * uniformScale,
        x: annotation.x * scaleX,
        y: annotation.y * scaleY,
        fontSize: annotation.fontSize * uniformScale,
      };
  }
}

export function resizeImageAnnotationLayer(
  layer: ImageAnnotationLayer,
  width: number,
  height: number,
): ImageAnnotationLayer {
  if (layer.width === width && layer.height === height) return layer;
  const scaleX = width / layer.width;
  const scaleY = height / layer.height;
  return {
    version: IMAGE_ANNOTATION_LAYER_VERSION,
    width,
    height,
    annotations: layer.annotations.map((annotation) => scaleAnnotation(annotation, scaleX, scaleY)),
  };
}

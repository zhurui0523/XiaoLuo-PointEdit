import { ImageAnnotationLayer } from '../types/annotation';
/** Rasterizes only the transparent annotation layer; the source image is never drawn or modified. */
export declare function renderImageAnnotationLayerToDataUrl(layer: ImageAnnotationLayer): string;

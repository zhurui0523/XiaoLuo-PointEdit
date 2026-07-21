import { Annotation } from '../types/annotation';
/**
 * Draws all annotations onto a native-resolution canvas and returns the export URL.
 */
export declare function exportAnnotatedImage(imageSrc: string, annotations: Annotation[]): Promise<string>;
/**
 * Downloads a text or JSON file in the browser.
 */
export declare function downloadJson(data: any, fileName: string): void;
/**
 * Downloads a data URL as a file in the browser.
 */
export declare function downloadDataUrl(dataUrl: string, fileName: string): void;

import type { ImageAnnotationLayer } from '../types/annotation';

/** Rasterizes only the transparent annotation layer; the source image is never drawn or modified. */
export function renderImageAnnotationLayerToDataUrl(layer: ImageAnnotationLayer): string {
  const canvas = document.createElement('canvas');
  canvas.width = layer.width;
  canvas.height = layer.height;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Annotation canvas 2D context is unavailable');

  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.lineCap = 'round';
  context.lineJoin = 'round';

  for (const annotation of layer.annotations) {
    context.strokeStyle = annotation.color;
    context.fillStyle = annotation.color;
    context.lineWidth = annotation.strokeWidth;

    switch (annotation.type) {
      case 'rectangle':
        context.strokeRect(annotation.x, annotation.y, annotation.width, annotation.height);
        break;
      case 'brush':
        if (annotation.points.length < 2) break;
        context.beginPath();
        context.moveTo(annotation.points[0].x, annotation.points[0].y);
        for (let index = 1; index < annotation.points.length; index += 1) {
          context.lineTo(annotation.points[index].x, annotation.points[index].y);
        }
        context.stroke();
        break;
      case 'arrow': {
        context.beginPath();
        context.moveTo(annotation.startX, annotation.startY);
        context.lineTo(annotation.endX, annotation.endY);
        context.stroke();
        const angle = Math.atan2(
          annotation.endY - annotation.startY,
          annotation.endX - annotation.startX,
        );
        const headLength = Math.max(annotation.strokeWidth * 4, 12);
        context.save();
        context.translate(annotation.endX, annotation.endY);
        context.rotate(angle);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(-headLength, -headLength * 0.55);
        context.lineTo(-headLength, headLength * 0.55);
        context.closePath();
        context.fill();
        context.restore();
        break;
      }
      case 'marker':
        context.beginPath();
        context.arc(annotation.x, annotation.y, annotation.size, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = '#ffffff';
        context.lineWidth = Math.max(annotation.size * 0.12, 1);
        context.stroke();
        context.fillStyle = '#ffffff';
        context.font = `700 ${annotation.size * 1.08}px ui-sans-serif, system-ui, sans-serif`;
        context.fillText(String(annotation.number), annotation.x, annotation.y);
        break;
      case 'text': {
        context.save();
        context.fillStyle = annotation.color;
        context.font = `600 ${annotation.fontSize}px ui-sans-serif, system-ui, sans-serif`;
        context.textAlign = 'left';
        context.textBaseline = 'top';
        const lines = annotation.text.split('\n');
        for (let index = 0; index < lines.length; index += 1) {
          context.fillText(
            lines[index],
            annotation.x,
            annotation.y + index * annotation.fontSize * 1.25,
          );
        }
        context.restore();
        break;
      }
    }
  }

  return canvas.toDataURL('image/png');
}

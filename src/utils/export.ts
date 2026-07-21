import { Annotation } from '../types/annotation';

/**
 * Draws all annotations onto a native-resolution canvas and returns the export URL.
 */
export async function exportAnnotatedImage(
  imageSrc: string,
  annotations: Annotation[]
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // support CORS images
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get 2D context'));
        return;
      }

      // 1. Draw base image
      ctx.drawImage(img, 0, 0);

      // 2. Configure default text styles
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';

      // 3. Draw each annotation at its native scale
      annotations.forEach((ann) => {
        ctx.strokeStyle = ann.color;
        ctx.fillStyle = ann.color;
        // Native stroke width proportional to image size to keep aspect ratios consistent
        // Or let's use the explicit strokeWidth, maybe scaling it slightly if the image is massive
        const baseScale = Math.max(img.naturalWidth, img.naturalHeight) / 1000;
        ctx.lineWidth = ann.strokeWidth * Math.max(1, baseScale);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        switch (ann.type) {
          case 'rectangle': {
            ctx.beginPath();
            ctx.rect(ann.x, ann.y, ann.width, ann.height);
            ctx.stroke();
            break;
          }
          case 'brush': {
            if (ann.points.length < 2) return;
            ctx.beginPath();
            ctx.moveTo(ann.points[0].x, ann.points[0].y);
            for (let i = 1; i < ann.points.length; i++) {
              ctx.lineTo(ann.points[i].x, ann.points[i].y);
            }
            ctx.stroke();
            break;
          }
          case 'arrow': {
            // Draw shaft
            ctx.beginPath();
            ctx.moveTo(ann.startX, ann.startY);
            ctx.lineTo(ann.endX, ann.endY);
            ctx.stroke();

            // Draw arrowhead
            const angle = Math.atan2(ann.endY - ann.startY, ann.endX - ann.startX);
            const headLength = Math.max(12, ann.strokeWidth * 4 * Math.max(1, baseScale));
            ctx.save();
            ctx.translate(ann.endX, ann.endY);
            ctx.rotate(angle);
            ctx.fillStyle = ann.color;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(-headLength, -headLength * 0.5);
            ctx.lineTo(-headLength, headLength * 0.5);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
            break;
          }
          case 'marker': {
            const markerRadius = ann.size * Math.max(1, baseScale);
            // Draw circle
            ctx.beginPath();
            ctx.arc(ann.x, ann.y, markerRadius, 0, 2 * Math.PI);
            ctx.fillStyle = ann.color;
            ctx.fill();

            // White border around circle
            ctx.lineWidth = Math.max(2, markerRadius * 0.15);
            ctx.strokeStyle = '#ffffff';
            ctx.stroke();

            // Text inside
            ctx.fillStyle = '#ffffff';
            ctx.font = `bold ${markerRadius * 1.1}px sans-serif`;
            ctx.fillText(String(ann.number), ann.x, ann.y);
            break;
          }
          case 'text': {
            ctx.save();
            const nativeFontSize = ann.fontSize * Math.max(1, baseScale);
            ctx.font = `${nativeFontSize}px sans-serif`;
            ctx.fillStyle = ann.color;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';

            // Supports multi-line comments
            const lines = ann.text.split('\n');
            let currentY = ann.y;
            lines.forEach((line) => {
              ctx.fillText(line, ann.x, currentY);
              currentY += nativeFontSize * 1.2;
            });
            ctx.restore();
            break;
          }
        }
      });

      resolve(canvas.toDataURL('image/png'));
    };

    img.onerror = () => {
      reject(new Error('Failed to load image for export'));
    };
  });
}

/**
 * Downloads a text or JSON file in the browser.
 */
export function downloadJson(data: any, fileName: string) {
  const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(data, null, 2)
  )}`;
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', jsonString);
  downloadAnchor.setAttribute('download', fileName);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

/**
 * Downloads a data URL as a file in the browser.
 */
export function downloadDataUrl(dataUrl: string, fileName: string) {
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataUrl);
  downloadAnchor.setAttribute('download', fileName);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

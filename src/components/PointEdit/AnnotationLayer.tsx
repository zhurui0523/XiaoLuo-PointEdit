import { memo, useId } from 'react';
import type {
  ImageAnnotation,
  ImageAnnotationLayer as ImageAnnotationLayerData,
} from '../../types/annotation';

export interface AnnotationGraphicsProps {
  annotations: ImageAnnotation[];
  selectedId?: string | null;
}

function getArrowPoints(annotation: Extract<ImageAnnotation, { type: 'arrow' }>): string {
  const angle = Math.atan2(
    annotation.endY - annotation.startY,
    annotation.endX - annotation.startX,
  );
  const headLength = Math.max(annotation.strokeWidth * 4, 12);
  const headWidth = headLength * 0.55;
  const baseX = annotation.endX - Math.cos(angle) * headLength;
  const baseY = annotation.endY - Math.sin(angle) * headLength;
  const offsetX = Math.sin(angle) * headWidth;
  const offsetY = -Math.cos(angle) * headWidth;
  return [
    `${annotation.endX},${annotation.endY}`,
    `${baseX + offsetX},${baseY + offsetY}`,
    `${baseX - offsetX},${baseY - offsetY}`,
  ].join(' ');
}

function getTextBounds(annotation: Extract<ImageAnnotation, { type: 'text' }>) {
  const lines = annotation.text.split('\n');
  let longestLine = 0;
  for (const line of lines) longestLine = Math.max(longestLine, line.length);
  return {
    width: Math.max(annotation.fontSize, longestLine * annotation.fontSize * 0.64),
    height: Math.max(annotation.fontSize, lines.length * annotation.fontSize * 1.25),
  };
}

export function AnnotationGraphics({ annotations, selectedId }: AnnotationGraphicsProps) {
  return annotations.map((annotation) => {
    const isSelected = annotation.id === selectedId;
    const selectionWidth = Math.max(annotation.strokeWidth * 0.5, 1);

    switch (annotation.type) {
      case 'rectangle':
        return (
          <g key={annotation.id} data-annotation-id={annotation.id}>
            <rect
              x={annotation.x}
              y={annotation.y}
              width={annotation.width}
              height={annotation.height}
              fill="none"
              stroke={annotation.color}
              strokeWidth={annotation.strokeWidth}
              strokeLinejoin="round"
            />
            {isSelected ? (
              <rect
                x={annotation.x}
                y={annotation.y}
                width={annotation.width}
                height={annotation.height}
                fill="none"
                stroke="currentColor"
                strokeWidth={selectionWidth}
                strokeDasharray={`${selectionWidth * 4} ${selectionWidth * 3}`}
                vectorEffect="non-scaling-stroke"
              />
            ) : null}
          </g>
        );
      case 'brush': {
        if (annotation.points.length === 0) return null;
        const path = annotation.points
          .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
          .join(' ');
        return (
          <path
            key={annotation.id}
            data-annotation-id={annotation.id}
            d={path}
            fill="none"
            stroke={annotation.color}
            strokeWidth={annotation.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      }
      case 'arrow':
        return (
          <g key={annotation.id} data-annotation-id={annotation.id}>
            <line
              x1={annotation.startX}
              y1={annotation.startY}
              x2={annotation.endX}
              y2={annotation.endY}
              stroke={annotation.color}
              strokeWidth={annotation.strokeWidth}
              strokeLinecap="round"
            />
            <polygon points={getArrowPoints(annotation)} fill={annotation.color} />
            {isSelected ? (
              <>
                <circle
                  cx={annotation.startX}
                  cy={annotation.startY}
                  r={Math.max(annotation.strokeWidth * 1.5, 5)}
                  fill="currentColor"
                />
                <circle
                  cx={annotation.endX}
                  cy={annotation.endY}
                  r={Math.max(annotation.strokeWidth * 1.5, 5)}
                  fill="currentColor"
                />
              </>
            ) : null}
          </g>
        );
      case 'marker':
        return (
          <g key={annotation.id} data-annotation-id={annotation.id}>
            <circle
              cx={annotation.x}
              cy={annotation.y}
              r={annotation.size}
              fill={annotation.color}
              stroke="#ffffff"
              strokeWidth={Math.max(annotation.size * 0.12, 1)}
            />
            <text
              x={annotation.x}
              y={annotation.y}
              fill="#ffffff"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fontSize={annotation.size * 1.08}
              fontWeight="700"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {annotation.number}
            </text>
            {isSelected ? (
              <circle
                cx={annotation.x}
                cy={annotation.y}
                r={annotation.size * 1.22}
                fill="none"
                stroke="currentColor"
                strokeWidth={selectionWidth}
                strokeDasharray={`${selectionWidth * 4} ${selectionWidth * 3}`}
              />
            ) : null}
          </g>
        );
      case 'text': {
        const lines = annotation.text.split('\n');
        const bounds = getTextBounds(annotation);
        return (
          <g key={annotation.id} data-annotation-id={annotation.id}>
            {isSelected ? (
              <rect
                x={annotation.x - annotation.fontSize * 0.2}
                y={annotation.y - annotation.fontSize * 0.15}
                width={bounds.width + annotation.fontSize * 0.4}
                height={bounds.height + annotation.fontSize * 0.3}
                rx={annotation.fontSize * 0.12}
                fill="none"
                stroke="currentColor"
                strokeWidth={selectionWidth}
                strokeDasharray={`${selectionWidth * 4} ${selectionWidth * 3}`}
              />
            ) : null}
            <text
              x={annotation.x}
              y={annotation.y}
              fill={annotation.color}
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fontSize={annotation.fontSize}
              fontWeight="600"
              dominantBaseline="hanging"
            >
              {lines.map((line, index) => (
                <tspan
                  key={`${annotation.id}-${index}`}
                  x={annotation.x}
                  dy={index === 0 ? 0 : annotation.fontSize * 1.25}
                >
                  {line || ' '}
                </tspan>
              ))}
            </text>
          </g>
        );
      }
    }
  });
}

export interface AnnotationLayerProps {
  layer: ImageAnnotationLayerData;
  className?: string;
  fit?: 'contain' | 'cover';
  title?: string;
}

export function AnnotationLayer({
  layer,
  className,
  fit = 'contain',
  title = '图片标注层',
}: AnnotationLayerProps) {
  const titleId = useId();
  return (
    <svg
      className={className}
      viewBox={`0 0 ${layer.width} ${layer.height}`}
      preserveAspectRatio={fit === 'cover' ? 'xMidYMid slice' : 'xMidYMid meet'}
      role="img"
      aria-labelledby={titleId}
    >
      <title id={titleId}>{title}</title>
      <AnnotationGraphics annotations={layer.annotations} />
    </svg>
  );
}

export default memo(AnnotationLayer);

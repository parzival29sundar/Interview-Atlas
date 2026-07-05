import {
  BaseEdge,
  getBezierPath,
  type EdgeProps,
} from "@xyflow/react";

function GradientEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}: EdgeProps) {
  const [path] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    curvature: 0.35,
  });

  return (
    <>
      <defs>
        <linearGradient
          id={`gradient-${id}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        <filter id={`glow-${id}`}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <BaseEdge
        path={path}
        style={{
          stroke: `url(#gradient-${id})`,
          strokeWidth: 4,
          strokeLinecap: "round",
          filter: `url(#glow-${id})`,
        }}
      />
      
    </>
  );
}

export default GradientEdge;
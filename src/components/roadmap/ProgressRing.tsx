interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color: string;
}

function ProgressRing({
  progress,
  size = 72,
  strokeWidth = 5,
  color,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;

  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (progress / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      className="absolute -rotate-90"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#1e293b"
        strokeWidth={strokeWidth}
        fill="transparent"
      />

      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default ProgressRing;
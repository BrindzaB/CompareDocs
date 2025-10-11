import { useEffect, useState } from "react";

function LoaderElement({ size = 240, strokeWidth = 20, duration = 5000 }) {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const intervalTime = 50;
    const increment = (intervalTime / duration) * 100;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);
    return () => clearInterval(interval);
  }, [duration]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width={size} height={size}>
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {/* Empty ring - darker in dark mode */}
          <circle
            className="stroke-gray-200 dark:stroke-gray-700"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          {/* Progress ring */}
          <circle
            stroke="url(#gradientStroke)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.05s linear" }}
          />
        </g>
        {/* Text - white in dark mode */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-white text-2xl font-semibold"
        >
          {progress !== 100 ? "Analyzing..." : "Waiting..."}
        </text>
      </svg>
    </div>
  );
}

export default LoaderElement;
import { cn } from "@/lib/utils";

export function RibbonLogo({
  className,
  gradientId = "ribbon-gradient",
  style,
}: {
  className?: string;
  gradientId?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn("h-8 w-8", className)}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="4" y1="56" x2="60" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4D7CFE" />
          <stop offset="1" stopColor="#35D6EC" />
        </linearGradient>
      </defs>
      <path
        d="M32 6 L57 56 L44.5 56 L32 30 L19.5 56 L7 56 Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}

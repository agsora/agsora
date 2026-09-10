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
          <stop offset="0" stopColor="#2B62F6" />
          <stop offset="1" stopColor="#12C2E9" />
        </linearGradient>
      </defs>
      <path
        d="M32 6 L57 56 L44.5 56 L32 30 L19.5 56 L7 56 Z"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M32 22 L44 46 L36.5 46 L32 37 L27.5 46 L20 46 Z"
        fill="white"
        opacity="0.9"
      />
    </svg>
  );
}

export function RibbonMark({
  size = 22,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl bg-gradient-to-br from-blue to-cyan shadow-[0_6px_16px_-4px_rgba(43,98,246,0.5)]",
        className
      )}
      style={{ width: size * 1.8, height: size * 1.8 }}
    >
      <RibbonLogo className="text-white" style={{ width: size, height: size }} />
    </div>
  );
}

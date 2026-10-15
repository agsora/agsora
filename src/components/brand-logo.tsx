import { cn } from "@/lib/utils";

// AG·SORA mark: two interlocking square frames turned 45° (the client's
// business and AG·SORA). Geometry follows the brand guideline; colours come
// from --logo-frame / --logo-gold so the mark flips with the theme
// (ivory + gold on dark, navy + deep gold on light).
const VIEW_W = 58.27;
const VIEW_H = 42.43;

export function LogoMark({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      aria-hidden="true"
      focusable="false"
      className={cn("h-7 w-auto", className)}
      style={style}
    >
      <path
        d="M21.21 0.00 42.43 21.21 21.21 42.43 0.00 21.21ZM21.21 9.19 9.19 21.21 21.21 33.23 33.23 21.21Z"
        fillRule="evenodd"
        style={{ fill: "var(--logo-frame)" }}
      />
      <path
        d="M37.05 0.00 58.27 21.21 37.05 42.43 15.84 21.21 22.63 14.42 27.22 19.02 25.03 21.21 37.05 33.23 49.07 21.21 37.05 9.19 35.64 10.61 31.04 6.01Z"
        style={{ fill: "var(--logo-gold)" }}
      />
    </svg>
  );
}

/** Mark + wordmark, as used in the header and footer. */
export function BrandLockup({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-7 w-auto" />
      <span className="font-brand text-[15px] font-semibold uppercase leading-none tracking-[0.12em] text-ink">
        AG<span style={{ color: "var(--logo-gold)" }}>·</span>SORA
      </span>
    </span>
  );
}

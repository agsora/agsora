import type { BlogCategory } from "@/config/blog";
import { coverMotifInner } from "@/lib/cover-motifs";
import { siteConfig } from "@/config/site";

/**
 * Generated article cover: the AG·SORA mark, the article title and a line-art
 * motif for its category, drawn as one inline SVG. It replaces the stock
 * photos so every article reads as part of the same publication.
 *
 * Always dark, in both themes, like a printed card: ivory + gold on navy, the
 * brand palette. Per-article variation (glow position, orbit dots, grid
 * offset) is seeded from the slug, so a cover never changes between renders.
 */

const GOLD = "#d4b06a";
const IVORY = "#eef0f4";

const SIZES = {
  card: { w: 1200, h: 630, pad: 64 },
  hero: { w: 1400, h: 600, pad: 72 },
} as const;

type Variant = keyof typeof SIZES;

const MARK_FRAME =
  "M21.21 0.00 42.43 21.21 21.21 42.43 0.00 21.21ZM21.21 9.19 9.19 21.21 21.21 33.23 33.23 21.21Z";
const MARK_GOLD =
  "M37.05 0.00 58.27 21.21 37.05 42.43 15.84 21.21 22.63 14.42 27.22 19.02 25.03 21.21 37.05 33.23 49.07 21.21 37.05 9.19 35.64 10.61 31.04 6.01Z";
const MARK_W = 58.27;
const MARK_H = 42.43;

/** Stable 0..1 values from a string (FNV-1a), one per index. */
function seeded(slug: string, count: number) {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Array.from({ length: count }, () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 10000) / 10000;
  });
}

const isCjk = (c: string) => /[　-鿿＀-￯]/.test(c);
const noLineStart = "，。、：；！？）」』”’,.;:!?)";

/** Rough advance width of a glyph in a semibold sans, in em. */
function glyphEm(c: string) {
  if (isCjk(c)) return 1;
  if (c === " ") return 0.28;
  if (/[ilI.,:;'|!]/.test(c)) return 0.3;
  if (/[mwMW]/.test(c)) return 0.88;
  if (/[A-Z0-9]/.test(c)) return 0.64;
  return 0.56;
}

function wrap(text: string, size: number, maxWidth: number) {
  const tokens: string[] = [];
  let word = "";
  for (const c of text) {
    if (c === " ") {
      if (word) tokens.push(word);
      word = "";
      tokens.push(" ");
    } else if (isCjk(c)) {
      if (word) tokens.push(word);
      word = "";
      tokens.push(c);
    } else {
      word += c;
    }
  }
  if (word) tokens.push(word);

  const width = (s: string) => [...s].reduce((sum, c) => sum + glyphEm(c) * size, 0);
  const lines: string[] = [];
  let line = "";
  for (const tok of tokens) {
    if (tok === " ") {
      if (line) line += " ";
      continue;
    }
    const attaches = noLineStart.includes(tok);
    if (line && !attaches && width(line + tok) > maxWidth) {
      lines.push(line.trimEnd());
      line = tok;
    } else {
      line += tok;
    }
  }
  if (line) lines.push(line.trimEnd());
  return lines;
}

/** Largest title size that fits the block, shrinking the type before adding lines. */
function fitTitle(title: string, maxWidth: number) {
  const steps: [number, number][] = [
    [60, 3],
    [52, 3],
    [46, 4],
    [40, 4],
    [36, 5],
  ];
  for (const [size, maxLines] of steps) {
    const lines = wrap(title, size, maxWidth);
    if (lines.length <= maxLines) return { size, lines };
  }
  const [size, maxLines] = steps[steps.length - 1];
  const lines = wrap(title, size, maxWidth).slice(0, maxLines);
  lines[maxLines - 1] = `${lines[maxLines - 1].replace(/[\s,;:，；：]+$/, "")}…`;
  return { size, lines };
}

export function PostCover({
  slug,
  title,
  category,
  categoryLabel,
  variant = "card",
  label,
  className,
}: {
  slug: string;
  title: string;
  category: BlogCategory;
  categoryLabel: string;
  variant?: Variant;
  /** Accessible name. Omit where the title is already next to the cover (decorative). */
  label?: string;
  className?: string;
}) {
  const { w, h, pad } = SIZES[variant];
  const uid = `cv-${variant}-${slug.replace(/[^a-z0-9]/gi, "").slice(0, 24)}`;
  const [r1, r2, r3, r4, r5] = seeded(slug, 5);

  // Motif: upper right, with rings and a large ghosted mark behind it.
  const cx = w - pad - 240;
  const cy = variant === "hero" ? 168 : 176;
  const k = 2.1;

  // Title: bottom left, full width under the motif.
  const titleWidth = w - pad * 2 - 40;
  const { size, lines } = fitTitle(title, titleWidth);
  const lineHeight = Math.round(size * 1.16);
  const footerY = h - pad;
  const lastBaseline = footerY - 54;
  const firstBaseline = lastBaseline - (lines.length - 1) * lineHeight;
  const labelY = firstBaseline - size - 34;

  const glowX = w * (0.52 + r1 * 0.4);
  const glowY = h * (0.05 + r2 * 0.3);
  const orbit = (radius: number, t: number) => ({
    // Rounded: trig differs in the last digits between Node and browsers,
    // which would otherwise trip a hydration mismatch.
    x: Math.round(cx + Math.cos(t * Math.PI * 2) * radius),
    y: Math.round(cy + Math.sin(t * Math.PI * 2) * radius),
  });
  const dots = [orbit(150, r3), orbit(214, r4), orbit(278, r5)];

  const markScale = 520 / MARK_W;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      style={{ display: "block", width: "100%", height: "auto" }}
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14213f" />
          <stop offset="0.55" stopColor="#0b1326" />
          <stop offset="1" stopColor="#070b15" />
        </linearGradient>
        <radialGradient id={`${uid}-gold`} cx={glowX} cy={glowY} r={w * 0.5} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={GOLD} stopOpacity="0.2" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-blue`} cx={w * 0.08} cy={h * 1.05} r={w * 0.55} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3b63b8" stopOpacity="0.28" />
          <stop offset="1" stopColor="#3b63b8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-fade`} cx={cx} cy={cy} r={w * 0.62} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <mask id={`${uid}-mask`}>
          <rect width={w} height={h} fill={`url(#${uid}-fade)`} />
        </mask>
        <pattern
          id={`${uid}-grid`}
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
          x={Math.round(r1 * 48)}
          y={Math.round(r2 * 48)}
        >
          <path d="M48 0H0V48" fill="none" stroke="#9db0d4" strokeWidth="1" />
        </pattern>
        <linearGradient id={`${uid}-rule`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={GOLD} stopOpacity="0.9" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width={w} height={h} fill={`url(#${uid}-bg)`} />
      <rect width={w} height={h} fill={`url(#${uid}-blue)`} />
      <rect width={w} height={h} fill={`url(#${uid}-gold)`} />
      <rect width={w} height={h} fill={`url(#${uid}-grid)`} opacity="0.07" mask={`url(#${uid}-mask)`} />

      {/* Ghosted brand mark behind the motif */}
      <g
        transform={`translate(${cx - (MARK_W * markScale) / 2} ${cy - (MARK_H * markScale) / 2}) scale(${markScale})`}
        opacity="0.07"
      >
        <path d={MARK_FRAME} fillRule="evenodd" fill={IVORY} />
        <path d={MARK_GOLD} fill={GOLD} />
      </g>

      {/* Rings and orbit dots */}
      <g fill="none" stroke={GOLD}>
        <circle cx={cx} cy={cy} r="150" strokeOpacity="0.22" />
        <circle cx={cx} cy={cy} r="214" strokeOpacity="0.13" strokeDasharray="2 9" />
        <circle cx={cx} cy={cy} r="278" strokeOpacity="0.08" />
      </g>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={i === 0 ? 5 : 3.5} fill={GOLD} opacity={i === 0 ? 0.9 : 0.55} />
      ))}

      {/* Category motif */}
      <g
        transform={`translate(${cx - 100 * k} ${cy - 56 * k}) scale(${k})`}
        dangerouslySetInnerHTML={{ __html: coverMotifInner(category) }}
      />

      {/* Hairline frame */}
      <rect x="18" y="18" width={w - 36} height={h - 36} fill="none" stroke={GOLD} strokeOpacity="0.16" />

      {/* Brand lockup */}
      <g transform={`translate(${pad} ${pad - 6})`}>
        <g transform={`scale(${40 / MARK_H})`}>
          <path d={MARK_FRAME} fillRule="evenodd" fill={IVORY} />
          <path d={MARK_GOLD} fill={GOLD} />
        </g>
        <text
          x={(MARK_W * 40) / MARK_H + 18}
          y="29"
          fill={IVORY}
          fontSize="27"
          fontWeight="600"
          letterSpacing="3.6"
          style={{ fontFamily: "var(--font-sora), var(--font-body), ui-sans-serif, system-ui, sans-serif" }}
        >
          AG<tspan fill={GOLD}>·</tspan>SORA
        </text>
      </g>

      {/* Category label with leading rule */}
      <rect x={pad} y={labelY - 6} width="44" height="3" fill={`url(#${uid}-rule)`} />
      <text
        x={pad + 60}
        y={labelY}
        fill={GOLD}
        fontSize="22"
        fontWeight="600"
        letterSpacing="4.4"
        style={{
          textTransform: "uppercase",
          fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {categoryLabel}
      </text>

      {/* Title */}
      <text
        x={pad}
        fill="#f4f6fa"
        fontSize={size}
        fontWeight="600"
        letterSpacing={size * -0.012}
        style={{ fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif" }}
      >
        {lines.map((line, i) => (
          <tspan key={i} x={pad} y={firstBaseline + i * lineHeight}>
            {line}
          </tspan>
        ))}
      </text>

      {/* Footer */}
      <line x1={pad} x2={w - pad} y1={footerY - 24} y2={footerY - 24} stroke="#9db0d4" strokeOpacity="0.2" />
      <text
        x={pad}
        y={footerY + 4}
        fill="#8d9ab0"
        fontSize="20"
        letterSpacing="1.2"
        style={{ fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif" }}
      >
        {siteConfig.domain.replace(/^www\./, "")}
      </text>
      <g fill={GOLD}>
        <circle cx={w - pad - 40} cy={footerY - 3} r="3" opacity="0.35" />
        <circle cx={w - pad - 20} cy={footerY - 3} r="3" opacity="0.6" />
        <circle cx={w - pad} cy={footerY - 3} r="3" />
      </g>
    </svg>
  );
}

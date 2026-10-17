import type { BlogCategory } from "@/config/blog";
import { coverMotifInner } from "@/lib/cover-motifs";
import { siteConfig } from "@/config/site";

/**
 * Generated article cover: the AG·SORA mark, the article title and a line-art
 * motif for its category, drawn as one inline SVG. It replaces the stock
 * photos so every article reads as part of the same publication.
 *
 * Editorial layout: title column on the left, a framed "glass" panel on the
 * right holding the category motif. Always dark, in both themes, like a
 * printed card. Brand elements stay ivory + gold; each category gets its own
 * accent for the motif, so the archive reads as sections at a glance.
 * Per-article variation (glow, orbit dots, grid offset) is seeded from the
 * slug, so a cover never changes between renders.
 */

const GOLD = "#d4b06a";
const IVORY = "#eef0f4";
const MOTIF_GOLD = "#d4b06a";
const MOTIF_SOFT = "#8a7850";

/** Motif accent per category: [main, soft]. */
const ACCENTS: Record<BlogCategory, [string, string]> = {
  "ERP & Operasional": ["#d4b06a", "#8a7850"],
  "POS & Retail": ["#e2a873", "#8f6748"],
  "HR & Tim": ["#dcaaa2", "#8c6a66"],
  "Penjualan & CRM": ["#e6cf96", "#8f8160"],
  Teknologi: ["#93b8e6", "#5b7397"],
  "Website & Digital": ["#9fd2c6", "#5f8a80"],
  "Strategi Bisnis": ["#d9bd7e", "#8b7a52"],
  "Panduan Memilih": ["#bfcb8f", "#7a8359"],
  "Panduan Industri": ["#cfa883", "#866b53"],
};

const SIZES = {
  card: { w: 1200, h: 630, pad: 60, split: 0.6 },
  hero: { w: 1400, h: 600, pad: 64, split: 0.63 },
} as const;

type Variant = keyof typeof SIZES;

const MARK_FRAME =
  "M21.21 0.00 42.43 21.21 21.21 42.43 0.00 21.21ZM21.21 9.19 9.19 21.21 21.21 33.23 33.23 21.21Z";
const MARK_GOLD =
  "M37.05 0.00 58.27 21.21 37.05 42.43 15.84 21.21 22.63 14.42 27.22 19.02 25.03 21.21 37.05 33.23 49.07 21.21 37.05 9.19 35.64 10.61 31.04 6.01Z";
const MARK_W = 58.27;
const MARK_H = 42.43;

const SANS = "var(--font-body), ui-sans-serif, system-ui, sans-serif";
const MONO = "var(--font-code), ui-monospace, monospace";
const BRAND = "var(--font-sora), var(--font-body), ui-sans-serif, system-ui, sans-serif";

/** Stable 0..1 values from a string (FNV-1a, then xorshift), one per index. */
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

/** Largest title size that fits the column, shrinking the type before adding lines. */
function fitTitle(title: string, maxWidth: number) {
  const steps: [number, number][] = [
    [56, 3],
    [50, 4],
    [44, 4],
    [40, 5],
    [36, 5],
    [32, 6],
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

/** Small L-shaped ticks on the four corners of a box, like a print crop mark. */
function cornerTicks(x: number, y: number, w: number, h: number, len: number) {
  const r = x + w;
  const b = y + h;
  return [
    `M${x} ${y + len}V${y}H${x + len}`,
    `M${r - len} ${y}H${r}V${y + len}`,
    `M${r} ${b - len}V${b}H${r - len}`,
    `M${x + len} ${b}H${x}V${b - len}`,
  ].join("");
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
  const { w, h, pad, split } = SIZES[variant];
  const uid = `cv-${variant}-${slug.replace(/[^a-z0-9]/gi, "").slice(0, 24)}`;
  const [r1, r2, r3, r4, r5, r6] = seeded(slug, 6);
  const [accent, accentSoft] = ACCENTS[category];
  const id = (name: string) => `${uid}-${name}`;
  const url = (name: string) => `url(#${id(name)})`;

  // Right: framed panel with the motif.
  const px = Math.round(w * split);
  const py = pad;
  const pw = w - pad - px;
  const ph = h - pad * 2;
  const cx = px + pw / 2;
  const cy = py + ph / 2 + 6;
  const k = Math.min((pw * 0.66) / 200, 2.1);
  const motif = coverMotifInner(category)
    .replaceAll(MOTIF_GOLD, accent)
    .replaceAll(MOTIF_SOFT, accentSoft);

  // Left: lockup on top, then category + title anchored to the bottom.
  const colWidth = px - pad - 64;
  const { size, lines } = fitTitle(title, colWidth);
  const lineHeight = Math.round(size * 1.14);
  const footerY = h - pad;
  const lastBaseline = footerY - 58;
  const firstBaseline = lastBaseline - (lines.length - 1) * lineHeight;
  const labelY = firstBaseline - size - 30;

  // Rounded: trig differs in the last digits between Node and browsers,
  // which would otherwise trip a hydration mismatch.
  const orbit = (radius: number, t: number) => ({
    x: Math.round(cx + Math.cos(t * Math.PI * 2) * radius),
    y: Math.round(cy + Math.sin(t * Math.PI * 2) * radius),
  });
  const dots = [orbit(96, r3), orbit(150, r4), orbit(204, r5)];
  const markScale = (pw * 0.92) / MARK_W;

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
        <linearGradient id={id("bg")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#121d38" />
          <stop offset="0.5" stopColor="#0a1122" />
          <stop offset="1" stopColor="#060a13" />
        </linearGradient>
        <radialGradient id={id("blue")} cx={w * 0.05} cy={h * 1.1} r={w * 0.6} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3a5fae" stopOpacity="0.3" />
          <stop offset="1" stopColor="#3a5fae" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id={id("warm")}
          cx={px + pw * (0.3 + r1 * 0.4)}
          cy={py + ph * (0.2 + r2 * 0.3)}
          r={pw * 1.1}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={accent} stopOpacity="0.2" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id("beam")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.05" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("edge")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={GOLD} stopOpacity="0" />
          <stop offset="0.5" stopColor={GOLD} stopOpacity="0.7" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("title")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#c9d2e3" />
        </linearGradient>
        <linearGradient id={id("rule")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={GOLD} />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("glass")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.07" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.012" />
        </linearGradient>
        <linearGradient id={id("frame")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={accent} stopOpacity="0.6" />
          <stop offset="0.5" stopColor={accent} stopOpacity="0.12" />
          <stop offset="1" stopColor={accent} stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id={id("halo")} cx={cx} cy={cy} r={pw * 0.55} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={accent} stopOpacity="0.22" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <pattern
          id={id("dots")}
          width="26"
          height="26"
          patternUnits="userSpaceOnUse"
          x={Math.round(r6 * 26)}
          y={Math.round(r1 * 26)}
        >
          <circle cx="1.5" cy="1.5" r="1.3" fill="#a9badb" />
        </pattern>
        <radialGradient id={id("fade")} cx={cx} cy={cy} r={pw * 0.75} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <mask id={id("mask")}>
          <rect x={px} y={py} width={pw} height={ph} fill={url("fade")} />
        </mask>
        <clipPath id={id("clip")}>
          <rect x={px} y={py} width={pw} height={ph} rx="26" />
        </clipPath>
        <filter id={id("blur")} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* Ground */}
      <rect width={w} height={h} fill={url("bg")} />
      <rect width={w} height={h} fill={url("blue")} />
      <rect width={w} height={h} fill={url("warm")} />
      <path
        d={`M${w * (0.18 + r2 * 0.1)} 0H${w * (0.34 + r2 * 0.1)}L${w * (0.2 + r2 * 0.1)} ${h}H${w * (0.04 + r2 * 0.1)}Z`}
        fill={url("beam")}
      />
      <rect x="0" y="0" width={w} height="2" fill={url("edge")} />

      {/* Panel */}
      <g clipPath={url("clip")}>
        <rect x={px} y={py} width={pw} height={ph} fill={url("glass")} />
        <rect x={px} y={py} width={pw} height={ph} fill={url("dots")} opacity="0.16" mask={url("mask")} />
        <rect x={px} y={py} width={pw} height={ph} fill={url("halo")} />
        <path
          d={`M${px} ${cy}H${px + pw}M${cx} ${py}V${py + ph}`}
          stroke={accent}
          strokeOpacity="0.1"
          strokeDasharray="3 7"
        />
        <g
          transform={`translate(${cx - (MARK_W * markScale) / 2} ${cy - (MARK_H * markScale) / 2}) scale(${markScale})`}
          opacity="0.06"
        >
          <path d={MARK_FRAME} fillRule="evenodd" fill={IVORY} />
          <path d={MARK_GOLD} fill={GOLD} />
        </g>
        <g fill="none" stroke={accent}>
          <circle cx={cx} cy={cy} r="96" strokeOpacity="0.32" />
          <circle cx={cx} cy={cy} r="150" strokeOpacity="0.18" strokeDasharray="1.5 8" />
          <circle cx={cx} cy={cy} r="204" strokeOpacity="0.12" />
          <circle cx={cx} cy={cy} r="262" strokeOpacity="0.07" />
        </g>
        {dots.map((d, i) => (
          <g key={i}>
            <circle cx={d.x} cy={d.y} r={i === 0 ? 11 : 8} fill={accent} opacity="0.14" />
            <circle cx={d.x} cy={d.y} r={i === 0 ? 4.5 : 3.2} fill={accent} opacity={i === 0 ? 1 : 0.7} />
          </g>
        ))}
        <g transform={`translate(${cx - 100 * k} ${cy - 56 * k}) scale(${k})`}>
          <g filter={url("blur")} opacity="0.7" dangerouslySetInnerHTML={{ __html: motif }} />
          <g dangerouslySetInnerHTML={{ __html: motif }} />
        </g>
      </g>
      <rect
        x={px + 0.5}
        y={py + 0.5}
        width={pw - 1}
        height={ph - 1}
        rx="26"
        fill="none"
        stroke={url("frame")}
        strokeWidth="1.5"
      />
      <path
        d={cornerTicks(px + 18, py + 18, pw - 36, ph - 36, 14)}
        fill="none"
        stroke={accent}
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <text
        x={px + 40}
        y={py + 50}
        fill={accent}
        fillOpacity="0.75"
        fontSize="15"
        letterSpacing="3"
        style={{ fontFamily: MONO }}
      >
        AG·SORA / BLOG
      </text>

      {/* Brand lockup */}
      <g transform={`translate(${pad} ${pad - 4})`}>
        <g transform={`scale(${38 / MARK_H})`}>
          <path d={MARK_FRAME} fillRule="evenodd" fill={IVORY} />
          <path d={MARK_GOLD} fill={GOLD} />
        </g>
        <text
          x={(MARK_W * 38) / MARK_H + 16}
          y="28"
          fill={IVORY}
          fontSize="26"
          fontWeight="600"
          letterSpacing="3.6"
          style={{ fontFamily: BRAND }}
        >
          AG<tspan fill={GOLD}>·</tspan>SORA
        </text>
      </g>

      {/* Category */}
      <rect x={pad} y={labelY - 7} width="40" height="2.5" fill={url("rule")} />
      <text
        x={pad + 54}
        y={labelY}
        fill={GOLD}
        fontSize="20"
        fontWeight="600"
        letterSpacing="4.2"
        style={{ textTransform: "uppercase", fontFamily: SANS }}
      >
        {categoryLabel}
      </text>

      {/* Title */}
      <text
        x={pad}
        fill={url("title")}
        fontSize={size}
        fontWeight="600"
        letterSpacing={size * -0.015}
        style={{ fontFamily: SANS }}
      >
        {lines.map((line, i) => (
          <tspan key={i} x={pad} y={firstBaseline + i * lineHeight}>
            {line}
          </tspan>
        ))}
      </text>

      {/* Footer */}
      <line
        x1={pad}
        x2={px - 64}
        y1={footerY - 26}
        y2={footerY - 26}
        stroke="#a9badb"
        strokeOpacity="0.18"
      />
      <text
        x={pad}
        y={footerY + 2}
        fill="#8d9ab0"
        fontSize="17"
        letterSpacing="1.5"
        style={{ fontFamily: MONO }}
      >
        {siteConfig.domain.replace(/^www\./, "")}
      </text>
      <circle cx={px - 64} cy={footerY - 4} r="3.5" fill={GOLD} />
    </svg>
  );
}

import type { BlogCategory } from "@/config/blog";

/**
 * One line-art motif per blog category, drawn on a 200x112 canvas, as raw SVG
 * markup. Used by the generated social-share images (app/og/blog), which embed
 * it as a data URI: next/og renders that reliably, unlike nested <svg> JSX.
 */
const BLUE = "#7b9fff";
const SOFT = "#5a6a99";

const g = (inner: string) => `<g fill="none" stroke="${BLUE}" stroke-width="1.5">${inner}</g>`;
const soft = (d: string) => `<path d="${d}" stroke="${SOFT}"/>`;

const motifs: Record<BlogCategory, string> = {
  "ERP & Operasional": g(
    `<circle cx="100" cy="56" r="13"/><circle cx="46" cy="34" r="8"/><circle cx="154" cy="34" r="8"/><circle cx="46" cy="78" r="8"/><circle cx="154" cy="78" r="8"/>${soft("M54 37L88 51M146 37L112 51M54 75L88 61M146 75L112 61")}`
  ),
  "POS & Retail": g(
    `<path d="M72 14H128V84L121 78L114 84L107 78L100 84L93 78L86 84L79 78L72 84Z"/>${soft("M82 32H118M82 42H118M82 52H104")}`
  ),
  "HR & Tim": g(
    `<circle cx="100" cy="34" r="9"/><path d="M82 70C82 56 118 56 118 70"/><circle cx="62" cy="44" r="7" stroke="${SOFT}"/><path d="M48 72C48 62 76 62 76 72" stroke="${SOFT}"/><circle cx="138" cy="44" r="7" stroke="${SOFT}"/><path d="M124 72C124 62 152 62 152 72" stroke="${SOFT}"/>`
  ),
  "Penjualan & CRM": g(
    `<path d="M56 20H144L116 56V84L84 94V56Z"/>${soft("M70 32H130M84 44H116")}<circle cx="72" cy="12" r="2.5" fill="${BLUE}"/><circle cx="100" cy="10" r="2.5" fill="${BLUE}"/><circle cx="128" cy="12" r="2.5" fill="${BLUE}"/>`
  ),
  Teknologi: g(
    `<rect x="72" y="26" width="56" height="46" rx="3"/><rect x="86" y="39" width="28" height="20" stroke="${SOFT}"/>${soft("M82 26V16M100 26V16M118 26V16M82 72V82M100 72V82M118 72V82M72 42H62M72 56H62M128 42H138M128 56H138")}`
  ),
  "Website & Digital": g(
    `<rect x="52" y="18" width="96" height="66" rx="3"/><path d="M52 32H148"/><rect x="64" y="42" width="38" height="30" stroke="${SOFT}"/>${soft("M112 44H136M112 54H136M112 64H128")}<circle cx="60" cy="25" r="2" fill="${BLUE}"/><circle cx="67" cy="25" r="2" fill="${BLUE}"/>`
  ),
  "Strategi Bisnis": g(
    `<path d="M50 84V66H72V84M72 84V50H94V84M94 84V36H116V84M116 84V24H138V84"/>${soft("M44 58L88 40L110 26L146 14M136 14H146V24")}`
  ),
  "Panduan Memilih": g(
    `<path d="M62 26L67 31L76 21M62 48L67 53L76 43M62 70L67 75L76 65"/>${soft("M90 26H142M90 48H142M90 70H128")}`
  ),
  "Panduan Industri": g(
    `<path d="M44 84V48L70 62V48L96 62V34H128V84Z"/><path d="M110 34V20H118V34" stroke="${SOFT}"/>${soft("M104 46H120M104 58H120M104 70H120M54 70H62M74 70H82")}`
  ),
};

/** The motif as a complete SVG document, ready to embed as a data URI. */
export function coverMotifSvg(category: BlogCategory) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 112" width="920" height="515">${motifs[category]}</svg>`;
}

"use client";

import {
  Boxes,
  FileBarChart,
  LayoutDashboard,
  ShoppingCart,
  UserCircle2,
  Users,
} from "lucide-react";
import { RibbonLogo } from "@/components/ribbon-logo";
import { useLocale, type Locale } from "@/i18n/locale-context";
import { cn } from "@/lib/utils";

/*
 * Illustrative product frame. The point it makes is the homepage headline:
 * one screen fed by several modules (each KPI is tagged with the module it
 * comes from). Figures are sample data, not claims.
 */

// Hand-rolled rather than Intl: Node and browser ICU builds can disagree on
// locale output, and any difference here breaks hydration.
function fmt(n: number, digits: number, locale: Locale) {
  const [int, frac] = n.toFixed(digits).split(".");
  const [group, dec] = locale === "id" ? [".", ","] : [",", "."];
  return int.replace(/\B(?=(\d{3})+(?!\d))/g, group) + (frac ? dec + frac : "");
}

/** Rupiah amount given in millions, in each locale's usual shorthand. */
function rupiah(millions: number, locale: Locale) {
  if (locale === "id") return `Rp${fmt(millions, 1, locale)}jt`;
  if (locale === "en") return `Rp${fmt(millions, 1, locale)}M`;
  // Chinese counts in 万 (10k) and 亿 (100M).
  return millions >= 100
    ? `Rp${fmt(millions / 100, 2, locale)}亿`
    : `Rp${fmt(millions * 100, 0, locale)}万`;
}

const pct = (n: number, locale: Locale) => `+${fmt(n, 1, locale)}%`;

// Irregular rises and dips — strictly alternating values read as a sine wave.
const series = [30, 33, 38, 36, 42, 47, 51, 49, 55, 62, 60, 66, 73, 78, 76, 85, 93];

const W = 600;
const H = 180;
const min = Math.min(...series);
const max = Math.max(...series);
const points = series.map((v, i) => [
  (i / (series.length - 1)) * W,
  H - 12 - ((v - min) / (max - min)) * (H - 36),
]);

function smooth(pts: number[][]) {
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const cx = ((x0 + x1) / 2).toFixed(1);
    d += ` C ${cx} ${y0.toFixed(1)}, ${cx} ${y1.toFixed(1)}, ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  }
  return d;
}

const line = smooth(points);
const area = `${line} L ${W} ${H} L 0 ${H} Z`;
const last = points[points.length - 1];

function SourceTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line px-1.5 py-px text-[9px] font-medium uppercase tracking-[0.08em] text-ink-subtle">
      {children}
    </span>
  );
}

export function HeroVisual() {
  const { t, locale } = useLocale();
  const v = t.home.visual;

  // POS, Inventory, HRIS and CRM are standard system module names — not translated.
  const modules = [
    { label: v.dashboard, icon: LayoutDashboard },
    { label: "POS", icon: ShoppingCart },
    { label: "Inventory", icon: Boxes },
    { label: "HRIS", icon: Users },
    { label: "CRM", icon: UserCircle2 },
    { label: v.reports, icon: FileBarChart },
  ];

  const kpis = [
    { label: v.revenue, value: rupiah(482.4, locale), note: pct(18.2, locale), up: true, source: "POS" },
    { label: v.transactions, value: fmt(12480, 0, locale), note: pct(9.6, locale), up: true, source: "POS" },
    { label: v.lowStock, value: `14 ${v.items}`, note: `3 ${v.warehouses}`, source: "Inventory" },
    { label: v.attendance, value: `${fmt(96.4, 1, locale)}%`, note: `182 ${v.staff}`, source: "HRIS" },
  ];

  return (
    <div className="relative" role="img" aria-label={t.home.visualLabel}>
      <div
        aria-hidden
        className="absolute inset-x-[10%] -top-10 h-3/4 rounded-full bg-accent/15 blur-[110px]"
      />

      {/* Capped below lg so the sample screen doesn't eat a whole phone viewport. */}
      <div className="relative max-h-[500px] overflow-hidden rounded-2xl border border-line-strong bg-surface-0 shadow-elev sm:max-h-[580px] lg:max-h-none">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent"
        />

        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-line bg-surface-1 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </div>
          <p className="mx-auto text-[11px] text-ink-subtle">AG·SORA — {v.title}</p>
          <div className="w-[42px]" />
        </div>

        <div className="flex">
          {/* Module sidebar */}
          <aside className="hidden w-[188px] shrink-0 flex-col border-r border-line bg-surface-1/60 p-3 md:flex">
            <div className="flex items-center gap-2 px-2 py-1">
              <RibbonLogo className="h-4 w-auto" />
              <span className="text-[12px] font-semibold tracking-tight text-ink">
                AG·SORA
              </span>
            </div>
            <p className="mt-5 px-2 text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
              {v.modules}
            </p>
            <ul className="mt-2 space-y-0.5">
              {modules.map((m, i) => (
                <li
                  key={m.label}
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[12px]",
                    i === 0 ? "bg-surface-3 text-ink" : "text-ink-muted"
                  )}
                >
                  <m.icon className="h-3.5 w-3.5" />
                  {m.label}
                </li>
              ))}
            </ul>
            <div className="mt-auto rounded-lg border border-line bg-surface-0 p-2.5">
              <p className="flex items-center gap-1.5 text-[11px] text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-positive" />
                {v.syncTitle}
              </p>
              <p className="mt-1 text-[10px] text-ink-subtle">{v.syncNote}</p>
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1 p-4 md:p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[11px] text-ink-subtle">{v.scope}</p>
                <p className="mt-1 text-[16px] font-medium tracking-tight text-ink md:text-[18px]">
                  {v.title}
                </p>
              </div>
              <div className="flex rounded-lg border border-line bg-surface-1 p-0.5 text-[11px] text-ink-subtle">
                {v.ranges.map((range, i) => (
                  <span
                    key={range}
                    className={cn(
                      "px-2 py-0.5",
                      i === 1 && "rounded-md bg-surface-3 text-ink"
                    )}
                  >
                    {range}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5 md:mt-5 md:gap-3 lg:grid-cols-4">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className="rounded-xl border border-line bg-surface-1 p-3 md:p-3.5"
                >
                  {/* Stacked on phones: the tag would otherwise truncate the label. */}
                  <div className="flex flex-col-reverse items-start gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                    <p className="truncate text-[11px] text-ink-subtle">{k.label}</p>
                    <SourceTag>{k.source}</SourceTag>
                  </div>
                  <p className="mt-2 text-[17px] font-medium tabular-nums tracking-tight text-ink md:text-[20px]">
                    {k.value}
                  </p>
                  <p
                    className={cn(
                      "mt-0.5 text-[11px] tabular-nums",
                      k.up ? "text-positive" : "text-ink-subtle"
                    )}
                  >
                    {k.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-2.5 rounded-xl border border-line bg-surface-1 p-4 md:mt-3 md:p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] text-ink-subtle">{v.dailyRevenue}</p>
                  <p className="mt-1 text-[16px] font-medium tabular-nums tracking-tight text-ink">
                    {rupiah(16.1, locale)}{" "}
                    <span className="text-[11px] font-normal text-positive">
                      {pct(6.8, locale)}
                    </span>
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] text-ink-subtle">
                  <span className="h-0.5 w-3 rounded-full bg-accent" />
                  {v.allOutlets}
                </span>
              </div>

              <div className="relative mt-4 h-[130px] md:h-[170px]">
                <svg
                  viewBox={`0 0 ${W} ${H}`}
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  {[0, 1, 2, 3].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      x2={W}
                      y1={(H / 3) * i}
                      y2={(H / 3) * i}
                      className="stroke-line"
                      strokeDasharray="2 5"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </svg>
                {/* Separate layer so the draw-in clip doesn't hide the grid. */}
                <svg
                  viewBox={`0 0 ${W} ${H}`}
                  preserveAspectRatio="none"
                  className="chart-draw absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" style={{ stopColor: "var(--accent)", stopOpacity: 0.28 }} />
                      <stop offset="1" style={{ stopColor: "var(--accent)", stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  <path d={area} fill="url(#hero-area)" />
                  <path
                    d={line}
                    fill="none"
                    className="stroke-accent"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <span
                  aria-hidden
                  className="chart-dot absolute flex h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${(last[0] / W) * 100}%`, top: `${(last[1] / H) * 100}%` }}
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-surface-1 bg-accent" />
                </span>
              </div>
              <div className="mt-2 flex justify-between text-[10px] tabular-nums text-ink-subtle">
                <span>1</span>
                <span>8</span>
                <span>15</span>
                <span>22</span>
                <span>30</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Let the frame dissolve into the page instead of ending on a hard edge. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-px h-24 bg-linear-to-t from-surface-0 to-transparent"
      />
    </div>
  );
}

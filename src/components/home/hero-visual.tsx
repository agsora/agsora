"use client";

import {
  Boxes,
  Calculator,
  CreditCard,
  KeyRound,
  LayoutDashboard,
  MessageCircle,
  Network,
  ShoppingCart,
  Store,
  Truck,
  UserCircle2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { RibbonLogo } from "@/components/ribbon-logo";
import { useLocale } from "@/i18n/locale-context";
import { cn } from "@/lib/utils";

/*
 * Integration map: the business systems AG·SORA builds on the left, the
 * third-party services it connects them to on the right (the integrations
 * listed on /services), all routed through one core. Drawn like an
 * architecture diagram — orthogonal connectors on a shared bus — rather than
 * glowing curves.
 *
 * Desktop: HTML nodes positioned over an SVG wiring layer that shares its
 * 1100×520 coordinate space. Below lg the same content stacks vertically,
 * since a scaled-down diagram would shrink the labels past readability.
 */

const W = 1100;
const H = 520;
const CY = 262;
const ROWS = [72, 148, 224, 300, 376, 452];
const NODE_W = 200;
const LEFT_PORT = 240; // right edge of the left nodes
const LEFT_BUS = 330;
const CORE_LEFT = 420;
const CORE_RIGHT = 680;
const RIGHT_BUS = 770;
const RIGHT_PORT = 860; // left edge of the right nodes
const R = 10; // corner radius where a connector turns

const moduleIcons: LucideIcon[] = [Network, ShoppingCart, Users, UserCircle2, Boxes, LayoutDashboard];
const serviceIcons: LucideIcon[] = [CreditCard, Store, MessageCircle, Calculator, Truck, KeyRound];

/** Node → bus → core, turning with rounded corners. */
function inbound(y: number) {
  const d = y < CY ? 1 : -1;
  return `M ${LEFT_PORT} ${y} H ${LEFT_BUS - R} Q ${LEFT_BUS} ${y} ${LEFT_BUS} ${y + d * R} V ${CY - d * R} Q ${LEFT_BUS} ${CY} ${LEFT_BUS + R} ${CY} H ${CORE_LEFT}`;
}

/** Core → bus → node. */
function outbound(y: number) {
  const d = y < CY ? -1 : 1;
  return `M ${CORE_RIGHT} ${CY} H ${RIGHT_BUS - R} Q ${RIGHT_BUS} ${CY} ${RIGHT_BUS} ${CY + d * R} V ${y - d * R} Q ${RIGHT_BUS} ${y} ${RIGHT_BUS + R} ${y} H ${RIGHT_PORT}`;
}

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

function Node({
  icon: Icon,
  label,
  external,
  className,
  style,
}: {
  icon: LucideIcon;
  label: string;
  external?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={cn(
        "flex items-center gap-2.5 rounded-md border px-3 py-2.5",
        external
          ? "border-dashed border-line-strong bg-surface-0"
          : "border-line bg-surface-1",
        className
      )}
    >
      <Icon className={cn("h-4 w-4 shrink-0", external ? "text-ink-subtle" : "text-accent")} />
      <span className="min-w-0 text-[13px] leading-tight text-ink lg:truncate">{label}</span>
    </div>
  );
}

function Core({ sub, tags }: { sub: string; tags: string[] }) {
  return (
    <div className="rounded-md border border-accent/60 bg-surface-1 p-4">
      <div className="flex items-center gap-2.5">
        <RibbonLogo className="h-6 w-auto" />
        <div className="min-w-0">
          <p className="text-[15px] font-semibold leading-tight text-ink">AG·SORA Core</p>
          <p className="font-mono text-[12px] text-ink-subtle">{sub}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5 border-t border-line pt-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-line px-1.5 py-0.5 font-mono text-[12px] text-ink-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-subtle">
      {children}
    </p>
  );
}

export function HeroVisual() {
  const { t } = useLocale();
  const v = t.home.visual;

  return (
    <div
      role="img"
      aria-label={t.home.visualLabel}
      className="overflow-hidden rounded-lg border border-line-strong bg-surface-0 shadow-elev"
    >
      {/* Title bar with the legend */}
      <div className="flex items-center justify-between gap-4 border-b border-line bg-surface-1 px-4 py-2.5">
        <p className="font-mono text-[12px] text-ink-muted">{v.title}</p>
        <div className="hidden items-center gap-4 font-mono text-[12px] text-ink-subtle sm:flex">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-3.5 rounded-[2px] border border-line bg-surface-1" />
            {v.internal}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-3.5 rounded-[2px] border border-dashed border-line-strong" />
            {v.external}
          </span>
        </div>
      </div>

      {/* Desktop: wired diagram */}
      <div className="relative hidden aspect-[1100/520] bg-[radial-gradient(var(--line)_1px,transparent_1px)] bg-size-[22px_22px] lg:block">
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden>
          {ROWS.map((y, i) => (
            <g key={y}>
              <path d={inbound(y)} fill="none" className="stroke-line-strong" strokeWidth="1" />
              <path
                d={inbound(y)}
                pathLength={1000}
                fill="none"
                className="packet stroke-accent"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ animationDelay: `${i * 0.6}s` }}
              />
              <path d={outbound(y)} fill="none" className="stroke-line-strong" strokeWidth="1" />
              <path
                d={outbound(y)}
                pathLength={1000}
                fill="none"
                className="packet stroke-accent"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ animationDelay: `${1.8 + i * 0.6}s` }}
              />
              {/* Ports where each connector leaves a node */}
              <rect x={LEFT_PORT - 3} y={y - 3} width="6" height="6" className="fill-surface-0 stroke-line-strong" />
              <rect x={RIGHT_PORT - 3} y={y - 3} width="6" height="6" className="fill-surface-0 stroke-line-strong" />
            </g>
          ))}
        </svg>

        <div className="absolute" style={{ left: pct(LEFT_PORT - NODE_W, W), top: pct(16, H) }}>
          <ColumnLabel>{v.internal}</ColumnLabel>
        </div>
        <div className="absolute text-right" style={{ right: pct(W - RIGHT_PORT - NODE_W, W), top: pct(16, H) }}>
          <ColumnLabel>{v.external}</ColumnLabel>
        </div>

        {ROWS.map((y, i) => (
          <Node
            key={`in-${y}`}
            icon={moduleIcons[i]}
            label={v.modules[i]}
            className="absolute -translate-y-1/2"
            style={{ left: pct(LEFT_PORT - NODE_W, W), top: pct(y, H), width: pct(NODE_W, W) }}
          />
        ))}
        {ROWS.map((y, i) => (
          <Node
            key={`out-${y}`}
            external
            icon={serviceIcons[i]}
            label={v.services[i]}
            className="absolute -translate-y-1/2"
            style={{ left: pct(RIGHT_PORT, W), top: pct(y, H), width: pct(NODE_W, W) }}
          />
        ))}

        <div
          className="absolute -translate-y-1/2"
          style={{ left: pct(CORE_LEFT, W), top: pct(CY, H), width: pct(CORE_RIGHT - CORE_LEFT, W) }}
        >
          <Core sub={v.coreSub} tags={v.tags} />
        </div>
      </div>

      {/* Phones and tablets: the same map, stacked */}
      <div className="bg-[radial-gradient(var(--line)_1px,transparent_1px)] bg-size-[22px_22px] p-4 sm:p-6 lg:hidden">
        <ColumnLabel>{v.internal}</ColumnLabel>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {v.modules.map((label, i) => (
            <Node key={label} icon={moduleIcons[i]} label={label} />
          ))}
        </div>
        <div className="flow-down relative mx-auto h-8 w-px bg-line-strong" />
        <Core sub={v.coreSub} tags={v.tags} />
        <div className="flow-down relative mx-auto h-8 w-px bg-line-strong" />
        <ColumnLabel>{v.external}</ColumnLabel>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {v.services.map((label, i) => (
            <Node key={label} external icon={serviceIcons[i]} label={label} />
          ))}
        </div>
      </div>

      {/* What the wiring buys you */}
      <div className="grid border-t border-line bg-surface-1 sm:grid-cols-3 sm:divide-x sm:divide-line">
        {v.benefits.map((b) => (
          <div key={b.title} className="border-b border-line px-4 py-3.5 last:border-b-0 sm:border-b-0 sm:px-5">
            <p className="text-[13px] font-medium text-ink">{b.title}</p>
            <p className="mt-0.5 text-[12px] text-ink-muted">{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

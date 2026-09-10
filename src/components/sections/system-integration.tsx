"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";

const W = 900;
const H = 380;
const CX = W / 2;
const CY = H / 2;

const nodes = [
  { label: "POS", x: 120, y: 70 },
  { label: "ERP", x: 90, y: 190 },
  { label: "HRIS", x: 120, y: 310 },
  { label: "CRM", x: 780, y: 70 },
  { label: "Inventory", x: 810, y: 190 },
  { label: "Dashboard", x: 780, y: 310 },
];

const externals = [
  { label: "Payment Gateway", x: 320, y: 348 },
  { label: "Marketplace", x: 580, y: 348 },
];

/** Curve from a node toward the hub. */
function path(x: number, y: number) {
  const midX = (x + CX) / 2;
  return `M ${x} ${y} C ${midX} ${y}, ${midX} ${CY}, ${CX} ${CY}`;
}

export function SystemIntegration() {
  const reduced = useReducedMotion();

  return (
    <Container className="max-w-6xl">
      <SectionHeading
        eyebrow="System Integration"
        title="Semua sistem terhubung, data mengalir tanpa silo"
        description="Setiap modul AG·SORA berbicara dengan modul lain — dan dengan layanan pihak ketiga yang sudah Anda pakai."
      />

      <div className="mt-14 overflow-hidden rounded-lg border border-line bg-surface-1">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="Diagram integrasi sistem AG·SORA: modul POS, ERP, HRIS, CRM, Inventory, dan Dashboard terhubung ke inti AG·SORA, bersama layanan pihak ketiga seperti payment gateway dan marketplace."
        >
          <defs>
            <linearGradient id="wire" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#4d7cfe" stopOpacity="0.05" />
              <stop offset="0.5" stopColor="#4d7cfe" stopOpacity="0.35" />
              <stop offset="1" stopColor="#4d7cfe" stopOpacity="0.05" />
            </linearGradient>
            <radialGradient id="hubGlow">
              <stop offset="0" stopColor="#4d7cfe" stopOpacity="0.22" />
              <stop offset="1" stopColor="#4d7cfe" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={CX} cy={CY} r={140} fill="url(#hubGlow)" />

          {[...nodes, ...externals].map((n, i) => (
            <g key={n.label}>
              <path
                d={path(n.x, n.y)}
                fill="none"
                stroke="url(#wire)"
                strokeWidth="1"
              />
              {!reduced ? (
                <circle r="2.5" fill="#35d6ec">
                  <animateMotion
                    dur={`${3.2 + (i % 3) * 0.9}s`}
                    begin={`${i * 0.45}s`}
                    repeatCount="indefinite"
                    path={path(n.x, n.y)}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="spline"
                    keySplines="0.4 0 0.6 1"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.15;0.8;1"
                    dur={`${3.2 + (i % 3) * 0.9}s`}
                    begin={`${i * 0.45}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ) : null}
            </g>
          ))}

          {nodes.map((n) => (
            <g key={n.label}>
              <rect
                x={n.x - 52}
                y={n.y - 15}
                width="104"
                height="30"
                rx="6"
                fill="#141922"
                stroke="#2c3441"
              />
              <text
                x={n.x}
                y={n.y + 4}
                textAnchor="middle"
                fill="#f2f4f8"
                fontSize="12"
              >
                {n.label}
              </text>
            </g>
          ))}

          {externals.map((n) => (
            <g key={n.label}>
              <rect
                x={n.x - 66}
                y={n.y - 13}
                width="132"
                height="26"
                rx="6"
                fill="#0e1117"
                stroke="#1e242f"
                strokeDasharray="3 3"
              />
              <text
                x={n.x}
                y={n.y + 4}
                textAnchor="middle"
                fill="#7d8899"
                fontSize="11"
              >
                {n.label}
              </text>
            </g>
          ))}

          <g>
            <rect
              x={CX - 76}
              y={CY - 26}
              width="152"
              height="52"
              rx="8"
              fill="#141922"
              stroke="#4d7cfe"
              strokeOpacity="0.45"
            />
            <text
              x={CX}
              y={CY - 3}
              textAnchor="middle"
              fill="#f2f4f8"
              fontSize="14"
              fontWeight="600"
            >
              AG·SORA Core
            </text>
            <text
              x={CX}
              y={CY + 14}
              textAnchor="middle"
              fill="#7d8899"
              fontSize="10"
            >
              API &amp; Data Layer
            </text>
          </g>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-3"
      >
        {[
          ["Satu sumber data", "Tidak ada input ganda antar divisi."],
          ["API terbuka", "Terhubung ke sistem yang sudah Anda pakai."],
          ["Real-time", "Perubahan langsung terlihat lintas modul."],
        ].map(([title, desc]) => (
          <div key={title} className="border-t border-line pt-4">
            <p className="text-[13px] font-medium text-ink">{title}</p>
            <p className="mt-1 text-[12px] text-ink-muted">{desc}</p>
          </div>
        ))}
      </motion.div>
    </Container>
  );
}

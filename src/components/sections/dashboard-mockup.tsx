"use client";

import { motion } from "framer-motion";

const bars = [42, 58, 46, 72, 61, 88, 74];
const rows = [
  { label: "Outlet Jakarta", value: "Rp182,4jt", delta: "+12,4%" },
  { label: "Outlet Bandung", value: "Rp121,8jt", delta: "+8,1%" },
  { label: "Outlet Surabaya", value: "Rp98,2jt", delta: "+4,6%" },
];

export function DashboardMockup() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg border border-line bg-surface-1">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-[12px] font-medium text-ink">
              Revenue Overview
            </span>
          </div>
          <span className="text-[11px] text-ink-subtle">30 hari terakhir</span>
        </div>

        <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
          {[
            { label: "Revenue", value: "Rp482,4jt" },
            { label: "Transaksi", value: "12.480" },
            { label: "Growth", value: "+18,2%" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-3.5">
              <p className="text-[11px] text-ink-subtle">{stat.label}</p>
              <p className="mt-1 text-[15px] font-semibold tabular-nums text-ink">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="border-b border-line px-4 py-5">
          <div className="flex h-24 items-end gap-1.5">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-accent-deep"
                style={{ opacity: 0.35 + (h / 100) * 0.65 }}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.05, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>

        <div className="divide-y divide-line">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between px-4 py-2.5"
            >
              <span className="text-[12px] text-ink-muted">{row.label}</span>
              <div className="flex items-center gap-3">
                <span className="text-[12px] tabular-nums text-ink">
                  {row.value}
                </span>
                <span className="w-12 text-right text-[11px] tabular-nums text-accent">
                  {row.delta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Wallet } from "lucide-react";
import { RibbonLogo } from "@/components/ribbon-logo";

const bars = [38, 62, 48, 74, 58, 90, 70];

export function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <motion.div
        className="relative rounded-2xl border border-surface-border bg-white p-5 shadow-[0_24px_60px_-20px_rgba(10,23,48,0.25)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RibbonLogo className="h-5 w-5" />
            <span className="text-sm font-semibold text-navy">Overview</span>
          </div>
          <span className="rounded-full bg-bg-soft px-2.5 py-1 text-[11px] font-medium text-blue">
            Live
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-surface-border bg-bg-alt p-3">
            <Wallet className="h-4 w-4 text-blue" />
            <p className="mt-2 text-lg font-bold text-navy">Rp482jt</p>
            <p className="text-[11px] text-muted">Revenue</p>
          </div>
          <div className="rounded-xl border border-surface-border bg-bg-alt p-3">
            <Users className="h-4 w-4 text-cyan-2" />
            <p className="mt-2 text-lg font-bold text-navy">1.204</p>
            <p className="text-[11px] text-muted">Active Users</p>
          </div>
          <div className="rounded-xl border border-surface-border bg-bg-alt p-3">
            <TrendingUp className="h-4 w-4 text-blue" />
            <p className="mt-2 text-lg font-bold text-navy">+18%</p>
            <p className="text-[11px] text-muted">Growth</p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-surface-border p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted">
              Weekly Performance
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-blue" />
          </div>
          <div className="mt-4 flex h-24 items-end gap-2">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-blue to-cyan"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="glass-panel absolute -left-8 -top-6 hidden rounded-xl px-4 py-3 shadow-soft sm:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.3 },
          x: { duration: 0.8, delay: 0.3 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        }}
      >
        <p className="text-[11px] text-muted">Order Synced</p>
        <p className="text-sm font-semibold text-navy">POS · Outlet 03</p>
      </motion.div>

      <motion.div
        className="glass-panel absolute -bottom-8 -right-6 hidden rounded-xl px-4 py-3 shadow-soft sm:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.5 },
          x: { duration: 0.8, delay: 0.5 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
        }}
      >
        <p className="text-[11px] text-muted">Automation</p>
        <p className="text-sm font-semibold text-navy">3 workflows active</p>
      </motion.div>
    </div>
  );
}

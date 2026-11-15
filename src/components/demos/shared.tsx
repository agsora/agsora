"use client";

import type { ReactNode } from "react";

export const rp = (n: number) => `Rp${Math.round(n).toLocaleString("id-ID")}`;

/** Gradient tile standing in for a photo, so demos stay light and need no stock images. */
export function Photo({ from, to, children, className = "" }: { from: string; to: string; children?: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,.55) 0, transparent 40%), radial-gradient(circle at 85% 75%, rgba(255,255,255,.35) 0, transparent 45%)" }}
      />
      {children ? <div className="relative flex h-full w-full items-center justify-center">{children}</div> : null}
    </div>
  );
}

/** Small toast that confirms a demo action. */
export function Toast({ text }: { text: string | null }) {
  if (!text) return null;
  return (
    <div role="status" className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black/85 px-5 py-2.5 text-sm font-medium text-white shadow-lg">
      {text}
    </div>
  );
}

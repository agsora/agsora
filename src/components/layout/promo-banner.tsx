"use client";

import { useState, useSyncExternalStore } from "react";
import { X } from "lucide-react";
import type { PromoSettings } from "@/config/site-data";

const KEY = "agsora-promo-dismissed";
const subscribe = () => () => {};

/**
 * Promo strip above the header. Pages are statically generated, so whether it is still valid today and whether the visitor
 * dismissed it is decided in the browser (the server snapshot is hidden, avoiding any hydration mismatch).
 * A dismissal is remembered per promo code and title.
 */
export function PromoBanner({ promo, contactHref }: { promo: PromoSettings; contactHref: string }) {
  const id = `${promo.code}|${promo.title}`;
  const [closed, setClosed] = useState(false);

  const show = useSyncExternalStore(
    subscribe,
    () => {
      if (!promo.enabled || !(promo.title || promo.text)) return false;
      if (promo.validUntil && new Date(`${promo.validUntil}T23:59:59+07:00`).getTime() < Date.now()) return false;
      try {
        return localStorage.getItem(KEY) !== id;
      } catch {
        return true;
      }
    },
    () => false,
  );

  if (!show || closed) return null;

  return (
    <div role="region" aria-label="Promo" className="relative z-50 bg-[#5b5cf0] px-10 py-2 text-center text-sm text-white">
      <span className="font-semibold">{promo.title}</span>
      {promo.text ? <span className="ml-2 opacity-95">{promo.text}</span> : null}
      {promo.code ? <span className="ml-2 rounded bg-white/20 px-2 py-0.5 font-mono text-xs">{promo.code}</span> : null}
      <a href={contactHref} className="ml-3 font-semibold underline underline-offset-2">
        {promo.ctaLabel}
      </a>
      <button
        type="button"
        aria-label="Tutup"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 hover:bg-white/20"
        onClick={() => {
          try {
            localStorage.setItem(KEY, id);
          } catch {
            /* ignore */
          }
          setClosed(true);
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
}

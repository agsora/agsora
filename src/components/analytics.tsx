"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { track } from "@/lib/track";

/**
 * Visitor's first sign of life. Until one of these fires, the ~178 KB gtag.js
 * download is held back, which keeps Google Tag Manager's main-thread work out
 * of the critical load window (it was the main source of long tasks and of the
 * remaining Total Blocking Time). Crawlers and idle tabs never trigger it, so
 * they are not counted as visits either.
 */
const INTERACTION_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

/**
 * Google Analytics 4 plus automatic conversion events for every WhatsApp and
 * email link on the site (one delegated click listener, so new links are
 * covered without touching each component). Renders nothing until
 * NEXT_PUBLIC_GA_ID is set in the environment.
 *
 * The small inline snippet runs immediately: it defines window.gtag and
 * queues `js` and `config` on dataLayer, so track() calls made before gtag.js
 * has downloaded are queued in order and replayed by it. Only the big script
 * waits for interaction.
 */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (!id) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href") ?? "";
      if (href.includes("wa.me")) {
        track("whatsapp_click", { page_path: window.location.pathname });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { page_path: window.location.pathname });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [id]);

  useEffect(() => {
    if (!id) return;
    const start = () => setInteracted(true);
    for (const type of INTERACTION_EVENTS) {
      window.addEventListener(type, start, { once: true, passive: true });
    }
    return () => {
      for (const type of INTERACTION_EVENTS) window.removeEventListener(type, start);
    };
  }, [id]);

  if (!id) return null;
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(id)});`}
      </Script>
      {interacted ? (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`}
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}

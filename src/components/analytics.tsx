"use client";

import { useEffect } from "react";
import Script from "next/script";
import { track } from "@/lib/track";

/**
 * Google Analytics 4 plus automatic conversion events for every WhatsApp and
 * email link on the site (one delegated click listener, so new links are
 * covered without touching each component). Renders nothing until
 * NEXT_PUBLIC_GA_ID is set in the environment.
 */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;

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

  if (!id) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(id)});`}
      </Script>
    </>
  );
}

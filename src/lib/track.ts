/**
 * Sends a conversion event to Google Analytics 4. A no-op until
 * NEXT_PUBLIC_GA_ID is set (see components/analytics.tsx), so callers never
 * need to check.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
}

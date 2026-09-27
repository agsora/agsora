/**
 * Counts article opens site-wide (see app/api/blog-view). Unlike
 * reading-history, this does leave the browser: the slug, the language, and
 * a random visitor ID so repeat opens by the same browser count as one reader.
 * No names, emails, or IP addresses are stored.
 */

import { useEffect, useState } from "react";

const VISITOR_KEY = "agsora:visitor-id";

function getVisitorId(): string | null {
  try {
    let id = window.localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = crypto.randomUUID();
      window.localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    // Storage blocked — still count the open, just not as a returning reader.
    return null;
  }
}

export function trackBlogView(slug: string, locale: string) {
  if (typeof window === "undefined") return;
  const body = JSON.stringify({ slug, locale, visitorId: getVisitorId() });
  // sendBeacon survives the reader navigating away before the request lands.
  const sent =
    typeof navigator.sendBeacon === "function" &&
    navigator.sendBeacon("/api/blog-view", new Blob([body], { type: "application/json" }));
  if (!sent) {
    fetch("/api/blog-view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  }
}

/** Opens across all languages, and the most recent one (ISO timestamp). */
export type BlogStat = { views: number; lastViewedAt: string };

/**
 * Per-slug view counts from /api/blog-stats, fetched after mount so the
 * archive pages themselves stay static. null until loaded, or if it fails.
 *
 * Refetched when the page is restored from the back/forward cache: the
 * browser shows the old DOM without remounting anything, so a reader coming
 * back from a post would otherwise see the count from before they opened it.
 */
export function useBlogStats() {
  const [stats, setStats] = useState<Record<string, BlogStat> | null>(null);
  useEffect(() => {
    let cancelled = false;
    const load = () =>
      fetch("/api/blog-stats", { cache: "no-store" })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (!cancelled && data) setStats(data);
        })
        .catch(() => {});
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) load();
    };
    load();
    window.addEventListener("pageshow", onPageShow);
    return () => {
      cancelled = true;
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);
  return stats;
}

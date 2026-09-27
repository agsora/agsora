/**
 * Counts article opens site-wide (see app/api/blog-view). Unlike
 * reading-history, this does leave the browser: the slug, the language, and
 * a random visitor ID so repeat opens by the same browser count as one reader.
 * No names, emails, or IP addresses are stored.
 */

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

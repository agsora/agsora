/**
 * Tracks which blog posts a visitor has read, in this browser only, so the
 * post page can weight its recommendations toward topics they keep coming
 * back to. Stored in localStorage; nothing is sent anywhere.
 */

const STORAGE_KEY = "agsora:blog:read-history";
const MAX_ENTRIES = 20;

/** Most recently read slug first. Returns [] on the server or if storage is blocked. */
export function getReadingHistory(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((slug): slug is string => typeof slug === "string") : [];
  } catch {
    return [];
  }
}

/** Records a post as read, moving it to the front and capping history length. */
export function recordPostView(slug: string) {
  if (typeof window === "undefined") return;
  try {
    const history = getReadingHistory().filter((s) => s !== slug);
    history.unshift(slug);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, MAX_ENTRIES)));
  } catch {
    // Storage may be unavailable (private browsing, quota) — history is a nice-to-have.
  }
}

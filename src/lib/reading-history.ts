/**
 * Tracks which blog posts a visitor has read, in this browser only, so the
 * post page can weight its recommendations toward topics they keep coming
 * back to. Stored in localStorage; nothing is sent anywhere.
 */

const STORAGE_KEY = "agsora:blog:read-history";
const MAX_ENTRIES = 20;
const LAST_READ_KEY = "agsora:blog:last-read";

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

function getLastReadMap(): Record<string, string> {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(LAST_READ_KEY) ?? "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

/** ISO timestamp of this visitor's previous visit to a post, or null if never read here. */
export function getLastReadAt(slug: string): string | null {
  if (typeof window === "undefined") return null;
  const value = getLastReadMap()[slug];
  return typeof value === "string" ? value : null;
}

/** Records a post as read, moving it to the front and capping history length. */
export function recordPostView(slug: string) {
  if (typeof window === "undefined") return;
  try {
    const history = getReadingHistory().filter((s) => s !== slug);
    history.unshift(slug);
    const kept = history.slice(0, MAX_ENTRIES);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(kept));
    // Timestamps only for posts still in the history, so the map stays bounded.
    const lastRead = Object.fromEntries(
      Object.entries(getLastReadMap()).filter(([s]) => kept.includes(s))
    );
    lastRead[slug] = new Date().toISOString();
    window.localStorage.setItem(LAST_READ_KEY, JSON.stringify(lastRead));
  } catch {
    // Storage may be unavailable (private browsing, quota) — history is a nice-to-have.
  }
}

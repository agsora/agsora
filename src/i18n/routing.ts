import { siteConfig } from "@/config/site";

/**
 * URL-based locales. Indonesian stays unprefixed (/services) so the URLs
 * search engines already rank keep working; English and Chinese live under
 * /en and /zh. src/proxy.ts rewrites unprefixed requests to app/[lang] with
 * lang = "id", and redirects /id/... back to the unprefixed URL so every
 * page has exactly one address per language.
 */
export const locales = ["id", "en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * <html lang> and hreflang codes. Language-only, no region: each version
 * should rank in every country that reads the language, not just one.
 */
export const hreflangs: Record<Locale, string> = {
  id: "id",
  en: "en",
  zh: "zh-Hans",
};

export const ogLocales: Record<Locale, string> = {
  id: "id_ID",
  en: "en_US",
  zh: "zh_CN",
};

/**
 * Served to searchers whose language matches none of the versions.
 * English, since that's the international audience.
 */
export const fallbackLocale: Locale = "en";

/** "/services" → "/en/services". Non-path hrefs (https:, mailto:, #hash) pass through. */
export function localizePath(href: string, locale: Locale) {
  if (!href.startsWith("/") || href.startsWith("//") || locale === defaultLocale) {
    return href;
  }
  const cut = href.search(/[?#]/);
  const path = cut === -1 ? href : href.slice(0, cut);
  const suffix = cut === -1 ? "" : href.slice(cut);
  return `/${locale}${path === "/" ? "" : path}${suffix}`;
}

/**
 * "/en/services" → { locale: "en", path: "/services" }. Also strips "/id",
 * which is what the server sees after the proxy rewrite.
 */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const first = pathname.split("/")[1] ?? "";
  if (isLocale(first)) {
    return { locale: first, path: pathname.slice(first.length + 1) || "/" };
  }
  return { locale: defaultLocale, path: pathname };
}

export function absoluteUrl(path: string, locale: Locale) {
  const localized = localizePath(path, locale);
  return `${siteConfig.url}${localized === "/" ? "" : localized}`;
}

/**
 * Where the language switcher should send someone on `path` who picks
 * `target`. Most pages exist in every language; blog posts only exist in
 * the languages they've been translated into (`translatedPosts`), and the
 * paginated archive is shorter outside Indonesian — both fall back to the
 * blog index rather than a 404.
 */
export function alternatePath(
  path: string,
  target: Locale,
  translatedPosts: readonly string[]
) {
  if (target === defaultLocale) return path;
  if (path.startsWith("/blog/page/")) return "/blog";
  const post = path.match(/^\/blog\/([^/]+)$/);
  if (post && !translatedPosts.includes(post[1])) return "/blog";
  return path;
}

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import {
  absoluteUrl,
  fallbackLocale,
  hreflangs,
  localizePath,
  locales as allLocales,
  ogLocales,
  type Locale,
} from "@/i18n/routing";

/**
 * hreflang alternates for a page that exists in `available` languages.
 * x-default points to English when there is one (the international
 * version), otherwise to whatever exists.
 */
export function languageAlternates(
  path: string,
  available: readonly Locale[] = allLocales
) {
  const languages: Record<string, string> = {};
  for (const locale of available) {
    languages[hreflangs[locale]] = localizePath(path, locale);
  }
  const fallback = available.includes(fallbackLocale) ? fallbackLocale : available[0];
  languages["x-default"] = localizePath(path, fallback);
  return languages;
}

/**
 * Builds complete per-page metadata.
 *
 * Next.js does not derive og:title / og:url from a page's `title`. A page that
 * sets only title + description inherits the root layout's openGraph object,
 * so every inner page would share the homepage's social title and URL. Using
 * this helper on every page keeps title, canonical, hreflang and social tags
 * aligned for each language version.
 */
export function pageMetadata({
  title,
  absoluteTitle,
  description,
  path,
  locale,
  available = allLocales,
  image = "/opengraph-image",
}: {
  /** Page name; the layout template appends " | AG·SORA". */
  title?: string;
  /** Full title used verbatim — for pages whose title must lead with a keyword. */
  absoluteTitle?: string;
  description: string;
  /** Unprefixed path, e.g. "/services". */
  path: string;
  locale: Locale;
  /** Languages this page exists in; defaults to all. */
  available?: readonly Locale[];
  image?: string;
}): Metadata {
  const fullTitle = absoluteTitle ?? `${title} | ${siteConfig.brandMark}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: {
      canonical: localizePath(path, locale),
      languages: languageAlternates(path, available),
    },
    openGraph: {
      type: "website",
      locale: ogLocales[locale],
      alternateLocale: available.filter((l) => l !== locale).map((l) => ogLocales[l]),
      siteName: siteConfig.brandMark,
      title: fullTitle,
      description,
      url: absoluteUrl(path, locale),
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/** JSON for a <script type="application/ld+json">; "<" is escaped so content can never close the tag. */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

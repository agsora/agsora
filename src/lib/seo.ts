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

// CJK glyphs render about twice as wide as Latin ones in a results page, so
// they count double against the pixel-based title and description limits.
const weight = (text: string) =>
  [...text].reduce((n, ch) => n + (/[⺀-鿿＀-￯]/.test(ch) ? 2 : 1), 0);

function clip(text: string, max: number) {
  let out = "";
  for (const ch of text) {
    if (weight(out + ch) > max) break;
    out += ch;
  }
  return out;
}

/**
 * A <title> that survives Google's ~60-character cut-off. `suffix` is the
 * template's " | AG·SORA". Long article titles are shortened at the colon
 * ("Topic: long subtitle" → "Topic") or, failing that, at a word boundary;
 * the visible <h1> keeps the full title.
 */
export function seoTitle(title: string, suffix = ` | ${siteConfig.brandMark}`) {
  const max = 60 - weight(suffix);
  if (weight(title) <= max) return title;
  const head = title.split(/[:：]/)[0].trim();
  if (head && head !== title && weight(head) >= 20 && weight(head) <= max) return head;
  const cut = clip(title, max);
  const space = cut.lastIndexOf(" ");
  return (space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,;:–-]+$/, "");
}

/** A meta description trimmed to ~155 characters at a sentence or word boundary. */
export function seoDescription(text: string, max = 155) {
  if (weight(text) <= max) return text;
  const cut = clip(text, max - 1);
  const sentence = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("。"));
  if (sentence > max * 0.6) return cut.slice(0, sentence + 1);
  const space = cut.lastIndexOf(" ");
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,;:–-]+$/, "")}…`;
}

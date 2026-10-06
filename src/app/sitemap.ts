import type { MetadataRoute } from "next";
import { blogPageHref, blogPosts, getTotalPages, isPostAvailable } from "@/config/blog";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { absoluteUrl, locales, type Locale } from "@/i18n/routing";
import { languageAlternates } from "@/lib/seo";

type Entry = Omit<MetadataRoute.Sitemap[number], "url" | "alternates">;

/**
 * One <url> per language version, each listing all its alternates
 * (hreflang + x-default) — how Google expects multilingual sitemaps.
 */
function localized(
  path: string,
  entry: Entry,
  available: readonly Locale[] = locales
): MetadataRoute.Sitemap {
  // languageAlternates gives site-relative paths; sitemaps need full URLs.
  const languages = Object.fromEntries(
    Object.entries(languageAlternates(path, available)).map(([lang, href]) => [
      lang,
      `${siteConfig.url}${href === "/" ? "" : href}`,
    ])
  );
  return available.map((locale) => ({
    ...entry,
    url: absoluteUrl(path, locale),
    alternates: { languages },
  }));
}

/** Bump when the static pages or service copy change in a way worth re-crawling. */
const STATIC_PAGES_UPDATED = new Date("2026-10-06");

const routes = [
  "/",
  "/services",
  "/industries",
  "/pricing",
  "/blog",
  "/about",
  "/contact",
  "/checklist",
  "/privacy-policy",
  "/terms-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Real dates, not "now": a lastmod that changes on every build teaches
  // crawlers to ignore it. Home and the blog change when a post is added.
  const latestPost = new Date(
    Math.max(...blogPosts.map((p) => new Date(p.updatedAt ?? p.publishedAt).getTime()))
  );
  const lastModifiedFor = (route: string) =>
    route === "/" || route === "/blog" ? latestPost : STATIC_PAGES_UPDATED;

  const pages = routes.flatMap((route) =>
    localized(route, {
      lastModified: lastModifiedFor(route),
      changeFrequency: route === "/" || route === "/blog" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.7,
    })
  );

  // Service pages carry the commercial keywords — rank them just below home.
  const servicePages = services.flatMap((service) =>
    localized(`/services/${service.id}`, {
      lastModified: STATIC_PAGES_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    })
  );

  // Each post only in the languages it's been translated into.
  const posts = blogPosts.flatMap((post) =>
    localized(
      `/blog/${post.slug}`,
      {
        lastModified: new Date(post.updatedAt ?? post.publishedAt),
        changeFrequency: "yearly",
        priority: 0.6,
      },
      locales.filter((locale) => isPostAvailable(post, locale))
    )
  );

  // Archive pages beyond page 1 (already listed via "/blog"), per language.
  const maxPages = Math.max(...locales.map((locale) => getTotalPages(locale)));
  const blogArchivePages = Array.from({ length: Math.max(0, maxPages - 1) }, (_, i) => i + 2)
    .flatMap((page) =>
      localized(
        blogPageHref(page),
        { lastModified: latestPost, changeFrequency: "weekly", priority: 0.5 },
        locales.filter((locale) => getTotalPages(locale) >= page)
      )
    );

  return [...pages, ...servicePages, ...posts, ...blogArchivePages];
}

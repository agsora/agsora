import "server-only";

import { bodies } from "@/content/blog/bodies";
import { bodiesI18n } from "@/content/blog/bodies-i18n";
import { meta } from "@/content/blog/meta";
import { blogPosts, type Block, type BlogPost } from "@/config/blog";
import { countWords } from "@/lib/blog-words";
import type { Locale } from "@/i18n/locale-context";

/**
 * Article text. Server only: every body together is ~9 MB, so a client
 * component importing this file would ship all of it to every visitor. Pages
 * call getPostBlocks() on the server and pass the one article they render
 * down as props.
 */

/** Article body in the given locale, falling back to the Indonesian original. */
export function getPostBlocks(post: Pick<BlogPost, "slug">, locale: Locale): Block[] {
  const body = bodies[post.slug];
  if (locale === "id") return body;
  return bodiesI18n[post.slug]?.[locale] ?? body;
}

// Fail the build on content mistakes that would otherwise ship silently.
{
  const seen = new Set<string>();
  for (const post of blogPosts) {
    if (seen.has(post.slug)) {
      throw new Error(`Duplicate blog slug: "${post.slug}"`);
    }
    if (post.slug === "page") {
      throw new Error(`Blog slug "page" collides with the /blog/page/[n] route`);
    }
    if (!bodies[post.slug]) {
      throw new Error(`No article body found for slug "${post.slug}", add src/content/blog/bodies/${post.slug}.ts`);
    }
    seen.add(post.slug);

    // src/content/blog/stats.json must match the bodies it was generated from.
    const words = countWords(bodies[post.slug]);
    if (words !== post.wordCount || Boolean(bodiesI18n[post.slug]) !== post.hasBodyTranslations) {
      throw new Error(
        `src/content/blog/stats.json is out of date for "${post.slug}". Run: node scripts/blog-stats.mjs`
      );
    }
  }
  const metaSlugs = new Set(meta.map((m) => m.slug));
  for (const slug of Object.keys(bodies)) {
    if (!metaSlugs.has(slug)) {
      throw new Error(`src/content/blog/bodies/${slug}.ts has no matching entry in meta.ts`);
    }
  }
}

/**
 * Blog content model and queries.
 *
 * Article metadata lives in `src/content/blog/meta.ts`; article text lives
 * as structured blocks in `src/content/blog/bodies/*.ts`, one file per slug,
 * indexed by `src/content/blog/bodies/index.ts`. Structured blocks rather
 * than markdown keep the whole blog type-checked with no parsing dependency
 * and no build config. The split keeps metadata (dates, tags, covers) easy
 * to scan and edit separately from long-form article text.
 *
 * Editorial rule: articles must not contain invented statistics, fabricated
 * case studies, or named clients. Where a claim would need a source, the
 * writing explains the reasoning instead of citing a number. Articles that
 * mention regulation must point readers to the current rules rather than
 * restate figures that may have changed.
 */

import { meta } from "@/content/blog/meta";
import { bodies } from "@/content/blog/bodies";
import { bodiesI18n } from "@/content/blog/bodies-i18n";
import type { Locale } from "@/i18n/locale-context";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  /** In-article illustration. `src` is an Unsplash CDN base URL, like covers. */
  | { type: "image"; src: string; alt: string; caption?: string }
  /** Closing call to action. `href` must be an internal path. */
  | { type: "cta"; title: string; text: string; href: `/${string}`; label: string };

export type BlogCategory =
  | "Strategi Bisnis"
  | "Panduan Memilih"
  | "ERP & Operasional"
  | "POS & Retail"
  | "HR & Tim"
  | "Penjualan & CRM"
  | "Teknologi"
  | "Website & Digital"
  | "Panduan Industri";

/**
 * Controlled vocabulary. Recommendations score on shared tags, so a typo'd
 * or one-off tag silently weakens them — the union makes that a type error.
 */
export type BlogTag =
  | "erp"
  | "pos"
  | "hris"
  | "crm"
  | "inventori"
  | "keuangan"
  | "pelaporan"
  | "integrasi"
  | "data"
  | "migrasi-data"
  | "otomasi"
  | "ai"
  | "keamanan"
  | "infrastruktur"
  | "website"
  | "seo"
  | "ecommerce"
  | "umkm"
  | "multi-cabang"
  | "vendor"
  | "biaya"
  | "kontrak"
  | "implementasi"
  | "perubahan"
  | "retail"
  | "fnb"
  | "industri"
  | "sales"
  | "pelanggan"
  | "karyawan"
  | "payroll"
  | "mobile"
  | "api"
  | "custom-software"
  | "saas"
  | "operasional"
  | "pembayaran";

export type BlogCover = {
  /** Unsplash CDN base URL, without sizing params — the image loader adds them. */
  src: string;
  /** Describes what is actually in the photo, for screen readers and image search. */
  alt: string;
};

/** English/Chinese title and excerpt for a post authored with translations. */
export type PostTextTranslations = { en: string; zh: string };

/** Article metadata, kept apart from the article text in src/content/blog/meta.ts. */
export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string; // ISO date
  /** Last substantive revision. Defaults to publishedAt when omitted. */
  updatedAt?: string; // ISO date
  tags: BlogTag[];
  cover: BlogCover;
  /**
   * Optional EN/ZH title and excerpt. Posts without this fall back to the
   * Indonesian `title`/`excerpt` for every locale, same as before this field
   * existed — the site's default and only fully-supported content language.
   */
  titleTranslations?: PostTextTranslations;
  excerptTranslations?: PostTextTranslations;
};

export type BlogPost = PostMeta & {
  body: Block[];
  /** Optional EN/ZH article body — see PostMeta.titleTranslations. */
  bodyTranslations?: { en: Block[]; zh: Block[] };
  wordCount: number;
  readingMinutes: number;
};

export const POSTS_PER_PAGE = 12;
const WORDS_PER_MINUTE = 200;

function countWords(body: Block[]) {
  return body.reduce((n, block) => {
    const text =
      block.type === "ul" || block.type === "ol"
        ? block.items.join(" ")
        : block.type === "callout" || block.type === "cta"
          ? `${block.title} ${block.text}`
          : block.type === "image"
            ? (block.caption ?? "")
            : block.text;
    return n + text.split(/\s+/).filter(Boolean).length;
  }, 0);
}

export const blogPosts: BlogPost[] = meta.map((post) => {
  const body = bodies[post.slug];
  if (!body) {
    throw new Error(`No article body found for slug "${post.slug}" — add src/content/blog/bodies/${post.slug}.ts`);
  }
  const wordCount = countWords(body);
  return {
    ...post,
    body,
    bodyTranslations: bodiesI18n[post.slug],
    wordCount,
    readingMinutes: Math.max(2, Math.ceil(wordCount / WORDS_PER_MINUTE)),
  };
});

/** Title in the given locale, falling back to the Indonesian original. */
export function getPostTitle(post: BlogPost, locale: Locale) {
  if (locale === "id") return post.title;
  return post.titleTranslations?.[locale] ?? post.title;
}

/** Excerpt in the given locale, falling back to the Indonesian original. */
export function getPostExcerpt(post: BlogPost, locale: Locale) {
  if (locale === "id") return post.excerpt;
  return post.excerptTranslations?.[locale] ?? post.excerpt;
}

/** Article body in the given locale, falling back to the Indonesian original. */
export function getPostBlocks(post: BlogPost, locale: Locale) {
  if (locale === "id") return post.body;
  return post.bodyTranslations?.[locale] ?? post.body;
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
    seen.add(post.slug);
  }
  const bodySlugs = new Set(Object.keys(bodies));
  const metaSlugs = new Set(meta.map((m) => m.slug));
  for (const slug of bodySlugs) {
    if (!metaSlugs.has(slug)) {
      throw new Error(`src/content/blog/bodies/${slug}.ts has no matching entry in meta.ts`);
    }
  }
}

const byNewest = (a: BlogPost, b: BlogPost) =>
  b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug);

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * Whether a post has a version in `locale`. Indonesian is the original
 * language, so every post exists in it; English and Chinese pages are only
 * published for posts with a translated title and body — an Indonesian
 * article under an /en URL would be a mislabelled duplicate to search engines.
 */
export function isPostAvailable(post: BlogPost, locale: Locale) {
  return locale === "id" || Boolean(post.titleTranslations && post.bodyTranslations);
}

/**
 * Posts that exist in every language (translations come in en+zh pairs).
 * Lets the language switcher avoid linking to a post that doesn't exist.
 */
export const translatedPostSlugs = blogPosts
  .filter((post) => isPostAvailable(post, "en"))
  .map((post) => post.slug);

/** Newest first, limited to posts that exist in `locale`. */
export function getSortedPosts(locale: Locale = "id") {
  return blogPosts.filter((post) => isPostAvailable(post, locale)).sort(byNewest);
}

/** Display order for category filters — matches the BlogCategory union. */
export const BLOG_CATEGORIES: BlogCategory[] = [
  "Strategi Bisnis",
  "Panduan Memilih",
  "ERP & Operasional",
  "POS & Retail",
  "HR & Tim",
  "Penjualan & CRM",
  "Teknologi",
  "Website & Digital",
  "Panduan Industri",
];

export type CategoryCount = { category: BlogCategory; count: number };

/** Categories with at least one post, in display order, with post counts. */
export function getCategoryCounts(locale: Locale = "id"): CategoryCount[] {
  const counts = new Map<BlogCategory, number>();
  for (const post of getSortedPosts(locale)) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }
  return BLOG_CATEGORIES.filter((category) => counts.has(category)).map((category) => ({
    category,
    count: counts.get(category)!,
  }));
}

/** All posts in a category, newest first — powers the client-side category filter. */
export function getPostsByCategory(category: BlogCategory, locale: Locale = "id") {
  return getSortedPosts(locale).filter((post) => post.category === category);
}

/**
 * The archive is strictly by publish date, newest first, across all pages —
 * no pinned picks jumping the queue, so readers always see the latest post
 * first.
 */
export function getTotalPages(locale: Locale = "id") {
  return Math.max(1, Math.ceil(getSortedPosts(locale).length / POSTS_PER_PAGE));
}

export function getPostsForPage(page: number, locale: Locale = "id") {
  const start = (page - 1) * POSTS_PER_PAGE;
  return getSortedPosts(locale).slice(start, start + POSTS_PER_PAGE);
}

export function blogPageHref(page: number) {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

/**
 * Recommendations for a post: scored by shared tags (3 each) and same
 * category (2), newest first on ties. Tags carry more weight because they
 * describe the actual subject — two posts in "Teknologi" may have nothing in
 * common, while two posts tagged "migrasi-data" almost always do.
 */
export function getRecommendedPosts(slug: string, limit = 3, locale: Locale = "id") {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const currentTags = new Set(current.tags);

  return getSortedPosts(locale)
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      score:
        post.tags.filter((tag) => currentTags.has(tag)).length * 3 +
        (post.category === current.category ? 2 : 0),
    }))
    .sort((a, b) => b.score - a.score || byNewest(a.post, b.post))
    .slice(0, limit)
    .map(({ post }) => post);
}

/**
 * Recommendations for a post, weighted by the reader's own history: tags and
 * categories that show up often in recently read posts (most recent first in
 * `historySlugs`) score extra on top of the normal shared-tag/category match
 * against the current post. Posts already in the history are excluded — no
 * point recommending a re-read. Falls back to `getRecommendedPosts` when
 * there's no usable history.
 */
export function getPersonalizedRecommendations(
  slug: string,
  historySlugs: string[],
  limit = 3,
  locale: Locale = "id"
): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  const historyPosts = historySlugs
    .map((s) => getPostBySlug(s))
    .filter((post): post is BlogPost => Boolean(post) && post?.slug !== slug);

  if (historyPosts.length === 0) return getRecommendedPosts(slug, limit, locale);

  const currentTags = new Set(current.tags);
  const tagFrequency = new Map<BlogTag, number>();
  const categoryFrequency = new Map<BlogCategory, number>();
  historyPosts.forEach((post, i) => {
    const weight = historyPosts.length - i; // more recently read counts for more
    post.tags.forEach((tag) => tagFrequency.set(tag, (tagFrequency.get(tag) ?? 0) + weight));
    categoryFrequency.set(post.category, (categoryFrequency.get(post.category) ?? 0) + weight);
  });

  const readSlugs = new Set(historyPosts.map((post) => post.slug));

  return getSortedPosts(locale)
    .filter((post) => post.slug !== slug && !readSlugs.has(post.slug))
    .map((post) => {
      const baseScore =
        post.tags.filter((tag) => currentTags.has(tag)).length * 3 +
        (post.category === current.category ? 2 : 0);
      const historyScore =
        post.tags.reduce((n, tag) => n + (tagFrequency.get(tag) ?? 0), 0) * 0.5 +
        (categoryFrequency.get(post.category) ?? 0) * 0.5;
      return { post, score: baseScore + historyScore };
    })
    .sort((a, b) => b.score - a.score || byNewest(a.post, b.post))
    .slice(0, limit)
    .map(({ post }) => post);
}

/** Chronological neighbours, for "newer / older article" navigation. */
export function getAdjacentPosts(slug: string, locale: Locale = "id") {
  const sorted = getSortedPosts(locale);
  const i = sorted.findIndex((post) => post.slug === slug);
  return {
    newer: i > 0 ? sorted[i - 1] : undefined,
    older: i >= 0 && i < sorted.length - 1 ? sorted[i + 1] : undefined,
  };
}

const dateLocales: Record<Locale, string> = { id: "id-ID", en: "en-GB", zh: "zh-CN" };

export function formatPostDate(iso: string, locale: Locale = "id") {
  return new Date(iso).toLocaleDateString(dateLocales[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Builds a fixed-size Unsplash URL — for places the image loader does not run, like OG tags. */
export function coverUrl(src: string, width: number) {
  return `${src}?auto=format&fit=crop&q=75&w=${width}`;
}

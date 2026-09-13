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

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
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

export type BlogProductId = "pos" | "erp" | "hr" | "crm" | "inventory";

/** Article metadata, kept apart from the article text in src/content/blog/meta.ts. */
export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string; // ISO date
  tags: BlogTag[];
  featured?: boolean;
  /** Product cards shown under the article, rendered from config/products.ts. */
  products?: BlogProductId[];
  cover: BlogCover;
};

/** An article as authored in a content batch file. */
export type PostSource = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string; // ISO date
  tags: BlogTag[];
  /** Editor's pick: shown in the recommendation strip on the blog index. */
  featured?: boolean;
  cover: BlogCover;
  body: Block[];
};

export type BlogPost = PostSource & {
  wordCount: number;
  readingMinutes: number;
};

export const POSTS_PER_PAGE = 12;
const MAX_FEATURED = 3;
const WORDS_PER_MINUTE = 200;

function countWords(body: Block[]) {
  return body.reduce((n, block) => {
    const text =
      block.type === "ul" || block.type === "ol"
        ? block.items.join(" ")
        : block.type === "callout" || block.type === "cta"
          ? `${block.title} ${block.text}`
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
    wordCount,
    readingMinutes: Math.max(2, Math.ceil(wordCount / WORDS_PER_MINUTE)),
  };
});

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

export function getSortedPosts() {
  return [...blogPosts].sort(byNewest);
}

/** Editor's picks, newest first. */
export function getFeaturedPosts() {
  return getSortedPosts()
    .filter((post) => post.featured)
    .slice(0, MAX_FEATURED);
}

/**
 * The chronological archive, excluding editor's picks — those already sit in
 * the recommendation strip on page 1, and listing them twice there would
 * waste the most-viewed slots on the page.
 */
function getArchivePosts() {
  const featured = new Set(getFeaturedPosts().map((post) => post.slug));
  return getSortedPosts().filter((post) => !featured.has(post.slug));
}

export function getTotalPages() {
  return Math.max(1, Math.ceil(getArchivePosts().length / POSTS_PER_PAGE));
}

export function getPostsForPage(page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  return getArchivePosts().slice(start, start + POSTS_PER_PAGE);
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
export function getRecommendedPosts(slug: string, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const currentTags = new Set(current.tags);

  return getSortedPosts()
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

/** Chronological neighbours, for "newer / older article" navigation. */
export function getAdjacentPosts(slug: string) {
  const sorted = getSortedPosts();
  const i = sorted.findIndex((post) => post.slug === slug);
  return {
    newer: i > 0 ? sorted[i - 1] : undefined,
    older: i >= 0 && i < sorted.length - 1 ? sorted[i + 1] : undefined,
  };
}

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Builds a fixed-size Unsplash URL — for places the image loader does not run, like OG tags. */
export function coverUrl(src: string, width: number) {
  return `${src}?auto=format&fit=crop&q=75&w=${width}`;
}

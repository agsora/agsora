"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Pagination } from "@/components/ui/pagination";
import { ContactCta } from "@/components/sections/contact-cta";
import { PostCard } from "@/components/sections/post-card";
import { useBlogStats, type BlogStat } from "@/lib/blog-analytics";
import {
  blogPageHref,
  getCategoryLabel,
  getCategoryCounts,
  getPostExcerpt,
  getPostTitle,
  getPostsByCategory,
  getPostsForPage,
  getSortedPosts,
  getTotalPages,
  type BlogCategory,
  type BlogPost,
} from "@/config/blog";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/i18n/locale-context";
import { absoluteUrl, hreflangs } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function PostGrid({
  posts,
  preloadFirst,
  stats,
}: {
  posts: BlogPost[];
  preloadFirst: number;
  stats: Record<string, BlogStat> | null;
}) {
  return (
    <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <PostCard key={post.slug} post={post} priority={i < preloadFirst} stats={stats} />
      ))}
    </div>
  );
}

function CategoryChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "focus-ring relative flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[12.5px] transition-colors",
        active
          ? "border-line-strong text-ink"
          : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
      )}
    >
      {active ? (
        <motion.span
          layoutId="blog-category-tab"
          className="absolute inset-0 rounded-full bg-surface-2"
          transition={{ duration: 0.3, ease }}
        />
      ) : null}
      <span className="relative">{label}</span>
      <span className="relative tabular-nums text-ink-subtle">{count}</span>
    </button>
  );
}

/**
 * Category filter, sticky under the header. Selecting a category switches
 * the archive to a flat, unpaginated list scored purely by publish date —
 * category sets are small enough (≤15 posts) that a second layer of
 * pagination would only add friction. "Semua" restores the normal
 * paginated view untouched.
 */
function CategoryFilter({
  active,
  onChange,
}: {
  active: BlogCategory | "all";
  onChange: (category: BlogCategory | "all") => void;
}) {
  const { t, locale } = useLocale();
  const counts = getCategoryCounts(locale);

  return (
    <div className="sticky top-16 z-30 border-b border-line bg-surface-0/90 backdrop-blur-xl">
      <Container className="max-w-6xl">
        <div
          role="tablist"
          aria-label={t.blogPage.filterLabel}
          className="flex flex-wrap items-center gap-1.5 py-4"
        >
          <CategoryChip
            label={t.blogPage.filterAll}
            count={getSortedPosts(locale).length}
            active={active === "all"}
            onClick={() => onChange("all")}
          />
          {counts.map(({ category, count }) => (
            <CategoryChip
              key={category}
              label={getCategoryLabel(category, locale)}
              count={count}
              active={active === category}
              onClick={() => onChange(category)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

/**
 * Renders one page of the blog archive: every post by publish date, newest
 * first, twelve per page.
 *
 * No scroll-reveal on the grids: with twelve cards per page, cards animating
 * in one by one make the archive feel slow to scan.
 */
export function BlogIndex({ page }: { page: number }) {
  const { t, locale } = useLocale();
  // Outside Indonesian, only translated posts exist — list just those.
  const totalPages = getTotalPages(locale);
  const posts = getPostsForPage(page, locale);
  const isFirst = page === 1;

  const stats = useBlogStats();
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");
  const filteredPosts =
    activeCategory === "all" ? null : getPostsByCategory(activeCategory, locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Blog ${siteConfig.brandMark}`,
    url: absoluteUrl(blogPageHref(page), locale),
    inLanguage: hreflangs[locale],
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: getPostTitle(post, locale),
      description: getPostExcerpt(post, locale),
      datePublished: post.publishedAt,
      url: absoluteUrl(`/blog/${post.slug}`, locale),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        trail={
          isFirst
            ? [{ name: t.nav.blog, href: "/blog" }]
            : [
                { name: t.nav.blog, href: "/blog" },
                { name: `${t.blogPage.pageLabel} ${page}`, href: blogPageHref(page) },
              ]
        }
        eyebrow={t.pageEyebrows.blog}
        title={
          isFirst
            ? t.blogPage.heroTitle
            : `${t.blogPage.pageTitle} — ${t.blogPage.pageLabel.toLowerCase()} ${page}`
        }
        description={isFirst ? t.blogPage.heroDescription : undefined}
      />

      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      {activeCategory === "all" ? (
        <>
          <Section>
            <Container className="max-w-6xl">
              {isFirst ? (
                <SectionHeading eyebrow={t.blogPage.latestEyebrow} title={t.blogPage.latestTitle} />
              ) : null}
              <div className={isFirst ? "mt-10" : undefined}>
                <PostGrid posts={posts} preloadFirst={3} stats={stats} />
              </div>
              <div className="mt-12">
                <Pagination current={page} total={totalPages} href={blogPageHref} />
              </div>
            </Container>
          </Section>
        </>
      ) : (
        <Section>
          <Container className="max-w-6xl">
            <SectionHeading
              eyebrow={t.blogPage.filterResultsEyebrow}
              title={getCategoryLabel(activeCategory, locale)}
              description={t.blogPage.filterResultsDescription.replace(
                "{count}",
                String(filteredPosts!.length)
              )}
            />
            <div className="mt-10">
              <PostGrid posts={filteredPosts!} preloadFirst={3} stats={stats} />
            </div>
          </Container>
        </Section>
      )}

      <Section className="border-t border-line bg-surface-1 pt-20 md:pt-28">
        <ContactCta />
      </Section>
    </>
  );
}

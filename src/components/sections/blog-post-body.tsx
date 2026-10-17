"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PostCover } from "@/components/sections/post-cover";
import { PostBody } from "@/components/sections/post-body";
import { PostTocMobile, PostTocSidebar } from "@/components/sections/post-toc";
import { growth } from "@/i18n/growth";
import { PostCard } from "@/components/sections/post-card";
import { ChecklistBanner } from "@/components/sections/checklist-banner";
import { ContactCta } from "@/components/sections/contact-cta";
import {
  formatPostDate,
  getCategoryLabel,
  getCoverAlt,
  getPersonalizedRecommendations,
  getPostBlocks,
  getPostTitle,
  type BlogPost,
} from "@/config/blog";
import { getLastReadAt, getReadingHistory, recordPostView } from "@/lib/reading-history";
import { trackBlogView } from "@/lib/blog-analytics";
import { useLocale } from "@/i18n/locale-context";

type ReaderSnapshot = { lastReadAt: string | null; history: string[] };
const EMPTY_READER: ReaderSnapshot = { lastReadAt: null, history: [] };
const readerCache = new Map<string, ReaderSnapshot>();

/**
 * This browser's reading state for a post, captured the first time it is
 * read and then frozen: recording the current visit must not change what the
 * page shows ("last read" should be the previous visit, not this one).
 */
function useReaderSnapshot(slug: string): ReaderSnapshot {
  return useSyncExternalStore(
    () => () => {},
    () => {
      let snap = readerCache.get(slug);
      if (!snap) {
        snap = {
          lastReadAt: getLastReadAt(slug),
          history: getReadingHistory().filter((s) => s !== slug),
        };
        readerCache.set(slug, snap);
      }
      return snap;
    },
    () => EMPTY_READER
  );
}

export function BlogPostBody({
  post,
  recommended,
}: {
  post: BlogPost;
  recommended: BlogPost[];
}) {
  const { t, locale } = useLocale();

  // `recommended` (tag/category match) renders on first paint, server-side and
  // with JS off. Once mounted, swap in a list weighted by this reader's own
  // history when there is one to weight against. The reader's previous visit
  // and history are read from localStorage before this visit is recorded.
  const { lastReadAt, history } = useReaderSnapshot(post.slug);
  const fromHistory = history.length > 0;
  const items = useMemo(
    () => (fromHistory ? getPersonalizedRecommendations(post.slug, history, 3, locale) : recommended),
    [fromHistory, history, post.slug, locale, recommended]
  );

  useEffect(() => {
    recordPostView(post.slug);
    trackBlogView(post.slug, locale);
    // Next visit to this post should see this one as "last read".
    return () => {
      readerCache.delete(post.slug);
    };
  }, [post.slug, locale]);

  return (
    <>
      <div className="relative overflow-hidden border-b border-line pb-14 pt-12 md:pb-16 md:pt-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_80%_0%,black,transparent)]" />
          <div className="absolute -right-24 -top-32 h-[380px] w-[380px] rounded-full bg-[#3a5fb4]/15 blur-[110px]" />
          <div className="absolute -left-32 top-10 h-[320px] w-[320px] rounded-full bg-gold/20 blur-[110px]" />
        </div>
        <Container className="relative max-w-6xl">
          {/* Same trail as the BreadcrumbList schema in app/[lang]/blog/[slug]/page.tsx */}
          <Breadcrumbs
            label={t.breadcrumbLabel}
            items={[
              { name: t.breadcrumbHome, href: "/" },
              { name: t.nav.blog, href: "/blog" },
              { name: getPostTitle(post, locale), href: `/blog/${post.slug}` },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              {getCategoryLabel(post.category, locale)}
            </span>
            <h1 className="headline zh-phrases mt-5 text-balance text-[34px] font-extrabold text-ink sm:text-[44px]">
              {getPostTitle(post, locale)}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-ink-subtle">
              <span>
                {t.blogPost.published}{" "}
                <time dateTime={post.publishedAt}>
                  {formatPostDate(post.publishedAt, locale)}
                </time>
              </span>
              {post.updatedAt && post.updatedAt !== post.publishedAt ? (
                <>
                  <span className="h-1 w-1 rounded-full bg-line-strong" />
                  <span>
                    {t.blogPost.updated}{" "}
                    <time dateTime={post.updatedAt}>
                      {formatPostDate(post.updatedAt, locale)}
                    </time>
                  </span>
                </>
              ) : null}
              <span className="h-1 w-1 rounded-full bg-line-strong" />
              <span>{post.readingMinutes} {t.blogPage.readingTime}</span>
              <span className="h-1 w-1 rounded-full bg-line-strong" />
              <span>{growth[locale].byline}</span>
              {lastReadAt ? (
                <>
                  <span className="h-1 w-1 rounded-full bg-line-strong" />
                  <span>
                    {t.blogPost.lastRead}{" "}
                    <time dateTime={lastReadAt}>{formatPostDate(lastReadAt, locale)}</time>
                  </span>
                </>
              ) : null}
            </div>
          </div>
        </Container>
      </div>

      <Container className="max-w-6xl">
        <figure className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface-2">
          <PostCover
            variant="hero"
            slug={post.slug}
            title={getPostTitle(post, locale)}
            category={post.category}
            categoryLabel={getCategoryLabel(post.category, locale)}
            label={getCoverAlt(post, locale)}
          />
        </figure>
      </Container>

      <Section>
        <Container className="max-w-6xl">
          {(() => {
            const blocks = getPostBlocks(post, locale);
            return (
              <div className="lg:grid lg:grid-cols-[minmax(0,42rem)_16rem] lg:justify-between lg:gap-12">
                <div>
                  <PostTocMobile blocks={blocks} />
                  <PostBody blocks={blocks} postSlug={post.slug} />
                </div>
                <PostTocSidebar blocks={blocks} />
              </div>
            );
          })()}
        </Container>
      </Section>

      {items.length ? (
        <Section className="pt-16 md:pt-20">
          <Container className="max-w-6xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-subtle">
              {t.blogPost.recommendedEyebrow}
            </p>
            <h2 className="headline mt-4 text-[26px] font-extrabold text-ink sm:text-[32px]">
              {fromHistory ? t.blogPost.recommendedFromHistoryTitle : t.blogPost.recommendedTitle}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section className="pt-16 md:pt-20">
        <ChecklistBanner />
      </Section>

      <Section className="border-t border-line bg-surface-1 pt-20 md:pt-28">
        <ContactCta />
      </Section>
    </>
  );
}

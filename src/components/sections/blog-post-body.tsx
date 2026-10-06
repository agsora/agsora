"use client";

import Link from "@/i18n/link";
import Image from "next/image";
import { useEffect, useMemo, useSyncExternalStore } from "react";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PostBody } from "@/components/sections/post-body";
import { PostCard } from "@/components/sections/post-card";
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
      <div className="relative overflow-hidden border-b border-line pb-14 pt-14 md:pb-16 md:pt-16">
        <Container className="max-w-6xl">
          <Link
            href="/blog"
            className="focus-ring inline-flex items-center gap-2 text-[12px] text-ink-subtle transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t.blogPost.allArticles}
          </Link>

          <div className="mt-8 max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
              {getCategoryLabel(post.category, locale)}
            </span>
            <h1 className="headline mt-4 text-[32px] font-semibold text-ink sm:text-[40px]">
              {getPostTitle(post, locale)}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-ink-subtle">
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
        <figure className="relative mt-10 aspect-[21/9] overflow-hidden rounded-lg border border-line bg-surface-2">
          <Image
            src={post.cover.src}
            alt={getCoverAlt(post, locale)}
            fill
            sizes="(max-width: 1024px) 100vw, 1152px"
            preload
            className="object-cover"
          />
        </figure>
      </Container>

      <Section>
        <Container className="max-w-6xl">
          <PostBody blocks={getPostBlocks(post, locale)} postSlug={post.slug} />
        </Container>
      </Section>

      {items.length ? (
        <Section className="pt-16 md:pt-20">
          <Container className="max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
              {t.blogPost.recommendedEyebrow}
            </p>
            <h2 className="headline mt-3 text-[22px] font-semibold text-ink sm:text-[26px]">
              {fromHistory ? t.blogPost.recommendedFromHistoryTitle : t.blogPost.recommendedTitle}
            </h2>
            <div className="mt-8 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section className="border-t border-line bg-surface-1 pt-20 md:pt-28">
        <ContactCta />
      </Section>
    </>
  );
}

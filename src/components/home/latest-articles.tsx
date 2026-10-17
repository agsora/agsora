"use client";

import Link from "@/i18n/link";
import { ArrowRight } from "lucide-react";
import type { BlogCategory, PostTextTranslations } from "@/config/blog";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HomeHeading } from "@/components/home/heading";
import { PostCover } from "@/components/sections/post-cover";
import { useLocale } from "@/i18n/locale-context";

/**
 * Just what a list item needs, picked on the server by the homepage.
 * Passing whole BlogPost objects (or importing the blog config here) would
 * ship every article body to the browser.
 */
export type HomeArticle = {
  slug: string;
  title: string;
  titleTranslations?: PostTextTranslations;
  category: string;
  categoryKey: BlogCategory;
  publishedAt: string;
  date: string;
  readingMinutes: number;
};

export function LatestArticles({ posts }: { posts: HomeArticle[] }) {
  const { t, locale } = useLocale();

  return (
    <Container className="max-w-6xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <HomeHeading eyebrow={t.nav.blog} title={t.home.blogTitle} />
        <Button href="/blog" variant="outline" icon={<ArrowRight className="h-4 w-4" />} className="self-start md:self-auto">
          {t.home.blogCta}
        </Button>
      </div>

      <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
        {posts.map((post) => {
          const title =
            locale === "id" ? post.title : (post.titleTranslations?.[locale] ?? post.title);
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="focus-ring group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface-0 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elev"
            >
              <div className="overflow-hidden border-b border-line">
                <PostCover
                  slug={post.slug}
                  title={title}
                  category={post.categoryKey}
                  categoryLabel={post.category}
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex self-start rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                  {post.category}
                </span>
                <h3 className="mt-4 text-pretty text-[18px] font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-accent">
                  {title}
                </h3>
                <p className="mt-auto pt-6 text-[13px] text-ink-subtle">
                  <time dateTime={post.publishedAt}>{post.date}</time>
                  <span className="mx-2">·</span>
                  {post.readingMinutes} {t.blogPage.readingTime}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

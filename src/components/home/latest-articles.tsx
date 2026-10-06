"use client";

import Link from "@/i18n/link";
import { ArrowRight } from "lucide-react";
import type { PostTextTranslations } from "@/config/blog";
import { Container } from "@/components/ui/container";
import { HomeHeading } from "@/components/home/heading";
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
  publishedAt: string;
  date: string;
  readingMinutes: number;
};

export function LatestArticles({ posts }: { posts: HomeArticle[] }) {
  const { t, locale } = useLocale();

  return (
    <Container className="max-w-6xl">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <HomeHeading eyebrow={t.nav.blog} title={t.home.blogTitle} />
        <Link
          href="/blog"
          className="tap focus-ring group inline-flex shrink-0 items-center gap-2 text-[14px] text-ink-muted transition-colors hover:text-ink"
        >
          {t.home.blogCta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid border-t border-line md:mt-16 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="focus-ring group flex flex-col border-b border-line py-7 md:border-b-0 md:py-9 md:pr-8 md:[&+&]:border-l md:[&+&]:pl-8"
          >
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-subtle">
              {post.category}
            </p>
            <h3 className="mt-3 text-pretty text-[18px] font-medium leading-snug tracking-tight text-ink transition-colors group-hover:text-accent">
              {locale === "id"
                ? post.title
                : (post.titleTranslations?.[locale] ?? post.title)}
            </h3>
            <p className="mt-auto pt-6 font-mono text-[12px] text-ink-subtle">
              <time dateTime={post.publishedAt}>{post.date}</time>
              <span className="mx-2">·</span>
              {post.readingMinutes} {t.blogPage.readingTime}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}

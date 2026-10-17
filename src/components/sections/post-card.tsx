"use client";

import Link from "@/i18n/link";
import {
  getCategoryLabel,
  formatPostDate,
  getPostExcerpt,
  getPostTitle,
  type BlogPost,
} from "@/config/blog";
import { Eye } from "lucide-react";
import { PostCover } from "@/components/sections/post-cover";
import { useLocale } from "@/i18n/locale-context";
import type { BlogStat } from "@/lib/blog-analytics";

const dateTimeLocales = { id: "id-ID", en: "en-GB", zh: "zh-CN" } as const;

export function PostCard({
  post,
  stats,
}: {
  post: BlogPost;
  /**
   * View counts for the archive. undefined hides the row (cards outside the
   * archive); null keeps its space reserved while the counts load.
   */
  stats?: Record<string, BlogStat> | null;
}) {
  const { t, locale } = useLocale();
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="focus-ring group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface-0 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-elev"
    >
      <div className="relative overflow-hidden border-b border-line bg-surface-2">
        <PostCover
          slug={post.slug}
          title={getPostTitle(post, locale)}
          category={post.category}
          categoryLabel={getCategoryLabel(post.category, locale)}
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex self-start rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
          {getCategoryLabel(post.category, locale)}
        </span>

        <h2 className="mt-4 text-[17px] font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-accent">
          {getPostTitle(post, locale)}
        </h2>
        <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-muted">
          {getPostExcerpt(post, locale)}
        </p>

        <div className="mt-5 flex items-center gap-3 text-[12px] text-ink-subtle">
          <time dateTime={post.publishedAt}>
            {formatPostDate(post.publishedAt, locale)}
          </time>
          <span className="h-1 w-1 rounded-full bg-line-strong" />
          <span>{post.readingMinutes} {t.blogPage.readingTime}</span>
        </div>

        {stats !== undefined ? (
          <ViewStats stat={stats?.[post.slug]} loaded={stats !== null} />
        ) : null}
      </div>
    </Link>
  );
}

function ViewStats({ stat, loaded }: { stat?: BlogStat; loaded: boolean }) {
  const { t, locale } = useLocale();
  const last = stat
    ? new Date(stat.lastViewedAt).toLocaleString(dateTimeLocales[locale], {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Jakarta",
      }) + " WIB"
    : null;

  return (
    // Rendered invisible until loaded so the card doesn't jump when counts arrive.
    <div
      className={`mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-ink-subtle transition-opacity ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!loaded}
    >
      <span className="inline-flex items-center gap-1.5">
        <Eye className="h-3.5 w-3.5" />
        {stat
          ? t.blogPage.views.replace("{count}", stat.views.toLocaleString(dateTimeLocales[locale]))
          : t.blogPage.noViews}
      </span>
      {stat ? (
        <>
          <span className="h-1 w-1 rounded-full bg-line-strong" />
          <time dateTime={stat.lastViewedAt}>
            {t.blogPage.lastViewed} {last}
          </time>
        </>
      ) : null}
    </div>
  );
}

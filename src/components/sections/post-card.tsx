"use client";

import Link from "@/i18n/link";
import Image from "next/image";
import {
  getCategoryLabel,
  getCoverAlt,
  formatPostDate,
  getPostExcerpt,
  getPostTitle,
  type BlogPost,
} from "@/config/blog";
import { Eye } from "lucide-react";
import { useLocale } from "@/i18n/locale-context";
import type { BlogStat } from "@/lib/blog-analytics";

const dateTimeLocales = { id: "id-ID", en: "en-GB", zh: "zh-CN" } as const;

export function PostCard({
  post,
  priority = false,
  stats,
}: {
  post: BlogPost;
  priority?: boolean;
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
      className="focus-ring group flex h-full flex-col border-b border-r border-line transition-colors hover:bg-surface-1"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-surface-2">
        <Image
          src={post.cover.src}
          alt={getCoverAlt(post, locale)}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          preload={priority}
          className="object-cover opacity-80 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-[11px] uppercase tracking-[0.14em] text-ink-subtle">
          {getCategoryLabel(post.category, locale)}
        </span>

        <h2 className="mt-3 text-[16px] font-medium leading-snug text-ink">
          {getPostTitle(post, locale)}
        </h2>
        <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-ink-muted">
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

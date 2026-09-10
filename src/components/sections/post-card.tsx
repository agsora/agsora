import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatPostDate, type BlogPost } from "@/config/blog";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="focus-ring group flex h-full flex-col border-b border-r border-line p-7 transition-colors hover:bg-surface-1"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-[11px] uppercase tracking-[0.14em] text-ink-subtle">
          {post.category}
        </span>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-subtle opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <h2 className="mt-5 text-[17px] font-medium leading-snug text-ink">
        {post.title}
      </h2>
      <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-muted">
        {post.excerpt}
      </p>

      <div className="mt-6 flex items-center gap-3 text-[12px] text-ink-subtle">
        <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
        <span className="h-1 w-1 rounded-full bg-line-strong" />
        <span>{post.readingMinutes} menit baca</span>
      </div>
    </Link>
  );
}

import Link from "next/link";
import Image from "next/image";
import { formatPostDate, type BlogPost } from "@/config/blog";

export function PostCard({
  post,
  priority = false,
}: {
  post: BlogPost;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="focus-ring group flex h-full flex-col border-b border-r border-line transition-colors hover:bg-surface-1"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-surface-2">
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          preload={priority}
          className="object-cover opacity-80 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-[11px] uppercase tracking-[0.14em] text-ink-subtle">
          {post.category}
        </span>

        <h2 className="mt-3 text-[16px] font-medium leading-snug text-ink">
          {post.title}
        </h2>
        <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-ink-muted">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-3 text-[12px] text-ink-subtle">
          <time dateTime={post.publishedAt}>
            {formatPostDate(post.publishedAt)}
          </time>
          <span className="h-1 w-1 rounded-full bg-line-strong" />
          <span>{post.readingMinutes} menit baca</span>
        </div>
      </div>
    </Link>
  );
}

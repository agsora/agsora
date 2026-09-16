"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PostBody } from "@/components/sections/post-body";
import { PostCard } from "@/components/sections/post-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { formatPostDate, type BlogPost } from "@/config/blog";
import { useLocale } from "@/i18n/locale-context";

export function BlogPostBody({
  post,
  recommended,
}: {
  post: BlogPost;
  recommended: BlogPost[];
}) {
  const { t } = useLocale();
  return (
    <>
      <div className="glow-top relative overflow-hidden border-b border-line pb-14 pt-14 md:pb-16 md:pt-16">
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
              {post.category}
            </span>
            <h1 className="headline mt-4 text-[32px] font-semibold text-ink sm:text-[40px]">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-3 text-[12px] text-ink-subtle">
              <time dateTime={post.publishedAt}>
                {formatPostDate(post.publishedAt)}
              </time>
              <span className="h-1 w-1 rounded-full bg-line-strong" />
              <span>{post.readingMinutes} {t.blogPage.readingTime}</span>
            </div>
          </div>
        </Container>
      </div>

      <Container className="max-w-6xl">
        <figure className="relative mt-10 aspect-[21/9] overflow-hidden rounded-lg border border-line bg-surface-2">
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1152px"
            preload
            className="object-cover"
          />
        </figure>
      </Container>

      <Section>
        <Container className="max-w-6xl">
          <PostBody blocks={post.body} postSlug={post.slug} />
        </Container>
      </Section>

      {recommended.length ? (
        <Section className="pt-16 md:pt-20">
          <Container className="max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
              {t.blogPost.recommendedEyebrow}
            </p>
            <h2 className="headline mt-3 text-[22px] font-semibold text-ink sm:text-[26px]">
              {t.blogPost.recommendedTitle}
            </h2>
            <div className="mt-8 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {recommended.map((item) => (
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

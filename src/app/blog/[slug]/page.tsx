import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PostBody } from "@/components/sections/post-body";
import { PostCard } from "@/components/sections/post-card";
import { ContactCta } from "@/components/sections/contact-cta";
import {
  blogPosts,
  coverUrl,
  formatPostDate,
  getPostBySlug,
  getRelatedPosts,
} from "@/config/blog";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const ogImage = coverUrl(post.cover.src, 1200);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      section: post.category,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: coverUrl(post.cover.src, 1200),
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        articleSection: post.category,
        wordCount: post.body.reduce((n, b) => {
          const text =
            b.type === "ul" || b.type === "ol"
              ? b.items.join(" ")
              : b.type === "callout"
                ? `${b.title} ${b.text}`
                : b.text;
          return n + text.split(/\s+/).length;
        }, 0),
        inLanguage: "id-ID",
        author: { "@type": "Organization", name: siteConfig.legalName },
        publisher: { "@type": "Organization", name: siteConfig.legalName },
        mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteConfig.url}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${siteConfig.url}/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="glow-top relative overflow-hidden border-b border-line pb-14 pt-14 md:pb-16 md:pt-16">
        <Container className="max-w-6xl">
          <Link
            href="/blog"
            className="focus-ring inline-flex items-center gap-2 text-[12px] text-ink-subtle transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Semua artikel
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
              <span>{post.readingMinutes} menit baca</span>
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

      {related.length ? (
        <Section className="border-t border-line pt-16 md:pt-20">
          <Container className="max-w-6xl">
            <h2 className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
              Artikel lainnya
            </h2>
            <div className="mt-8 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
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

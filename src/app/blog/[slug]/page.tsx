import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostBody } from "@/components/sections/blog-post-body";
import {
  blogPosts,
  coverUrl,
  getPostBySlug,
  getRecommendedPosts,
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

  const recommended = getRecommendedPosts(slug);

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
        wordCount: post.wordCount,
        keywords: post.tags.join(", "),
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

      <BlogPostBody post={post} recommended={recommended} />
    </>
  );
}

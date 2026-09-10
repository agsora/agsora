import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ContactCta } from "@/components/sections/contact-cta";
import { PostCard } from "@/components/sections/post-card";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { getSortedPosts } from "@/config/blog";
import { siteConfig } from "@/config/site";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog: Panduan Sistem Bisnis & Software",
  description:
    "Panduan praktis seputar ERP, POS, HRIS, custom software, dan transformasi digital untuk pemilik bisnis dan tim operasional di Indonesia.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getSortedPosts();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Blog ${siteConfig.brandMark}`,
    url: `${siteConfig.url}/blog`,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      url: `${siteConfig.url}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        breadcrumb={{ name: "Blog", href: "/blog" }}
        eyebrow="Blog"
        title="Catatan tentang membangun sistem bisnis"
        description="Hal-hal praktis yang kami temui saat merancang dan menerapkan sistem — ditulis untuk pemilik bisnis dan tim operasional, bukan hanya untuk developer."
      />

      <Section>
        <Container className="max-w-6xl">
          <RevealGroup className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <RevealItem key={post.slug}>
                {/* First row is above the fold — eager-load for LCP. */}
                <PostCard post={post} priority={i < 3} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section className="border-t border-line bg-surface-1 pt-20 md:pt-28">
        <ContactCta />
      </Section>
    </>
  );
}

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Pagination } from "@/components/ui/pagination";
import { ContactCta } from "@/components/sections/contact-cta";
import { PostCard } from "@/components/sections/post-card";
import {
  blogPageHref,
  getFeaturedPosts,
  getPostsForPage,
  getTotalPages,
  type BlogPost,
} from "@/config/blog";
import { siteConfig } from "@/config/site";

function PostGrid({ posts, preloadFirst }: { posts: BlogPost[]; preloadFirst: number }) {
  return (
    <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <PostCard key={post.slug} post={post} priority={i < preloadFirst} />
      ))}
    </div>
  );
}

/**
 * Renders one page of the blog archive. Page 1 leads with editor's picks;
 * later pages go straight to the chronological list.
 *
 * No scroll-reveal on the grids: with twelve cards per page, cards animating
 * in one by one make the archive feel slow to scan.
 */
export function BlogIndex({ page }: { page: number }) {
  const totalPages = getTotalPages();
  const featured = page === 1 ? getFeaturedPosts() : [];
  const posts = getPostsForPage(page);
  const isFirst = page === 1;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Blog ${siteConfig.brandMark}`,
    url: `${siteConfig.url}${blogPageHref(page)}`,
    inLanguage: "id-ID",
    blogPost: [...featured, ...posts].map((post) => ({
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
        trail={
          isFirst
            ? [{ name: "Blog", href: "/blog" }]
            : [
                { name: "Blog", href: "/blog" },
                { name: `Halaman ${page}`, href: blogPageHref(page) },
              ]
        }
        eyebrow="Blog"
        title={
          isFirst
            ? "Catatan tentang membangun sistem bisnis"
            : `Semua artikel — halaman ${page}`
        }
        description={
          isFirst
            ? "Hal-hal praktis yang kami temui saat merancang dan menerapkan sistem — ditulis untuk pemilik bisnis dan tim operasional, bukan hanya untuk developer."
            : undefined
        }
      />

      {featured.length ? (
        <Section className="pb-0 md:pb-0">
          <Container className="max-w-6xl">
            <SectionHeading
              eyebrow="Rekomendasi editor"
              title="Mulai dari sini"
              description="Artikel yang paling berguna dibaca lebih dulu jika Anda sedang mempertimbangkan sistem baru."
            />
            <div className="mt-10">
              <PostGrid posts={featured} preloadFirst={3} />
            </div>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container className="max-w-6xl">
          {isFirst ? (
            <SectionHeading eyebrow="Terbaru" title="Artikel terbaru" />
          ) : null}
          <div className={isFirst ? "mt-10" : undefined}>
            {/* Page 1's first row sits below the picks, so only later pages preload. */}
            <PostGrid posts={posts} preloadFirst={isFirst ? 0 : 3} />
          </div>
          <div className="mt-12">
            <Pagination current={page} total={totalPages} href={blogPageHref} />
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line bg-surface-1 pt-20 md:pt-28">
        <ContactCta />
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostBody } from "@/components/sections/blog-post-body";
import {
  blogPosts,
  coverUrl,
  getCategoryLabel,
  getCoverAlt,
  getPostBySlug,
  getPostExcerpt,
  getPostTitle,
  getRecommendedPosts,
  isPostAvailable,
  type BlogPost,
} from "@/config/blog";
import { siteConfig } from "@/config/site";
import { dictionaries } from "@/i18n/dictionaries";
import {
  absoluteUrl,
  hreflangs,
  isLocale,
  localizePath,
  locales,
  ogLocales,
  type Locale,
} from "@/i18n/routing";
import { languageAlternates, jsonLd } from "@/lib/seo";

type Props = { params: Promise<{ lang: string; slug: string }> };

// English and Chinese pages exist only for translated posts; everything else
// is Indonesian-only rather than an Indonesian article under an /en URL.
// Other slugs 404 via resolve() — see the dynamicParams note in [lang]/layout.

export function generateStaticParams({ params }: { params: { lang: string } }) {
  const locale = isLocale(params.lang) ? params.lang : "id";
  return blogPosts
    .filter((post) => isPostAvailable(post, locale))
    .map((post) => ({ slug: post.slug }));
}

function resolve(lang: string, slug: string): { locale: Locale; post: BlogPost } | null {
  const post = getPostBySlug(slug);
  if (!post || !isLocale(lang) || !isPostAvailable(post, lang)) return null;
  return { locale: lang, post };
}

const postLocales = (post: BlogPost) => locales.filter((l) => isPostAvailable(post, l));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const resolved = resolve(lang, slug);
  if (!resolved) return {};
  const { locale, post } = resolved;

  const title = getPostTitle(post, locale);
  const description = getPostExcerpt(post, locale);
  const path = `/blog/${post.slug}`;
  const available = postLocales(post);
  const ogImage = coverUrl(post.cover.src, 1200);

  return {
    title,
    description,
    alternates: {
      canonical: localizePath(path, locale),
      languages: languageAlternates(path, available),
    },
    openGraph: {
      type: "article",
      locale: ogLocales[locale],
      alternateLocale: available.filter((l) => l !== locale).map((l) => ogLocales[l]),
      title,
      description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      section: getCategoryLabel(post.category, locale),
      url: absoluteUrl(path, locale),
      images: [{ url: ogImage, width: 1200, height: 630, alt: getCoverAlt(post, locale) }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const resolved = resolve(lang, slug);
  if (!resolved) notFound();
  const { locale, post } = resolved;

  const t = dictionaries[locale];
  const title = getPostTitle(post, locale);
  const recommended = getRecommendedPosts(slug, 3, locale);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: title,
        description: getPostExcerpt(post, locale),
        image: coverUrl(post.cover.src, 1200),
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        articleSection: getCategoryLabel(post.category, locale),
        wordCount: post.wordCount,
        keywords: post.tags.join(", "),
        inLanguage: hreflangs[locale],
        author: { "@type": "Organization", name: siteConfig.legalName },
        publisher: { "@type": "Organization", name: siteConfig.legalName },
        mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`, locale),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t.breadcrumbHome,
            item: absoluteUrl("/", locale),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t.nav.blog,
            item: absoluteUrl("/blog", locale),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: absoluteUrl(`/blog/${post.slug}`, locale),
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />

      <BlogPostBody post={post} recommended={recommended} />
    </>
  );
}

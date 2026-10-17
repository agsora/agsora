import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryDetailBody } from "@/components/sections/industry-detail-body";
import { getPostBySlug, isPostAvailable, type BlogPost } from "@/config/blog";
import { industries } from "@/config/industries";
import { industryDetails } from "@/config/industry-details";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { absoluteUrl, hreflangs, isLocale, type Locale } from "@/i18n/routing";
import { jsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string; slug: string }> };

// Unknown slugs 404 via resolve(); see the dynamicParams note in [lang]/layout.
export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

function resolve(lang: string, slug: string) {
  const industry = industries.find((i) => i.slug === slug);
  const detail = industryDetails[slug];
  if (!industry || !detail || !isLocale(lang)) return null;
  return { locale: lang as Locale, industry, detail };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const resolved = resolve(lang, slug);
  if (!resolved) return {};
  const { locale, detail } = resolved;
  return pageMetadata({
    absoluteTitle: detail.metaTitle[locale],
    description: detail.metaDescription[locale],
    path: `/industries/${slug}`,
    locale,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { lang, slug } = await params;
  const resolved = resolve(lang, slug);
  if (!resolved) notFound();
  const { locale, industry, detail } = resolved;

  // Only articles that exist in this language, without their bodies: the
  // cards need metadata, and bodies would only bloat the page payload.
  const relatedPosts = detail.relatedPosts
    .map(getPostBySlug)
    .filter((post): post is BlogPost => Boolean(post) && isPostAvailable(post!, locale))
    .map((post) => ({ ...post, body: [], bodyTranslations: undefined }));

  const organization = { "@id": `${siteConfig.url}/#organization` };
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(`/industries/${slug}`, locale)}#webpage`,
        url: absoluteUrl(`/industries/${slug}`, locale),
        name: detail.metaTitle[locale],
        description: detail.metaDescription[locale],
        inLanguage: hreflangs[locale],
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@type": "Thing", name: industry.name[locale] },
        publisher: organization,
      },
      {
        "@type": "ItemList",
        name: detail.h1[locale],
        itemListElement: detail.solutions.map((sol, i) => {
          const service = services.find((s) => s.id === sol.service);
          return {
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: sol.title[locale],
              description: sol.text[locale],
              provider: organization,
              ...(service ? { url: absoluteUrl(service.href, locale) } : {}),
            },
          };
        }),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <IndustryDetailBody slug={slug} relatedPosts={relatedPosts} />
    </>
  );
}

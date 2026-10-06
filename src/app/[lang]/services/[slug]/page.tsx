import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { breadcrumbSchema } from "@/components/ui/breadcrumbs";
import { ServiceDetailBody } from "@/components/sections/service-detail-body";
import { services } from "@/config/services";
import { serviceDetails } from "@/config/service-details";
import { getPostBySlug, isPostAvailable, type BlogPost } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { dictionaries } from "@/i18n/dictionaries";
import { absoluteUrl, isLocale, type Locale } from "@/i18n/routing";
import { pageMetadata, jsonLd } from "@/lib/seo";

type Props = { params: Promise<{ lang: string; slug: string }> };

// Unknown slugs 404 via resolve() — see the dynamicParams note in [lang]/layout.
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

function resolve(lang: string, slug: string) {
  const service = services.find((s) => s.id === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail || !isLocale(lang)) return null;
  return { locale: lang as Locale, service, detail };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const resolved = resolve(lang, slug);
  if (!resolved) return {};
  const { locale, detail } = resolved;

  return pageMetadata({
    absoluteTitle: detail.metaTitle[locale],
    description: detail.metaDescription[locale],
    path: `/services/${slug}`,
    locale,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const resolved = resolve(lang, slug);
  if (!resolved) notFound();
  const { locale, service, detail } = resolved;
  const t = dictionaries[locale];

  const crumbs = [
    { name: t.breadcrumbHome, href: "/" },
    { name: t.nav.services, href: "/services" },
    { name: service.title[locale], href: `/services/${service.id}` },
  ];
  // Only articles that exist in this language — the rest would 404 under /en.
  const relatedPosts = detail.relatedPosts
    .map(getPostBySlug)
    .filter((post): post is BlogPost => Boolean(post) && isPostAvailable(post!, locale));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: detail.h1[locale],
        serviceType: service.title[locale],
        description: detail.metaDescription[locale],
        url: absoluteUrl(`/services/${service.id}`, locale),
        // Delivered remotely too — Indonesia is home, not the limit.
        areaServed: [
          { "@type": "Country", name: "Indonesia" },
          { "@type": "Place", name: "Worldwide" },
        ],
        provider: {
          "@type": "Organization",
          "@id": `${siteConfig.url}/#organization`,
          name: siteConfig.legalName,
          url: absoluteUrl("/", locale),
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "IDR",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "IDR",
            minPrice: service.startingFrom,
          },
        },
      },
      breadcrumbSchema(crumbs, locale),
      {
        "@type": "FAQPage",
        mainEntity: detail.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question[locale],
          acceptedAnswer: { "@type": "Answer", text: faq.answer[locale] },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <ServiceDetailBody
        slug={slug}
        detail={detail}
        crumbs={crumbs}
        relatedPosts={relatedPosts}
      />
    </>
  );
}

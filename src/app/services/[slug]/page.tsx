import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { breadcrumbSchema } from "@/components/ui/breadcrumbs";
import { ServiceDetailBody } from "@/components/sections/service-detail-body";
import { services } from "@/config/services";
import { serviceDetails } from "@/config/service-details";
import { getPostBySlug, type BlogPost } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails[slug];
  if (!detail) return {};

  return pageMetadata({
    absoluteTitle: detail.metaTitle,
    description: detail.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const crumbs = [
    { name: "Beranda", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title, href: `/services/${service.id}` },
  ];
  const relatedPosts = detail.relatedPosts
    .map(getPostBySlug)
    .filter((post): post is BlogPost => Boolean(post));

  // Structured data always describes the Indonesian-language content: it's
  // rendered server-side, before the client picks a locale.
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: detail.h1.id,
        serviceType: service.title,
        description: detail.metaDescription,
        url: `${siteConfig.url}/services/${service.id}`,
        areaServed: { "@type": "Country", name: "Indonesia" },
        provider: {
          "@type": "Organization",
          name: siteConfig.legalName,
          url: siteConfig.url,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "IDR",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "IDR",
            minPrice: Number(service.startingFrom.replace(/[^\d]/g, "")),
          },
        },
      },
      breadcrumbSchema(crumbs),
      {
        "@type": "FAQPage",
        mainEntity: detail.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question.id,
          acceptedAnswer: { "@type": "Answer", text: faq.answer.id },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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

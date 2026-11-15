import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemplateViewer } from "@/components/sections/template-viewer";
import { siteConfig } from "@/config/site";
import { TEMPLATES, templateBySlug } from "@/config/templates";
import { absoluteUrl, locales } from "@/i18n/routing";
import { localeFromParams } from "@/i18n/server";
import { jsonLd, pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => TEMPLATES.map((t) => ({ lang, slug: t.slug })));
}

const SUFFIX = { id: "Demo Template", en: "Template Demo", zh: "模板演示" } as const;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const locale = await localeFromParams(params);
  const tpl = templateBySlug(slug);
  if (!tpl) return {};
  return pageMetadata({ title: `${tpl.name[locale]}: ${SUFFIX[locale]}`, description: tpl.summary[locale], path: `/template/${slug}`, locale });
}

export default async function TemplatePage({ params }: Params) {
  const { slug } = await params;
  const locale = await localeFromParams(params);
  const tpl = templateBySlug(slug);
  if (!tpl) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: tpl.name[locale],
    description: tpl.summary[locale],
    url: absoluteUrl(`/template/${slug}`, locale),
    provider: { "@type": "Organization", name: siteConfig.legalName, url: siteConfig.url },
    areaServed: "ID",
    offers: { "@type": "Offer", priceCurrency: "IDR", price: tpl.priceFrom, priceSpecification: { "@type": "PriceSpecification", minPrice: tpl.priceFrom, priceCurrency: "IDR" } },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <TemplateViewer tpl={tpl} />
    </>
  );
}

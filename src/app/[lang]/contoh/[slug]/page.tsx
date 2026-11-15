import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemplateViewer } from "@/components/sections/template-viewer";
import { siteConfig } from "@/config/site";
import { TEMPLATES, templateBySlug, type Template } from "@/config/templates";
import { absoluteUrl, locales, type Locale } from "@/i18n/routing";
import { localeFromParams } from "@/i18n/server";
import { getSiteData } from "@/lib/site-content";
import { jsonLd, pageMetadata } from "@/lib/seo";
import { formatRupiah } from "@/lib/utils";

type Params = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => TEMPLATES.map((t) => ({ lang, slug: t.slug })));
}

// Short, so "<name>: <suffix> | AG·SORA" stays within about 60 characters.
const TITLE = { id: "Coba Demo", en: "Live Demo", zh: "在线演示" } as const;

/** "… Mulai Rp5.500.000, 5–7 hari kerja." appended to the summary: the facts searchers and AI answers look for. */
function description(tpl: Template, locale: Locale, price: number) {
  const p = formatRupiah(price, locale);
  const tail = {
    id: ` Mulai ${p}, ${tpl.days} hari kerja.`,
    en: ` From ${p}, ${tpl.days} working days.`,
    zh: `起价 ${p}，${tpl.days} 个工作日。`,
  }[locale];
  return `${tpl.summary[locale]}${tail}`;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const locale = await localeFromParams(params);
  const tpl = templateBySlug(slug);
  if (!tpl) return {};
  const price = (await getSiteData()).servicePrices[tpl.serviceId] ?? tpl.priceFrom;
  return pageMetadata({ title: `${tpl.seoName[locale]}: ${TITLE[locale]}`, description: description(tpl, locale, price), path: `/contoh/${slug}`, locale });
}

export default async function DemoDetailPage({ params }: Params) {
  const { slug } = await params;
  const locale = await localeFromParams(params);
  const tpl = templateBySlug(slug);
  if (!tpl) notFound();
  const price = (await getSiteData()).servicePrices[tpl.serviceId] ?? tpl.priceFrom;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: tpl.seoName[locale],
    description: description(tpl, locale, price),
    url: absoluteUrl(`/contoh/${slug}`, locale),
    provider: { "@type": "Organization", name: siteConfig.legalName, url: siteConfig.url },
    areaServed: { "@type": "Country", name: "Indonesia" },
    audience: { "@type": "BusinessAudience", name: tpl.forWho[locale] },
    offers: { "@type": "Offer", priceCurrency: "IDR", price, priceSpecification: { "@type": "PriceSpecification", minPrice: price, priceCurrency: "IDR", valueAddedTaxIncluded: false } },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <TemplateViewer tpl={tpl} />
    </>
  );
}

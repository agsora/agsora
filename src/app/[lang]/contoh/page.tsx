import type { Metadata } from "next";
import { TemplatesBody } from "@/components/sections/templates-body";
import { demoFaq } from "@/config/demo-faq";
import { TEMPLATES } from "@/config/templates";
import { absoluteUrl } from "@/i18n/routing";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { getSiteData } from "@/lib/site-content";
import { jsonLd, pageMetadata } from "@/lib/seo";

const META = {
  id: {
    title: "Contoh Website & Aplikasi Bisnis: Coba Demo Gratis",
    description:
      "Coba langsung contoh website company profile, toko online, restoran, klinik, sekolah, aplikasi kasir (POS), dan dashboard ERP. Lengkap dengan harga mulai dan lama pengerjaan.",
  },
  en: {
    title: "Website & Business App Examples: Try Free Demos",
    description: "Try live examples of company profile, online store, restaurant, clinic, school, POS and ERP dashboard builds, with starting prices and delivery times.",
  },
  zh: {
    title: "网站与业务应用示例：免费体验演示",
    description: "在线体验企业官网、网上商店、餐厅、诊所、学校、收银系统与 ERP 仪表盘示例，附起价与交付时间。",
  },
} as const;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return pageMetadata({ ...META[locale], path: "/contoh", locale });
}

export default async function DemosPage({ params }: LangParams) {
  const locale = await localeFromParams(params);
  const { servicePrices } = await getSiteData();
  const faq = demoFaq(locale, servicePrices);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: META[locale].title,
      itemListElement: TEMPLATES.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absoluteUrl(`/contoh/${t.slug}`, locale),
        name: t.seoName[locale],
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <TemplatesBody faq={faq} />
    </>
  );
}

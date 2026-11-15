import type { Metadata } from "next";
import { TemplatesBody } from "@/components/sections/templates-body";
import { siteConfig } from "@/config/site";
import { TEMPLATES } from "@/config/templates";
import { absoluteUrl } from "@/i18n/routing";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { jsonLd, pageMetadata } from "@/lib/seo";

const META = {
  id: {
    title: "Template Website & Aplikasi Siap Pakai",
    description: "Coba langsung demo template company profile, toko online, restoran, klinik, sekolah, kasir POS, dan dashboard ERP. Bisa disesuaikan dengan merek Anda.",
  },
  en: {
    title: "Ready-made Website & App Templates",
    description: "Try live demos of company profile, online store, restaurant, clinic, school, POS and ERP dashboard templates, customised to your brand.",
  },
  zh: {
    title: "现成网站与应用模板",
    description: "在线体验企业官网、网上商店、餐厅、诊所、学校、POS 收银与 ERP 仪表盘模板，可按您的品牌定制。",
  },
} as const;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return pageMetadata({ ...META[locale], path: "/template", locale });
}

export default async function TemplatesPage({ params }: LangParams) {
  const locale = await localeFromParams(params);
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: META[locale].title,
    itemListElement: TEMPLATES.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/template/${t.slug}`, locale),
      name: t.name[locale],
    })),
    provider: { "@type": "Organization", name: siteConfig.legalName, url: siteConfig.url },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(list) }} />
      <TemplatesBody />
    </>
  );
}

import type { Metadata } from "next";
import { ServicesBody } from "@/components/sections/services-body";
import { pageMeta } from "@/i18n/page-meta";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return pageMetadata({ ...pageMeta.services[locale], path: "/services", locale });
}

export default function ServicesPage() {
  return <ServicesBody />;
}

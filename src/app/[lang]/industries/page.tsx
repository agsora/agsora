import type { Metadata } from "next";
import { IndustriesBody } from "@/components/sections/industries-body";
import { pageMeta } from "@/i18n/page-meta";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return pageMetadata({ ...pageMeta.industries[locale], path: "/industries", locale });
}

export default function IndustriesPage() {
  return <IndustriesBody />;
}

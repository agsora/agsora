import type { Metadata } from "next";
import { AboutBody } from "@/components/sections/about-body";
import { pageMeta } from "@/i18n/page-meta";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return pageMetadata({ ...pageMeta.about[locale], path: "/about", locale });
}

export default function AboutPage() {
  return <AboutBody />;
}

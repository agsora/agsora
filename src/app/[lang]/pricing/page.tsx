import type { Metadata } from "next";
import { FaqSchema } from "@/components/sections/faq-schema";
import { PricingBody } from "@/components/sections/pricing-body";
import { pageMeta } from "@/i18n/page-meta";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return pageMetadata({ ...pageMeta.pricing[locale], path: "/pricing", locale });
}

export default async function PricingPage({ params }: LangParams) {
  const locale = await localeFromParams(params);
  return (
    <>
      <FaqSchema locale={locale} />
      <PricingBody />
    </>
  );
}

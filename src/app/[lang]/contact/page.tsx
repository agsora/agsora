import type { Metadata } from "next";
import { ContactBody } from "@/components/sections/contact-body";
import { pageMeta } from "@/i18n/page-meta";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return pageMetadata({ ...pageMeta.contact[locale], path: "/contact", locale });
}

export default function ContactPage() {
  return <ContactBody />;
}

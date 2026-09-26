import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { dictionaries } from "@/i18n/dictionaries";
import { localeFromParams, type LangParams } from "@/i18n/server";

/**
 * Any path under a language that matches no page. Routing it here (instead
 * of letting it fall through) renders app/[lang]/not-found.tsx inside the
 * localized layout, so a broken /en link gets an English 404 with the site
 * header and footer.
 */
export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return {
    title: { absolute: `${dictionaries[locale].notFound.title} | ${siteConfig.brandMark}` },
  };
}

export default function CatchAll() {
  notFound();
}

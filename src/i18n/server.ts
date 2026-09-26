import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/routing";

/** Props shape for pages and layouts under app/[lang]. */
export type LangParams = { params: Promise<{ lang: string }> };

/** The validated locale from a route's params; 404s on anything unsupported. */
export async function localeFromParams(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

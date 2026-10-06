import type { Metadata } from "next";
import { ChecklistBody } from "@/components/sections/checklist-body";
import { checklistStrings } from "@/config/checklist";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  const s = checklistStrings[locale];
  return pageMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: "/checklist",
    locale,
  });
}

export default function ChecklistPage() {
  return <ChecklistBody />;
}

import type { Metadata } from "next";
import { BlogIndex } from "@/components/sections/blog-index";
import { pageMeta } from "@/i18n/page-meta";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return pageMetadata({ ...pageMeta.blog[locale], path: "/blog", locale });
}

export default function BlogPage() {
  return <BlogIndex page={1} />;
}

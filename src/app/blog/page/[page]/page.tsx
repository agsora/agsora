import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIndex } from "@/components/sections/blog-index";
import { blogPageHref, getTotalPages } from "@/config/blog";
import { pageMetadata } from "@/lib/seo";

// Page 1 lives at /blog; /blog/page/1 is redirected there in next.config.ts.
export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, getTotalPages() - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

function parsePage(raw: string) {
  const page = Number(raw);
  return Number.isInteger(page) && page >= 2 && page <= getTotalPages()
    ? page
    : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const page = parsePage((await params).page);
  if (!page) return {};

  // Each archive page is canonical to itself, not to page 1 — pointing them
  // all at /blog would tell Google to ignore the articles only linked from here.
  return pageMetadata({
    title: `Blog — Halaman ${page}`,
    description: `Halaman ${page} dari ${getTotalPages()}: panduan praktis seputar ERP, POS, HRIS, CRM, dan pengembangan software untuk bisnis di Indonesia.`,
    path: blogPageHref(page),
  });
}

export default async function BlogArchivePage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const page = parsePage((await params).page);
  if (!page) notFound();
  return <BlogIndex page={page} />;
}

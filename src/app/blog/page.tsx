import type { Metadata } from "next";
import { BlogIndex } from "@/components/sections/blog-index";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog: Panduan Sistem Bisnis & Software",
  description:
    "Panduan praktis seputar ERP, POS, HRIS, custom software, dan transformasi digital untuk pemilik bisnis dan tim operasional di Indonesia.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogIndex page={1} />;
}

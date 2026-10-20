"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "@/i18n/locale-context";
import { localizePath } from "@/i18n/routing";

/**
 * next/link that keeps the reader in their language: `href="/services"`
 * renders as /en/services on English pages. Use this for every internal
 * link — a plain next/link would drop English and Chinese readers (and
 * crawlers) back onto Indonesian pages.
 *
 * Exception: a blog post that only exists in Indonesian keeps its
 * Indonesian URL (marked hrefLang="id"), since /en or /zh would 404.
 */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const { locale, translatedPosts } = useLocale();
  if (typeof href !== "string") return <NextLink href={href} {...props} />;
  const postSlug = /^\/blog\/([^/?#]+)(?:[?#].*)?$/.exec(href)?.[1];
  if (locale !== "id" && postSlug && !translatedPosts.includes(postSlug)) {
    return <NextLink href={href} hrefLang="id" {...props} />;
  }
  return <NextLink href={localizePath(href, locale)} {...props} />;
}

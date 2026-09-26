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
 */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const { locale } = useLocale();
  return (
    <NextLink
      href={typeof href === "string" ? localizePath(href, locale) : href}
      {...props}
    />
  );
}

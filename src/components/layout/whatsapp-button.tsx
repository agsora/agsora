"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { growth } from "@/i18n/growth";
import { useLocale } from "@/i18n/locale-context";
import { whatsappLink } from "@/lib/whatsapp";

/**
 * Floating WhatsApp button on every screen size. The message names the page
 * the visitor is on, so the team knows what they were reading.
 */
export function WhatsAppButton() {
  const { t, locale } = useLocale();
  const pathname = usePathname();
  const href = whatsappLink(`${growth[locale].waFloating} ${siteConfig.url}${pathname === "/" ? "" : pathname}`);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.nav.whatsapp}
      className="focus-ring fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_-6px_rgba(37,211,102,0.55)] transition-transform duration-200 hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" fill="white" strokeWidth={0} />
    </a>
  );
}

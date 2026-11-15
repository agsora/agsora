import { siteConfig } from "@/config/site";

/** wa.me link with a ready-typed message. */
export function whatsappLink(text: string, href: string = siteConfig.whatsapp.href) {
  return `${href}?text=${encodeURIComponent(text)}`;
}

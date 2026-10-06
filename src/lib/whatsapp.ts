import { siteConfig } from "@/config/site";

/** wa.me link with a ready-typed message. */
export function whatsappLink(text: string) {
  return `${siteConfig.whatsapp.href}?text=${encodeURIComponent(text)}`;
}

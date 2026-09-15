import type { Metadata } from "next";
import { ContactBody } from "@/components/sections/contact-body";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Konsultasi Gratis",
  description:
    "Hubungi AG·SORA untuk konsultasi gratis seputar pembuatan software, ERP, POS, HRIS, atau website. Tanpa biaya dan tanpa komitmen.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactBody />;
}

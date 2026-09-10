import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Konsultasi Gratis",
  description:
    "Hubungi AG·SORA untuk konsultasi gratis seputar pembuatan software, ERP, POS, HRIS, atau website. Tanpa biaya dan tanpa komitmen.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={{ name: "Contact", href: "/contact" }}
        eyebrow="Contact"
        title="Mari diskusikan kebutuhan sistem bisnis Anda"
        description="Isi form berikut dan tim AG·SORA akan menghubungi Anda untuk konsultasi gratis mengenai kebutuhan project Anda."
      />

      <Section>
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                  Informasi Kontak
                </p>
                <div className="mt-6 divide-y divide-line border-y border-line">
                  <div className="flex items-start gap-3 py-4">
                    <Mail className="mt-0.5 h-4 w-4 text-ink-subtle" />
                    <div>
                      <p className="text-[11px] text-ink-subtle">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="focus-ring text-[14px] text-ink transition-colors hover:text-accent"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 py-4">
                    <MessageCircle className="mt-0.5 h-4 w-4 text-ink-subtle" />
                    <div>
                      <p className="text-[11px] text-ink-subtle">WhatsApp</p>
                      <a
                        href={siteConfig.whatsapp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring text-[14px] text-ink transition-colors hover:text-accent"
                      >
                        Chat dengan tim kami
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 py-4">
                    <MapPin className="mt-0.5 h-4 w-4 text-ink-subtle" />
                    <div>
                      <p className="text-[11px] text-ink-subtle">Website</p>
                      <p className="text-[14px] text-ink">
                        {siteConfig.domain}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-[12px] leading-relaxed text-ink-subtle">
                  Untuk kebutuhan enterprise atau multi-cabang, tim kami akan
                  menjadwalkan sesi diskusi untuk merancang arsitektur yang
                  tepat bagi organisasi Anda.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <div className="rounded-lg border border-line bg-surface-1 p-7">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

"use client";

import { Mail, MessageCircle, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/i18n/locale-context";

export function ContactBody() {
  const { t } = useLocale();
  return (
    <>
      <PageHero
        breadcrumb={{ name: "Contact", href: "/contact" }}
        eyebrow="Contact"
        title={t.contactPage.heroTitle}
        description={t.contactPage.heroDescription}
      />

      <Section>
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                  {t.contactPage.contactInfo}
                </p>
                <div className="mt-6 divide-y divide-line border-y border-line">
                  <div className="flex items-start gap-3 py-4">
                    <Mail className="mt-0.5 h-4 w-4 text-ink-subtle" />
                    <div>
                      <p className="text-[11px] text-ink-subtle">{t.contactPage.email}</p>
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
                      <p className="text-[11px] text-ink-subtle">{t.contactPage.whatsapp}</p>
                      <a
                        href={siteConfig.whatsapp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring text-[14px] text-ink transition-colors hover:text-accent"
                      >
                        {t.contactPage.whatsappCta}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 py-4">
                    <MapPin className="mt-0.5 h-4 w-4 text-ink-subtle" />
                    <div>
                      <p className="text-[11px] text-ink-subtle">{t.contactPage.website}</p>
                      <p className="text-[14px] text-ink">
                        {siteConfig.domain}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-[12px] leading-relaxed text-ink-subtle">
                  {t.contactPage.enterpriseNote}
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

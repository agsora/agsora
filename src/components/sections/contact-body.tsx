"use client";

import { Mail, MessageCircle, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { CopyNumber } from "@/components/sections/copy-number";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/i18n/locale-context";

export function ContactBody() {
  const { t } = useLocale();
  return (
    <>
      <PageHero
        breadcrumb={{ name: t.nav.contact, href: "/contact" }}
        eyebrow={t.pageEyebrows.contact}
        title={t.contactPage.heroTitle}
        description={t.contactPage.heroDescription}
      />

      <Section>
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <Reveal>
                <Eyebrow>{t.contactPage.contactInfo}</Eyebrow>
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-start gap-4 rounded-3xl border border-line bg-surface-0 p-5 shadow-card">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-surface-2 text-ink"><Mail className="h-5 w-5" /></span>
                    <div>
                      <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ink-subtle">{t.contactPage.email}</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="tap focus-ring text-[15px] font-semibold text-ink transition-colors hover:text-accent"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-3xl border border-line bg-surface-0 p-5 shadow-card">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#25d366]/15 text-[#128c4a]"><MessageCircle className="h-5 w-5" /></span>
                    <div>
                      <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ink-subtle">{t.contactPage.whatsapp}</p>
                      <a
                        href={siteConfig.whatsapp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tap focus-ring text-[15px] font-semibold text-ink transition-colors hover:text-accent"
                      >
                        {t.contactPage.whatsappCta}
                      </a>
                      <CopyNumber />
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-3xl border border-line bg-surface-0 p-5 shadow-card">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-accent"><MapPin className="h-5 w-5" /></span>
                    <div>
                      <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ink-subtle">{t.contactPage.website}</p>
                      <p className="text-[15px] font-semibold text-ink">
                        {siteConfig.domain}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-5 rounded-2xl bg-surface-1 p-4 text-[13px] leading-relaxed text-ink-muted">
                  {t.contactPage.enterpriseNote}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <div className="rounded-[2rem] border border-line bg-surface-0 p-6 shadow-elev md:p-9">
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

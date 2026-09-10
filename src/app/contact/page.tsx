import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Diskusikan kebutuhan sistem bisnis Anda dengan tim AG·SORA — konsultasi gratis, tanpa komitmen.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Mari diskusikan kebutuhan sistem bisnis Anda"
        description="Isi form berikut dan tim AG·SORA akan menghubungi Anda untuk konsultasi gratis mengenai kebutuhan project Anda."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-10">
            <div className="lg:col-span-2">
              <Reveal>
                <div className="rounded-2xl border border-surface-border bg-bg-alt p-7">
                  <h3 className="text-lg font-semibold text-navy">
                    Informasi Kontak
                  </h3>
                  <div className="mt-6 space-y-5">
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-5 w-5 text-blue" />
                      <div>
                        <p className="text-xs text-muted-2">Email</p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="focus-ring text-sm font-medium text-navy hover:text-blue"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageCircle className="mt-0.5 h-5 w-5 text-blue" />
                      <div>
                        <p className="text-xs text-muted-2">WhatsApp</p>
                        <a
                          href={siteConfig.whatsapp.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-ring text-sm font-medium text-navy hover:text-blue"
                        >
                          Chat dengan tim kami
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 text-blue" />
                      <div>
                        <p className="text-xs text-muted-2">Website</p>
                        <p className="text-sm font-medium text-navy">
                          {siteConfig.domain}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 rounded-xl border border-surface-border bg-white p-4">
                    <p className="text-xs leading-relaxed text-muted">
                      Untuk kebutuhan enterprise atau multi-cabang, tim kami
                      akan menjadwalkan sesi diskusi untuk merancang
                      arsitektur yang tepat bagi organisasi Anda.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-surface-border bg-white p-7 shadow-soft">
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

"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { HowWeWork } from "@/components/sections/how-we-work";
import { PostCard } from "@/components/sections/post-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { services } from "@/config/services";
import type { ServiceDetail } from "@/config/service-details";
import type { BlogPost } from "@/config/blog";
import { useLocale } from "@/i18n/locale-context";

export function ServiceDetailBody({
  slug,
  detail,
  crumbs,
  relatedPosts,
}: {
  slug: string;
  detail: ServiceDetail;
  crumbs: Crumb[];
  relatedPosts: BlogPost[];
}) {
  const { t, locale } = useLocale();
  const service = services.find((s) => s.id === slug)!;
  const otherServices = services.filter((s) => s.id !== slug);
  const Icon = service.icon;

  return (
    <>
      <div className="glow-top relative overflow-hidden border-b border-line pb-16 pt-14 md:pb-20 md:pt-16">
        <Container className="max-w-6xl">
          <Breadcrumbs items={crumbs} />

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                <Icon className="h-3.5 w-3.5 text-accent" />
                {service.title}
              </div>
              <h1 className="headline mt-5 max-w-3xl text-[32px] font-semibold text-ink sm:text-[40px] md:text-[46px]">
                {detail.h1[locale]}
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
                {detail.intro[locale]}
              </p>
              <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
                <Button
                  href="/contact"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  {t.nav.cta}
                </Button>
                <Button href="/pricing" size="lg" variant="outline">
                  {t.servicesGrid.seeAll}
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-line bg-surface-1 p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                {t.servicesGrid.startingFrom}
              </p>
              <p className="mt-3 text-[28px] font-semibold tabular-nums text-ink">
                {service.startingFrom}
              </p>
              <p className="mt-3 text-[12px] leading-relaxed text-ink-subtle">
                {locale === "id"
                  ? "Harga final menyesuaikan ruang lingkup, integrasi, dan timeline — disampaikan dalam proposal."
                  : locale === "en"
                    ? "Final pricing depends on scope, integrations, and timeline — shared in the proposal."
                    : "最终价格取决于范围、对接需求与工期，将在提案中提供。"}
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <Container className="max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow={
                  locale === "id"
                    ? "Yang Anda dapatkan"
                    : locale === "en"
                      ? "What you get"
                      : "您将获得"
                }
                title={
                  locale === "id"
                    ? "Ruang lingkup layanan"
                    : locale === "en"
                      ? "Service scope"
                      : "服务范围"
                }
              />
              <ul className="mt-10 divide-y divide-line border-y border-line">
                {detail.deliverables[locale].map((item, i) => (
                  <li key={item} className="flex items-start gap-4 py-4">
                    <span className="pt-0.5 text-[11px] tabular-nums text-ink-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] leading-relaxed text-ink-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading
                eyebrow={
                  locale === "id"
                    ? "Cocok untuk"
                    : locale === "en"
                      ? "A good fit for"
                      : "适合对象"
                }
                title={
                  locale === "id"
                    ? "Kapan layanan ini tepat"
                    : locale === "en"
                      ? "When this service fits"
                      : "何时适合使用此服务"
                }
              />
              <ul className="mt-10 space-y-3">
                {detail.forWho[locale].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-line bg-surface-1 p-4 text-[14px] leading-relaxed text-ink-muted"
                  >
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-line bg-surface-1">
        <HowWeWork />
      </Section>

      <Section>
        <Container className="max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
            <SectionHeading
              eyebrow={t.faqSection.eyebrow}
              title={`${t.faqSection.title.replace(/\?$/, "")} — ${service.title}`}
            />
            <div className="divide-y divide-line border-y border-line">
              {detail.faqs.map((faq, i) => (
                <details
                  key={faq.question.id}
                  name={`faq-${service.id}`}
                  open={i === 0}
                  className="group"
                >
                  <summary className="focus-ring flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-[14px] font-normal text-ink-muted transition-colors group-open:text-ink">
                      {faq.question[locale]}
                    </h3>
                    <Plus className="mt-0.5 h-4 w-4 shrink-0 text-ink-subtle transition-transform duration-200 group-open:rotate-45 group-open:text-accent" />
                  </summary>
                  <p className="animate-fade-in pb-6 pr-10 text-[13px] leading-relaxed text-ink-muted">
                    {faq.answer[locale]}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {relatedPosts.length ? (
        <Section className="border-t border-line">
          <Container className="max-w-6xl">
            <SectionHeading
              eyebrow={
                locale === "id"
                  ? "Bacaan terkait"
                  : locale === "en"
                    ? "Related reading"
                    : "相关阅读"
              }
              title={
                locale === "id"
                  ? "Artikel yang relevan dengan layanan ini"
                  : locale === "en"
                    ? "Articles relevant to this service"
                    : "与此服务相关的文章"
              }
            />
            <div className="mt-12 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section className="border-t border-line bg-surface-1">
        <Container className="max-w-6xl">
          <SectionHeading
            eyebrow={
              locale === "id"
                ? "Layanan lainnya"
                : locale === "en"
                  ? "Other services"
                  : "其他服务"
            }
            title={
              locale === "id"
                ? "Kebutuhan lain yang bisa kami bantu"
                : locale === "en"
                  ? "Other needs we can help with"
                  : "我们还能帮您解决的其他需求"
            }
          />
          <div className="mt-12 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className="focus-ring group flex items-center justify-between gap-4 border-b border-r border-line px-6 py-5 transition-colors hover:bg-surface-2"
              >
                <div>
                  <p className="text-[14px] text-ink">{s.title}</p>
                  <p className="mt-1 text-[12px] text-ink-subtle">
                    {t.servicesGrid.startingFrom} {s.startingFrom}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-subtle transition-colors group-hover:text-accent" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <ContactCta />
      </Section>
    </>
  );
}

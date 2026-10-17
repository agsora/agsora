"use client";

import Link from "@/i18n/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { HowWeWork } from "@/components/sections/how-we-work";
import { PostCard } from "@/components/sections/post-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { FaqList } from "@/components/sections/faq";
import { services } from "@/config/services";
import type { ServiceDetail } from "@/config/service-details";
import type { BlogPost } from "@/config/blog";
import { useLocale } from "@/i18n/locale-context";
import { formatRupiah } from "@/lib/utils";

/** Service pages whose pricing-table entry has a different id. */
const servicePlan: Record<string, string> = {
  erp: "erp-basic",
  website: "company-profile",
};

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
      <div className="relative overflow-hidden border-b border-line pb-16 pt-10 md:pb-20 md:pt-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_80%_0%,black,transparent)]" />
          <div className="absolute -right-24 -top-32 h-[380px] w-[380px] rounded-full bg-[#3a5fb4]/15 blur-[110px]" />
          <div className="absolute -left-32 top-10 h-[320px] w-[320px] rounded-full bg-gold/20 blur-[110px]" />
        </div>
        <Container className="relative max-w-6xl">
          <Breadcrumbs items={crumbs} label={t.breadcrumbLabel} />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-1 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                <Icon className="h-3.5 w-3.5 text-accent" />
                {service.title[locale]}
              </div>
              <h1 className="headline zh-phrases mt-6 max-w-3xl text-balance text-[34px] font-extrabold text-ink sm:text-[44px] md:text-[52px]">
                {detail.h1[locale]}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-[16px] leading-relaxed text-ink-muted md:text-[17px]">
                {detail.intro[locale]}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={`/contact?plan=${servicePlan[service.id] ?? service.id}&from=/services/${service.id}`}
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  {t.nav.cta}
                </Button>
                <Button href="/services" size="lg" variant="outline">
                  {t.servicesGrid.seeAll}
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-navy p-7 text-white shadow-elev ring-1 ring-white/10">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/30 blur-[80px]" />
              <p className="relative text-[12px] font-semibold uppercase tracking-[0.18em] text-gold">
                {t.servicesGrid.startingFrom}
              </p>
              <p className="relative mt-3 text-[34px] font-extrabold tracking-tight tabular-nums">
                {formatRupiah(service.startingFrom, locale)}
              </p>
              <p className="relative mt-3 text-[13px] leading-relaxed text-white/65">
                {locale === "id"
                  ? "Harga final menyesuaikan ruang lingkup, integrasi, dan timeline, disampaikan dalam proposal."
                  : locale === "en"
                    ? "Final pricing depends on scope, integrations, and timeline, shared in the proposal."
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
              <ul className="mt-10 flex flex-col gap-3">
                {detail.deliverables[locale].map((item, i) => (
                  <li key={item} className="flex items-center gap-4 rounded-2xl border border-line bg-surface-0 p-4 shadow-card">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink text-[13px] font-bold tabular-nums text-surface-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-medium leading-relaxed text-ink">
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
                    className="flex items-start gap-3 rounded-2xl border border-line bg-surface-1 p-4 text-[15px] leading-relaxed text-ink-muted"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-positive" />
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
              title={
                <>
                  {t.faqSection.title}
                  <span className="text-gradient mt-1 block">{service.title[locale]}</span>
                </>
              }
            />
            <FaqList
              openFirst
              items={detail.faqs.map((faq) => ({
                key: faq.question.id,
                question: faq.question[locale],
                answer: faq.answer[locale],
              }))}
            />
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
            <div className="mt-12 grid grid-cols-1 gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-12 grid grid-cols-1 gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className="focus-ring group flex items-center justify-between gap-4 rounded-3xl border border-line bg-surface-0 shadow-card px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-elev"
              >
                <div>
                  <p className="text-[15px] font-bold text-ink">{s.title[locale]}</p>
                  <p className="mt-1 text-[12px] text-ink-subtle">
                    {t.servicesGrid.startingFrom} {formatRupiah(s.startingFrom, locale)}
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

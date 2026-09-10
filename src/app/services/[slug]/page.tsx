import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, breadcrumbSchema } from "@/components/ui/breadcrumbs";
import { HowWeWork } from "@/components/sections/how-we-work";
import { PostCard } from "@/components/sections/post-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { services } from "@/config/services";
import { serviceDetails } from "@/config/service-details";
import { getPostBySlug, type BlogPost } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails[slug];
  if (!detail) return {};

  return pageMetadata({
    absoluteTitle: detail.metaTitle,
    description: detail.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const Icon = service.icon;
  const crumbs = [
    { name: "Beranda", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title, href: `/services/${service.id}` },
  ];
  const relatedPosts = detail.relatedPosts
    .map(getPostBySlug)
    .filter((post): post is BlogPost => Boolean(post));
  const otherServices = services.filter((s) => s.id !== slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: detail.h1,
        serviceType: service.title,
        description: detail.metaDescription,
        url: `${siteConfig.url}/services/${service.id}`,
        areaServed: { "@type": "Country", name: "Indonesia" },
        provider: {
          "@type": "Organization",
          name: siteConfig.legalName,
          url: siteConfig.url,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "IDR",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "IDR",
            minPrice: Number(service.startingFrom.replace(/[^\d]/g, "")),
          },
        },
      },
      breadcrumbSchema(crumbs),
      {
        "@type": "FAQPage",
        mainEntity: detail.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="glow-top relative overflow-hidden border-b border-line pb-16 pt-14 md:pb-20 md:pt-16">
        <Container className="max-w-6xl">
          <Breadcrumbs items={crumbs} />

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                <Icon className="h-3.5 w-3.5 text-accent" />
                Layanan {service.title}
              </div>
              <h1 className="headline mt-5 max-w-3xl text-[32px] font-semibold text-ink sm:text-[40px] md:text-[46px]">
                {detail.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
                {detail.intro}
              </p>
              <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
                <Button
                  href="/contact"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Konsultasi Gratis
                </Button>
                <Button href="/pricing" size="lg" variant="outline">
                  Lihat Semua Harga
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-line bg-surface-1 p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                Mulai dari
              </p>
              <p className="mt-3 text-[28px] font-semibold tabular-nums text-ink">
                {service.startingFrom}
              </p>
              <p className="mt-3 text-[12px] leading-relaxed text-ink-subtle">
                Harga final menyesuaikan ruang lingkup, integrasi, dan
                timeline — disampaikan dalam proposal.
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
                eyebrow="Yang Anda dapatkan"
                title="Ruang lingkup layanan"
              />
              <ul className="mt-10 divide-y divide-line border-y border-line">
                {detail.deliverables.map((item, i) => (
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
                eyebrow="Cocok untuk"
                title="Kapan layanan ini tepat"
              />
              <ul className="mt-10 space-y-3">
                {detail.forWho.map((item) => (
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
              eyebrow="FAQ"
              title={`Pertanyaan seputar ${service.title}`}
            />
            <div className="divide-y divide-line border-y border-line">
              {detail.faqs.map((faq, i) => (
                <details
                  key={faq.question}
                  name={`faq-${service.id}`}
                  open={i === 0}
                  className="group"
                >
                  <summary className="focus-ring flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-[14px] font-normal text-ink-muted transition-colors group-open:text-ink">
                      {faq.question}
                    </h3>
                    <Plus className="mt-0.5 h-4 w-4 shrink-0 text-ink-subtle transition-transform duration-200 group-open:rotate-45 group-open:text-accent" />
                  </summary>
                  <p className="animate-fade-in pb-6 pr-10 text-[13px] leading-relaxed text-ink-muted">
                    {faq.answer}
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
              eyebrow="Bacaan terkait"
              title="Artikel yang relevan dengan layanan ini"
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
            eyebrow="Layanan lainnya"
            title="Kebutuhan lain yang bisa kami bantu"
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
                    Mulai dari {s.startingFrom}
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

import type { Metadata } from "next";
import { CareersBody } from "@/components/sections/careers-body";
import { AGENT_PROGRAM } from "@/config/agent-program";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/i18n/routing";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { getPublishedJobs } from "@/lib/jobs-public";
import { jsonLd, pageMetadata } from "@/lib/seo";

const META = {
  id: { title: "Karier: Agen Sales Komisi 10%", description: `Gabung sebagai Agen Sales AG·SORA: jual website, aplikasi, dan sistem bisnis. Komisi ${AGENT_PROGRAM.rateFull}% bila target tercapai, ${AGENT_PROGRAM.rateReduced}% di bawah target. Kerja dari mana saja.` },
  en: { title: "Careers: Sales Agent, 10% Commission", description: `Join AG·SORA as a sales agent selling websites, apps and business systems. ${AGENT_PROGRAM.rateFull}% commission on target, ${AGENT_PROGRAM.rateReduced}% below. Work from anywhere.` },
  zh: { title: "职业：销售代理 10% 佣金", description: `加入 AG·SORA 成为销售代理，销售网站、应用与业务系统。达标佣金 ${AGENT_PROGRAM.rateFull}%，未达标 ${AGENT_PROGRAM.rateReduced}%。` },
} as const;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  const m = META[locale];
  return pageMetadata({ title: m.title, description: m.description, path: "/karier", locale });
}

// Job posts change from the dashboard; the page is regenerated when they do (tag "jobs") or every 10 minutes.
export const revalidate = 600;

export default async function CareersPage({ params }: LangParams) {
  const locale = await localeFromParams(params);
  const jobs = await getPublishedJobs();
  // Google for Jobs: one JobPosting per open, published job.
  const postings = jobs.map((j) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: j.title,
    description: [j.summary, j.description].filter(Boolean).join("\n") || j.title,
    datePosted: j.created_at.slice(0, 10),
    employmentType: j.kind === "agent" ? "CONTRACTOR" : "FULL_TIME",
    hiringOrganization: { "@type": "Organization", name: siteConfig.legalName, sameAs: siteConfig.url },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "Indonesia" },
    url: absoluteUrl("/karier", locale),
  }));
  return (
    <>
      {postings.length ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(postings) }} /> : null}
      <CareersBody jobs={jobs} />
    </>
  );
}

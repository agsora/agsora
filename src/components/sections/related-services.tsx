import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/services";
import { serviceDetails } from "@/config/service-details";
import { getPostBySlug, type BlogTag } from "@/config/blog";

const MAX_SERVICES = 3;

/**
 * Which service page an article tag points readers toward.
 *
 * Deliberately partial: some tags describe a topic no service fits (e.g.
 * "karyawan" on a change-management article is not an HRIS lead), and an
 * article with no fitting service is better off with no box than a wrong one.
 */
const tagToService: Partial<Record<BlogTag, string>> = {
  erp: "erp",
  inventori: "erp",
  keuangan: "erp",
  pos: "pos",
  pembayaran: "pos",
  hris: "hris",
  payroll: "hris",
  crm: "crm",
  sales: "crm",
  pelanggan: "crm",
  website: "website",
  seo: "website",
  ecommerce: "website",
  mobile: "mobile",
  api: "api-integration",
  integrasi: "api-integration",
  ai: "ai-automation",
  otomasi: "ai-automation",
  pelaporan: "dashboard",
  "custom-software": "custom-software",
  // Capabilities lists deployment, backup, and access control under custom
  // development; clinic/school systems are bespoke builds, not a SaaS product.
  infrastruktur: "custom-software",
  keamanan: "custom-software",
  industri: "custom-software",
};

/**
 * Links an article to the service pages it supports. Services that explicitly
 * list the article come first; the rest are inferred from its tags, so every
 * article gets a path to a commercial page without hand-maintained lists.
 */
export function RelatedServices({ postSlug }: { postSlug: string }) {
  const post = getPostBySlug(postSlug);
  if (!post) return null;

  const explicit = services
    .filter((s) => serviceDetails[s.id]?.relatedPosts.includes(postSlug))
    .map((s) => s.id);
  const fromTags = post.tags
    .map((tag) => tagToService[tag])
    .filter((id): id is string => Boolean(id));

  const ids = [...new Set([...explicit, ...fromTags])].slice(0, MAX_SERVICES);
  const related = ids
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is (typeof services)[number] => Boolean(s && serviceDetails[s.id]));
  if (!related.length) return null;

  return (
    <aside className="mt-14 rounded-lg border border-line bg-surface-1 p-6">
      <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
        Layanan terkait
      </p>
      <ul className="mt-3 divide-y divide-line">
        {related.map((service) => (
          <li key={service.id}>
            <Link
              href={`/services/${service.id}`}
              className="focus-ring group flex items-center justify-between gap-4 py-3.5"
            >
              <span>
                <span className="block text-[14px] text-ink">
                  {serviceDetails[service.id].h1}
                </span>
                <span className="mt-0.5 block text-[12px] text-ink-subtle">
                  Mulai dari {service.startingFrom}
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-subtle transition-colors group-hover:text-accent" />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/services";
import { serviceDetails } from "@/config/service-details";

/**
 * Links a blog post to the service pages that cite it — the inverse of
 * `serviceDetails[...].relatedPosts`, so the link graph runs both ways.
 */
export function RelatedServices({ postSlug }: { postSlug: string }) {
  const related = services.filter((service) =>
    serviceDetails[service.id]?.relatedPosts.includes(postSlug)
  );
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

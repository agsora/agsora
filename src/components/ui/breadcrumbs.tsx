import Link from "@/i18n/link";
import { absoluteUrl, type Locale } from "@/i18n/routing";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-[12px] text-ink-subtle">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-ink-muted">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="focus-ring transition-colors hover:text-ink"
                >
                  {item.name}
                </Link>
              )}
              {!last ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** `items` use unprefixed hrefs; the schema gets the URLs of the `locale` version. */
export function breadcrumbSchema(items: Crumb[], locale: Locale) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href, locale),
    })),
  };
}

"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import Link from "@/i18n/link";
import { ArrowRight, Check, Printer } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  checklistSections,
  checklistStrings,
  checklistTotal,
} from "@/config/checklist";
import { useLocale } from "@/i18n/locale-context";
import { cn } from "@/lib/utils";
import { track } from "@/lib/track";

const UNLOCK_KEY = "agsora:checklist-unlocked";
const UNLOCK_EVENT = "agsora:checklist-unlocked-change";

// Remembers (in this browser only) that the visitor already left their
// details, so reloading the page doesn't ask again.
function subscribe(onChange: () => void) {
  window.addEventListener(UNLOCK_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(UNLOCK_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function readUnlocked() {
  try {
    return window.localStorage.getItem(UNLOCK_KEY) === "1";
  } catch {
    return false;
  }
}

const fieldClass =
  "focus-ring w-full rounded-md border border-line bg-surface-0 px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-subtle transition-colors hover:border-line-strong focus:border-accent";
const labelClass = "mb-2 block text-[12px] font-medium text-ink-muted";

export function ChecklistBody() {
  const { locale } = useLocale();
  const s = checklistStrings[locale];
  const pathname = usePathname();
  const stored = useSyncExternalStore(subscribe, readUnlocked, () => false);
  const [justUnlocked, setJustUnlocked] = useState(false);
  const unlocked = stored || justUnlocked;
  const [done, setDone] = useState<string[]>([]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (key: string) => String(form.get(key) ?? "").trim();
    if (get("website")) return; // honeypot

    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        name: get("name"),
        company: get("company"),
        email: get("email"),
        phone: get("phone"),
        need: s.leadNeed,
        description: s.leadDescription,
        sourcePage: pathname,
        locale,
        website: get("website"),
      }),
    }).catch(() => {});
    track("generate_lead", { need: "lead_magnet", locale });
    try {
      window.localStorage.setItem(UNLOCK_KEY, "1");
      window.dispatchEvent(new Event(UNLOCK_EVENT));
    } catch {
      // Storage blocked: the in-memory flag below still opens the checklist.
    }
    setJustUnlocked(true);
  }

  function toggle(id: string) {
    setDone((prev) => (prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]));
  }

  const count = done.length;
  const verdict =
    count / checklistTotal >= 0.85 ? s.verdict.high : count / checklistTotal >= 0.5 ? s.verdict.mid : s.verdict.low;

  return (
    <>
      <PageHero
        breadcrumb={{ name: s.navLabel, href: "/checklist" }}
        eyebrow={s.eyebrow}
        title={s.heroTitle}
        description={s.heroDescription}
      />

      <Section>
        <Container className="max-w-3xl">
          {!unlocked ? (
            <div className="rounded-lg border border-line bg-surface-1 p-7">
              <h2 className="headline text-[22px] font-semibold text-ink">{s.formTitle}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{s.formDescription}</p>
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <div>
                  <label htmlFor="cl-name" className={labelClass}>{s.name}</label>
                  <input required id="cl-name" name="name" autoComplete="name" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="cl-company" className={labelClass}>
                    {s.company} <span className="text-ink-subtle">{s.companyOptional}</span>
                  </label>
                  <input id="cl-company" name="company" autoComplete="organization" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="cl-email" className={labelClass}>{s.email}</label>
                  <input required type="email" id="cl-email" name="email" autoComplete="email" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="cl-phone" className={labelClass}>{s.whatsapp}</label>
                  <input required type="tel" id="cl-phone" name="phone" autoComplete="tel" className={fieldClass} />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-[14px] font-medium text-surface-0 transition-colors hover:bg-ink/85 sm:w-auto"
                  >
                    {s.submit}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="mt-3 text-[12px] leading-relaxed text-ink-subtle">
                    {s.privacy}{" "}
                    <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-ink">
                      {s.privacyLink}
                    </Link>
                    {locale === "zh" ? "。" : "."}
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <div className="flex flex-wrap items-end justify-between gap-4" data-no-print>
                <div>
                  <h2 className="headline text-[22px] font-semibold text-ink">{s.unlockedTitle}</h2>
                  <p className="mt-1 text-[13px] text-ink-muted">{s.unlockedHint}</p>
                </div>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="focus-ring inline-flex items-center gap-2 rounded-md border border-line-strong px-3.5 py-2 text-[13px] text-ink transition-colors hover:bg-surface-1"
                >
                  <Printer className="h-4 w-4" />
                  {s.print}
                </button>
              </div>

              <div className="mt-8 space-y-10">
                {checklistSections.map((section, si) => (
                  <div key={section.title.id}>
                    <h3 className="text-[15px] font-semibold text-ink">
                      {si + 1}. {section.title[locale]}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {section.items.map((item) => {
                        const on = done.includes(item.id);
                        return (
                          <li key={item.id}>
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked={on}
                              onClick={() => toggle(item.id)}
                              className={cn(
                                "focus-ring flex w-full items-start gap-3 rounded-md border px-3.5 py-3 text-left transition-colors",
                                on ? "border-accent bg-surface-1" : "border-line hover:border-line-strong"
                              )}
                            >
                              <span
                                className={cn(
                                  "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border",
                                  on ? "border-accent bg-accent text-surface-0" : "border-line-strong"
                                )}
                              >
                                {on ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                              </span>
                              <span className="text-[14px] leading-relaxed text-ink-muted">{item[locale]}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-lg border border-line bg-surface-1 p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                  {s.progress(count, checklistTotal)}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink">{verdict}</p>
              </div>

              <div className="mt-10 rounded-lg border border-line p-6" data-no-print>
                <h3 className="text-[16px] font-semibold text-ink">{s.ctaTitle}</h3>
                <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-ink-muted">{s.ctaText}</p>
                <Button
                  href="/contact?from=/checklist"
                  size="md"
                  className="mt-5"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  {s.ctaButton}
                </Button>
              </div>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}

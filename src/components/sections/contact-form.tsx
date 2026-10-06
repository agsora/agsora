"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { Send } from "lucide-react";
import { customDevPricing } from "@/config/pricing";
import { growth } from "@/i18n/growth";
import { useLocale } from "@/i18n/locale-context";
import { track } from "@/lib/track";
import { whatsappLink } from "@/lib/whatsapp";

function inputClass() {
  return "focus-ring w-full rounded-md border border-line bg-surface-0 px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-subtle transition-colors hover:border-line-strong focus:border-accent";
}

const labelClass = "mb-2 block text-[12px] font-medium text-ink-muted";

const subscribeToUrl = (onChange: () => void) => {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
};

/**
 * The query string, read on the client only. useSearchParams would need a
 * Suspense boundary on this statically built page, and the form would not
 * hydrate (or even submit through React) until that boundary resolved.
 */
function useQueryString() {
  return useSyncExternalStore(subscribeToUrl, () => window.location.search, () => "");
}

export function ContactForm() {
  const { t, locale } = useLocale();
  const g = growth[locale];
  const pathname = usePathname();
  const params = new URLSearchParams(useQueryString());
  const [submitted, setSubmitted] = useState(false);

  // ?plan=erp-basic,crm comes from the price cards and the estimator; ?from=
  // is the page that sent the visitor here (falls back to this page).
  const planIds = (params.get("plan") ?? "").split(",").filter(Boolean);
  const planNames = planIds
    .map((id) => customDevPricing.find((p) => p.id === id)?.name[locale])
    .filter((n): n is string => Boolean(n));
  const plan = planNames.join(", ");
  const industry = params.get("industry");
  const sourcePage = `${params.get("from") ?? pathname}${industry ? ` (${industry})` : ""}`;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (key: string) => String(form.get(key) ?? "").trim();
    if (get("website")) return; // honeypot

    const w = g.waLead;
    const lines = [
      w.intro,
      ``,
      `${w.name}: ${get("name")}`,
      `${w.company}: ${get("company")}`,
      `${w.email}: ${get("email")}`,
      `${w.whatsapp}: ${get("phone")}`,
      `${w.need}: ${get("need")}`,
      `${w.budget}: ${get("budget")}`,
      ...(plan ? [`${w.plan}: ${plan}`] : []),
      `${w.page}: ${sourcePage}`,
      ``,
      `${w.description}:`,
      get("description"),
    ].join("\n");

    // Open WhatsApp straight from the click (popup blockers allow it), and
    // save the lead in the background so it survives an unsent message.
    window.open(whatsappLink(lines), "_blank", "noopener,noreferrer");
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        name: get("name"),
        company: get("company"),
        email: get("email"),
        phone: get("phone"),
        need: get("need"),
        budget: get("budget"),
        description: get("description"),
        plan,
        sourcePage,
        locale,
        website: get("website"),
      }),
    }).catch(() => {});
    track("generate_lead", { need: get("need"), plan, locale });
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {plan ? (
        <p className="rounded-md border border-line bg-surface-0 px-3.5 py-2.5 text-[13px] text-ink-muted sm:col-span-2">
          <span className="text-ink-subtle">{g.selectedPlan}:</span> {plan}
        </p>
      ) : null}
      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="name" className={labelClass}>
          {t.contactForm.name}
        </label>
        <input required id="name" name="name" className={inputClass()} placeholder={t.contactForm.namePlaceholder} />
      </div>
      <div>
        <label htmlFor="company" className={labelClass}>
          {t.contactForm.company}
        </label>
        <input id="company" name="company" className={inputClass()} placeholder={t.contactForm.companyPlaceholder} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          {t.contactForm.email}
        </label>
        <input required type="email" id="email" name="email" className={inputClass()} placeholder={t.contactForm.emailPlaceholder} />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          {t.contactForm.whatsapp}
        </label>
        <input required id="phone" name="phone" className={inputClass()} placeholder={t.contactForm.whatsappPlaceholder} />
      </div>
      <div>
        <label htmlFor="need" className={labelClass}>
          {t.contactForm.needType}
        </label>
        <select required id="need" name="need" defaultValue="" className={inputClass()}>
          <option value="" disabled>
            {t.contactForm.needTypePlaceholder}
          </option>
          {t.contactForm.needTypes.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="budget" className={labelClass}>
          {t.contactForm.budget}
        </label>
        <select required id="budget" name="budget" defaultValue="" className={inputClass()}>
          <option value="" disabled>
            {t.contactForm.budgetPlaceholder}
          </option>
          {t.contactForm.budgetRanges.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="description" className={labelClass}>
          {t.contactForm.description}
        </label>
        <textarea
          required
          id="description"
          name="description"
          rows={5}
          className={inputClass()}
          placeholder={t.contactForm.descriptionPlaceholder}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-[14px] font-medium text-surface-0 transition-colors hover:bg-ink/85 sm:w-auto"
        >
          {t.contactForm.submit}
          <Send className="h-4 w-4" />
        </button>
        {submitted ? (
          <p className="mt-3 text-[13px] text-accent">
            {t.contactForm.thankYou}
          </p>
        ) : null}
      </div>
    </form>
  );
}

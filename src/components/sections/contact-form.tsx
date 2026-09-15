"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/i18n/locale-context";

function inputClass() {
  return "focus-ring w-full rounded-md border border-line bg-surface-0 px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-subtle transition-colors hover:border-line-strong focus:border-accent";
}

const labelClass = "mb-2 block text-[12px] font-medium text-ink-muted";

export function ContactForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lines = [
      `Halo AG·SORA, saya ingin berkonsultasi:`,
      ``,
      `Nama: ${form.get("name")}`,
      `Perusahaan: ${form.get("company")}`,
      `Email: ${form.get("email")}`,
      `WhatsApp: ${form.get("phone")}`,
      `Jenis kebutuhan: ${form.get("need")}`,
      `Budget range: ${form.get("budget")}`,
      ``,
      `Deskripsi project:`,
      `${form.get("description")}`,
    ].join("\n");

    const url = `${siteConfig.whatsapp.href}?text=${encodeURIComponent(lines)}`;
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
          className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-[14px] font-medium text-surface-0 transition-colors hover:bg-white sm:w-auto"
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

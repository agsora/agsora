"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/config/site";

const needTypes = [
  "Custom Software",
  "Website Development",
  "Mobile Application",
  "ERP",
  "POS",
  "HRIS",
  "CRM",
  "AI Automation / API Integration",
  "Produk SaaS AG·SORA",
  "Lainnya",
];

const budgetRanges = [
  "< Rp5 juta",
  "Rp5 - 15 juta",
  "Rp15 - 30 juta",
  "Rp30 - 75 juta",
  "> Rp75 juta",
  "Belum tahu / perlu diskusi",
];

function inputClass() {
  return "focus-ring w-full rounded-md border border-line bg-surface-0 px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-subtle transition-colors hover:border-line-strong focus:border-accent";
}

const labelClass = "mb-2 block text-[12px] font-medium text-ink-muted";

export function ContactForm() {
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
          Nama
        </label>
        <input required id="name" name="name" className={inputClass()} placeholder="Nama lengkap" />
      </div>
      <div>
        <label htmlFor="company" className={labelClass}>
          Perusahaan
        </label>
        <input id="company" name="company" className={inputClass()} placeholder="Nama perusahaan" />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input required type="email" id="email" name="email" className={inputClass()} placeholder="nama@perusahaan.com" />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          WhatsApp
        </label>
        <input required id="phone" name="phone" className={inputClass()} placeholder="08xx-xxxx-xxxx" />
      </div>
      <div>
        <label htmlFor="need" className={labelClass}>
          Jenis kebutuhan
        </label>
        <select required id="need" name="need" defaultValue="" className={inputClass()}>
          <option value="" disabled>
            Pilih jenis kebutuhan
          </option>
          {needTypes.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="budget" className={labelClass}>
          Budget range
        </label>
        <select required id="budget" name="budget" defaultValue="" className={inputClass()}>
          <option value="" disabled>
            Pilih budget range
          </option>
          {budgetRanges.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="description" className={labelClass}>
          Deskripsi project
        </label>
        <textarea
          required
          id="description"
          name="description"
          rows={5}
          className={inputClass()}
          placeholder="Ceritakan kebutuhan dan tantangan bisnis Anda..."
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-[14px] font-medium text-surface-0 transition-colors hover:bg-white sm:w-auto"
        >
          Kirim via WhatsApp
          <Send className="h-4 w-4" />
        </button>
        {submitted ? (
          <p className="mt-3 text-[13px] text-accent">
            Terima kasih! Pesan Anda telah disiapkan di WhatsApp — silakan
            kirim untuk menyelesaikan permintaan konsultasi.
          </p>
        ) : null}
      </div>
    </form>
  );
}

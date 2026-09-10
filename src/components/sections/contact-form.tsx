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
  return "focus-ring w-full rounded-xl border border-surface-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-2 transition-colors focus:border-blue/50";
}

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
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-2">
          Nama
        </label>
        <input required id="name" name="name" className={inputClass()} placeholder="Nama lengkap" />
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy-2">
          Perusahaan
        </label>
        <input id="company" name="company" className={inputClass()} placeholder="Nama perusahaan" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-2">
          Email
        </label>
        <input required type="email" id="email" name="email" className={inputClass()} placeholder="nama@perusahaan.com" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-2">
          WhatsApp
        </label>
        <input required id="phone" name="phone" className={inputClass()} placeholder="08xx-xxxx-xxxx" />
      </div>
      <div>
        <label htmlFor="need" className="mb-1.5 block text-sm font-medium text-navy-2">
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
        <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-navy-2">
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
        <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-navy-2">
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
          className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue to-cyan px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(43,98,246,0.5)] transition-transform hover:-translate-y-0.5 sm:w-auto"
        >
          Kirim via WhatsApp
          <Send className="h-4 w-4" />
        </button>
        {submitted ? (
          <p className="mt-3 text-sm text-blue">
            Terima kasih! Pesan Anda telah disiapkan di WhatsApp — silakan
            kirim untuk menyelesaikan permintaan konsultasi.
          </p>
        ) : null}
      </div>
    </form>
  );
}

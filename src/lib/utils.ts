import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** "Rp8.000.000" in Indonesian, "Rp8,000,000" in English and Chinese — how each audience writes it. */
export function formatRupiah(amount: number, locale: "id" | "en" | "zh") {
  return `Rp${amount.toLocaleString(locale === "id" ? "id-ID" : "en-US")}`;
}

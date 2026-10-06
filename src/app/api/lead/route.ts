import { isLocale } from "@/i18n/routing";
import { clientIp, rateLimit } from "@/lib/rate-limit";

/**
 * Stores a contact-form submission in Supabase (table `leads`) so no enquiry
 * is lost when the visitor closes WhatsApp without sending. Optionally emails
 * the team through Resend when RESEND_API_KEY and LEAD_NOTIFY_EMAIL are set.
 *
 * Needs SUPABASE_URL and SUPABASE_SECRET_KEY; without them it does nothing.
 */

const MAX = {
  name: 120,
  company: 160,
  email: 200,
  phone: 40,
  need: 120,
  budget: 120,
  description: 4000,
  plan: 300,
  sourcePage: 300,
} as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** "0823-1868-1524" / "+62 823..." → "62823..." for a wa.me link; null if it does not look like a phone number. */
function whatsappDigits(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const intl = digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
  return intl.length >= 9 && intl.length <= 15 ? intl : null;
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  if (!rateLimit(`lead:${clientIp(request)}`, 5, 10 * 60_000)) {
    return new Response(null, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.website, 50)) return new Response(null, { status: 204 });

  const lead = {
    name: clean(body.name, MAX.name),
    company: clean(body.company, MAX.company) || null,
    email: clean(body.email, MAX.email),
    phone: clean(body.phone, MAX.phone),
    need: clean(body.need, MAX.need) || null,
    budget: clean(body.budget, MAX.budget) || null,
    description: clean(body.description, MAX.description),
    plan: clean(body.plan, MAX.plan) || null,
    source_page: clean(body.sourcePage, MAX.sourcePage) || null,
    locale: typeof body.locale === "string" && isLocale(body.locale) ? body.locale : "id",
  };
  if (!lead.name || !lead.phone || !lead.description || !EMAIL.test(lead.email)) {
    return new Response(null, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return new Response(null, { status: 204 });

  const res = await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: { apikey: key, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify(lead),
  });
  if (!res.ok) {
    console.error("lead insert failed", res.status);
    return new Response(null, { status: 502 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notifyTo) {
    const waDigits = whatsappDigits(lead.phone);
    const text = [
      `Nama: ${lead.name}`,
      `Perusahaan: ${lead.company ?? "-"}`,
      `Email: ${lead.email}`,
      `WhatsApp: ${lead.phone}`,
      `Chat klien: ${waDigits ? `https://wa.me/${waDigits}` : "-"}`,
      `Kebutuhan: ${lead.need ?? "-"}`,
      `Budget: ${lead.budget ?? "-"}`,
      `Paket: ${lead.plan ?? "-"}`,
      `Halaman: ${lead.source_page ?? "-"}`,
      `Bahasa: ${lead.locale}`,
      "",
      lead.description,
    ].join("\n");
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.LEAD_FROM_EMAIL ?? "AGSORA Leads <onboarding@resend.dev>",
        to: [notifyTo],
        reply_to: lead.email,
        subject: `Lead baru: ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
        text,
      }),
    }).catch((err) => console.error("lead notify failed", err));
  }

  return new Response(null, { status: 204 });
}

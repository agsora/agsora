"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSession, type Session } from "@/lib/admin-auth";
import { siteConfig } from "@/config/site";
import { queryLeads } from "@/lib/leads-db";
import { computeTotals, parseItems, planOf, quoteNumber, type Quote } from "@/lib/quote";
import { buildContractPdf } from "@/lib/contract-pdf";
import { buildQuotePdf } from "@/lib/quote-pdf";
import { getSiteData } from "@/lib/site-content";
import { sbInsert, sbSelect, sbUpdate } from "@/lib/supabase";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Back to a quote with a one-line message (rendered as text by the page). */
function back(id: number, notice: string, error = false): never {
  revalidatePath("/admin/quotes");
  redirect(`/admin/quotes/${id}?notice=${encodeURIComponent(notice)}${error ? "&type=err" : ""}`);
}

/** A quote the session may act on: owner sees all, sales only their own. */
async function loadQuote(id: number, session: Session): Promise<Quote | null> {
  const q = (await sbSelect<Quote>("quotes", `select=*&id=eq.${id}`))?.[0];
  if (!q) return null;
  if (session.role === "sales" && q.sales_id !== session.id) return null;
  return q;
}

const numField = (f: FormData, name: string) => {
  const n = Number(f.get(name));
  return Number.isInteger(n) && n > 0 ? n : null;
};
const text = (f: FormData, name: string, max: number) => {
  const v = f.get(name);
  return typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null;
};
const pct = (f: FormData, name: string) => Math.min(100, Math.max(0, Number(String(f.get(name) ?? "").replace(",", ".")) || 0));

/** Create or update a quote; intent "submit" also sends it to the owner for approval. */
export async function saveQuote(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/admin");

  const existingId = numField(formData, "id");
  const intent = formData.get("intent") === "submit" ? "submit" : "save";
  const { tax } = await getSiteData();
  const items = parseItems(formData.get("items"));
  const clientName = text(formData, "client_name", 160);
  const clientEmail = text(formData, "client_email", 200);
  const plan = planOf({ payment_plan: String(formData.get("payment_plan") ?? "") });
  const fields = {
    client_name: clientName ?? "",
    client_email: clientEmail && EMAIL.test(clientEmail) ? clientEmail : null,
    client_company: text(formData, "client_company", 160),
    items,
    discount_pct: pct(formData, "discount_pct"),
    // PPN is automatic: the effective rate for a PKP company, nothing otherwise. Never taken from the form.
    tax_pct: tax.pkp ? tax.ppnRate : 0,
    valid_until: /^\d{4}-\d{2}-\d{2}$/.test(String(formData.get("valid_until"))) ? String(formData.get("valid_until")) : null,
    terms: text(formData, "terms", 3000),
  };

  // Validation shared by save and submit.
  const problems: string[] = [];
  if (!clientName) problems.push("Nama klien wajib diisi");
  if (clientEmail && !EMAIL.test(clientEmail)) problems.push("Format email klien salah");
  if (intent === "submit") {
    if (!items.length) problems.push("Tambahkan minimal satu item");
    else if (computeTotals(items, fields.discount_pct, fields.tax_pct).total <= 0) problems.push("Total penawaran harus lebih dari nol");
    if (!fields.client_email) problems.push("Email klien wajib diisi sebelum diajukan");
  }

  if (!existingId) {
    // A sales agent may only quote for leads assigned to them.
    let leadId = numField(formData, "lead_id");
    if (leadId && session.role === "sales") {
      const own = await queryLeads(`select=id&id=eq.${leadId}&assigned_to=eq.${session.id}`);
      if (!own?.length) leadId = null;
    }
    if (problems.length && intent === "save" && !clientName) redirect(`/admin/quotes/new?notice=${encodeURIComponent(problems[0])}&type=err`);
    const created = await sbInsert<Quote>("quotes", {
      ...fields,
      // Only written when not the default, so the default scheme keeps working before the payment_plan migration runs.
      ...(plan !== "50-50" ? { payment_plan: plan } : {}),
      client_name: fields.client_name || "(tanpa nama)",
      lead_id: leadId,
      sales_id: session.role === "sales" ? session.id : null,
      status: "draft",
    });
    const id = created?.[0]?.id;
    if (!id) redirect(`/admin/quotes/new?notice=${encodeURIComponent("Gagal menyimpan. Pastikan migrasi database sudah dijalankan.")}&type=err`);
    if (intent === "submit" && !problems.length) {
      await sbUpdate("quotes", { status: "pending", review_note: null }, `id=eq.${id}&status=eq.draft`);
      back(id, "Penawaran diajukan ke owner untuk disetujui.");
    }
    back(id, problems.length ? `Draft tersimpan, tapi belum bisa diajukan: ${problems.join("; ")}.` : "Draft tersimpan.", problems.length > 0);
  }

  const current = await loadQuote(existingId, session);
  if (!current) redirect("/admin/quotes");
  if (current.status === "pending") back(existingId, "Penawaran sedang menunggu persetujuan dan tidak bisa diubah.", true);

  // Any edit voids an earlier approval: it has to be approved again before it can go out.
  const status = intent === "submit" && !problems.length ? "pending" : "draft";
  const updated = await sbUpdate<Quote>(
    "quotes",
    {
      ...fields,
      ...(plan !== planOf(current) ? { payment_plan: plan } : {}),
      client_name: fields.client_name || current.client_name,
      status,
      review_note: null,
      approved_at: null,
      sent_at: null,
      updated_at: new Date().toISOString(),
    },
    `id=eq.${existingId}&status=neq.pending`
  );
  if (!updated?.length) back(existingId, "Gagal menyimpan: status penawaran berubah.", true);
  if (status === "pending") back(existingId, "Penawaran diajukan ke owner untuk disetujui.");
  back(existingId, problems.length ? `Tersimpan sebagai draft. Belum bisa diajukan: ${problems.join("; ")}.` : "Draft tersimpan.", problems.length > 0);
}

/** Owner decision on a pending quote. The status filter makes a stale click harmless. */
export async function reviewQuote(formData: FormData) {
  const session = await getSession();
  if (session?.role !== "owner") redirect("/admin");
  const id = numField(formData, "id");
  if (!id) redirect("/admin/quotes");
  const approve = formData.get("decision") === "approve";
  const note = text(formData, "note", 1000);
  if (!approve && !note) back(id, "Tulis catatan revisi agar sales tahu yang perlu diubah.", true);

  const updated = await sbUpdate<Quote>(
    "quotes",
    approve
      ? { status: "approved", review_note: note, approved_at: new Date().toISOString(), updated_at: new Date().toISOString() }
      : { status: "rejected", review_note: note, approved_at: null, updated_at: new Date().toISOString() },
    `id=eq.${id}&status=eq.pending`
  );
  if (!updated?.length) back(id, "Penawaran ini tidak lagi menunggu persetujuan.", true);
  back(id, approve ? "Penawaran disetujui. Sales kini bisa mengunduh atau mengirimnya." : "Penawaran dikembalikan ke sales untuk direvisi.");
}

/** Email the approved quote to the client as a PDF attachment (Resend). */
export async function sendQuote(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/admin");
  const id = numField(formData, "id");
  if (!id) redirect("/admin/quotes");

  const q = await loadQuote(id, session);
  if (!q) redirect("/admin/quotes");
  if (q.status !== "approved" && q.status !== "sent") back(id, "Penawaran harus disetujui owner dulu.", true);
  if (!q.client_email || !EMAIL.test(q.client_email)) back(id, "Email klien belum diisi.", true);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) back(id, "Pengiriman email belum aktif: RESEND_API_KEY belum diisi. Unduh PDF dan kirim manual.", true);

  const number = quoteNumber(q);
  const site = await getSiteData();
  const pdf = Buffer.from(await buildQuotePdf(q, site)).toString("base64");
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL ?? "AGSORA <onboarding@resend.dev>",
      to: [q.client_email],
      ...(notifyTo ? { bcc: [notifyTo] } : {}),
      reply_to: site.contact.email,
      subject: `Proposal Penawaran ${number} - ${siteConfig.brandMark}`,
      text: [
        `Yth. ${q.client_name},`,
        "",
        "Terima kasih atas ketertarikan Anda. Terlampir proposal penawaran dari " + siteConfig.legalName + ".",
        "Jika ada yang ingin didiskusikan, balas email ini atau hubungi kami melalui WhatsApp " + site.contact.whatsappNumber + ".",
        "",
        "Salam,",
        siteConfig.legalName,
      ].join("\n"),
      attachments: [{ filename: `Proposal-${number.replace(/\//g, "-")}.pdf`, content: pdf }],
    }),
  });
  if (!res.ok) back(id, "Email gagal dikirim. Periksa konfigurasi Resend (domain pengirim harus terverifikasi).", true);

  await sbUpdate("quotes", { status: "sent", sent_at: new Date().toISOString() }, `id=eq.${id}`);
  back(id, `Penawaran dikirim ke ${q.client_email}.`);
}

/** Email the service agreement (PDF) once the client has accepted the proposal. Sent separately from the proposal. */
export async function sendContract(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/admin");
  const id = numField(formData, "id");
  if (!id) redirect("/admin/quotes");

  const q = await loadQuote(id, session);
  if (!q) redirect("/admin/quotes");
  if (q.status !== "approved" && q.status !== "sent") back(id, "Penawaran harus disetujui owner dulu.", true);
  if (!q.client_email || !EMAIL.test(q.client_email)) back(id, "Email klien belum diisi.", true);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) back(id, "Pengiriman email belum aktif: RESEND_API_KEY belum diisi. Unduh perjanjian dan kirim manual.", true);

  const contractNo = quoteNumber(q).replace("AGS/", "PKS/");
  const site = await getSiteData();
  const pdf = Buffer.from(await buildContractPdf(q, site)).toString("base64");
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL ?? "AGSORA <onboarding@resend.dev>",
      to: [q.client_email],
      ...(notifyTo ? { bcc: [notifyTo] } : {}),
      reply_to: site.contact.email,
      subject: `Perjanjian ${contractNo} - ${siteConfig.brandMark}`,
      text: [
        `Yth. ${q.client_name},`,
        "",
        "Terima kasih atas persetujuan proposal. Terlampir perjanjian (Indonesia/English) untuk Anda tinjau dan tandatangani.",
        "Mohon kembalikan salinan yang sudah ditandatangani dan dibubuhi meterai. Pekerjaan dimulai setelah perjanjian ditandatangani dan pembayaran termin pertama diterima.",
        "",
        "Salam,",
        siteConfig.legalName,
      ].join("\n"),
      attachments: [{ filename: `Perjanjian-${contractNo.replace(/\//g, "-")}.pdf`, content: pdf }],
    }),
  });
  if (!res.ok) back(id, "Email gagal dikirim. Periksa konfigurasi Resend (domain pengirim harus terverifikasi).", true);
  back(id, `Perjanjian dikirim ke ${q.client_email}.`);
}

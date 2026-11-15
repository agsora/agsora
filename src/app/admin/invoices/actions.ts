"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/admin-auth";
import { emailInvoice } from "@/lib/invoice-mail";
import { billableParts, invoiceNumber, type Invoice, type Quote } from "@/lib/quote";
import { sbInsert, sbSelect, sbUpdate } from "@/lib/supabase";

/** Back to where the action was taken, with a one-line message. */
function back(path: string, notice: string, error = false): never {
  revalidatePath("/admin/invoices");
  revalidatePath(path);
  redirect(`${path}${path.includes("?") ? "&" : "?"}notice=${encodeURIComponent(notice)}${error ? "&type=err" : ""}`);
}

async function ownerOnly() {
  const session = await getSession();
  if (!session || session.role !== "owner") redirect("/admin");
}

const whereTo = (f: FormData) => {
  const p = String(f.get("return") ?? "");
  return p.startsWith("/admin/") ? p : "/admin/invoices";
};

const dayStr = (offset: number) => new Date(Date.now() + offset * 86_400_000).toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });

/** Issue the invoice for one instalment (seq 1..3) or the subscription bill (seq 0) of a quote. Due in 7 days. */
export async function createInvoice(formData: FormData) {
  await ownerOnly();
  const quoteId = Number(formData.get("quote_id"));
  const seq = Number(formData.get("seq"));
  const path = whereTo(formData);
  if (!Number.isInteger(quoteId) || !Number.isInteger(seq)) back(path, "Data tidak valid.", true);
  const q = (await sbSelect<Quote>("quotes", `select=*&id=eq.${quoteId}`))?.[0];
  if (!q) back(path, "Penawaran tidak ditemukan.", true);
  const part = billableParts(q!).find((p) => p.seq === seq);
  if (!part) back(path, "Termin tidak ada di penawaran ini.", true);
  const made = await sbInsert<Invoice>("invoices", { quote_id: quoteId, seq, label: part!.label, amount: part!.amount, due_date: dayStr(7) });
  if (!made?.length) back(path, "Gagal membuat invoice (mungkin sudah ada, atau migrasi database belum dijalankan).", true);
  back(path, `Invoice ${invoiceNumber(made![0])} dibuat.`);
}

export async function markPaid(formData: FormData) {
  await ownerOnly();
  const id = Number(formData.get("id"));
  const path = whereTo(formData);
  const done = await sbUpdate<Invoice>("invoices", { status: "paid", paid_at: new Date().toISOString() }, `id=eq.${id}&status=eq.unpaid`);
  back(path, done?.length ? "Invoice ditandai lunas." : "Invoice tidak bisa diubah.", !done?.length);
}

export async function voidInvoice(formData: FormData) {
  await ownerOnly();
  const id = Number(formData.get("id"));
  const path = whereTo(formData);
  const done = await sbUpdate<Invoice>("invoices", { status: "void" }, `id=eq.${id}&status=eq.unpaid`);
  back(path, done?.length ? "Invoice dibatalkan." : "Invoice tidak bisa dibatalkan.", !done?.length);
}

/** Email the invoice PDF with the client link. `reminder` changes the wording and stamps the reminder time. */
export async function sendInvoice(formData: FormData) {
  await ownerOnly();
  const id = Number(formData.get("id"));
  const reminder = formData.get("reminder") === "1";
  const path = whereTo(formData);
  const inv = (await sbSelect<Invoice>("invoices", `select=*&id=eq.${id}`))?.[0];
  if (!inv || inv.status !== "unpaid") back(path, "Invoice tidak aktif.", true);
  const q = (await sbSelect<Quote>("quotes", `select=*&id=eq.${inv!.quote_id}`))?.[0];
  if (!q?.client_email) back(path, "Email klien belum diisi pada penawaran.", true);
  const err = await emailInvoice(inv!, q!, reminder);
  if (err) back(path, err, true);
  back(path, reminder ? "Pengingat terkirim." : "Invoice terkirim ke email klien.");
}

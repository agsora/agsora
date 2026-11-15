"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/admin-auth";
import { PROJECT_STAGES, quoteNumber, type ProjectStage, type Quote } from "@/lib/quote";
import { notifyOwner } from "@/lib/mail";
import { saveDocument, type DocKind } from "@/lib/storage";
import { sbInsert, sbSelect, sbUpdate, sbWrite } from "@/lib/supabase";

function back(id: number, notice: string, error = false): never {
  revalidatePath(`/admin/quotes/${id}`);
  redirect(`/admin/quotes/${id}?notice=${encodeURIComponent(notice)}${error ? "&type=err" : ""}`);
}

/** The quote the session may work on (owner: any, sales: own), or a redirect. */
async function load(formData: FormData, ownerOnly = false): Promise<Quote> {
  const session = await getSession();
  if (!session || (ownerOnly && session.role !== "owner")) redirect("/admin");
  const id = Number(formData.get("quote_id"));
  if (!Number.isInteger(id) || id <= 0) redirect("/admin/quotes");
  const q = (await sbSelect<Quote>("quotes", `select=*&id=eq.${id}`))?.[0];
  if (!q || (session!.role === "sales" && q.sales_id !== session!.id)) redirect("/admin/quotes");
  return q!;
}

export async function uploadOwnerDocument(formData: FormData) {
  const q = await load(formData);
  const kind = String(formData.get("kind")) as DocKind;
  const err = await saveDocument(q.id, formData.get("file"), ["contract", "bast", "other"].includes(kind) ? kind : "other", "owner");
  back(q.id, err ?? "Dokumen tersimpan.", Boolean(err));
}

export async function setContractActive(formData: FormData) {
  const q = await load(formData, true);
  await sbUpdate("quotes", { contract_active_at: q.contract_active_at ? null : new Date().toISOString() }, `id=eq.${q.id}`);
  back(q.id, q.contract_active_at ? "Status perjanjian aktif dibatalkan." : "Perjanjian ditandai aktif. Terbitkan invoice uang muka bila belum.");
}

export async function issueBast(formData: FormData) {
  const q = await load(formData, true);
  if (q.bast_at) back(q.id, "BAST sudah diterbitkan.");
  await sbUpdate("quotes", { bast_at: new Date().toISOString(), project_stage: "selesai" }, `id=eq.${q.id}`);
  back(q.id, "BAST diterbitkan. Unduh, tandatangani bersama klien, lalu unggah salinannya.");
}

/** Move the project to a stage with a short note; the client sees both on their page. */
export async function updateProject(formData: FormData) {
  const q = await load(formData);
  const stage = String(formData.get("stage")) as ProjectStage;
  if (!PROJECT_STAGES.some((s) => s.key === stage)) back(q.id, "Tahap tidak valid.", true);
  const note = String(formData.get("note") ?? "").trim().slice(0, 400);
  const log = [...(q.project_log ?? []), { at: new Date().toISOString(), stage, note }].slice(-50);
  const ok = await sbUpdate("quotes", { project_stage: stage, project_log: log }, `id=eq.${q.id}`);
  back(q.id, ok ? "Status proyek diperbarui dan terlihat di halaman klien." : "Gagal menyimpan. Pastikan migrasi proyek sudah dijalankan.", !ok);
}

/** Start a recurring bill (maintenance, hosting, SEO) that issues an invoice every period. */
export async function createSubscription(formData: FormData) {
  const q = await load(formData, true);
  const label = String(formData.get("label") ?? "").trim().slice(0, 200);
  const amount = Math.floor(Number(String(formData.get("amount") ?? "").replace(/\D/g, "")));
  const period = formData.get("period") === "yearly" ? "yearly" : "monthly";
  const first = String(formData.get("next_bill") ?? "");
  if (!label || !amount || amount <= 0 || !/^\d{4}-\d{2}-\d{2}$/.test(first)) back(q.id, "Isi nama layanan, nominal, dan tanggal tagihan pertama.", true);
  const made = await sbInsert("subscriptions", { quote_id: q.id, label, amount, period, next_bill: first });
  back(q.id, made ? "Langganan aktif. Invoice terbit otomatis 3 hari sebelum tanggal tagihan." : "Gagal menyimpan langganan.", !made);
}

export async function toggleSubscription(formData: FormData) {
  const q = await load(formData, true);
  const id = Number(formData.get("id"));
  const active = formData.get("active") === "1";
  await sbWrite("subscriptions", "PATCH", { active: !active }, `id=eq.${id}&quote_id=eq.${q.id}`);
  if (active) await notifyOwner(`Langganan dihentikan: ${quoteNumber(q)}`, `Langganan #${id} untuk ${q.client_company || q.client_name} dihentikan.`);
  back(q.id, active ? "Langganan dihentikan." : "Langganan diaktifkan kembali.");
}

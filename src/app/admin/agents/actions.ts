"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { isAdmin } from "@/lib/admin-auth";
import { agentMonth, type Agent } from "@/lib/agents";
import { sbInsert, sbSelect, sbWrite } from "@/lib/supabase";

function back(f: FormData, notice: string, error = false): never {
  revalidatePath("/admin/agents");
  const period = String(f.get("period") ?? "");
  redirect(`/admin/agents?${/^\d{4}-\d{2}$/.test(period) ? `period=${period}&` : ""}notice=${encodeURIComponent(notice)}${error ? "&type=err" : ""}`);
}
async function guard(f: FormData) {
  if (!(await isAdmin())) back(f, "Hanya owner yang bisa mengubah data agen.", true);
}
const id = (f: FormData, k = "id") => {
  const n = Number(f.get(k));
  return Number.isInteger(n) && n > 0 ? n : null;
};

/** Credit a deal (quote) to an agent, or remove the credit. */
export async function assignQuote(formData: FormData) {
  await guard(formData);
  const quote = id(formData, "quote_id");
  const agent = id(formData, "agent_id");
  if (!quote) back(formData, "Pilih penawaran.", true);
  const ok = await sbWrite("quotes", "PATCH", { agent_id: agent }, `id=eq.${quote}`);
  back(formData, ok ? (agent ? "Penawaran dicatat atas nama agen." : "Penawaran dilepas dari agen.") : "Gagal menyimpan. Pastikan migrasi agen sudah dijalankan.", !ok);
}

export async function updateAgent(formData: FormData) {
  await guard(formData);
  const agentId = id(formData);
  if (!agentId) back(formData, "Data tidak valid.", true);
  const pct = (k: string) => Math.min(50, Math.max(0, Number(String(formData.get(k) ?? "").replace(",", ".")) || 0));
  const target = Math.max(0, Math.floor(Number(String(formData.get("monthly_target") ?? "").replace(/\D/g, "")) || 0));
  const ok = await sbWrite(
    "agents",
    "PATCH",
    {
      phone: String(formData.get("phone") ?? "").slice(0, 40) || null,
      email: String(formData.get("email") ?? "").slice(0, 200) || null,
      city: String(formData.get("city") ?? "").slice(0, 120) || null,
      rate_full: pct("rate_full"),
      rate_reduced: pct("rate_reduced"),
      monthly_target: target,
      status: formData.get("status") === "inactive" ? "inactive" : "active",
    },
    `id=eq.${agentId}`,
  );
  back(formData, ok ? "Data agen disimpan." : "Gagal menyimpan.", !ok);
}

/** Record that a month's commission was paid, with the amount computed at that moment. */
export async function recordPayout(formData: FormData) {
  await guard(formData);
  const agentId = id(formData);
  const period = String(formData.get("period") ?? "");
  if (!agentId || !/^\d{4}-\d{2}$/.test(period)) back(formData, "Data tidak valid.", true);
  const agent = (await sbSelect<Agent>("agents", `select=*&id=eq.${agentId}`))?.[0];
  if (!agent) back(formData, "Agen tidak ditemukan.", true);
  const [row] = await agentMonth([agent!], period);
  if (!row.amount) back(formData, "Tidak ada komisi untuk periode ini.", true);
  const made = await sbInsert("agent_payouts", { agent_id: agentId, period, revenue: row.revenue, rate: row.rate, amount: row.amount });
  back(formData, made ? `Komisi ${agent!.code} periode ${period} dicatat sudah dibayar.` : "Gagal mencatat (mungkin sudah dicatat).", !made);
}

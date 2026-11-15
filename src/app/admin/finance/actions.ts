"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/admin-auth";
import { sbInsert, sbWrite } from "@/lib/supabase";

function back(notice: string, error = false): never {
  revalidatePath("/admin/finance");
  redirect(`/admin/finance?notice=${encodeURIComponent(notice)}${error ? "&type=err" : ""}`);
}

async function ownerOnly() {
  const session = await getSession();
  if (!session || session.role !== "owner") redirect("/admin");
}

export async function addExpense(formData: FormData) {
  await ownerOnly();
  const spent_on = String(formData.get("spent_on") ?? "");
  const category = String(formData.get("category") ?? "").trim().slice(0, 60);
  const amount = Math.floor(Number(String(formData.get("amount") ?? "").replace(/\D/g, "")));
  const quote = Number(formData.get("quote_id"));
  if (!/^\d{4}-\d{2}-\d{2}$/.test(spent_on) || !category || !amount) back("Isi tanggal, kategori, dan nominal.", true);
  const made = await sbInsert("expenses", {
    spent_on,
    category,
    amount,
    vendor: String(formData.get("vendor") ?? "").trim().slice(0, 120) || null,
    note: String(formData.get("note") ?? "").trim().slice(0, 500) || null,
    quote_id: Number.isInteger(quote) && quote > 0 ? quote : null,
  });
  back(made ? "Pengeluaran dicatat." : "Gagal menyimpan. Pastikan migrasi keuangan sudah dijalankan.", !made);
}

export async function deleteExpense(formData: FormData) {
  await ownerOnly();
  const id = Number(formData.get("id"));
  if (!Number.isInteger(id) || id <= 0) back("Data tidak valid.", true);
  const ok = await sbWrite("expenses", "DELETE", undefined, `id=eq.${id}`);
  back(ok ? "Pengeluaran dihapus." : "Gagal menghapus.", !ok);
}

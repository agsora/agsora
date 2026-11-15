"use server";

import { revalidatePath } from "next/cache";
import { hashPassword, isAdmin, ownerUsername } from "@/lib/admin-auth";
import { sbWrite } from "@/lib/supabase";

const refresh = () => revalidatePath("/admin", "layout");
const num = (f: FormData, name: string) => {
  const n = Number(f.get(name));
  return Number.isInteger(n) && n > 0 ? n : null;
};

/** Returns an error message, or null on success. */
export async function createSales(_: string | null, formData: FormData): Promise<string | null> {
  if (!(await isAdmin())) return "Sesi habis, masuk lagi.";
  const name = String(formData.get("name") ?? "").trim().slice(0, 120);
  const username = String(formData.get("username") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  if (!name) return "Nama wajib diisi.";
  if (!/^[a-z0-9._-]{3,40}$/.test(username)) return "Username 3-40 karakter: huruf kecil, angka, titik, strip, atau garis bawah.";
  if (username === ownerUsername()) return "Username itu dipakai owner.";
  if (password.length < 8) return "Password minimal 8 karakter.";

  const ok = await sbWrite("sales_users", "POST", { name, username, password_hash: await hashPassword(password) });
  if (!ok) return "Gagal menyimpan. Username mungkin sudah dipakai, atau migrasi belum dijalankan.";
  refresh();
  return null;
}

export async function setSalesActive(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = num(formData, "id");
  if (!id) return;
  await sbWrite("sales_users", "PATCH", { active: formData.get("active") === "1" }, `id=eq.${id}`);
  refresh();
}

export async function resetSalesPassword(_: string | null, formData: FormData): Promise<string | null> {
  if (!(await isAdmin())) return "Sesi habis, masuk lagi.";
  const id = num(formData, "id");
  const password = String(formData.get("password") ?? "");
  if (!id) return "Akun tidak valid.";
  if (password.length < 8) return "Password minimal 8 karakter.";
  const ok = await sbWrite("sales_users", "PATCH", { password_hash: await hashPassword(password) }, `id=eq.${id}`);
  if (!ok) return "Gagal menyimpan.";
  refresh();
  return "Password diganti.";
}

/** Assign a lead to a sales agent (empty = unassigned). */
export async function assignLead(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = num(formData, "id");
  if (!id) return;
  const salesId = num(formData, "sales_id");
  await sbWrite("leads", "PATCH", { assigned_to: salesId }, `id=eq.${id}`);
  refresh();
}

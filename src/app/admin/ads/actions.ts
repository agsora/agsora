"use server";

import { revalidatePath } from "next/cache";
import { isAdmin } from "@/lib/admin-auth";
import { syncMetaAds } from "@/lib/meta-ads";

/** Manual "Tarik data" button: reads the last 30 days from Meta. Returns a message for the UI. */
export async function syncAds(): Promise<string> {
  if (!(await isAdmin())) return "Sesi habis, masuk lagi.";
  const result = await syncMetaAds(30);
  revalidatePath("/admin/ads");
  return result.ok ? `Berhasil menarik ${result.rows} baris data.` : `Gagal: ${result.error}`;
}

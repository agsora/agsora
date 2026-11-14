"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { ADMIN_COOKIE, checkPassword, isAdmin, sessionToken } from "@/lib/admin-auth";
import { LEAD_STATUSES } from "@/lib/lead-status";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";

export async function login(_: string | null, formData: FormData): Promise<string | null> {
  const h = await headers();
  const ip = clientIp(new Request("http://x", { headers: h }));
  if (!rateLimit(`admin-login:${ip}`, 5, 10 * 60_000)) return "Terlalu banyak percobaan. Coba lagi nanti.";

  const password = formData.get("password");
  if (typeof password !== "string" || !checkPassword(password)) return "Password salah.";

  (await cookies()).set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: 60 * 60 * 12,
  });
  revalidatePath("/admin/leads");
  return null;
}

export async function logout() {
  (await cookies()).delete({ name: ADMIN_COOKIE, path: "/admin" });
  revalidatePath("/admin/leads");
}

export async function setStatus(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = Number(formData.get("id"));
  const status = formData.get("status");
  if (!Number.isInteger(id) || !LEAD_STATUSES.includes(status as (typeof LEAD_STATUSES)[number])) return;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return;
  await fetch(`${url}/rest/v1/leads?id=eq.${id}`, {
    method: "PATCH",
    headers: { apikey: key, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify({ status }),
  });
  revalidatePath("/admin/leads");
}

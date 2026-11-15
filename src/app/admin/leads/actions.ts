"use server";

import { cookies, headers } from "next/headers";
import { revalidatePath } from "next/cache";
import {
  ADMIN_COOKIE,
  DUMMY_HASH,
  SALES_COOKIE,
  SESSION_SECONDS,
  checkPassword,
  isAdmin,
  ownerUsername,
  salesToken,
  sessionToken,
  verifyPassword,
} from "@/lib/admin-auth";
import { sbSelect } from "@/lib/supabase";
import { LEAD_SEGMENTS, LEAD_STATUSES, type Followup, type LeadSegment, type LeadStatus } from "@/lib/lead-status";
import { patchLead, queryLeads } from "@/lib/leads-db";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { totpEnabled, verifyTotp } from "@/lib/totp";

function refresh() {
  revalidatePath("/admin", "layout");
}

export async function login(_: string | null, formData: FormData): Promise<string | null> {
  const h = await headers();
  const ip = clientIp(new Request("http://x", { headers: h }));
  if (!rateLimit(`admin-login:${ip}`, 5, 10 * 60_000)) return "Terlalu banyak percobaan. Coba lagi nanti.";

  const password = formData.get("password");
  const username = String(formData.get("username") ?? "").trim().toLowerCase();
  if (typeof password !== "string" || !password) return "Password wajib diisi.";
  const wrong = "Username atau password salah.";

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
    maxAge: SESSION_SECONDS,
  };
  const jar = await cookies();

  if (!username || username === ownerUsername()) {
    if (!checkPassword(password)) return wrong;
    // Second factor for the owner when OWNER_TOTP_SECRET is set.
    if (totpEnabled() && !verifyTotp(String(formData.get("code") ?? ""))) return "Kode 2FA salah atau kedaluwarsa.";
    jar.delete({ name: SALES_COOKIE, path: "/" });
    jar.set(ADMIN_COOKIE, sessionToken(), cookieOptions);
  } else {
    if (!/^[a-z0-9._-]{3,40}$/.test(username)) {
      await verifyPassword(password, DUMMY_HASH);
      return wrong;
    }
    const rows = await sbSelect<{ id: number; password_hash: string; active: boolean }>(
      "sales_users",
      `select=id,password_hash,active&username=eq.${encodeURIComponent(username)}`
    );
    const user = rows?.[0];
    const ok = await verifyPassword(password, user?.password_hash ?? DUMMY_HASH);
    if (!user || !user.active || !ok) return wrong;
    jar.delete({ name: ADMIN_COOKIE, path: "/" });
    jar.delete({ name: ADMIN_COOKIE, path: "/admin" });
    jar.set(SALES_COOKIE, salesToken(user.id), cookieOptions);
  }
  refresh();
  return null;
}

export async function logout() {
  const jar = await cookies();
  jar.delete({ name: ADMIN_COOKIE, path: "/" });
  jar.delete({ name: SALES_COOKIE, path: "/" });
  // Early builds scoped the owner cookie to /admin; clear that copy too so it cannot outlive a logout.
  jar.delete({ name: ADMIN_COOKIE, path: "/admin" });
  refresh();
}

function leadId(formData: FormData) {
  const id = Number(formData.get("id"));
  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function setStatus(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = leadId(formData);
  const status = formData.get("status") as LeadStatus;
  if (!id || !LEAD_STATUSES.includes(status)) return;
  await patchLead(id, { status });
  refresh();
}

/** Segment, deal value, lost reason and notes from the lead editor. */
export async function updateLead(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = leadId(formData);
  if (!id) return;

  const text = (name: string, max: number) => {
    const v = formData.get(name);
    return typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null;
  };
  const segment = formData.get("segment") as LeadSegment;
  const dealRaw = String(formData.get("deal_value") ?? "").replace(/\D/g, "");

  await patchLead(id, {
    segment: LEAD_SEGMENTS.includes(segment) ? segment : null,
    deal_value: dealRaw ? Math.min(Number(dealRaw), 1e13) : null,
    lost_reason: text("lost_reason", 300),
    notes: text("notes", 2000),
  });
  refresh();
}

/** Log one follow-up; the lead moves to the next stage and is marked contacted. */
export async function logFollowup(formData: FormData) {
  if (!(await isAdmin())) return;
  const id = leadId(formData);
  const note = String(formData.get("note") ?? "").trim().slice(0, 500);
  if (!id || !note) return;

  const rows = await queryLeads(`select=id,status,followups&id=eq.${id}`);
  const lead = rows?.[0];
  if (!lead) return;

  const followups: Followup[] = [...lead.followups, { at: new Date().toISOString(), note }];
  await patchLead(id, { followups, ...(lead.status === "new" ? { status: "contacted" } : {}) });
  refresh();
}

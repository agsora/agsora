import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * Minimal single-password auth for the /admin pages. The password lives in
 * ADMIN_PASSWORD; the cookie holds an HMAC of a fixed label keyed by it, so
 * changing the password signs everyone out. Without ADMIN_PASSWORD the admin
 * area is disabled.
 */
export const ADMIN_COOKIE = "agsora_admin";

function sign(password: string) {
  return createHmac("sha256", password).update("agsora-admin-session").digest("hex");
}

function safeEqual(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function adminEnabled() {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function checkPassword(input: string) {
  const password = process.env.ADMIN_PASSWORD;
  return Boolean(password) && safeEqual(sign(input), sign(password!));
}

export function sessionToken() {
  return sign(process.env.ADMIN_PASSWORD ?? "");
}

export async function isAdmin() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  const value = (await cookies()).get(ADMIN_COOKIE)?.value;
  return Boolean(value) && safeEqual(value!, sign(password));
}

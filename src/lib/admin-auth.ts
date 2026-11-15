import { createHmac, randomBytes, scrypt as scryptCb, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { cache } from "react";
import { sbSelect } from "@/lib/supabase";

/**
 * Dashboard auth with two roles.
 *
 * - owner: username ADMIN_USERNAME (default "owner") + ADMIN_PASSWORD. The
 *   cookie is an HMAC of a fixed label keyed by the password, so changing the
 *   password signs the owner out. Without ADMIN_PASSWORD the dashboard is off.
 * - sales: accounts in public.sales_users (scrypt password hashes), created by
 *   the owner. The cookie is a signed "<id>.<expiry>" token; every request
 *   re-reads the account, so deactivating a sales agent cuts access at once.
 */
export const ADMIN_COOKIE = "agsora_admin";
export const SALES_COOKIE = "agsora_sales";
export const SESSION_SECONDS = 60 * 60 * 12;

export type Session = { role: "owner" } | { role: "sales"; id: number; name: string };

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

export const ownerUsername = () => (process.env.ADMIN_USERNAME ?? "").trim().toLowerCase() || "owner";

export function checkPassword(input: string) {
  const password = process.env.ADMIN_PASSWORD;
  return Boolean(password) && safeEqual(sign(input), sign(password!));
}

export function sessionToken() {
  return sign(process.env.ADMIN_PASSWORD ?? "");
}

/** True only for the owner cookie (used by owner-only server actions). */
export async function isAdmin() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  const value = (await cookies()).get(ADMIN_COOKIE)?.value;
  return Boolean(value) && safeEqual(value!, sign(password));
}

// ---- sales passwords ----

const scrypt = (password: string, salt: Buffer) =>
  new Promise<Buffer>((resolve, reject) => scryptCb(password, salt, 64, (err, key) => (err ? reject(err) : resolve(key))));

export async function hashPassword(password: string) {
  const salt = randomBytes(16);
  return `scrypt$${salt.toString("hex")}$${(await scrypt(password, salt)).toString("hex")}`;
}

/** A hash to verify against when the username does not exist, so timing does not reveal valid usernames. */
export const DUMMY_HASH = "scrypt$00000000000000000000000000000000$" + "00".repeat(64);

export async function verifyPassword(password: string, stored: string) {
  const [scheme, saltHex, hashHex] = stored.split("$");
  if (scheme !== "scrypt" || !saltHex || !hashHex) return false;
  const key = await scrypt(password, Buffer.from(saltHex, "hex"));
  const expected = Buffer.from(hashHex, "hex");
  return key.length === expected.length && timingSafeEqual(key, expected);
}

// ---- sales session cookie ----

function salesSignature(payload: string) {
  return createHmac("sha256", `${process.env.ADMIN_PASSWORD ?? ""}:sales`).update(payload).digest("hex");
}

export function salesToken(id: number) {
  const payload = `${id}.${Math.floor(Date.now() / 1000) + SESSION_SECONDS}`;
  return `${payload}.${salesSignature(payload)}`;
}

function readSalesToken(token: string | undefined): number | null {
  if (!token) return null;
  const [id, exp, sig] = token.split(".");
  if (!id || !exp || !sig || !safeEqual(sig, salesSignature(`${id}.${exp}`))) return null;
  if (Number(exp) < Date.now() / 1000) return null;
  const n = Number(id);
  return Number.isInteger(n) && n > 0 ? n : null;
}

/** Who is signed in, or null. Memoised per request, so the gate, the shell and the page share one lookup. */
export const getSession = cache(readSession);

async function readSession(): Promise<Session | null> {
  if (!adminEnabled()) return null;
  if (await isAdmin()) return { role: "owner" };
  const id = readSalesToken((await cookies()).get(SALES_COOKIE)?.value);
  if (!id) return null;
  const rows = await sbSelect<{ id: number; name: string; active: boolean }>("sales_users", `select=id,name,active&id=eq.${id}`);
  const user = rows?.[0];
  return user?.active ? { role: "sales", id: user.id, name: user.name } : null;
}

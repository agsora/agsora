import "server-only";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

/**
 * Time-based one-time codes (RFC 6238: SHA-1, 6 digits, 30 s), as used by Google Authenticator, Authy,
 * Microsoft Authenticator and 1Password. The owner's secret lives in OWNER_TOTP_SECRET (base32).
 */
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

function base32Decode(input: string): Buffer {
  const clean = input.toUpperCase().replace(/[^A-Z2-7]/g, "");
  let bits = 0;
  let value = 0;
  const out: number[] = [];
  for (const ch of clean) {
    value = (value << 5) | ALPHABET.indexOf(ch);
    bits += 5;
    if (bits >= 8) {
      out.push((value >>> (bits - 8)) & 0xff);
      bits -= 8;
    }
  }
  return Buffer.from(out);
}

export function newTotpSecret(): string {
  const bytes = randomBytes(20);
  let bits = 0;
  let value = 0;
  let out = "";
  for (const b of bytes) {
    value = (value << 8) | b;
    bits += 8;
    while (bits >= 5) {
      out += ALPHABET[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) out += ALPHABET[(value << (5 - bits)) & 31];
  return out;
}

function code(secret: Buffer, counter: number) {
  const msg = Buffer.alloc(8);
  msg.writeBigUInt64BE(BigInt(counter));
  const h = createHmac("sha1", secret).update(msg).digest();
  const o = h[h.length - 1] & 0x0f;
  const n = ((h[o] & 0x7f) << 24) | (h[o + 1] << 16) | (h[o + 2] << 8) | h[o + 3];
  return String(n % 1_000_000).padStart(6, "0");
}

export const totpEnabled = () => Boolean(process.env.OWNER_TOTP_SECRET?.trim());

/** Accepts the current code and one step either side, to absorb clock drift. */
export function verifyTotp(input: string): boolean {
  const raw = process.env.OWNER_TOTP_SECRET?.trim();
  const given = input.replace(/\D/g, "");
  if (!raw || given.length !== 6) return false;
  const secret = base32Decode(raw);
  const step = Math.floor(Date.now() / 30_000);
  return [-1, 0, 1].some((d) => timingSafeEqual(Buffer.from(code(secret, step + d)), Buffer.from(given)));
}

export const otpauthUrl = (secret: string, account = "owner") =>
  `otpauth://totp/${encodeURIComponent(`AG·SORA Dashboard:${account}`)}?secret=${secret}&issuer=${encodeURIComponent("AG·SORA")}&digits=6&period=30`;

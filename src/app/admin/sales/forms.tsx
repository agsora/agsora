"use client";

import { useActionState } from "react";
import { createSales, resetSalesPassword } from "./actions";

export function CreateSalesForm() {
  const [message, action, pending] = useActionState(createSales, null);
  return (
    <form action={action} className="sn-form-grid" style={{ padding: "0 1.5rem 1.25rem" }}>
      <input name="name" required maxLength={120} className="sn-input" placeholder="Nama lengkap" />
      <input name="username" required maxLength={40} autoCapitalize="none" spellCheck={false} className="sn-input" placeholder="Username (huruf kecil)" />
      <input name="password" type="text" required minLength={8} autoComplete="off" className="sn-input" placeholder="Password awal (min 8 karakter)" />
      <button className="sn-btn sn-btn-primary" disabled={pending}>
        {pending ? "Menyimpan…" : "Tambah sales"}
      </button>
      {message ? <p style={{ color: "var(--sn-danger)", fontSize: "0.8125rem", gridColumn: "1 / -1" }}>{message}</p> : null}
    </form>
  );
}

export function ResetPasswordForm({ id }: { id: number }) {
  const [message, action, pending] = useActionState(resetSalesPassword, null);
  return (
    <form action={action} style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", alignItems: "center" }}>
      <input type="hidden" name="id" value={id} />
      <input name="password" required minLength={8} autoComplete="off" className="sn-input" placeholder="Password baru" style={{ width: "11rem" }} />
      <button className="sn-btn sn-btn-sm" disabled={pending}>
        Ganti
      </button>
      {message ? <span className="sn-muted">{message}</span> : null}
    </form>
  );
}

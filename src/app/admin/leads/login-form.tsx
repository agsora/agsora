"use client";

import { useActionState } from "react";
import { login } from "./actions";

export function LoginForm() {
  const [error, action, pending] = useActionState(login, null);
  return (
    <div className="sn-auth">
      <div className="sn-card">
        <div className="sn-brand" style={{ padding: 0, justifyContent: "center" }}>
          <span className="sn-brand-mark">A</span> AG·SORA
        </div>
        <h2 style={{ fontSize: "1.125rem", margin: "1.5rem 0 0.25rem" }}>Selamat datang 👋</h2>
        <p style={{ marginBottom: "1.25rem" }}>Masuk untuk melihat leads yang masuk.</p>
        <form action={action} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label htmlFor="password" style={{ display: "block", fontSize: "0.8125rem", marginBottom: "0.35rem" }}>
              Password
            </label>
            <input
              id="password"
              className="sn-input"
              type="password"
              name="password"
              required
              autoFocus
              autoComplete="current-password"
              placeholder="••••••••"
            />
          </div>
          {error ? <p style={{ color: "var(--sn-danger)", fontSize: "0.8125rem" }}>{error}</p> : null}
          <button className="sn-btn sn-btn-primary" style={{ justifyContent: "center", padding: "0.55rem" }} disabled={pending}>
            {pending ? "Memeriksa…" : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}

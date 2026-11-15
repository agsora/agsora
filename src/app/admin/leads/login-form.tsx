"use client";

import { useActionState, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AdminBrand } from "../brand";
import { login } from "./actions";

/** Modelled on Sneat's "auth-login-basic". One form for the owner and for sales agents. */
export function LoginForm() {
  const [error, action, pending] = useActionState(login, null);
  const [show, setShow] = useState(false);
  return (
    <div className="sn-auth">
      <div className="sn-card sn-auth-card">
        <div style={{ marginBottom: "1.75rem" }}>
          <AdminBrand center />
        </div>
        <h2 className="sn-auth-title">Selamat datang di AG·SORA! 👋</h2>
        <p style={{ marginBottom: "1.5rem" }}>Masuk sebagai owner atau sales untuk membuka dashboard.</p>
        <form action={action} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          <div>
            <label htmlFor="username" className="sn-label">
              Username
            </label>
            <input
              id="username"
              className="sn-input"
              name="username"
              autoFocus
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              autoComplete="username"
              placeholder="owner atau username sales"
            />
          </div>
          <div>
            <label htmlFor="password" className="sn-label">
              Password
            </label>
            <div className="sn-input-group">
              <input
                id="password"
                className="sn-input"
                type={show ? "text" : "password"}
                name="password"
                required
                autoComplete="current-password"
                placeholder="············"
              />
              <button type="button" className="sn-input-addon" onClick={() => setShow((v) => !v)} aria-label={show ? "Sembunyikan password" : "Tampilkan password"}>
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="code" className="sn-label">
              Kode 2FA (owner, bila aktif)
            </label>
            <input id="code" className="sn-input" name="code" inputMode="numeric" autoComplete="one-time-code" maxLength={6} placeholder="6 digit dari aplikasi authenticator" />
          </div>
          {error ? <p style={{ color: "var(--sn-danger)", fontSize: "0.8125rem" }}>{error}</p> : null}
          <button className="sn-btn sn-btn-primary" style={{ justifyContent: "center", padding: "0.6rem", fontSize: "0.9375rem" }} disabled={pending}>
            {pending ? "Memeriksa…" : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}

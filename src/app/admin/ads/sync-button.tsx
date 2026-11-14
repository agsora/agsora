"use client";

import { useState, useTransition } from "react";
import { RefreshCw } from "lucide-react";
import { syncAds } from "./actions";

export function SyncButton() {
  const [pending, start] = useTransition();
  const [message, setMessage] = useState("");
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
      <button
        className="sn-btn sn-btn-primary"
        disabled={pending}
        onClick={() => start(async () => setMessage(await syncAds()))}
      >
        <RefreshCw size={14} /> {pending ? "Menarik data…" : "Tarik data Meta"}
      </button>
      {message ? <span className="sn-muted">{message}</span> : null}
    </div>
  );
}

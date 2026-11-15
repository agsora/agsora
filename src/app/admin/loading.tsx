/**
 * Shown the moment a dashboard menu is clicked, while the server fetches that page's data,
 * so navigation feels instant instead of the old page sitting frozen.
 */
export default function AdminLoading() {
  const bar = (w: string, h = "0.75rem") => <div className="sn-skeleton" style={{ width: w, height: h }} />;
  return (
    <div className="sn-layout" aria-busy="true" aria-label="Memuat">
      <aside className="sn-menu" style={{ padding: "1.5rem 1.25rem", gap: "0.9rem" }}>
        {bar("60%", "1.4rem")}
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i}>{bar(`${55 + ((i * 13) % 35)}%`)}</div>
        ))}
      </aside>
      <main className="sn-main">
        <div className="sn-navbar">{bar("40%", "1.2rem")}</div>
        <div className="sn-kpis">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="sn-kpi muted" style={{ display: "grid", gap: "0.45rem" }}>
              {bar("50%", "0.6rem")}
              {bar("70%", "1.2rem")}
            </div>
          ))}
        </div>
        <div className="sn-card" style={{ padding: "1.25rem", display: "grid", gap: "0.8rem" }}>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i}>{bar(`${90 - i * 8}%`)}</div>
          ))}
        </div>
      </main>
    </div>
  );
}

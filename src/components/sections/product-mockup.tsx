"use client";

import { cn } from "@/lib/utils";

function Frame({
  title,
  meta,
  children,
}: {
  title: string;
  meta: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-surface-1">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-[12px] font-medium text-ink">{title}</span>
        </div>
        <span className="text-[11px] text-ink-subtle">{meta}</span>
      </div>
      <div className="h-[268px] overflow-hidden">{children}</div>
    </div>
  );
}

function Row({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-2.5 text-[12px]",
        className
      )}
    >
      {children}
    </div>
  );
}

const statusTone: Record<string, string> = {
  Hadir: "text-emerald-400 border-emerald-400/25 bg-emerald-400/10",
  WFH: "text-accent border-accent/25 bg-accent/10",
  Cuti: "text-amber-400 border-amber-400/25 bg-amber-400/10",
};

function Pill({ label }: { label: string }) {
  return (
    <span
      className={cn(
        "rounded-sm border px-1.5 py-0.5 text-[10px]",
        statusTone[label] ?? "border-line text-ink-subtle"
      )}
    >
      {label}
    </span>
  );
}

function PosMockup() {
  const items = [
    ["Kopi Susu Gula Aren", "2", "56.000"],
    ["Croissant Butter", "1", "32.000"],
    ["Americano Ice", "3", "60.000"],
    ["Chocolate Cake", "1", "45.000"],
  ];
  return (
    <Frame title="Kasir 01" meta="Outlet Jakarta">
      <div className="grid h-full grid-cols-5">
        <div className="col-span-3 divide-y divide-line border-r border-line">
          {items.map(([name, qty, price]) => (
            <Row key={name}>
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-sm border border-line text-[10px] tabular-nums text-ink-subtle">
                  {qty}
                </span>
                <span className="text-ink-muted">{name}</span>
              </div>
              <span className="tabular-nums text-ink">{price}</span>
            </Row>
          ))}
        </div>
        <div className="col-span-2 flex flex-col justify-between p-4">
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] text-ink-subtle">
              <span>Subtotal</span>
              <span className="tabular-nums">193.000</span>
            </div>
            <div className="flex justify-between text-[11px] text-ink-subtle">
              <span>PPN 11%</span>
              <span className="tabular-nums">21.230</span>
            </div>
            <div className="flex justify-between border-t border-line pt-2 text-[13px] font-semibold text-ink">
              <span>Total</span>
              <span className="tabular-nums">214.230</span>
            </div>
          </div>
          <div className="space-y-1.5">
            {["Tunai", "QRIS", "Kartu Debit"].map((m, i) => (
              <div
                key={m}
                className={cn(
                  "rounded-sm border px-2.5 py-1.5 text-center text-[11px]",
                  i === 1
                    ? "border-accent/40 bg-accent/10 text-accent"
                    : "border-line text-ink-muted"
                )}
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function ErpMockup() {
  const modules = [
    ["Keuangan", "Rp1,24 M", "+6,2%"],
    ["Inventori", "8.420 SKU", "+1,8%"],
    ["Purchasing", "142 PO", "+12%"],
    ["Produksi", "96,4%", "+0,7%"],
  ];
  const ledger = [
    ["JV-20481", "Penjualan Outlet", "182.400.000"],
    ["JV-20480", "Pembelian Bahan", "64.120.000"],
    ["JV-20479", "Biaya Operasional", "28.900.000"],
  ];
  return (
    <Frame title="ERP Overview" meta="Konsolidasi 4 cabang">
      <div className="grid grid-cols-2 divide-x divide-y divide-line border-b border-line">
        {modules.map(([name, value, delta]) => (
          <div key={name} className="px-4 py-3">
            <p className="text-[11px] text-ink-subtle">{name}</p>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-[13px] font-medium tabular-nums text-ink">
                {value}
              </span>
              <span className="text-[10px] tabular-nums text-accent">
                {delta}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="divide-y divide-line">
        {ledger.map(([id, desc, amt]) => (
          <Row key={id}>
            <div className="flex items-center gap-3">
              <span className="tabular-nums text-ink-subtle">{id}</span>
              <span className="text-ink-muted">{desc}</span>
            </div>
            <span className="tabular-nums text-ink">{amt}</span>
          </Row>
        ))}
      </div>
    </Frame>
  );
}

function HrMockup() {
  const staff = [
    ["Rizky Pratama", "Sales Executive", "Hadir"],
    ["Dewi Anggraini", "Finance Staff", "WFH"],
    ["Bagus Setiawan", "Warehouse Lead", "Hadir"],
    ["Sari Wulandari", "HR Generalist", "Cuti"],
    ["Andi Nugroho", "IT Support", "Hadir"],
  ];
  return (
    <Frame title="Absensi Hari Ini" meta="42 dari 48 karyawan">
      <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
        {[
          ["Hadir", "38"],
          ["WFH", "4"],
          ["Cuti", "6"],
        ].map(([label, value]) => (
          <div key={label} className="px-4 py-3">
            <p className="text-[11px] text-ink-subtle">{label}</p>
            <p className="mt-1 text-[15px] font-semibold tabular-nums text-ink">
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="divide-y divide-line">
        {staff.map(([name, role, status]) => (
          <Row key={name}>
            <div className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-line text-[9px] text-ink-subtle">
                {name.split(" ").map((w) => w[0]).join("")}
              </span>
              <span className="text-ink-muted">{name}</span>
              <span className="text-[11px] text-ink-subtle">{role}</span>
            </div>
            <Pill label={status} />
          </Row>
        ))}
      </div>
    </Frame>
  );
}

function CrmMockup() {
  const columns = [
    { name: "Lead", deals: [["PT Maju Jaya", "12 jt"], ["CV Sinar", "8 jt"]] },
    { name: "Qualified", deals: [["PT Anugrah", "45 jt"]] },
    { name: "Proposal", deals: [["Klinik Sehat", "28 jt"], ["Toko Berkah", "16 jt"]] },
    { name: "Won", deals: [["PT Nusantara", "92 jt"]] },
  ];
  return (
    <Frame title="Sales Pipeline" meta="Q3 · 6 deals aktif">
      <div className="grid h-full grid-cols-4 divide-x divide-line">
        {columns.map((col) => (
          <div key={col.name} className="p-2.5">
            <div className="flex items-center justify-between px-1 pb-2">
              <span className="text-[10px] uppercase tracking-wider text-ink-subtle">
                {col.name}
              </span>
              <span className="text-[10px] tabular-nums text-ink-subtle">
                {col.deals.length}
              </span>
            </div>
            <div className="space-y-1.5">
              {col.deals.map(([company, value]) => (
                <div
                  key={company}
                  className={cn(
                    "rounded-sm border p-2",
                    col.name === "Won"
                      ? "border-accent/30 bg-accent/5"
                      : "border-line bg-surface-2"
                  )}
                >
                  <p className="text-[11px] leading-tight text-ink">{company}</p>
                  <p className="mt-1 text-[10px] tabular-nums text-ink-subtle">
                    Rp{value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function InventoryMockup() {
  const stock = [
    ["SKU-1042", "Kemasan 500ml", "Gudang A", "1.284", false],
    ["SKU-2087", "Label Premium", "Gudang A", "96", true],
    ["SKU-3311", "Karton Box M", "Gudang B", "742", false],
    ["SKU-4520", "Segel Botol", "Gudang B", "38", true],
    ["SKU-5109", "Tutup Ulir", "Gudang C", "2.106", false],
  ];
  return (
    <Frame title="Stok Multi-Gudang" meta="3 lokasi · 8.420 SKU">
      <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
        {[
          ["Total SKU", "8.420"],
          ["Stok Menipis", "24"],
          ["Nilai Stok", "Rp3,8 M"],
        ].map(([label, value]) => (
          <div key={label} className="px-4 py-3">
            <p className="text-[11px] text-ink-subtle">{label}</p>
            <p className="mt-1 text-[13px] font-medium tabular-nums text-ink">
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="divide-y divide-line">
        {stock.map(([sku, name, wh, qty, low]) => (
          <Row key={sku as string}>
            <div className="flex items-center gap-3">
              <span className="tabular-nums text-ink-subtle">{sku}</span>
              <span className="text-ink-muted">{name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-ink-subtle">{wh}</span>
              <span
                className={cn(
                  "w-12 text-right tabular-nums",
                  low ? "text-amber-400" : "text-ink"
                )}
              >
                {qty}
              </span>
            </div>
          </Row>
        ))}
      </div>
    </Frame>
  );
}

const mockups: Record<string, () => React.ReactElement> = {
  pos: PosMockup,
  erp: ErpMockup,
  hr: HrMockup,
  crm: CrmMockup,
  inventory: InventoryMockup,
};

export function ProductMockup({ id }: { id: string }) {
  const Component = mockups[id] ?? PosMockup;
  return <Component />;
}

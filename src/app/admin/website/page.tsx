import { services } from "@/config/services";
import { getSiteData } from "@/lib/site-content";
import { AdminShell, adminGate } from "../shell";
import { ContactForm, PortfolioForm, PricingEditor, PromoForm, ProposalForm, ServicePricesForm, TaxForm } from "./forms";

export default async function WebsiteSettingsPage() {
  const gate = await adminGate();
  if (gate) return gate;
  const data = await getSiteData();

  const card = (title: string, note: string, body: React.ReactNode) => (
    <section className="sn-card" style={{ marginBottom: "1.5rem" }}>
      <div className="sn-card-header">
        <h3 className="sn-card-title">{title}</h3>
      </div>
      <p className="sn-muted" style={{ padding: "0 1.5rem 1rem" }}>
        {note}
      </p>
      {body}
    </section>
  );

  return (
    <AdminShell active="website" title="Atur Website" subtitle="Harga, kontak, dan isi proposal. Perubahan langsung tampil di agsora.tech">
      {card(
        "Daftar harga layanan",
        "Dipakai di halaman Harga, kalkulator estimasi, formulir kontak, daftar item penawaran sales, dan proposal PDF.",
        <PricingEditor items={data.pricing} />
      )}
      {card(
        "Harga Mulai dari per layanan",
        "Tampil di beranda, halaman layanan, dan chat WhatsApp di website.",
        <ServicePricesForm services={services.map((s) => ({ id: s.id, title: s.title.id }))} prices={data.servicePrices} />
      )}
      {card("Kontak & media sosial", "Tampil di footer, header, halaman kontak, dan data terstruktur Google.", <ContactForm contact={data.contact} />)}
      {card(
        "Pajak (PPN)",
        "Tarif 12% atas DPP Nilai Lain (11/12) berarti beban efektif 11%. Hanya PKP yang boleh memungut PPN.",
        <TaxForm tax={data.tax} />
      )}
      {card("Portofolio & testimoni", "Studi kasus dan kutipan klien di beranda. Bukti sosial paling menentukan bagi calon klien baru.", <PortfolioForm items={data.portfolio} />)}
      {card("Promo & banner", "Banner di atas website dan diskon siap pakai di editor penawaran. Promo berakhir sendiri pada tanggal yang diisi.", <PromoForm promo={data.promo} />)}
      {card("Isi proposal (filosofi AG·SORA)", "Bagian filosofi, pilar, tahapan kerja, dan komitmen pada PDF proposal.", <ProposalForm proposal={data.proposal} />)}
    </AdminShell>
  );
}

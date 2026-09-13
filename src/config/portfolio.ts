export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  tech: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  images: { src: string; caption: string }[];
};

/**
 * Contoh hasil kerja / capability showcase — bukan case study klien dengan
 * metrik bisnis terukur. Proyek dikerjakan sebagai showcase kapasitas tim,
 * bukan delivery untuk klien bernama di atas. Jangan tambahkan klaim angka
 * hasil bisnis (konversi, efisiensi, dll) tanpa data klien yang terverifikasi.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "erp-kontraktor",
    title: "ERP Kontraktor",
    category: "ERP",
    tags: ["Multi-Role", "Manajemen Proyek", "Keuangan"],
    tech: "Bootstrap, Vanilla JS, Supabase",
    tagline:
      "Sistem ERP kontraktor: proyek, RAB, keuangan, SDM, dan gudang terintegrasi dalam satu dashboard.",
    problem:
      "Kontraktor mengelola proyek, RAB, pengadaan material, absensi mandor, dan laporan keuangan di file Excel terpisah — sering tidak sinkron dan rawan hilang.",
    solution:
      "Sistem ERP kontraktor terpadu dengan login multi-role (Owner, PM, Finance, Mandor, Warehouse), dashboard proyek real-time, RAB, BAST, penggajian, dan laporan keuangan.",
    features: [
      "Dashboard eksekutif per proyek & keuangan",
      "Manajemen proyek & RAB",
      "Modul keuangan & faktur BAST",
      "HR: absensi, penggajian, PPh 21",
      "Gudang & pengadaan material",
      "Multi-role: Owner / Admin / Finance / PM / Mandor / Warehouse",
    ],
    images: [
      { src: "/portfolio/erp-kontraktor/dashboard.webp", caption: "Dashboard eksekutif — kontrol proyek, HPP, stok, dan keuangan dalam satu layar" },
      { src: "/portfolio/erp-kontraktor/project-hpp.webp", caption: "Kontrol proyek & HPP — RAB vs realisasi biaya, margin per proyek real-time" },
      { src: "/portfolio/erp-kontraktor/mobile-lapangan.webp", caption: "Mobile lapangan — mandor input absensi, foto progres, dan request material dari HP" },
    ],
  },
  {
    slug: "koperasi-emas",
    title: "Landing Page Investasi Emas Koperasi",
    category: "Landing Page",
    tags: ["Next.js", "Supabase", "Dashboard Multi-Role"],
    tech: "Next.js 15, TypeScript, Supabase, Tailwind CSS",
    tagline:
      "Platform investasi emas koperasi: tabungan, cicil emas, gadai simpanan, dan simulasi real-time.",
    problem:
      "Koperasi emas mengandalkan brosur dan WhatsApp manual untuk jualan produk tabungan dan cicil emas. Calon anggota tidak bisa cek harga emas terkini atau simulasi cicilan sendiri.",
    solution:
      "Landing page investasi emas dengan harga emas real-time, simulator cicilan dan buyback interaktif, serta dashboard multi-role (Admin, Master, Member) untuk kelola anggota, tabungan, dan SHU tahunan.",
    features: [
      "Harga emas hari ini real-time + grafik 30 hari",
      "Simulasi cicilan & buyback interaktif",
      "Tabungan emas, gadai simpanan, SHU tahunan",
      "Dashboard member: portofolio & riwayat transaksi",
      "Dashboard admin/master: kelola anggota & transaksi",
    ],
    images: [
      { src: "/portfolio/koperasi-emas/hero.webp", caption: "Beranda — harga emas live, simulasi cicilan, dan ringkasan layanan" },
      { src: "/portfolio/koperasi-emas/harga-emas.webp", caption: "Harga emas hari ini — perbandingan harga dan produk simpanan" },
      { src: "/portfolio/koperasi-emas/simulasi.webp", caption: "Simulasi cicilan & buyback dengan estimasi hasil" },
      { src: "/portfolio/koperasi-emas/mobile.webp", caption: "Tampilan mobile — akses harga emas dan simulasi dari HP" },
    ],
  },
  {
    slug: "radiance-clinic",
    title: "Landing Page Klinik Estetika",
    category: "Landing Page",
    tags: ["React", "Booking WhatsApp", "SEO Lokal"],
    tech: "React, Tailwind CSS, Vercel",
    tagline:
      "Landing page klinik estetika: katalog treatment, galeri before-after, dan booking konsultasi langsung ke WhatsApp.",
    problem:
      "Klinik mengandalkan Instagram dan WhatsApp manual untuk terima booking konsultasi. Calon pasien kesulitan melihat daftar treatment dan kisaran harga sebelum memutuskan datang.",
    solution:
      "Landing page satu halaman dengan katalog treatment dan kisaran harga, galeri before-after per kategori, dan form booking yang langsung terhubung ke WhatsApp admin.",
    features: [
      "Katalog treatment & kisaran harga",
      "Galeri before-after per kategori",
      "Form booking konsultasi ke WhatsApp",
      "SEO lokal untuk pencarian \"klinik estetika\" di kota terkait",
    ],
    images: [
      { src: "/portfolio/radiance-clinic/hero.webp", caption: "Beranda — headline utama, trust badge, dan CTA booking konsultasi" },
      { src: "/portfolio/radiance-clinic/catalog.webp", caption: "Katalog treatment — daftar layanan populer dengan kisaran harga" },
      { src: "/portfolio/radiance-clinic/gallery.webp", caption: "Before & after — galeri hasil per kategori treatment" },
      { src: "/portfolio/radiance-clinic/mobile.webp", caption: "Tampilan mobile — booking konsultasi langsung dari HP" },
    ],
  },
  {
    slug: "skilva-bootcamp",
    title: "Landing Page Pendaftaran Bootcamp",
    category: "Landing Page",
    tags: ["Next.js", "Form Pendaftaran", "Countdown Batch"],
    tech: "Next.js, Tailwind CSS, Google Sheets API, Vercel",
    tagline:
      "Landing page pendaftaran bootcamp digital: kurikulum per batch, testimoni alumni, dan pendaftaran online otomatis.",
    problem:
      "Pendaftaran bootcamp masih lewat Google Form tanpa informasi kurikulum yang jelas — calon peserta sering bertanya ulang hal yang sama, dan data pendaftar direkap manual.",
    solution:
      "Landing page dengan kurikulum dan jadwal per batch, harga jelas di depan, countdown penutupan pendaftaran, serta form pendaftaran yang otomatis tersimpan tanpa rekap manual.",
    features: [
      "Kurikulum & jadwal per batch",
      "Countdown penutupan pendaftaran",
      "Form pendaftaran otomatis tersimpan",
      "Perbandingan paket kelas",
    ],
    images: [
      { src: "/portfolio/skilva-bootcamp/hero.webp", caption: "Beranda — headline utama, countdown batch, dan visual code editor" },
      { src: "/portfolio/skilva-bootcamp/catalog.webp", caption: "Kurikulum — modul per batch dengan topik dan durasi jelas" },
      { src: "/portfolio/skilva-bootcamp/gallery.webp", caption: "Testimoni alumni — bagian cerita peserta yang sudah lulus" },
      { src: "/portfolio/skilva-bootcamp/mobile.webp", caption: "Tampilan mobile — pendaftaran batch langsung dari HP" },
    ],
  },
  {
    slug: "premium-fashion",
    title: "E-Commerce Fashion Premium",
    category: "E-Commerce",
    tags: ["React", "TypeScript", "Admin Dashboard"],
    tech: "React 18, TypeScript, Vite, Tailwind CSS 4",
    tagline:
      "Toko fashion premium: katalog produk, wishlist, keranjang, checkout, dan admin dashboard.",
    problem:
      "Brand fashion premium butuh toko online yang mencerminkan identitas luxury mereka — bukan template generik yang sama dengan ribuan toko lain.",
    solution:
      "Platform e-commerce custom dengan desain full-custom berbasis warna hitam-gold, dilengkapi live shopping banner, flash sale real-time, admin dashboard dengan analytics penjualan, dan fitur product comparison.",
    features: [
      "Homepage: hero, live shopping banner, flash sale countdown, trending products",
      "Katalog produk: filter brand/kategori/size/harga, product comparison",
      "Product detail: galeri gambar, pilih size, add-to-cart, wishlist",
      "Cart & checkout: kupon diskon, ringkasan pesanan, checkout multi-step",
      "Admin dashboard: analytics penjualan, manajemen produk, kelola pesanan",
      "Dark mode penuh, bahasa ID/EN, mobile-first responsif",
    ],
    images: [
      { src: "/portfolio/premium-fashion/hero.webp", caption: "Homepage — hero section dan trending products dalam desain hitam-gold" },
      { src: "/portfolio/premium-fashion/catalog.webp", caption: "Katalog — filter brand/kategori/ukuran, product grid dengan wishlist" },
      { src: "/portfolio/premium-fashion/product-detail.webp", caption: "Product detail — galeri gambar, pilih size, product comparison" },
      { src: "/portfolio/premium-fashion/mobile.webp", caption: "Tampilan mobile — full-featured dark mode, bottom navigation" },
    ],
  },
];

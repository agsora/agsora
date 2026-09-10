/**
 * Per-service landing page content.
 *
 * Each service gets its own page so it can target one keyword properly.
 * A single /services page competing for "ERP Indonesia", "POS Indonesia",
 * "jasa pembuatan aplikasi" and seven other terms at once ranks for none of
 * them well; a focused page per intent is what search engines can actually
 * match to a query.
 *
 * Keep `metaTitle` under ~60 characters and `metaDescription` under ~155 so
 * they are not truncated in search results.
 */

export type ServiceFaq = { question: string; answer: string };

export type ServiceDetail = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Concrete deliverables — what the client actually receives. */
  deliverables: string[];
  /** Who this service suits, to help the reader self-qualify. */
  forWho: string[];
  faqs: ServiceFaq[];
  /** Slugs of blog posts that support this service page. */
  relatedPosts: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "custom-software": {
    metaTitle: "Jasa Pembuatan Custom Software Indonesia | AG·SORA",
    metaDescription:
      "Jasa pembuatan custom software untuk perusahaan di Indonesia. Sistem dibangun mengikuti proses bisnis Anda. Mulai dari Rp8.000.000.",
    h1: "Jasa Pembuatan Custom Software untuk Bisnis Indonesia",
    intro:
      "Ketika proses kerja Anda tidak cocok dengan software yang tersedia di pasaran, memaksakan diri menyesuaikan sering kali lebih mahal daripada membangun sendiri. Kami merancang sistem yang mengikuti cara kerja Anda, bukan sebaliknya.",
    deliverables: [
      "Pemetaan proses bisnis dan dokumen kebutuhan",
      "Rancangan arsitektur sistem dan basis data",
      "Aplikasi sesuai ruang lingkup yang disepakati",
      "Dokumentasi teknis dan panduan pengguna",
      "Pelatihan tim dan pendampingan setelah rilis",
    ],
    forWho: [
      "Perusahaan dengan alur kerja yang tidak umum di industrinya",
      "Bisnis yang biaya lisensi per user-nya sudah melampaui biaya membangun sendiri",
      "Organisasi dengan aturan internal yang tidak diakomodasi produk jadi",
    ],
    faqs: [
      {
        question: "Berapa biaya pembuatan custom software?",
        answer:
          "Mulai dari Rp8.000.000, bergantung pada jumlah modul, kompleksitas alur kerja, dan integrasi yang dibutuhkan. Angka pastinya disampaikan dalam proposal setelah kebutuhan dipetakan.",
      },
      {
        question: "Apakah source code menjadi milik perusahaan kami?",
        answer:
          "Skema kepemilikan source code dinyatakan tertulis dalam kontrak sejak awal, sebelum pengerjaan dimulai.",
      },
      {
        question: "Bagaimana kalau kebutuhan berubah saat pengerjaan?",
        answer:
          "Perubahan kecil kami akomodasi dalam ruang lingkup berjalan. Perubahan yang menambah modul dihitung ulang dampaknya terhadap timeline dan biaya, lalu disepakati tertulis.",
      },
    ],
    relatedPosts: [
      "custom-software-vs-software-jadi",
      "menghitung-biaya-sebenarnya-project-software",
      "kenapa-project-software-gagal",
    ],
  },

  website: {
    metaTitle: "Jasa Pembuatan Website Perusahaan | AG·SORA",
    metaDescription:
      "Jasa pembuatan website company profile, e-commerce, dan website dengan admin dashboard. Cepat, SEO-friendly. Mulai dari Rp3.500.000.",
    h1: "Jasa Pembuatan Website Perusahaan",
    intro:
      "Website bukan sekadar brosur digital. Kami membangun website yang cepat diakses, mudah ditemukan di mesin pencari, dan bisa dikelola sendiri oleh tim Anda tanpa bantuan developer.",
    deliverables: [
      "Desain yang menyesuaikan identitas brand Anda",
      "Tampilan responsif di desktop, tablet, dan ponsel",
      "Struktur SEO dasar: metadata, sitemap, dan data terstruktur",
      "Panel admin untuk mengelola konten sendiri",
      "Optimasi kecepatan muat dan Core Web Vitals",
    ],
    forWho: [
      "Perusahaan yang butuh kehadiran online yang kredibel",
      "Bisnis yang ingin website-nya ditemukan lewat pencarian, bukan hanya dibagikan manual",
      "Tim yang ingin memperbarui konten tanpa bergantung pada vendor",
    ],
    faqs: [
      {
        question: "Berapa biaya pembuatan website perusahaan?",
        answer:
          "Landing page mulai dari Rp2.500.000, company profile mulai dari Rp3.500.000, website dengan admin dashboard mulai dari Rp5.000.000, dan e-commerce mulai dari Rp7.500.000.",
      },
      {
        question: "Apakah sudah termasuk domain dan hosting?",
        answer:
          "Biaya domain dan hosting berada di luar biaya pembuatan kecuali dinyatakan lain. Kami membantu proses penyiapannya.",
      },
      {
        question: "Apakah website-nya bisa saya kelola sendiri?",
        answer:
          "Ya. Kami menyertakan panel admin dan pelatihan singkat agar tim Anda bisa memperbarui konten tanpa bantuan developer.",
      },
    ],
    relatedPosts: ["checklist-memilih-software-house", "menghitung-biaya-sebenarnya-project-software"],
  },

  mobile: {
    metaTitle: "Jasa Pembuatan Aplikasi Mobile Android & iOS | AG·SORA",
    metaDescription:
      "Jasa pembuatan aplikasi mobile Android dan iOS untuk bisnis. Dari aplikasi pelanggan hingga aplikasi operasional lapangan. Mulai Rp10.000.000.",
    h1: "Jasa Pembuatan Aplikasi Mobile Android & iOS",
    intro:
      "Aplikasi mobile masuk akal ketika pengguna Anda butuh akses cepat berulang kali, bekerja di lapangan, atau memerlukan fitur perangkat seperti kamera dan lokasi. Kami membantu menentukan apakah aplikasi benar-benar jawabannya sebelum membangun.",
    deliverables: [
      "Rancangan alur pengguna dan antarmuka aplikasi",
      "Aplikasi untuk Android dan/atau iOS",
      "Integrasi dengan sistem backend yang sudah ada",
      "Pendampingan proses rilis ke Play Store dan App Store",
      "Dokumentasi dan pelatihan tim",
    ],
    forWho: [
      "Bisnis dengan tim lapangan yang butuh mencatat data di lokasi",
      "Layanan yang pelanggannya mengakses berulang kali setiap minggu",
      "Operasional yang membutuhkan kamera, GPS, atau notifikasi",
    ],
    faqs: [
      {
        question: "Berapa biaya pembuatan aplikasi mobile?",
        answer:
          "Mulai dari Rp10.000.000 per platform. Biaya bergantung pada jumlah fitur, kebutuhan integrasi, dan apakah aplikasi harus bekerja saat offline.",
      },
      {
        question: "Apakah harus membuat untuk Android dan iOS sekaligus?",
        answer:
          "Tidak. Banyak bisnis memulai dari satu platform yang paling banyak dipakai penggunanya, lalu menambahkan platform kedua setelah aplikasinya terbukti dipakai.",
      },
      {
        question: "Apakah AG·SORA membantu proses rilis ke store?",
        answer:
          "Ya, kami mendampingi proses submission ke Play Store dan App Store, termasuk penyiapan aset yang dibutuhkan.",
      },
    ],
    relatedPosts: ["custom-software-vs-software-jadi", "kenapa-project-software-gagal"],
  },

  erp: {
    metaTitle: "Jasa Pembuatan ERP Indonesia | Sistem ERP Custom AG·SORA",
    metaDescription:
      "Jasa pembuatan sistem ERP untuk perusahaan Indonesia. Integrasi keuangan, inventori, produksi, dan pembelian. ERP Basic mulai Rp15.000.000.",
    h1: "Jasa Pembuatan Sistem ERP untuk Perusahaan Indonesia",
    intro:
      "ERP menyatukan keuangan, inventori, pembelian, dan produksi dalam satu sistem sehingga setiap angka punya satu sumber. Kami membangunnya bertahap, dimulai dari modul yang paling menyakitkan bagi operasional Anda.",
    deliverables: [
      "Pemetaan proses lintas divisi sebelum pengembangan",
      "Modul keuangan, inventori, pembelian, dan produksi sesuai kebutuhan",
      "Konsolidasi laporan multi-cabang",
      "Migrasi data dari sistem dan spreadsheet lama",
      "Pelatihan bertahap per divisi",
    ],
    forWho: [
      "Perusahaan yang laporan bulanannya selalu terlambat karena menunggu rekap manual",
      "Bisnis multi-cabang yang sulit melihat kondisi gabungan secara real-time",
      "Organisasi yang satu transaksinya masih diinput berkali-kali di divisi berbeda",
    ],
    faqs: [
      {
        question: "Berapa biaya implementasi ERP?",
        answer:
          "ERP Basic mulai dari Rp15.000.000 dan ERP Advanced mulai dari Rp25.000.000. Untuk kebutuhan enterprise atau multi-cabang, biaya disusun berdasarkan ruang lingkup.",
      },
      {
        question: "Apakah ERP harus diterapkan sekaligus ke semua divisi?",
        answer:
          "Tidak disarankan. Menerapkan seluruh modul serentak menumpuk risiko di satu titik. Kami biasanya mulai dari satu atau dua modul, memastikan berjalan, lalu memperluas.",
      },
      {
        question: "Bisakah ERP terhubung dengan software akuntansi yang sudah kami pakai?",
        answer:
          "Dalam banyak kasus bisa, selama software tersebut menyediakan API atau jalur ekspor data. Kami memeriksa kemungkinannya pada tahap Discover.",
      },
    ],
    relatedPosts: [
      "tanda-bisnis-anda-sudah-butuh-erp",
      "biaya-tersembunyi-data-silo",
      "persiapan-migrasi-data-sistem-baru",
    ],
  },

  pos: {
    metaTitle: "Jasa Pembuatan Sistem POS / Kasir Indonesia | AG·SORA",
    metaDescription:
      "Jasa pembuatan sistem POS dan aplikasi kasir untuk retail dan F&B. Multi-outlet, stok real-time, laporan otomatis. Mulai Rp6.000.000.",
    h1: "Jasa Pembuatan Sistem POS & Aplikasi Kasir",
    intro:
      "Sistem kasir yang baik tidak berhenti di mencetak struk. Ia menghubungkan penjualan dengan stok dan laporan, sehingga Anda tahu kondisi bisnis tanpa menunggu rekap akhir hari.",
    deliverables: [
      "Aplikasi kasir yang tetap berjalan saat internet terputus",
      "Manajemen produk, varian, dan harga per outlet",
      "Stok real-time per lokasi dan transfer antar outlet",
      "Hak akses berjenjang untuk kasir, supervisor, dan pemilik",
      "Laporan penjualan, shift, dan konsolidasi multi-outlet",
    ],
    forWho: [
      "Retail dan F&B dengan lebih dari satu outlet",
      "Bisnis yang stok fisiknya sering berbeda dengan catatan sistem",
      "Pemilik yang ingin memantau performa outlet tanpa datang ke lokasi",
    ],
    faqs: [
      {
        question: "Berapa biaya pembuatan sistem POS?",
        answer:
          "POS custom mulai dari Rp6.000.000. Tersedia juga AG·SORA POS sebagai produk siap pakai mulai dari Rp99.000 per bulan jika kebutuhan Anda relatif standar.",
      },
      {
        question: "Apakah sistem tetap bisa dipakai saat internet mati?",
        answer:
          "Ya. Sistem kami rancang agar transaksi tetap dapat diproses saat koneksi terputus, lalu disinkronkan otomatis ketika koneksi kembali.",
      },
      {
        question: "Apakah bisa terhubung dengan QRIS dan payment gateway?",
        answer:
          "Bisa. Integrasi payment gateway dan QRIS termasuk kemampuan yang kami tangani, disesuaikan dengan penyedia yang Anda pakai.",
      },
    ],
    relatedPosts: ["memilih-sistem-pos-multi-outlet", "biaya-tersembunyi-data-silo"],
  },

  hris: {
    metaTitle: "Jasa Pembuatan HRIS Indonesia | Sistem HR Custom AG·SORA",
    metaDescription:
      "Jasa pembuatan HRIS untuk perusahaan Indonesia. Absensi, payroll, cuti, dan manajemen karyawan dalam satu sistem. Mulai Rp7.500.000.",
    h1: "Jasa Pembuatan Sistem HRIS untuk Perusahaan",
    intro:
      "HRIS menyentuh hal yang sensitif: kehadiran, gaji, dan kinerja. Kami membangunnya dengan urutan yang aman — merapikan data karyawan dan absensi lebih dulu, baru masuk ke perhitungan payroll.",
    deliverables: [
      "Basis data karyawan terpusat dengan hak akses terkontrol",
      "Absensi digital, termasuk untuk karyawan shift dan lapangan",
      "Pengajuan cuti dan izin dengan alur persetujuan",
      "Perhitungan payroll dan slip gaji otomatis",
      "Employee self-service agar HR tidak jadi titik kemacetan",
    ],
    forWho: [
      "Perusahaan yang absensi dan lemburnya masih direkap manual",
      "Bisnis dengan karyawan shift atau tim lapangan tanpa jam kerja tetap",
      "Tim HR yang waktunya habis untuk administrasi berulang",
    ],
    faqs: [
      {
        question: "Berapa biaya pembuatan HRIS?",
        answer:
          "HRIS custom mulai dari Rp7.500.000. Tersedia juga AG·SORA HR sebagai produk siap pakai mulai dari Rp99.000 per bulan.",
      },
      {
        question: "Apakah bisa menangani karyawan shift dan tim lapangan?",
        answer:
          "Bisa, dan ini justru bagian yang kami petakan lebih dulu. Sistem yang hanya mengakomodasi karyawan kantor akan membuat divisi lain kembali ke pencatatan manual.",
      },
      {
        question: "Bagaimana keamanan data karyawan?",
        answer:
          "Hak akses ditetapkan per peran sejak awal, sehingga data pribadi hanya dapat diakses pihak yang berkepentingan. Ketentuan penyimpanan data disepakati tertulis.",
      },
    ],
    relatedPosts: ["kesalahan-umum-implementasi-hris", "persiapan-migrasi-data-sistem-baru"],
  },

  crm: {
    metaTitle: "Jasa Pembuatan CRM Indonesia | Sistem CRM Custom AG·SORA",
    metaDescription:
      "Jasa pembuatan sistem CRM untuk tim sales. Pipeline penjualan, follow-up otomatis, dan laporan performa. Mulai dari Rp7.500.000.",
    h1: "Jasa Pembuatan Sistem CRM untuk Tim Sales",
    intro:
      "CRM membuat pipeline penjualan terlihat: siapa sedang di tahap mana, follow-up apa yang tertunda, dan peluang mana yang berisiko hilang. Tanpa itu, performa sales hanya bisa dinilai setelah periode berakhir.",
    deliverables: [
      "Manajemen leads dan deals dengan tahapan yang bisa disesuaikan",
      "Pengingat dan penjadwalan follow-up",
      "Riwayat interaksi pelanggan yang lengkap",
      "Integrasi WhatsApp dan email sesuai kebutuhan",
      "Laporan performa per sales dan per periode",
    ],
    forWho: [
      "Tim sales yang masih mencatat prospek di spreadsheet pribadi",
      "Bisnis yang kehilangan peluang karena follow-up terlewat",
      "Manajemen yang butuh gambaran pipeline sebelum periode berakhir",
    ],
    faqs: [
      {
        question: "Berapa biaya pembuatan CRM?",
        answer:
          "CRM custom mulai dari Rp7.500.000. Tersedia juga AG·SORA CRM sebagai produk siap pakai mulai dari Rp99.000 per bulan.",
      },
      {
        question: "Apakah bisa terhubung dengan WhatsApp?",
        answer:
          "Bisa, melalui WhatsApp Business API. Ruang lingkup integrasinya disesuaikan dengan cara tim sales Anda berkomunikasi.",
      },
      {
        question: "Apakah data pelanggan lama bisa dipindahkan?",
        answer:
          "Bisa, selama data tersedia dalam format yang dapat diekspor. Proses pembersihan dan migrasi termasuk bagian dari implementasi.",
      },
    ],
    relatedPosts: ["biaya-tersembunyi-data-silo", "custom-software-vs-software-jadi"],
  },

  dashboard: {
    metaTitle: "Jasa Pembuatan Dashboard & Sistem Reporting | AG·SORA",
    metaDescription:
      "Jasa pembuatan dashboard bisnis dan sistem pelaporan real-time. Data operasional jadi dasar keputusan. Mulai dari Rp4.000.000.",
    h1: "Jasa Pembuatan Dashboard & Sistem Reporting",
    intro:
      "Data yang sudah Anda kumpulkan sering kali cukup untuk mengambil keputusan lebih baik — masalahnya hanya pada bagaimana data itu disajikan. Dashboard yang tepat mengubah tumpukan angka menjadi gambaran yang bisa ditindaklanjuti.",
    deliverables: [
      "Identifikasi metrik yang benar-benar memengaruhi keputusan",
      "Dashboard real-time yang dapat diakses lintas perangkat",
      "Konsolidasi data dari beberapa sumber sekaligus",
      "Laporan terjadwal yang dikirim otomatis",
      "Hak akses berbeda untuk tiap level manajemen",
    ],
    forWho: [
      "Manajemen yang keputusannya selalu berdasarkan data minggu lalu",
      "Perusahaan dengan data tersebar di beberapa sistem berbeda",
      "Tim yang menghabiskan waktu menyusun laporan rutin secara manual",
    ],
    faqs: [
      {
        question: "Berapa biaya pembuatan dashboard bisnis?",
        answer:
          "Mulai dari Rp4.000.000, bergantung pada jumlah sumber data yang perlu digabungkan dan kompleksitas perhitungan metriknya.",
      },
      {
        question: "Apakah bisa menarik data dari sistem yang sudah ada?",
        answer:
          "Bisa, selama sistem tersebut menyediakan API atau ekspor data. Ini kami periksa lebih dulu sebelum menyusun proposal.",
      },
      {
        question: "Apakah laporan bisa dikirim otomatis?",
        answer:
          "Bisa. Laporan terjadwal dapat dikirim lewat email atau kanal lain sesuai kebutuhan, dengan isi yang berbeda per penerima.",
      },
    ],
    relatedPosts: ["biaya-tersembunyi-data-silo", "tanda-bisnis-anda-sudah-butuh-erp"],
  },

  "ai-automation": {
    metaTitle: "Jasa AI Automation untuk Operasional Bisnis | AG·SORA",
    metaDescription:
      "Jasa AI automation untuk mengotomatiskan pekerjaan operasional yang berulang. Mulai dari Rp5.000.000.",
    h1: "Jasa AI Automation untuk Operasional Bisnis",
    intro:
      "Otomatisasi paling berhasil pada pekerjaan yang berulang dan berpola jelas — bukan pada keputusan yang butuh pertimbangan manusia. Kami membantu memilih proses mana yang layak diotomatiskan lebih dulu.",
    deliverables: [
      "Audit proses untuk menemukan pekerjaan berulang yang layak diotomatiskan",
      "Alur otomatisasi dengan batas kewenangan yang jelas",
      "Jalur pengambilalihan manusia ketika hasilnya meragukan",
      "Catatan audit agar setiap keputusan otomatis dapat ditelusuri",
      "Pengukuran waktu sebelum dan sesudah penerapan",
    ],
    forWho: [
      "Tim yang menjawab pertanyaan pelanggan serupa berulang kali setiap hari",
      "Bisnis yang masih menyalin data dari dokumen ke sistem secara manual",
      "Operasional dengan laporan rutin yang disusun ulang setiap minggu",
    ],
    faqs: [
      {
        question: "Berapa biaya AI automation?",
        answer:
          "Mulai dari Rp5.000.000, bergantung pada jumlah proses yang diotomatiskan dan integrasi yang dibutuhkan. Biaya layanan AI pihak ketiga berada di luar itu kecuali dinyatakan lain.",
      },
      {
        question: "Apakah otomatisasi ini menggantikan karyawan?",
        answer:
          "Fokusnya memindahkan pekerjaan berulang yang tidak menambah nilai, sehingga tim bisa mengerjakan hal yang butuh pertimbangan manusia. Untuk keputusan yang menyangkut uang atau komitmen ke pelanggan, kami selalu menyarankan tetap ada persetujuan manusia.",
      },
      {
        question: "Bagaimana kalau sistemnya salah pada kasus tidak biasa?",
        answer:
          "Itu diantisipasi sejak perancangan. Selalu ada jalur agar pekerjaan bisa diambil alih manusia, serta catatan yang memungkinkan Anda menelusuri kenapa suatu keputusan diambil.",
      },
    ],
    relatedPosts: ["memulai-ai-automation-untuk-operasional"],
  },

  "api-integration": {
    metaTitle: "Jasa Integrasi API & Sistem Bisnis | AG·SORA",
    metaDescription:
      "Jasa integrasi API untuk menghubungkan sistem internal dengan payment gateway, marketplace, dan layanan pihak ketiga. Mulai Rp3.000.000.",
    h1: "Jasa Integrasi API & Penghubung Antar Sistem",
    intro:
      "Sistem yang tidak saling bicara memaksa tim menyalin data secara manual — sumber selisih laporan yang paling sering kami temui. Integrasi menghubungkan sistem yang sudah Anda pakai sehingga data mengalir satu arah tanpa input ganda.",
    deliverables: [
      "Pemeriksaan dokumentasi teknis sistem yang akan dihubungkan",
      "Perancangan alur data dan penanganan kegagalan",
      "Integrasi payment gateway, marketplace, atau layanan lain",
      "Monitoring dan notifikasi ketika sinkronisasi bermasalah",
      "Dokumentasi alur integrasi untuk tim Anda",
    ],
    forWho: [
      "Bisnis yang menyalin pesanan marketplace ke sistem internal secara manual",
      "Perusahaan dengan beberapa sistem yang datanya sering tidak sinkron",
      "Tim yang butuh menghubungkan sistem lama dengan aplikasi baru",
    ],
    faqs: [
      {
        question: "Berapa biaya integrasi API?",
        answer:
          "Mulai dari Rp3.000.000 per integrasi, bergantung pada kompleksitas sistem yang dihubungkan dan seberapa lengkap dokumentasi teknisnya.",
      },
      {
        question: "Bagaimana kalau sistem lama kami tidak punya API?",
        answer:
          "Masih sering ada jalan lain, misalnya lewat ekspor data terjadwal atau akses basis data langsung. Kami periksa kemungkinannya lebih dulu dan sampaikan apa yang realistis.",
      },
      {
        question: "Apa yang terjadi kalau sinkronisasi gagal?",
        answer:
          "Alur penanganan kegagalan dirancang sejak awal, termasuk percobaan ulang otomatis dan notifikasi ke tim agar masalah tidak berlarut tanpa disadari.",
      },
    ],
    relatedPosts: ["biaya-tersembunyi-data-silo", "persiapan-migrasi-data-sistem-baru"],
  },
};

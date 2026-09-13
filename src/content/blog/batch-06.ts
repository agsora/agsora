import type { PostSource } from "@/config/blog";

export const posts: PostSource[] = [
  {
    slug: "kebutuhan-crm-untuk-bisnis-b2b",
    title: "Kebutuhan CRM untuk Bisnis B2B dengan Siklus Penjualan Panjang",
    excerpt:
      "Penjualan B2B melibatkan banyak orang, banyak pertemuan, dan keputusan yang bisa memakan waktu berbulan-bulan. CRM-nya harus dirancang untuk kerumitan itu.",
    category: "Penjualan & CRM",
    publishedAt: "2026-06-16",
    tags: ["crm", "sales", "pelanggan"],
    cover: {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      alt: "Dua orang berjabat tangan di ruang kantor",
    },
    body: [
      {
        type: "p",
        text: "Menjual kepada bisnis lain berbeda dengan menjual kepada konsumen. Satu transaksi bisa melibatkan pengguna, atasan, bagian pengadaan, dan bagian keuangan. Prosesnya melewati presentasi, uji coba, negosiasi, dan persetujuan internal pelanggan. CRM sederhana yang dirancang untuk transaksi cepat sering tidak cukup.",
      },
      { type: "h2", text: "Satu perusahaan, banyak kontak" },
      {
        type: "p",
        text: "CRM untuk B2B perlu memisahkan data perusahaan dari data orang di dalamnya. Setiap kontak punya peran berbeda dalam keputusan: siapa pengguna, siapa yang memengaruhi, dan siapa yang memutuskan. Mengetahui peran ini membantu sales tidak hanya berbicara dengan satu orang.",
      },
      { type: "h2", text: "Riwayat interaksi yang lengkap" },
      {
        type: "p",
        text: "Dalam siklus penjualan yang panjang, detail pembicaraan beberapa bulan lalu mudah terlupakan. Catatan pertemuan, dokumen yang dikirim, dan pertanyaan yang pernah diajukan pelanggan harus tersimpan di satu tempat dan bisa dibaca siapa pun di tim.",
      },
      { type: "h2", text: "Kebutuhan yang umum di B2B" },
      {
        type: "ul",
        items: [
          "Beberapa kontak dengan peran berbeda per perusahaan pelanggan",
          "Pipeline dengan tahapan yang mencerminkan proses persetujuan pelanggan",
          "Pembuatan penawaran dan pelacakan versinya",
          "Jadwal follow-up dan pengingat",
          "Catatan kebutuhan dan keberatan pelanggan",
          "Perkiraan penjualan berdasarkan nilai dan tahap peluang",
        ],
      },
      { type: "h2", text: "Penawaran yang terkendali" },
      {
        type: "p",
        text: "Penawaran B2B sering direvisi berkali-kali. Tanpa pelacakan versi, sales bisa mengirim penawaran lama atau harga yang belum disetujui. CRM yang menyimpan riwayat penawaran dan persetujuan harga internal mengurangi risiko ini.",
      },
      {
        type: "callout",
        title: "Serah terima ke tim pelaksana",
        text: "Setelah kesepakatan tercapai, informasi yang dikumpulkan sales — kebutuhan, janji, dan harapan pelanggan — harus sampai ke tim yang menjalankan pekerjaan. Banyak ketidakpuasan pelanggan berawal dari informasi yang hilang di serah terima ini.",
      },
      { type: "h2", text: "Perkiraan penjualan yang realistis" },
      {
        type: "p",
        text: "Dengan tahapan yang jelas dan riwayat konversi, perkiraan penjualan bisa dihitung dari pipeline, bukan dari tebakan. Untuk bisnis dengan siklus panjang, perkiraan ini membantu perencanaan kapasitas dan arus kas.",
      },
      { type: "h2", text: "Hubungan tidak berhenti setelah transaksi" },
      {
        type: "p",
        text: "Pelanggan B2B yang puas sering menjadi sumber perpanjangan kontrak dan penjualan tambahan. Pastikan CRM tetap dipakai setelah transaksi selesai, dengan pengingat untuk perpanjangan dan komunikasi rutin.",
      },
    ],
  },
  {
    slug: "aplikasi-web-mobile-atau-keduanya",
    title: "Aplikasi Web, Mobile, atau Keduanya?",
    excerpt:
      "Tidak semua kebutuhan bisnis perlu aplikasi mobile. Pilihan antara aplikasi web dan mobile bergantung pada siapa penggunanya dan di mana mereka bekerja.",
    category: "Teknologi",
    publishedAt: "2026-06-14",
    tags: ["mobile", "website", "custom-software"],
    cover: {
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      alt: "Seseorang memegang ponsel di depan laptop yang membuka aplikasi serupa",
    },
    body: [
      {
        type: "p",
        text: "Ketika merencanakan sistem baru, banyak bisnis langsung membayangkan aplikasi yang diunduh dari Play Store atau App Store. Padahal, untuk banyak kebutuhan, aplikasi web yang dibuka lewat browser sudah cukup — lebih cepat dibuat dan lebih mudah dirawat.",
      },
      { type: "h2", text: "Aplikasi web" },
      {
        type: "ul",
        items: [
          "Diakses lewat browser di komputer maupun ponsel",
          "Tidak perlu diunduh atau diperbarui oleh pengguna",
          "Satu versi untuk semua perangkat, sehingga pengembangan lebih efisien",
          "Cocok untuk dashboard, sistem administrasi, dan pekerjaan di depan komputer",
          "Akses ke fitur perangkat lebih terbatas dibanding aplikasi mobile",
        ],
      },
      { type: "h2", text: "Aplikasi mobile" },
      {
        type: "ul",
        items: [
          "Dipasang di ponsel dan bisa dibuka cepat dari layar utama",
          "Akses lebih luas ke kamera, lokasi, dan notifikasi",
          "Bisa dirancang untuk tetap bekerja saat offline",
          "Perlu melewati proses rilis dan pembaruan di toko aplikasi",
          "Biaya lebih besar jika dibuat untuk Android dan iOS",
        ],
      },
      { type: "h2", text: "Pertanyaan yang membantu memutuskan" },
      {
        type: "ol",
        items: [
          "Siapa pengguna utamanya, dan di mana mereka bekerja?",
          "Seberapa sering sistem dibuka — sesekali atau berkali-kali setiap hari?",
          "Apakah dibutuhkan kamera, lokasi, atau notifikasi?",
          "Apakah pengguna sering berada di lokasi dengan internet tidak stabil?",
          "Apakah aplikasi untuk pelanggan umum atau untuk karyawan internal?",
        ],
      },
      {
        type: "callout",
        title: "Sering kali jawabannya keduanya",
        text: "Banyak sistem bisnis terdiri dari aplikasi web untuk administrasi di kantor dan aplikasi mobile untuk tim lapangan. Keduanya memakai data yang sama, tetapi dirancang sesuai cara kerja penggunanya masing-masing.",
      },
      { type: "h2", text: "Aplikasi web yang nyaman di ponsel" },
      {
        type: "p",
        text: "Aplikasi web bisa dirancang responsif dan terasa nyaman di ponsel, bahkan bisa ditambahkan ke layar utama. Untuk pengguna yang membuka sistem sesekali, pendekatan ini sering sudah memadai tanpa perlu aplikasi mobile.",
      },
      { type: "h2", text: "Mulai dari kebutuhan terkuat" },
      {
        type: "p",
        text: "Jika anggaran terbatas, mulai dari bentuk yang melayani pengguna paling penting. Aplikasi mobile bisa ditambahkan kemudian, selama sistem dirancang dengan API yang memungkinkan berbagai aplikasi mengakses data yang sama.",
      },
    ],
  },
  {
    slug: "toko-online-sendiri-atau-marketplace",
    title: "Toko Online Sendiri atau Cukup Marketplace?",
    excerpt:
      "Marketplace memberi akses ke banyak pembeli dengan cepat, toko online sendiri memberi kendali penuh. Keduanya punya peran berbeda dalam strategi penjualan.",
    category: "Website & Digital",
    publishedAt: "2026-06-12",
    tags: ["ecommerce", "website", "biaya"],
    cover: {
      src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      alt: "Seseorang memegang kartu pembayaran sambil berbelanja di laptop",
    },
    body: [
      {
        type: "p",
        text: "Bagi bisnis yang ingin berjualan online, marketplace adalah jalan tercepat: pembeli sudah ada, sistem pembayaran dan pengiriman tersedia, dan toko bisa dibuka dalam waktu singkat. Pertanyaannya, apakah itu cukup, atau perlu toko online sendiri?",
      },
      { type: "h2", text: "Kelebihan marketplace" },
      {
        type: "ul",
        items: [
          "Akses langsung ke pembeli yang sudah aktif mencari produk",
          "Pembayaran, promosi, dan logistik sudah terintegrasi",
          "Biaya awal rendah dan cepat dimulai",
          "Kepercayaan pembeli terhadap platform",
        ],
      },
      { type: "h2", text: "Keterbatasan marketplace" },
      {
        type: "ul",
        items: [
          "Aturan dan biaya ditentukan platform dan dapat berubah",
          "Persaingan harga langsung dengan penjual lain di halaman yang sama",
          "Hubungan dan data pelanggan lebih terbatas",
          "Identitas merek kurang menonjol dibanding platformnya",
        ],
      },
      { type: "h2", text: "Toko online sendiri" },
      {
        type: "p",
        text: "Toko online sendiri memberi kendali atas tampilan, harga, promosi, dan data pelanggan. Tetapi pengunjung tidak datang dengan sendirinya — Anda perlu mendatangkan mereka lewat pencarian, media sosial, iklan, atau pelanggan yang sudah ada.",
      },
      {
        type: "callout",
        title: "Bukan pilihan satu atau lainnya",
        text: "Banyak bisnis memakai marketplace untuk menjangkau pembeli baru, dan toko online sendiri untuk pelanggan setia yang sudah mengenal mereknya. Kuncinya adalah stok dan pesanan yang terhubung agar kedua saluran tidak saling mengganggu.",
      },
      { type: "h2", text: "Kapan toko online sendiri layak dipertimbangkan" },
      {
        type: "ul",
        items: [
          "Merek sudah dikenal dan punya pelanggan yang kembali",
          "Biaya marketplace mulai menekan margin secara signifikan",
          "Anda butuh fitur yang tidak disediakan marketplace, seperti harga khusus atau langganan",
          "Data pelanggan penting untuk strategi pemasaran",
        ],
      },
      { type: "h2", text: "Perhitungkan biaya secara lengkap" },
      {
        type: "p",
        text: "Toko online sendiri tidak gratis setelah jadi: ada biaya hosting, payment gateway, pemeliharaan, dan pemasaran untuk mendatangkan pengunjung. Bandingkan dengan biaya di marketplace secara menyeluruh, bukan hanya biaya pembuatan website.",
      },
      { type: "h2", text: "Mulai dari yang sudah berjalan" },
      {
        type: "p",
        text: "Jika penjualan di marketplace sudah berjalan baik, toko online sendiri bisa dibangun bertahap sebagai saluran tambahan. Pastikan sistem stok dan pesanan sudah terpusat sebelum membuka saluran baru.",
      },
    ],
  },
  {
    slug: "sistem-operasional-bisnis-jasa-profesional",
    title: "Sistem Operasional untuk Bisnis Jasa Profesional",
    excerpt:
      "Konsultan, agensi, dan firma jasa menjual waktu dan keahlian. Sistem yang tepat membantu melihat ke mana waktu itu pergi dan apakah setiap project menguntungkan.",
    category: "Panduan Industri",
    publishedAt: "2026-06-10",
    tags: ["industri", "crm", "operasional", "keuangan"],
    cover: {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      alt: "Tim berdiskusi di meja rapat dengan laptop terbuka",
    },
    body: [
      {
        type: "p",
        text: "Bisnis jasa profesional — konsultan, agensi, kantor akuntan, firma arsitek, dan sejenisnya — tidak mengelola stok barang. Yang dikelola adalah waktu orang, project, dan hubungan dengan klien. Tanpa sistem yang sesuai, sulit mengetahui apakah sebuah project menguntungkan sampai semuanya selesai.",
      },
      { type: "h2", text: "Kebutuhan yang biasanya utama" },
      {
        type: "ul",
        items: [
          "Data klien dan riwayat pekerjaan",
          "Pengelolaan project, tugas, dan tenggat waktu",
          "Pencatatan waktu kerja per project",
          "Penagihan berdasarkan termin, waktu, atau hasil",
          "Biaya project, termasuk pengeluaran yang ditagihkan ke klien",
          "Laporan profitabilitas per project dan per klien",
        ],
      },
      { type: "h2", text: "Pencatatan waktu adalah fondasi" },
      {
        type: "p",
        text: "Karena yang dijual adalah waktu, pencatatan waktu kerja menjadi dasar hampir semua laporan penting. Tanpa itu, perusahaan tidak tahu berapa sebenarnya biaya sebuah project. Tantangannya adalah membuat pencatatan cukup mudah sehingga tim mau melakukannya setiap hari.",
      },
      {
        type: "callout",
        title: "Catat waktu saat itu juga",
        text: "Waktu yang diisi di akhir minggu berdasarkan ingatan cenderung tidak akurat. Pencatatan yang mudah dilakukan saat pekerjaan berlangsung — dari ponsel atau langsung dari daftar tugas — menghasilkan data yang jauh lebih bisa dipercaya.",
      },
      { type: "h2", text: "Profitabilitas per project" },
      {
        type: "p",
        text: "Dengan waktu dan biaya yang tercatat, perusahaan bisa membandingkan nilai kontrak dengan biaya sebenarnya. Pola yang muncul sering mengejutkan: jenis project tertentu selalu melebihi perkiraan, atau klien tertentu meminta revisi jauh lebih banyak dari yang diperhitungkan.",
      },
      { type: "h2", text: "Penagihan yang tidak terlewat" },
      {
        type: "p",
        text: "Pekerjaan tambahan di luar ruang lingkup dan pengeluaran yang seharusnya ditagihkan sering lupa ditagih. Sistem yang menghubungkan pekerjaan, persetujuan tambahan, dan penagihan membantu memastikan semua yang dikerjakan benar-benar dibayar.",
      },
      { type: "h2", text: "Kapasitas tim" },
      {
        type: "p",
        text: "Melihat beban kerja setiap orang membantu memutuskan apakah tim sanggup menerima project baru, dan kapan perlu menambah orang. Tanpa gambaran ini, keputusan menerima project sering dibuat berdasarkan perasaan.",
      },
      { type: "h2", text: "Mulai dari satu kebutuhan" },
      {
        type: "p",
        text: "Bagi banyak firma, pencatatan waktu dan penagihan adalah titik awal yang paling bernilai. Setelah data waktu terkumpul rutin, laporan profitabilitas dan perencanaan kapasitas bisa dibangun di atasnya.",
      },
    ],
  },
  {
    slug: "mengelola-resistensi-tim-saat-ganti-sistem",
    title: "Mengelola Resistensi Tim Saat Ganti Sistem",
    excerpt:
      "Sistem baru yang bagus bisa gagal karena tim menolak memakainya. Resistensi bukan tanda tim yang buruk — biasanya tanda kekhawatiran yang belum dijawab.",
    category: "Strategi Bisnis",
    publishedAt: "2026-06-08",
    tags: ["perubahan", "implementasi", "karyawan"],
    cover: {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      alt: "Sekelompok rekan kerja berdiskusi santai di sekitar meja",
    },
    body: [
      {
        type: "p",
        text: "Hampir setiap penggantian sistem menemui penolakan. Karyawan mengeluh sistem baru lebih lambat, mencari cara kembali ke spreadsheet lama, atau diam-diam tetap mencatat dengan cara yang biasa. Menganggapnya sebagai sikap keras kepala jarang membantu. Lebih berguna memahami apa yang sebenarnya dikhawatirkan.",
      },
      { type: "h2", text: "Sumber resistensi yang umum" },
      {
        type: "ul",
        items: [
          "Takut terlihat tidak kompeten saat belum menguasai sistem baru",
          "Pekerjaan yang terasa lebih lambat di minggu-minggu awal",
          "Kekhawatiran bahwa sistem dipakai untuk mengawasi atau menggantikan mereka",
          "Pengalaman buruk dengan perubahan sistem sebelumnya",
          "Tidak dilibatkan dan tidak tahu alasan perubahan",
        ],
      },
      { type: "h2", text: "Jelaskan alasannya, bukan hanya perintahnya" },
      {
        type: "p",
        text: "Karyawan lebih mudah menerima perubahan ketika memahami masalah apa yang diselesaikan — terutama jika masalah itu juga mereka rasakan, seperti input berulang atau data yang sering tidak cocok.",
      },
      { type: "h2", text: "Libatkan pengguna sejak awal" },
      {
        type: "p",
        text: "Orang yang menjalankan proses setiap hari tahu detail yang tidak terlihat dari atas. Melibatkan mereka dalam pemilihan dan pengujian sistem tidak hanya menghasilkan sistem yang lebih sesuai, tetapi juga menciptakan orang-orang yang ikut merasa memiliki.",
      },
      {
        type: "callout",
        title: "Temukan pendukung di setiap tim",
        text: "Satu atau dua orang di setiap divisi yang lebih dulu dilatih dan antusias bisa menjadi tempat bertanya bagi rekan-rekannya. Belajar dari rekan kerja sering terasa lebih nyaman daripada bertanya ke tim IT atau vendor.",
      },
      { type: "h2", text: "Akui bahwa awalnya lebih lambat" },
      {
        type: "p",
        text: "Menjanjikan bahwa sistem baru langsung membuat pekerjaan lebih cepat hanya menimbulkan kekecewaan. Lebih jujur menyampaikan bahwa beberapa minggu awal akan terasa lebih berat, lalu memberi dukungan tambahan selama masa itu.",
      },
      { type: "h2", text: "Hentikan jalur lama pada waktunya" },
      {
        type: "p",
        text: "Selama cara lama masih tersedia, sebagian orang akan terus memakainya. Setelah masa transisi yang disepakati dan sistem baru terbukti berjalan, tetapkan tanggal yang jelas kapan pencatatan lama tidak lagi diterima.",
      },
      { type: "h2", text: "Dengarkan keluhan sebagai masukan" },
      {
        type: "p",
        text: "Tidak semua keluhan adalah resistensi. Sebagian menunjukkan masalah nyata dalam alur sistem. Sediakan saluran untuk menyampaikan kendala, tindak lanjuti dengan cepat, dan beri tahu tim ketika masukan mereka menghasilkan perbaikan.",
      },
    ],
  },
  {
    slug: "program-loyalitas-pelanggan-yang-terukur",
    title: "Merancang Program Loyalitas Pelanggan yang Terukur",
    excerpt:
      "Program poin dan member mudah dibuat, tapi sulit dinilai apakah benar-benar membuat pelanggan kembali. Rancang pengukurannya sejak awal.",
    category: "POS & Retail",
    publishedAt: "2026-06-06",
    tags: ["pos", "retail", "pelanggan", "data"],
    cover: {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      alt: "Interior toko pakaian dengan rak gantung dan meja display",
    },
    body: [
      {
        type: "p",
        text: "Kartu member, poin belanja, dan diskon pelanggan setia adalah strategi retail yang umum. Tujuannya mendorong pelanggan kembali dan berbelanja lebih sering. Tetapi banyak program berjalan bertahun-tahun tanpa ada yang benar-benar tahu apakah hasilnya sepadan dengan biayanya.",
      },
      { type: "h2", text: "Mulai dari tujuan yang jelas" },
      {
        type: "p",
        text: "Apa yang ingin diubah? Frekuensi kunjungan, nilai belanja per transaksi, atau mencegah pelanggan berpindah ke pesaing? Tujuan yang berbeda membutuhkan mekanisme yang berbeda — dan cara mengukur yang berbeda pula.",
      },
      { type: "h2", text: "Mekanisme yang umum" },
      {
        type: "ul",
        items: [
          "Poin dari setiap pembelian yang bisa ditukar dengan hadiah atau potongan",
          "Tingkatan member dengan keuntungan yang meningkat",
          "Penawaran khusus di hari ulang tahun pelanggan",
          "Hadiah setelah jumlah kunjungan tertentu",
        ],
      },
      { type: "h2", text: "Hubungkan dengan sistem kasir" },
      {
        type: "p",
        text: "Program loyalitas paling mudah dijalankan ketika terintegrasi dengan sistem kasir: pelanggan dikenali saat transaksi, poin bertambah otomatis, dan penukaran tercatat. Program yang dicatat manual mudah salah dan sulit dianalisis.",
      },
      {
        type: "callout",
        title: "Bandingkan perilaku sebelum dan sesudah bergabung",
        text: "Pelanggan yang paling rajin mendaftar member biasanya memang sudah pelanggan setia. Untuk menilai dampak program secara jujur, bandingkan perubahan perilaku member sebelum dan sesudah bergabung, bukan sekadar membandingkan member dengan non-member.",
      },
      { type: "h2", text: "Hitung biaya program" },
      {
        type: "p",
        text: "Poin yang ditukar adalah biaya, demikian juga diskon dan hadiah. Catat poin yang beredar dan belum ditukar sebagai kewajiban yang suatu saat perlu dipenuhi. Tanpa perhitungan ini, program yang tampak sukses bisa diam-diam menggerus margin.",
      },
      { type: "h2", text: "Metrik yang layak dipantau" },
      {
        type: "ul",
        items: [
          "Frekuensi kunjungan member dari waktu ke waktu",
          "Rata-rata nilai belanja member",
          "Persentase member yang masih aktif berbelanja",
          "Nilai poin yang ditukar dibanding penjualan dari member",
        ],
      },
      { type: "h2", text: "Hormati data pelanggan" },
      {
        type: "p",
        text: "Program loyalitas mengumpulkan data pribadi dan riwayat belanja. Jelaskan data apa yang dikumpulkan dan untuk apa, berikan pilihan untuk berhenti menerima pesan promosi, dan kelola data sesuai ketentuan pelindungan data pribadi yang berlaku.",
      },
    ],
  },
  {
    slug: "menjaga-keamanan-data-pribadi-karyawan",
    title: "Menjaga Keamanan Data Pribadi Karyawan",
    excerpt:
      "Sistem HR menyimpan data yang sangat sensitif: identitas, rekening, gaji, hingga kesehatan. Kebocoran data ini merugikan karyawan dan perusahaan sekaligus.",
    category: "HR & Tim",
    publishedAt: "2026-06-04",
    tags: ["hris", "keamanan", "data", "karyawan"],
    cover: {
      src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
      alt: "Papan klip berisi lembar resume di samping laptop",
    },
    body: [
      {
        type: "p",
        text: "Tim HR mengelola salah satu kumpulan data paling sensitif di perusahaan: nomor identitas, alamat, rekening bank, gaji, riwayat kesehatan, hingga hasil penilaian kinerja. Data ini sering tersebar di spreadsheet, email, dan folder bersama yang aksesnya tidak terkendali.",
      },
      { type: "h2", text: "Kewajiban hukum" },
      {
        type: "p",
        text: "Di Indonesia, pengelolaan data pribadi diatur dalam Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi. Perusahaan yang memproses data pribadi karyawan memiliki kewajiban terkait dasar pemrosesan, keamanan, dan hak pemilik data. Karena peraturan pelaksananya dapat berkembang, pastikan kebijakan perusahaan mengikuti ketentuan terbaru dan dikonsultasikan dengan pihak yang memahami regulasi ini.",
      },
      { type: "h2", text: "Kumpulkan secukupnya" },
      {
        type: "p",
        text: "Data yang tidak dikumpulkan tidak bisa bocor. Tinjau formulir dan proses HR: apakah semua data yang diminta benar-benar dibutuhkan? Kebiasaan meminta salinan dokumen yang tidak diperlukan menambah risiko tanpa manfaat.",
      },
      { type: "h2", text: "Batasi akses sesuai kebutuhan" },
      {
        type: "ul",
        items: [
          "Data gaji hanya dapat diakses pihak yang mengurus penggajian",
          "Atasan melihat data timnya, bukan data seluruh karyawan",
          "Data kesehatan dipisahkan dengan akses yang lebih ketat",
          "Ekspor data dalam jumlah besar dibatasi dan tercatat",
        ],
      },
      {
        type: "callout",
        title: "Hentikan kebiasaan mengirim data lewat spreadsheet",
        text: "Data karyawan yang dikirim sebagai lampiran email atau pesan mudah tersebar tanpa kendali — diteruskan, diunduh, dan tersimpan di banyak perangkat. Akses melalui sistem dengan hak akses yang jelas jauh lebih aman.",
      },
      { type: "h2", text: "Lindungi secara teknis" },
      {
        type: "p",
        text: "Data sensitif sebaiknya dienkripsi, akses sistem dilindungi verifikasi dua langkah, dan aktivitas akses dicatat. Backup data HR juga perlu dilindungi setara dengan data utamanya.",
      },
      { type: "h2", text: "Tetapkan masa simpan" },
      {
        type: "p",
        text: "Data mantan karyawan dan pelamar yang tidak diterima tidak perlu disimpan selamanya. Tetapkan berapa lama data disimpan sesuai kebutuhan dan kewajiban yang berlaku, lalu hapus atau anonimkan setelahnya.",
      },
      { type: "h2", text: "Siapkan prosedur saat terjadi insiden" },
      {
        type: "p",
        text: "Tentukan sejak awal apa yang dilakukan jika terjadi kebocoran: siapa yang menangani, bagaimana dampaknya dinilai, dan bagaimana pihak terdampak diberi tahu sesuai ketentuan. Prosedur yang disiapkan sebelumnya membuat respons lebih cepat dan terarah.",
      },
    ],
  },
  {
    slug: "keamanan-dasar-aplikasi-bisnis",
    title: "Keamanan Dasar yang Wajib Ada di Aplikasi Bisnis",
    excerpt:
      "Keamanan aplikasi bukan fitur tambahan yang bisa dipasang belakangan. Beberapa hal dasar ini seharusnya ada sejak aplikasi pertama kali dibangun.",
    category: "Teknologi",
    publishedAt: "2026-06-02",
    tags: ["keamanan", "custom-software", "infrastruktur"],
    cover: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Komponen elektronik pada papan sirkuit dilihat dari dekat",
    },
    body: [
      {
        type: "p",
        text: "Aplikasi bisnis menyimpan data transaksi, data pelanggan, dan informasi internal yang berharga. Meski begitu, keamanan sering diperlakukan sebagai urusan belakangan — dikerjakan setelah fitur selesai, atau setelah terjadi masalah. Beberapa perlindungan dasar jauh lebih murah dibangun sejak awal.",
      },
      { type: "h2", text: "Autentikasi yang kuat" },
      {
        type: "ul",
        items: [
          "Kata sandi disimpan dalam bentuk hash yang aman, bukan teks biasa",
          "Batas percobaan masuk untuk mencegah tebakan kata sandi berulang",
          "Verifikasi dua langkah untuk akun dengan akses penting",
          "Sesi yang otomatis berakhir setelah tidak aktif",
        ],
      },
      { type: "h2", text: "Hak akses diperiksa di server" },
      {
        type: "p",
        text: "Menyembunyikan tombol di tampilan tidak sama dengan membatasi akses. Setiap permintaan data harus diperiksa di server: apakah pengguna ini berhak melihat atau mengubah data tersebut? Tanpa pemeriksaan ini, pengguna bisa mengakses data orang lain hanya dengan mengubah alamat atau parameter permintaan.",
      },
      { type: "h2", text: "Validasi semua input" },
      {
        type: "p",
        text: "Data yang masuk dari pengguna — formulir, unggahan file, parameter — harus divalidasi di server. Input yang tidak divalidasi adalah pintu masuk berbagai serangan umum, termasuk upaya menyisipkan perintah ke basis data.",
      },
      {
        type: "callout",
        title: "Koneksi terenkripsi adalah standar minimum",
        text: "Semua akses aplikasi sebaiknya melalui HTTPS. Tanpa enkripsi, kata sandi dan data yang dikirim bisa disadap, terutama saat pengguna terhubung ke jaringan Wi-Fi publik.",
      },
      { type: "h2", text: "Pembaruan komponen" },
      {
        type: "p",
        text: "Aplikasi modern dibangun dengan banyak pustaka dan komponen dari pihak lain. Celah keamanan pada komponen tersebut ditemukan secara berkala. Rencanakan pembaruan rutin sebagai bagian dari pemeliharaan, bukan hanya ketika ada masalah.",
      },
      { type: "h2", text: "Pencatatan dan pemantauan" },
      {
        type: "p",
        text: "Catat aktivitas penting seperti login, perubahan hak akses, dan perubahan data sensitif. Tanpa catatan, insiden keamanan sulit dideteksi dan sulit ditelusuri setelah terjadi.",
      },
      { type: "h2", text: "Tanyakan kepada vendor" },
      {
        type: "p",
        text: "Saat bekerja dengan software house, tanyakan bagaimana mereka menangani hal-hal di atas. Vendor yang serius akan bisa menjelaskan pendekatannya dengan konkret — bukan sekadar mengatakan aplikasinya aman.",
      },
    ],
  },
  {
    slug: "laporan-penjualan-yang-dipantau-harian",
    title: "Laporan Penjualan yang Layak Dipantau Setiap Hari",
    excerpt:
      "Laporan yang terlalu banyak membuat pemilik toko kewalahan, laporan yang terlalu sedikit membuat masalah terlambat terlihat. Ini yang layak dilihat setiap hari.",
    category: "POS & Retail",
    publishedAt: "2026-05-31",
    tags: ["pos", "retail", "pelaporan"],
    cover: {
      src: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a",
      alt: "Lorong supermarket dengan rak penuh produk",
    },
    body: [
      {
        type: "p",
        text: "Sistem kasir modern bisa menghasilkan puluhan jenis laporan. Masalahnya, pemilik dan pengelola toko jarang punya waktu membaca semuanya. Akibatnya, laporan yang tersedia justru tidak dibaca sama sekali. Lebih efektif memilih sedikit laporan harian yang benar-benar menunjukkan kondisi bisnis.",
      },
      { type: "h2", text: "Laporan harian yang paling berguna" },
      { type: "h3", text: "Penjualan dibanding periode pembanding" },
      {
        type: "p",
        text: "Angka penjualan hari ini baru bermakna jika dibandingkan: dengan hari yang sama minggu lalu, atau rata-rata hari serupa. Perbandingan ini lebih informatif daripada angka tunggal.",
      },
      { type: "h3", text: "Penjualan per metode pembayaran" },
      {
        type: "p",
        text: "Pemisahan tunai, kartu, QRIS, dan metode lain membantu mencocokkan uang di laci dengan dana yang masuk ke rekening.",
      },
      { type: "h3", text: "Produk terlaris dan stok menipis" },
      {
        type: "p",
        text: "Produk yang paling laku hari ini perlu dipastikan stoknya cukup untuk esok. Laporan stok menipis mencegah kehilangan penjualan karena barang habis.",
      },
      { type: "h3", text: "Pembatalan, diskon, dan retur" },
      {
        type: "p",
        text: "Laporan pengecualian ini menunjukkan transaksi yang tidak normal. Lonjakan pembatalan atau diskon di kasir tertentu patut ditanyakan.",
      },
      { type: "h3", text: "Selisih kas per shift" },
      {
        type: "p",
        text: "Selisih antara uang yang seharusnya ada dan uang fisik di laci, per kasir dan per shift.",
      },
      {
        type: "callout",
        title: "Sedikit laporan yang dibaca lebih baik",
        text: "Lima laporan yang dibaca setiap hari lebih bernilai daripada lima puluh laporan yang tersedia tapi tidak pernah dibuka. Mulailah dari yang sedikit, lalu tambah ketika memang ada pertanyaan yang tidak terjawab.",
      },
      { type: "h2", text: "Laporan mingguan dan bulanan" },
      {
        type: "p",
        text: "Beberapa hal lebih tepat dilihat dalam rentang lebih panjang: tren penjualan per kategori, margin per produk, performa per outlet, dan produk yang lama tidak laku. Pisahkan laporan ini dari laporan harian agar pemantauan harian tetap ringkas.",
      },
      { type: "h2", text: "Terima ringkasan tanpa membuka sistem" },
      {
        type: "p",
        text: "Ringkasan harian yang dikirim otomatis ke ponsel pemilik membuat pemantauan menjadi kebiasaan. Pastikan ringkasan tetap singkat, dengan tautan ke laporan rinci jika perlu ditelusuri.",
      },
      { type: "h2", text: "Tetapkan tindakan untuk setiap laporan" },
      {
        type: "p",
        text: "Setiap laporan sebaiknya punya tindakan yang jelas jika angkanya tidak normal: siapa yang dihubungi dan apa yang diperiksa. Laporan tanpa tindak lanjut hanya menjadi angka yang dilihat lalu dilupakan.",
      },
    ],
  },
  {
    slug: "kapan-aplikasi-perlu-bekerja-offline",
    title: "Kapan Aplikasi Perlu Bisa Bekerja Offline",
    excerpt:
      "Tidak semua aplikasi perlu mode offline, tapi untuk operasional di lapangan dan di kasir, koneksi yang putus bisa berarti pekerjaan yang berhenti.",
    category: "Teknologi",
    publishedAt: "2026-05-29",
    tags: ["mobile", "operasional", "custom-software"],
    cover: {
      src: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55",
      alt: "Seseorang menyerahkan paket kardus kepada penerima",
    },
    body: [
      {
        type: "p",
        text: "Masih banyak situasi ketika koneksi internet tidak bisa diandalkan: gudang dengan sinyal lemah, lokasi proyek di daerah, kendaraan dalam perjalanan, atau gangguan jaringan mendadak di toko. Untuk sistem yang menopang pekerjaan inti, pertanyaannya bukan apakah koneksi akan terputus, tetapi apa yang terjadi ketika itu terjadi.",
      },
      { type: "h2", text: "Situasi yang biasanya membutuhkan mode offline" },
      {
        type: "ul",
        items: [
          "Sistem kasir yang tidak boleh berhenti melayani pelanggan",
          "Aplikasi tim lapangan: sales, kurir, teknisi, dan petugas survei",
          "Pencatatan di gudang atau area produksi dengan sinyal lemah",
          "Pengumpulan data di lokasi yang jauh dari jaringan stabil",
        ],
      },
      { type: "h2", text: "Situasi yang umumnya tidak memerlukannya" },
      {
        type: "ul",
        items: [
          "Dashboard dan laporan manajemen",
          "Sistem administrasi yang dipakai di kantor dengan koneksi stabil",
          "Proses yang memang membutuhkan data terbaru dari server setiap saat",
        ],
      },
      {
        type: "callout",
        title: "Mode offline menambah kerumitan",
        text: "Aplikasi yang bekerja offline harus menyimpan data di perangkat, lalu menyinkronkannya dengan server. Kerumitan ini menambah waktu pengembangan dan pengujian. Karena itu, mode offline sebaiknya diterapkan pada fitur yang benar-benar membutuhkannya, bukan pada seluruh aplikasi.",
      },
      { type: "h2", text: "Tantangan sinkronisasi" },
      {
        type: "p",
        text: "Ketika dua orang mengubah data yang sama saat offline, sistem harus tahu data mana yang dipakai setelah koneksi kembali. Aturan penyelesaian konflik perlu dirancang sejak awal. Untuk data seperti stok, sinkronisasi yang keliru bisa menyebabkan angka yang tidak sesuai kenyataan.",
      },
      { type: "h2", text: "Beri tahu pengguna statusnya" },
      {
        type: "p",
        text: "Pengguna perlu tahu apakah mereka sedang offline, dan apakah data yang mereka catat sudah terkirim ke server. Indikator yang jelas mencegah pengguna mengira pekerjaan sudah tersimpan padahal belum tersinkron.",
      },
      { type: "h2", text: "Lindungi data di perangkat" },
      {
        type: "p",
        text: "Data yang tersimpan di ponsel atau tablet ikut berisiko jika perangkat hilang. Batasi data yang disimpan secara lokal hanya pada yang diperlukan, dan lindungi aplikasi dengan autentikasi yang memadai.",
      },
      { type: "h2", text: "Uji dalam kondisi nyata" },
      {
        type: "p",
        text: "Mode offline sering terlihat berjalan baik saat diuji di kantor. Uji di lokasi dan kondisi sebenarnya — koneksi yang putus-sambung, perangkat dengan penyimpanan terbatas, dan penggunaan offline yang berlangsung lama — sebelum dipakai secara luas.",
      },
    ],
  },
];

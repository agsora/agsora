import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Outlet pertama berjalan lancar. Aplikasi kasir yang dipakai sederhana, murah, dan cukup. Lalu outlet kedua dibuka, disusul yang ketiga. Tiba-tiba laporan harus diunduh satu per satu, stok tidak pernah cocok, dan Anda baru tahu outlet mana yang merugi setelah tutup bulan.",
  },
  {
    type: "p",
    text: "Ini bukan kegagalan manajemen. Ini tanda bahwa sistem kasir yang dirancang untuk satu toko sedang dipaksa mengurus beberapa lokasi sekaligus. Saat outlet bertambah, pertanyaan yang Anda butuhkan berubah dari “berapa penjualan hari ini” menjadi “outlet mana yang paling menguntungkan, dan kenapa”. Artikel ini membahas apa saja yang harus dimiliki sistem POS untuk bisnis multi-outlet, dan cara mengujinya sebelum Anda terlanjur memilih.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Multi-outlet membutuhkan laporan gabungan, stok per lokasi, dan kontrol akses berjenjang",
      "Transfer barang antar outlet harus tercatat dengan jejak yang jelas",
      "Sistem harus tetap bisa melayani saat internet terputus",
      "Uji sistem dengan skenario paling merepotkan, bukan skenario paling mudah",
      "Pastikan data bisa diekspor dan sistem bisa terhubung ke sistem lain",
    ],
  },
  { type: "h2", text: "Kenapa kebutuhan berubah saat outlet bertambah" },
  {
    type: "p",
    text: "Dengan satu outlet, pemilik biasanya hadir langsung. Masalah terlihat dengan mata: barang habis, antrian panjang, kasir kewalahan. Dengan beberapa outlet, pemilik tidak bisa berada di semua tempat. Sistem kasir berubah fungsi dari sekadar alat transaksi menjadi mata dan telinga pemilik di setiap lokasi.",
  },
  {
    type: "p",
    text: "Karena itu, kemampuan yang dulu terasa sebagai tambahan — laporan per outlet, hak akses, pencatatan transfer — berubah menjadi kebutuhan pokok. Sistem yang tidak memilikinya memaksa Anda menutup celah dengan pekerjaan manual, dan pekerjaan manual itulah yang tumbuh paling cepat ketika outlet bertambah.",
  },
  { type: "h2", text: "Kemampuan yang menjadi wajib" },
  { type: "h3", text: "Laporan gabungan tanpa rekap manual" },
  {
    type: "p",
    text: "Anda harus bisa melihat performa seluruh outlet dalam satu tampilan, lalu merincinya per outlet, per kasir, atau per kategori produk. Jika laporan gabungan masih dibuat dengan mengunduh file dari setiap outlet lalu menyatukannya di spreadsheet, angka gabungan akan selalu tertinggal dan rawan salah.",
  },
  { type: "h3", text: "Stok per lokasi, bukan hanya stok total" },
  {
    type: "p",
    text: "Mengetahui total stok seluruh bisnis tidak cukup. Sistem harus tahu barang ada di outlet mana. Tanpa itu, Anda akan sering menemukan barang menumpuk di satu tempat sementara outlet lain kehabisan, dan pelanggan di outlet yang kehabisan pulang dengan tangan kosong.",
  },
  { type: "h3", text: "Transfer antar outlet yang tercatat" },
  {
    type: "p",
    text: "Perpindahan barang antar lokasi perlu jejak yang lengkap: siapa yang mengirim, kapan dikirim, siapa yang menerima, dan berapa yang benar-benar diterima. Selisih antara barang yang dikirim dan diterima harus terlihat, bukan hilang di antara dua catatan yang tidak saling terhubung.",
  },
  { type: "h3", text: "Hak akses berjenjang" },
  {
    type: "p",
    text: "Kasir, kepala outlet, dan pemilik membutuhkan tingkat akses yang berbeda. Diskon, pembatalan transaksi, dan penyesuaian stok sebaiknya hanya bisa dilakukan level tertentu, dan setiap tindakan tersebut tercatat. Kontrol ini menjadi jauh lebih penting ketika pemilik tidak hadir di lokasi.",
  },
  { type: "h3", text: "Harga dan promo per outlet" },
  {
    type: "p",
    text: "Tidak semua outlet selalu memakai harga dan promo yang sama. Outlet di pusat perbelanjaan mungkin punya harga berbeda dengan outlet di kawasan perumahan. Sistem sebaiknya mendukung pengaturan per lokasi tanpa harus membuat data produk ganda.",
  },
  {
    type: "callout",
    title: "Jangan remehkan mode offline",
    text: "Sistem kasir harus tetap bisa melayani transaksi ketika koneksi internet terputus, lalu menyinkronkan data begitu koneksi kembali. Outlet yang berhenti melayani karena internet bermasalah adalah kerugian langsung yang sering baru disadari saat pertama kali terjadi.",
  },
  { type: "h2", text: "Pertanyaan yang layak diajukan ke penyedia" },
  {
    type: "ol",
    items: [
      "Bagaimana laporan gabungan dan laporan per outlet ditampilkan?",
      "Apa yang terjadi pada transaksi ketika internet terputus?",
      "Bagaimana transfer stok antar outlet dicatat dan diverifikasi?",
      "Tindakan apa saja yang bisa dibatasi berdasarkan peran pengguna?",
      "Apakah data bisa diekspor lengkap sewaktu-waktu?",
      "Apakah sistem bisa terhubung ke software akuntansi atau ERP?",
      "Bagaimana biaya dihitung ketika outlet dan kasir bertambah?",
    ],
  },
  { type: "h2", text: "Cara menguji sistem sebelum memutuskan" },
  {
    type: "p",
    text: "Hampir semua sistem kasir terlihat mulus saat demo, karena demo biasanya memperlihatkan alur transaksi yang normal. Masalahnya, operasional sehari-hari penuh dengan kejadian yang tidak normal. Justru di situ perbedaan antar sistem terlihat.",
  },
  {
    type: "ul",
    items: [
      "Retur barang dari transaksi hari sebelumnya di outlet yang berbeda",
      "Transaksi dibatalkan setelah struk tercetak",
      "Diskon khusus yang membutuhkan persetujuan",
      "Pelanggan membayar dengan dua metode sekaligus",
      "Barang dikirim ke outlet lain tetapi jumlah yang diterima kurang",
      "Kasir berganti di tengah shift",
    ],
  },
  {
    type: "p",
    text: "Minta penyedia memperagakan skenario ini secara langsung. Jika memungkinkan, jalankan uji coba di satu outlet selama beberapa minggu sebelum menerapkannya ke semua lokasi.",
  },
  { type: "h2", text: "Pertimbangan yang baru terasa belakangan" },
  {
    type: "p",
    text: "Dua hal biasanya baru terasa setelah beberapa bulan: apakah data Anda bisa diekspor sewaktu-waktu, dan apakah sistem bisa disambungkan ke software akuntansi atau ERP. Keduanya menentukan seberapa mudah Anda berkembang atau berpindah di kemudian hari. Sistem yang mengunci data Anda di dalamnya membatasi pilihan di masa depan.",
  },
  {
    type: "p",
    text: "Pertimbangkan juga dukungan dari penyedia. Ketika sistem bermasalah di tengah jam sibuk, seberapa cepat Anda bisa mendapatkan bantuan? Untuk bisnis multi-outlet, gangguan di satu sistem berarti gangguan di semua lokasi sekaligus.",
  },
  { type: "h2", text: "Kesalahan umum saat beralih sistem" },
  {
    type: "ul",
    items: [
      "Mengganti sistem di semua outlet sekaligus tanpa uji coba",
      "Tidak merapikan data produk sebelum dipindahkan",
      "Melatih kepala outlet, tetapi tidak melatih semua kasir",
      "Beralih saat periode paling sibuk, seperti menjelang hari raya",
      "Tidak menyiapkan prosedur ketika sistem mengalami gangguan",
    ],
  },
  {
    type: "p",
    text: "Data produk yang berantakan adalah sumber masalah paling umum. Kode produk ganda, nama yang tidak konsisten, dan varian yang dicatat sebagai produk terpisah akan terbawa ke sistem baru. Merapikannya sebelum beralih jauh lebih mudah daripada memperbaikinya setelah transaksi berjalan.",
  },
  { type: "h2", text: "Laporan yang layak dipantau pemilik multi-outlet" },
  {
    type: "p",
    text: "Sistem yang baik menghasilkan banyak laporan, tetapi pemilik multi-outlet jarang punya waktu membaca semuanya. Pilih beberapa laporan yang benar-benar menunjukkan kesehatan setiap outlet, lalu jadikan kebiasaan untuk memeriksanya secara rutin.",
  },
  {
    type: "ul",
    items: [
      "Penjualan per outlet dibanding periode yang sama minggu sebelumnya",
      "Margin per outlet, bukan hanya omzet",
      "Produk terlaris dan produk yang lama tidak laku di setiap lokasi",
      "Selisih kas per shift dan per kasir",
      "Pembatalan transaksi dan diskon manual per outlet",
      "Stok menipis yang perlu dikirim dari gudang atau outlet lain",
    ],
  },
  {
    type: "p",
    text: "Perbandingan antar outlet sangat berguna, tetapi harus dibaca dengan konteks. Outlet di lokasi ramai tentu berbeda dengan outlet di kawasan perumahan. Yang paling bermakna biasanya adalah perubahan performa sebuah outlet dari waktu ke waktu, bukan sekadar peringkatnya dibanding outlet lain.",
  },
  { type: "h2", text: "Ilustrasi: rutinitas pemilik sebelum dan sesudah" },
  {
    type: "p",
    text: "Bayangkan pemilik tiga outlet kopi. Sebelum memakai sistem yang terhubung, setiap malam ia menerima foto laporan kasir dari tiga kepala outlet lewat WhatsApp, lalu menjumlahkannya sendiri. Stok biji kopi dicek dengan menelepon masing-masing outlet. Ketika satu outlet kehabisan, ia baru tahu keesokan harinya dari keluhan pelanggan.",
  },
  {
    type: "p",
    text: "Dengan sistem multi-outlet yang terhubung, penjualan ketiga outlet terlihat dalam satu layar sepanjang hari. Stok bahan per lokasi terlihat tanpa menelepon siapa pun, dan transfer dari satu outlet ke outlet lain tercatat lengkap. Waktu yang dulu habis untuk merekap bisa dipakai untuk hal yang lebih penting: mengevaluasi menu, melatih tim, atau merencanakan outlet berikutnya.",
  },
  { type: "h2", text: "Langkah memindahkan outlet ke sistem baru" },
  {
    type: "ol",
    items: [
      "Rapikan data produk, varian, dan harga sebelum dimasukkan ke sistem",
      "Tentukan struktur peran dan hak akses untuk setiap outlet",
      "Pilih satu outlet sebagai percontohan dan jalankan beberapa minggu",
      "Catat masalah yang muncul dan perbaiki pengaturan sebelum diperluas",
      "Latih semua kasir, bukan hanya kepala outlet",
      "Terapkan ke outlet berikutnya secara bertahap, hindari periode tersibuk",
      "Lakukan stock opname di setiap outlet saat pertama kali beralih",
    ],
  },
  {
    type: "p",
    text: "Stock opname di awal peralihan sering dilewatkan, padahal sangat menentukan. Jika stok awal di sistem baru tidak akurat, semua laporan stok setelahnya ikut keliru, dan kepercayaan tim terhadap sistem baru langsung turun sejak minggu pertama.",
  },
  { type: "h2", text: "Perangkat keras yang perlu dipertimbangkan" },
  {
    type: "p",
    text: "Software kasir hanya separuh cerita. Di setiap outlet, sistem bergantung pada perangkat: tablet atau komputer kasir, printer struk, laci uang, pemindai barcode, dan kadang printer dapur atau layar pesanan. Perangkat yang tidak cocok atau tidak didukung sistem bisa menjadi sumber gangguan yang terus berulang.",
  },
  {
    type: "ul",
    items: [
      "Pastikan printer dan pemindai yang Anda miliki didukung oleh sistem",
      "Siapkan perangkat cadangan untuk outlet yang ramai",
      "Perhatikan daya tahan baterai jika kasir memakai tablet",
      "Seragamkan perangkat antar outlet agar pelatihan dan perbaikan lebih mudah",
    ],
  },
  { type: "h2", text: "Keamanan transaksi dan data" },
  {
    type: "p",
    text: "Semakin banyak outlet, semakin banyak akun, perangkat, dan titik akses yang perlu dijaga. Pastikan setiap kasir memiliki akun sendiri, akun yang tidak dipakai segera dinonaktifkan, dan perangkat kasir tidak dipakai untuk keperluan lain. Jika Anda mengumpulkan data pelanggan untuk program member, data itu termasuk data pribadi yang pengelolaannya perlu mengikuti ketentuan pelindungan data pribadi yang berlaku.",
  },
  { type: "h2", text: "Memahami komponen biaya" },
  {
    type: "p",
    text: "Biaya sistem POS multi-outlet biasanya tidak hanya satu angka. Ada biaya berlangganan atau lisensi yang sering dihitung per outlet atau per perangkat, biaya perangkat keras seperti printer struk dan tablet, biaya layanan pembayaran, serta biaya pelatihan dan waktu tim saat peralihan. Mintalah rincian lengkap dan hitung berapa totalnya ketika jumlah outlet bertambah sesuai rencana Anda.",
  },
  { type: "h2", text: "Checklist singkat sebelum memilih" },
  {
    type: "ol",
    items: [
      "Laporan gabungan dan per outlet tersedia tanpa rekap manual",
      "Stok tercatat per lokasi dengan transfer yang terlacak",
      "Hak akses bisa diatur per peran",
      "Transaksi tetap berjalan saat offline",
      "Data bisa diekspor dan sistem bisa diintegrasikan",
      "Biaya jelas ketika outlet bertambah",
    ],
  },
  { type: "h2", text: "Pilihan di AG·SORA" },
  {
    type: "p",
    text: "Untuk bisnis retail dan F&B yang ingin segera berjalan, AG·SORA POS tersedia sebagai sistem kasir siap pakai untuk kebutuhan multi-outlet. Jika operasional Anda memiliki aturan khusus yang tidak terakomodasi produk umum, sistem POS juga bisa dibangun sesuai alur kerja Anda. Detail fitur dan paketnya bisa dilihat pada kartu produk di bawah artikel ini.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Sistem kasir yang tepat untuk bisnis multi-outlet bukan yang paling banyak fiturnya, tetapi yang membuat Anda tetap bisa melihat dan mengendalikan setiap lokasi tanpa harus hadir di sana. Pilih berdasarkan skenario nyata yang Anda hadapi setiap hari, dan uji sebelum berkomitmen.",
  },
  {
    type: "cta",
    title: "Siap melihat semua outlet dari satu layar?",
    text: "Lihat bagaimana AG·SORA POS menangani kebutuhan multi-outlet, lengkap dengan paket dan harganya.",
    href: "/products",
    label: "Lihat AG·SORA POS",
  },
];

import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Direksi bertanya di rapat evaluasi tahunan: “ERP yang kita implementasikan tahun lalu itu berhasil tidak?” Ruangan hening sejenak. Sistemnya memang dipakai, tidak ada yang komplain besar, tapi tidak ada satu pun yang bisa menunjukkan angka konkret tentang apa yang sebenarnya membaik dibanding sebelum implementasi dilakukan.",
  },
  {
    type: "p",
    text: "Banyak project ERP dinyatakan selesai begitu sistemnya sudah dipasang dan mulai dipakai sehari-hari. Tetapi apakah sistem itu benar-benar memperbaiki operasional bisnis secara nyata? Tanpa ukuran keberhasilan yang ditetapkan sejak awal, pertanyaan ini sangat sulit dijawab dengan pasti — dan investasi besar yang sudah dikeluarkan hanya bisa dinilai berdasarkan kesan subjektif, bukan data yang objektif.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Tetapkan ukuran keberhasilan sebelum project dimulai, terkait langsung dengan alasan project itu ada",
      "Catat kondisi awal sebagai pembanding, karena perbaikan hanya bermakna jika ada baseline",
      "Ukur adopsi nyata, bukan hanya keberadaan sistemnya — apakah pengguna benar-benar memakainya",
      "Beri waktu yang cukup sebelum menilai, karena produktivitas biasanya turun dulu di awal transisi",
      "Gunakan hasil evaluasi untuk menentukan prioritas pengembangan berikutnya",
    ],
  },
  { type: "h2", text: "Tetapkan ukuran sebelum mulai" },
  {
    type: "p",
    text: "Hubungkan ukuran keberhasilan secara langsung dengan alasan mengapa project ERP ini dimulai sejak awal. Jika masalah utamanya adalah laporan yang selalu terlambat, maka ukuran keberhasilannya adalah waktu penyusunan laporan yang berkurang signifikan. Jika masalahnya adalah selisih stok yang sering terjadi, ukuran keberhasilannya adalah tingkat akurasi stok yang meningkat dibanding sebelumnya.",
  },
  { type: "h2", text: "Catat kondisi awal sebagai pembanding" },
  {
    type: "p",
    text: "Ukuran keberhasilan hanya bermakna jika ada pembanding yang jelas. Sebelum sistem baru mulai berjalan, catat secara spesifik kondisi saat ini: berapa hari waktu yang dibutuhkan untuk tutup buku, seberapa sering terjadi selisih stok dan berapa besar nilainya, berapa lama waktu yang dibutuhkan untuk memproses satu pesanan dari awal hingga selesai. Tanpa data kondisi awal ini, klaim perbaikan tidak bisa dibuktikan secara objektif kepada siapa pun.",
  },
  { type: "h2", text: "Contoh ukuran yang sering dipakai" },
  {
    type: "ul",
    items: [
      "Waktu yang dibutuhkan untuk menutup buku pada setiap periode akuntansi",
      "Tingkat akurasi stok dibandingkan dengan hasil hitung fisik yang sebenarnya",
      "Waktu dari pesanan pelanggan masuk hingga barang benar-benar terkirim",
      "Jumlah input data ganda yang berhasil dihilangkan dari proses kerja",
      "Tingkat keterlambatan pembayaran pelanggan dan umur piutang rata-rata",
    ],
  },
  { type: "h2", text: "Ukur adopsi, bukan hanya keberadaan sistemnya" },
  {
    type: "p",
    text: "Sistem yang canggih secara teknis sama sekali tidak berguna jika ternyata tidak benar-benar dipakai oleh penggunanya. Perhatikan dengan cermat apakah pengguna sungguh-sungguh memakai sistem setiap hari untuk pekerjaan mereka, atau justru masih menyimpan catatan paralel di spreadsheet sebagai “jaring pengaman” karena kurang percaya pada sistem baru. Pencatatan paralel seperti ini adalah tanda yang sangat jelas bahwa transisi ke sistem baru belum benar-benar berhasil sepenuhnya.",
  },
  {
    type: "callout",
    title: "Beri waktu yang cukup sebelum menilai",
    text: "Di minggu-minggu pertama setelah implementasi, produktivitas hampir selalu menurun sementara karena tim masih dalam proses menyesuaikan diri dengan cara kerja baru. Menilai keberhasilan project terlalu dini, saat periode penyesuaian ini masih berlangsung, bisa menghasilkan kesimpulan yang keliru dan tidak adil. Tetapkan periode evaluasi yang realistis, biasanya beberapa bulan setelah go-live.",
  },
  { type: "h2", text: "Evaluasi secara bertahap dan berkelanjutan" },
  {
    type: "p",
    text: "Lakukan evaluasi pertama setelah beberapa bulan sistem berjalan, lalu ulangi secara berkala setelahnya — misalnya setiap kuartal atau setiap semester. Hasil evaluasi ini akan menunjukkan area mana yang masih membutuhkan penyesuaian: alur kerja tertentu yang masih terasa lambat, laporan yang ternyata belum benar-benar dipakai penggunanya, atau pelatihan tertentu yang perlu diulang karena hasilnya belum optimal.",
  },
  { type: "h2", text: "Ilustrasi: dari kesan menjadi bukti konkret" },
  {
    type: "p",
    text: "Bayangkan sebuah perusahaan distribusi yang mengimplementasikan ERP dengan tujuan utama mempercepat proses tutup buku bulanan yang sebelumnya selalu memakan waktu hampir dua minggu. Sebelum implementasi, mereka mencatat baseline dengan detail: waktu tutup buku rata-rata, jumlah koreksi yang biasanya diperlukan, dan berapa lama laporan siap dibaca manajemen.",
  },
  {
    type: "p",
    text: "Enam bulan setelah implementasi, mereka mengukur ulang metrik yang sama: waktu tutup buku turun menjadi tiga hari, jumlah koreksi berkurang signifikan, dan laporan sudah siap dibaca jauh lebih cepat dari sebelumnya. Dengan data konkret ini, mereka bisa dengan yakin menyatakan project ini berhasil kepada direksi — bukan sekadar berdasarkan kesan umum bahwa “sistemnya kelihatan berjalan lancar”.",
  },
  { type: "h2", text: "Menggunakan hasil evaluasi untuk langkah berikutnya" },
  {
    type: "p",
    text: "Pengukuran keberhasilan bukan hanya untuk menilai project yang sudah selesai berjalan, tetapi juga sangat membantu menentukan modul atau perbaikan berikutnya yang paling bernilai untuk dikerjakan selanjutnya. Hasilnya memastikan pengembangan sistem ke depan tetap didorong oleh masalah nyata yang terukur, bukan sekadar asumsi atau permintaan yang terdengar menarik tanpa dasar data yang jelas.",
  },
  { type: "h2", text: "Melibatkan berbagai pihak dalam evaluasi" },
  {
    type: "p",
    text: "Jangan hanya mengandalkan data kuantitatif semata. Kumpulkan juga masukan kualitatif dari berbagai pihak yang memakai sistem sehari-hari — apa yang mereka rasakan lebih mudah, apa yang masih terasa menyulitkan, dan saran perbaikan apa yang mereka miliki berdasarkan pengalaman langsung menggunakan sistem tersebut.",
  },
  { type: "h2", text: "Langkah mengukur keberhasilan implementasi ERP" },
  {
    type: "ol",
    items: [
      "Tentukan ukuran keberhasilan yang terkait langsung dengan tujuan awal project",
      "Catat kondisi awal secara detail sebelum sistem baru mulai berjalan",
      "Tetapkan periode evaluasi yang realistis, tidak terlalu dini",
      "Ukur baik data kuantitatif maupun masukan kualitatif dari pengguna",
      "Bandingkan hasil dengan kondisi awal secara objektif",
      "Gunakan temuan untuk menentukan prioritas pengembangan selanjutnya",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Berapa lama waktu ideal sebelum melakukan evaluasi pertama?" },
  {
    type: "p",
    text: "Umumnya tiga hingga enam bulan setelah sistem mulai digunakan penuh, cukup waktu untuk melewati periode penyesuaian awal namun masih cukup dekat untuk mengambil tindakan korektif jika diperlukan.",
  },
  { type: "h3", text: "Apa yang harus dilakukan jika hasil evaluasi menunjukkan kegagalan?" },
  {
    type: "p",
    text: "Telusuri akar penyebabnya dengan jujur — apakah karena sistemnya yang kurang tepat, proses yang belum disesuaikan dengan baik, atau kurangnya pelatihan dan dukungan bagi pengguna. Hasil evaluasi yang jujur, meski tidak menyenangkan, jauh lebih berguna dibanding menutupi masalah demi menjaga citra project.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Mengukur keberhasilan implementasi ERP mengubah penilaian dari sekadar kesan subjektif menjadi bukti yang konkret dan bisa dipertanggungjawabkan. Dengan menetapkan ukuran sejak awal, mencatat kondisi baseline, dan mengevaluasi secara berkala, investasi besar dalam sistem ERP bisa dinilai secara objektif — dan hasilnya menjadi dasar yang kuat untuk pengembangan berikutnya.",
  },
  {
    type: "cta",
    title: "Sudah punya cara mengukur keberhasilan sistem yang sedang berjalan?",
    text: "Diskusikan cara mengukur dampak nyata implementasi sistem bisnis Anda bersama tim AG·SORA.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];

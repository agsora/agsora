import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Lima tahun lalu, perusahaan membeli lisensi software akuntansi sekali bayar seharga puluhan juta, dengan pemikiran “beli putus, tidak perlu bayar lagi selamanya”. Kenyataannya, biaya dukungan teknis tahunan, biaya pembaruan agar tetap kompatibel dengan sistem operasi baru, dan biaya server yang harus terus dirawat ternyata jauh melampaui perkiraan awal. Total biaya lima tahun itu, jika dihitung ulang, ternyata lebih mahal dari opsi berlangganan yang dulu mereka anggap “terlalu mahal per bulan”.",
  },
  {
    type: "p",
    text: "Saat memilih software untuk kebutuhan bisnis, Anda sering dihadapkan pada dua model utama: berlangganan (SaaS) dengan biaya berkala yang dibayarkan rutin, atau lisensi yang dibeli sekali dan dimiliki selamanya. Membandingkan keduanya hanya berdasarkan angka harga yang tertera di brosur atau halaman penjualan hampir selalu menyesatkan dan bisa mengarah pada keputusan yang keliru.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Bandingkan total biaya dalam rentang beberapa tahun, bukan hanya biaya di tahun pertama",
      "SaaS unggul dalam kemudahan memulai dan kecilnya biaya awal yang dibutuhkan",
      "Lisensi sekali beli unggul dalam kendali dan tidak ada biaya berkala yang terus berjalan",
      "Perhatikan biaya per pengguna yang bisa membengkak seiring pertumbuhan tim",
      "Pastikan Anda bisa mengekspor data secara lengkap jika suatu saat berhenti berlangganan",
    ],
  },
  { type: "h2", text: "Model berlangganan (SaaS)" },
  {
    type: "ul",
    items: [
      "Biaya awal yang rendah, dibayarkan secara berkala setiap bulan atau tahun",
      "Pembaruan fitur dan perbaikan bug biasanya sudah termasuk dalam biaya berlangganan",
      "Server dan seluruh aspek pemeliharaan teknis dikelola sepenuhnya oleh pihak penyedia",
      "Mudah untuk memulai dan mudah pula untuk berhenti kapan saja dibutuhkan",
      "Total biaya yang terus bertambah seiring lamanya waktu pemakaian",
      "Data bisnis Anda tersimpan di infrastruktur milik pihak penyedia layanan",
    ],
  },
  { type: "h2", text: "Model lisensi sekali beli" },
  {
    type: "ul",
    items: [
      "Biaya awal yang jauh lebih besar dibanding model berlangganan",
      "Hak pakai yang tidak memiliki batas waktu, meski versi yang lebih baru mungkin tetap berbayar terpisah",
      "Sering kali membutuhkan server dan infrastruktur pemeliharaan sendiri",
      "Biaya dukungan teknis dan pembaruan fitur sering ditagih secara terpisah",
      "Kendali yang jauh lebih besar atas proses instalasi dan penyimpanan data",
    ],
  },
  { type: "h2", text: "Bandingkan total biaya dalam beberapa tahun" },
  {
    type: "p",
    text: "Perbandingan yang jauh lebih adil dan akurat adalah menghitung seluruh biaya dalam rentang waktu yang sama, misalnya tiga tahun ke depan. Untuk model lisensi, tambahkan biaya server, biaya pemeliharaan rutin, biaya dukungan teknis, dan biaya pembaruan fitur yang biasanya ditagih terpisah. Untuk model berlangganan, perhitungkan potensi kenaikan biaya seiring bertambahnya jumlah pengguna atau kapasitas yang dibutuhkan.",
  },
  {
    type: "callout",
    title: "Perhatikan biaya per pengguna dengan cermat",
    text: "Banyak layanan berlangganan menghitung biayanya berdasarkan jumlah pengguna yang aktif memakai sistem. Harga yang terasa sangat terjangkau untuk lima pengguna di awal bisa berubah menjadi beban yang signifikan ketika tim Anda berkembang menjadi puluhan orang. Masukkan proyeksi pertumbuhan tim Anda ke dalam perhitungan sejak awal, jangan hanya berdasarkan kondisi saat ini.",
  },
  { type: "h2", text: "Pertanyaan yang sering terlewat saat membandingkan" },
  {
    type: "ol",
    items: [
      "Apakah seluruh data bisa diekspor secara lengkap jika suatu saat berhenti berlangganan?",
      "Apa yang terjadi terhadap lisensi yang sudah dibeli jika penyedianya berhenti beroperasi?",
      "Apakah harga berlangganan berpotensi naik di masa depan, dan bagaimana ketentuannya?",
      "Apakah harga lisensi yang dibeli sudah mencakup pembaruan keamanan secara berkelanjutan?",
      "Siapa yang bertanggung jawab penuh atas proses backup data secara rutin?",
    ],
  },
  { type: "h2", text: "Bukan sekadar soal biaya semata" },
  {
    type: "p",
    text: "Model berlangganan sangat cocok ketika Anda ingin segera memulai operasional tanpa harus mengurus kompleksitas infrastruktur teknis sendiri. Lisensi sekali beli atau sistem yang dimiliki sepenuhnya lebih masuk akal ketika kendali penuh atas data dan proses instalasi menjadi prioritas utama, atau ketika skala penggunaan yang sangat besar membuat biaya berlangganan menjadi terlalu mahal dalam jangka panjang. Pilih berdasarkan kebutuhan nyata dan kemampuan tim internal Anda, bukan semata-mata berdasarkan angka biaya awal yang terlihat paling kecil.",
  },
  { type: "h2", text: "Ilustrasi: dua perusahaan, dua kebutuhan berbeda" },
  {
    type: "p",
    text: "Bayangkan sebuah startup dengan lima karyawan yang membutuhkan sistem CRM segera untuk mulai mengelola prospek penjualan. Model berlangganan jelas jauh lebih masuk akal bagi mereka — biaya awal yang rendah memungkinkan mereka mulai beroperasi dengan cepat tanpa harus mengeluarkan modal besar di awal yang berisiko bagi bisnis yang masih baru berjalan.",
  },
  {
    type: "p",
    text: "Bandingkan dengan perusahaan manufaktur besar dengan lima ratus karyawan yang membutuhkan sistem ERP untuk jangka panjang, dengan tim IT internal yang cukup kuat untuk mengelola infrastruktur sendiri. Untuk skala operasional sebesar ini, biaya berlangganan per pengguna bisa jauh melampaui biaya lisensi sekali beli dalam hitungan beberapa tahun saja, membuat opsi lisensi menjadi jauh lebih ekonomis dalam jangka panjang.",
  },
  { type: "h2", text: "Mempertimbangkan opsi hibrida" },
  {
    type: "p",
    text: "Beberapa penyedia software kini menawarkan model campuran — lisensi yang dibeli sekali untuk penggunaan inti, ditambah biaya berlangganan opsional untuk fitur tambahan atau dukungan teknis lanjutan. Model seperti ini bisa menjadi jalan tengah yang menarik bagi bisnis yang menginginkan kendali lebih besar tanpa sepenuhnya kehilangan fleksibilitas dari model berlangganan.",
  },
  { type: "h2", text: "Mengevaluasi risiko ketergantungan pada penyedia" },
  {
    type: "p",
    text: "Baik model berlangganan maupun lisensi sekali beli membawa risiko ketergantungan pada penyedia software tertentu. Untuk model berlangganan, risikonya adalah perubahan kebijakan harga atau penghentian layanan sepihak. Untuk lisensi sekali beli, risikonya adalah penyedia yang berhenti memberikan pembaruan dan dukungan di masa depan. Evaluasi reputasi dan stabilitas jangka panjang penyedia sebelum berkomitmen pada salah satu model.",
  },
  { type: "h2", text: "Langkah memutuskan model yang tepat" },
  {
    type: "ol",
    items: [
      "Hitung total biaya kepemilikan untuk rentang waktu tiga hingga lima tahun",
      "Proyeksikan pertumbuhan jumlah pengguna dan dampaknya pada biaya berlangganan",
      "Evaluasi kapasitas tim internal untuk mengelola infrastruktur sendiri jika memilih lisensi",
      "Tanyakan kebijakan ekspor data dan kelangsungan layanan kepada penyedia",
      "Pertimbangkan opsi hibrida jika tersedia dan sesuai kebutuhan",
    ],
  },
  { type: "h2", text: "Keamanan data pada masing-masing model" },
  {
    type: "p",
    text: "Pada model berlangganan, keamanan data sepenuhnya bergantung pada standar dan praktik penyedia layanan — Anda perlu memeriksa bagaimana mereka mengenkripsi data, siapa saja yang punya akses ke server mereka, dan langkah apa yang mereka ambil jika terjadi insiden keamanan. Tanyakan secara spesifik tentang sertifikasi keamanan yang mereka miliki dan lokasi penyimpanan data, terutama jika bisnis Anda menangani data pelanggan yang sensitif.",
  },
  {
    type: "p",
    text: "Pada model lisensi sekali beli dengan server sendiri, keamanan data sepenuhnya menjadi tanggung jawab tim internal Anda. Ini memberi kendali lebih besar, tetapi juga berarti kesalahan konfigurasi, kelalaian memperbarui sistem keamanan, atau server yang kurang terawat menjadi risiko yang harus ditanggung sendiri tanpa bisa dilimpahkan ke pihak penyedia software. Pertimbangkan dengan jujur apakah tim internal Anda benar-benar memiliki kapasitas untuk menjaga keamanan ini secara berkelanjutan, bukan hanya di awal implementasi.",
  },
  { type: "h2", text: "Kapan biaya berlangganan mulai terasa memberatkan" },
  {
    type: "p",
    text: "Biaya berlangganan yang terasa wajar di awal bisa perlahan membengkak seiring waktu tanpa disadari, terutama ketika tim bertambah, kebutuhan modul tambahan muncul, atau penyedia menaikkan harga di pembaruan kontrak tahunan berikutnya. Tinjau tagihan berlangganan Anda secara berkala, bukan hanya sekali saat pertama kali berlangganan, dan bandingkan apakah nilai yang didapat masih sepadan dengan biaya yang terus dikeluarkan setiap periode.",
  },
  {
    type: "p",
    text: "Jika biaya berlangganan mulai mendekati atau bahkan melampaui perkiraan biaya lisensi sekali beli untuk skala operasional Anda saat ini, itu adalah sinyal yang layak dipertimbangkan untuk mengevaluasi ulang model yang dipakai — bukan berarti harus segera berpindah, tetapi setidaknya membuka diskusi dengan penyedia atau mempertimbangkan alternatif lain yang tersedia di pasar.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Model mana yang lebih umum dipilih bisnis kecil di Indonesia saat ini?" },
  {
    type: "p",
    text: "Sebagian besar bisnis kecil dan menengah cenderung memilih model berlangganan karena biaya awal yang rendah dan tidak perlu mengelola infrastruktur teknis sendiri, yang biasanya menjadi kendala utama bagi bisnis dengan sumber daya IT terbatas.",
  },
  { type: "h3", text: "Bisakah berpindah dari satu model ke model lainnya di kemudian hari?" },
  {
    type: "p",
    text: "Bisa, tapi perpindahan seperti ini membutuhkan usaha migrasi data yang tidak sedikit. Beberapa penyedia menawarkan kemudahan transisi antar model, tapi selalu periksa terlebih dahulu sebelum memutuskan untuk memastikan prosesnya tidak akan terlalu merepotkan operasional bisnis Anda.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Keputusan antara berlangganan atau lisensi sekali beli sebaiknya didasarkan pada perhitungan biaya menyeluruh dalam jangka panjang, kapasitas tim internal Anda, dan kebutuhan spesifik bisnis — bukan sekadar angka harga awal yang terlihat paling menarik. Luangkan waktu menghitung dengan cermat sebelum berkomitmen pada salah satu model, karena keputusan ini akan berdampak pada operasional bisnis Anda selama bertahun-tahun ke depan.",
  },
  {
    type: "cta",
    title: "Bingung memilih antara berlangganan atau lisensi sekali beli?",
    text: "Diskusikan kebutuhan dan skala bisnis Anda bersama tim AG·SORA untuk menemukan model yang paling sesuai.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];

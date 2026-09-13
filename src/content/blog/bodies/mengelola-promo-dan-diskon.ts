import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Promo akhir bulan sukses besar — omzet naik 40%. Tapi saat pemilik menghitung margin bulan itu, angkanya justru lebih kecil dari bulan biasa. Diskon yang diberikan kasir ternyata jauh lebih besar dari yang direncanakan, karena aturannya hanya disampaikan lisan dan setiap kasir menafsirkannya sedikit berbeda.",
  },
  {
    type: "p",
    text: "Promo adalah alat penjualan yang umum dipakai: potongan harga, beli dua gratis satu, diskon member, atau harga khusus di jam tertentu. Masalahnya, ketika promo diterapkan secara manual — kasir mengetik potongan sendiri berdasarkan ingatan atau perkiraan — laporan penjualan menjadi sulit dibaca dan dampak sebenarnya dari promo tersebut tidak pernah benar-benar diketahui secara pasti.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Definisikan promo di sistem dengan aturan yang jelas, jangan mengandalkan ingatan kasir",
      "Pisahkan nilai diskon dari penjualan normal di laporan agar dampaknya terukur",
      "Batasi diskon manual dengan nilai maksimum dan kewajiban mencatat alasan",
      "Ukur dampak promo dari margin, bukan hanya dari volume penjualan",
      "Evaluasi setiap promo setelah berakhir untuk memperbaiki promo berikutnya",
    ],
  },
  { type: "h2", text: "Kenapa promo manual berisiko" },
  {
    type: "p",
    text: "Ketika aturan promo hanya disampaikan secara lisan atau lewat pesan singkat ke grup kasir, setiap orang berpotensi menafsirkannya sedikit berbeda. Satu kasir mungkin menerapkan diskon ke seluruh transaksi, sementara yang lain hanya ke produk tertentu sesuai maksud awal. Perbedaan kecil ini, jika terjadi di ratusan transaksi, bisa berakumulasi menjadi selisih margin yang signifikan tanpa ada yang benar-benar menyadarinya sampai laporan bulanan keluar.",
  },
  { type: "h2", text: "Atur promo di sistem, bukan di ingatan kasir" },
  {
    type: "p",
    text: "Promo sebaiknya didefinisikan langsung di sistem dengan aturan yang jelas dan tidak ambigu: produk apa yang termasuk, berapa besar potongannya, periode berlaku dari tanggal berapa sampai tanggal berapa, dan syarat tambahan jika ada. Dengan cara ini, kasir tidak perlu menghitung atau mengingat detail apa pun, dan promo akan otomatis berhenti berlaku begitu periodenya berakhir tanpa perlu ada yang mengingatkan secara manual.",
  },
  { type: "h2", text: "Jenis aturan promo yang umum" },
  {
    type: "ul",
    items: [
      "Potongan persentase atau nominal tetap untuk produk atau kategori tertentu",
      "Harga paket khusus untuk kombinasi beberapa produk sekaligus",
      "Beli sejumlah tertentu, dapat tambahan produk secara gratis",
      "Diskon berdasarkan total nilai belanja yang mencapai ambang tertentu",
      "Harga khusus untuk member terdaftar atau pada periode waktu tertentu",
    ],
  },
  { type: "h2", text: "Pisahkan diskon di laporan penjualan" },
  {
    type: "p",
    text: "Laporan penjualan yang baik harus memisahkan dengan jelas antara harga normal, nilai diskon yang diberikan, dan penjualan bersih setelah diskon. Tanpa pemisahan ini, penjualan yang terjadi saat promo berlangsung terlihat seolah-olah hanya penurunan harga biasa di laporan, dan Anda tidak akan pernah tahu berapa sebenarnya biaya riil dari promo tersebut terhadap keuntungan bisnis.",
  },
  {
    type: "callout",
    title: "Ukur dampak, bukan hanya volume penjualan",
    text: "Promo yang berhasil menaikkan jumlah transaksi belum tentu benar-benar menguntungkan bisnis. Bandingkan margin keseluruhan, bukan hanya angka omzet kasar, dan perhatikan juga apakah penjualan produk lain yang tidak sedang dipromosikan justru ikut turun selama periode promo berlangsung — mungkin pelanggan hanya mengalihkan pembelian mereka, bukan menambah belanja secara keseluruhan.",
  },
  { type: "h2", text: "Batasi diskon manual dengan ketat" },
  {
    type: "p",
    text: "Kebutuhan memberikan diskon di luar promo resmi pasti akan tetap ada, misalnya untuk mengompensasi barang yang sedikit cacat atau situasi khusus dengan pelanggan tertentu. Tetapi diskon manual seperti ini sebaiknya dibatasi nilainya secara tegas, membutuhkan persetujuan supervisor jika melebihi batas tertentu, dan selalu disertai catatan alasan yang jelas. Diskon manual tanpa kontrol yang memadai adalah salah satu celah kebocoran margin yang paling umum ditemui di bisnis retail.",
  },
  { type: "h2", text: "Hati-hati dengan promo yang bertumpuk" },
  {
    type: "p",
    text: "Ketika beberapa promo berlaku secara bersamaan — misalnya diskon member dan diskon akhir bulan terjadi di waktu yang sama — sistem perlu memiliki aturan yang jelas: apakah kedua promo tersebut boleh digabungkan, atau hanya salah satu yang berlaku untuk satu transaksi. Tanpa aturan yang tegas ini, pelanggan bisa mendapatkan potongan harga jauh lebih besar dari yang sebenarnya direncanakan, mengikis margin tanpa disadari.",
  },
  { type: "h2", text: "Ilustrasi: sebelum dan sesudah kontrol promo" },
  {
    type: "p",
    text: "Bayangkan sebuah toko pakaian yang menjalankan promo diskon 20% untuk kategori tertentu setiap akhir bulan, diinformasikan lewat pesan ke grup kasir. Beberapa kasir menerapkan diskon ke seluruh transaksi karena lupa detail kategorinya, sementara yang lain menerapkannya dengan benar. Setelah promo berakhir, pemilik toko kesulitan menghitung berapa sebenarnya total diskon yang diberikan karena tidak tercatat terpisah dari penjualan normal.",
  },
  {
    type: "p",
    text: "Setelah beralih ke sistem yang mengatur promo secara otomatis dengan aturan yang tegas per kategori produk, setiap kasir cukup memindai barang seperti biasa dan diskon diterapkan secara konsisten sesuai aturan yang sudah ditetapkan. Laporan di akhir promo menunjukkan dengan jelas total diskon yang diberikan dan dampaknya terhadap margin, memudahkan evaluasi untuk promo berikutnya.",
  },
  { type: "h2", text: "Evaluasi setelah promo berakhir" },
  {
    type: "p",
    text: "Jadwalkan evaluasi singkat setelah setiap promo selesai berjalan: berapa banyak transaksi yang memakai promo tersebut, berapa total nilai diskon yang diberikan, dan bagaimana dampak keseluruhannya terhadap margin bisnis. Catatan hasil evaluasi ini membuat keputusan tentang promo berikutnya jauh lebih tepat, alih-alih mengulang pola yang sama tanpa benar-benar tahu apakah itu efektif atau justru merugikan.",
  },
  { type: "h2", text: "Merencanakan promo dengan target yang jelas" },
  {
    type: "p",
    text: "Sebelum meluncurkan promo, tentukan tujuannya secara spesifik: apakah untuk menghabiskan stok lama, menarik pelanggan baru, atau mendorong pembelian di jam sepi. Tujuan yang jelas membantu menentukan mekanisme promo yang paling tepat dan metrik apa yang perlu dipantau untuk menilai keberhasilannya, alih-alih membuat promo generik yang tidak jelas apa yang ingin dicapai.",
  },
  { type: "h2", text: "Langkah mengelola promo dengan baik" },
  {
    type: "ol",
    items: [
      "Tentukan tujuan spesifik dari setiap promo sebelum diluncurkan",
      "Definisikan aturan promo secara jelas dan tegas di dalam sistem",
      "Tetapkan bagaimana promo yang bertumpuk akan ditangani",
      "Batasi diskon manual dengan nilai maksimum dan kewajiban persetujuan",
      "Pantau laporan diskon secara terpisah dari penjualan normal",
      "Evaluasi hasil promo setelah berakhir dan simpan sebagai referensi",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Berapa batas diskon manual yang wajar untuk kasir?" },
  {
    type: "p",
    text: "Tergantung margin produk Anda. Tinjau margin rata-rata dan tetapkan batas yang tidak mengancam profitabilitas jika diberikan tanpa persetujuan tambahan, misalnya untuk kompensasi ketidaknyamanan kecil kepada pelanggan.",
  },
  { type: "h3", text: "Bagaimana cara mencegah kasir menyalahgunakan promo?" },
  {
    type: "p",
    text: "Sistem yang menerapkan promo secara otomatis berdasarkan aturan tetap, dikombinasikan dengan jejak audit yang mencatat setiap transaksi bermasalah, secara signifikan mengurangi peluang penyalahgunaan dibanding mengandalkan kejujuran dan ingatan kasir semata.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Promo yang dikelola dengan baik adalah alat yang efektif untuk mendorong penjualan tanpa mengorbankan kejelasan finansial bisnis Anda. Dengan mendefinisikan aturan di sistem, memisahkan pelaporan diskon, dan mengevaluasi hasilnya secara konsisten, promo berubah dari tebakan menjadi strategi yang bisa diukur dan diperbaiki dari waktu ke waktu.",
  },
  {
    type: "cta",
    title: "Promo Anda sering bocor tanpa jejak yang jelas?",
    text: "AG·SORA POS mendukung aturan promo otomatis dan laporan diskon yang terpisah dari penjualan normal.",
    href: "/products#pos",
    label: "Lihat AG·SORA POS",
  },
];

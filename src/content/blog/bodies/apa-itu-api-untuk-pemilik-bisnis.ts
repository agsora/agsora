import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Rapat evaluasi vendor. Salah satu kandidat bertanya, “Sistem lama Bapak punya API tidak?” Pemilik bisnis mengangguk sopan sambil diam-diam bertanya dalam hati apa maksudnya. Ia tidak mau terlihat tidak paham, jadi pertanyaan itu dibiarkan berlalu — padahal jawabannya sangat menentukan apakah project integrasi yang direncanakan bisa berjalan atau tidak.",
  },
  {
    type: "p",
    text: "Ketika membicarakan sistem baru, istilah API hampir selalu muncul dalam percakapan: “sistemnya punya API?”, “bisa diintegrasikan lewat API?”. Bagi banyak pemilik bisnis, istilah ini terdengar sangat teknis dan mengintimidasi. Padahal konsepnya sebenarnya cukup sederhana, dan memahaminya membantu Anda mengambil keputusan bisnis yang jauh lebih baik saat berbicara dengan vendor teknologi.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "API adalah cara dua sistem saling bertukar data secara otomatis tanpa campur tangan manusia",
      "Banyak proses bisnis sehari-hari sebenarnya sudah bergantung pada API tanpa Anda sadari",
      "Tanpa integrasi, data harus dipindahkan manual — memakan waktu dan rawan kesalahan",
      "Tanyakan ketersediaan API sebelum membeli software baru",
      "Rencanakan penanganan kegagalan koneksi sejak awal perancangan integrasi",
    ],
  },
  { type: "h2", text: "Analogi sederhana untuk memahami API" },
  {
    type: "p",
    text: "Bayangkan pelayan di sebuah restoran. Anda tidak masuk ke dapur untuk memasak makanan sendiri; Anda menyampaikan pesanan kepada pelayan dengan cara yang sudah disepakati — menu yang tersedia, format pemesanan yang jelas — lalu pelayan membawakan hasilnya kepada Anda tanpa Anda perlu tahu detail proses memasaknya.",
  },
  {
    type: "p",
    text: "API (Application Programming Interface) bekerja dengan cara yang serupa. Satu sistem mengirim permintaan dengan format tertentu yang sudah disepakati, dan sistem lain membalas dengan data atau hasil yang diminta — tanpa kedua sistem perlu saling mengetahui cara kerja internal masing-masing secara mendetail. Yang penting hanya “bahasa” komunikasi di antara keduanya sudah disepakati dan dipahami bersama.",
  },
  { type: "h2", text: "Contoh dalam bisnis sehari-hari" },
  {
    type: "ul",
    items: [
      "Sistem kasir mengirim data penjualan harian ke software akuntansi secara otomatis",
      "Toko online menanyakan status pembayaran pelanggan ke payment gateway",
      "Aplikasi pengiriman mengambil informasi ongkos kirim dari layanan ekspedisi",
      "Pesanan dari marketplace masuk otomatis ke sistem manajemen stok",
      "Data karyawan dari sistem HR dipakai oleh sistem absensi tanpa input ulang",
    ],
  },
  {
    type: "p",
    text: "Jika bisnis Anda sudah memakai salah satu contoh di atas, Anda sebenarnya sudah memanfaatkan API tanpa perlu memahami detail teknisnya — yang penting adalah hasilnya: data mengalir otomatis tanpa harus dipindahkan manual oleh manusia.",
  },
  { type: "h2", text: "Kenapa ini penting bagi keputusan bisnis Anda" },
  {
    type: "p",
    text: "Tanpa integrasi lewat API, data harus dipindahkan oleh manusia: diekspor dari satu sistem, disalin, lalu diketik ulang atau diimpor ke sistem lain. Pekerjaan manual seperti ini memakan waktu, rawan kesalahan ketik, dan sering membuat data di satu sistem tertinggal dari sistem lainnya karena tidak diperbarui secara real-time.",
  },
  {
    type: "p",
    text: "API memungkinkan data mengalir otomatis antar sistem, sehingga setiap bagian bisnis bekerja dengan informasi yang sama dan selalu terbaru — mengurangi risiko kesalahan sekaligus menghemat waktu yang selama ini terbuang untuk pekerjaan salin-tempel yang berulang.",
  },
  {
    type: "callout",
    title: "Pertanyaan yang layak diajukan saat membeli software",
    text: "Apakah sistem ini menyediakan API? Apakah dokumentasinya tersedia dan mudah dipahami? Apakah ada biaya tambahan untuk memakainya? Sistem tanpa API sama sekali bisa membuat data Anda terkunci di dalamnya, menyulitkan integrasi di masa depan, dan membatasi fleksibilitas bisnis Anda untuk berkembang.",
  },
  { type: "h2", text: "Integrasi tidak selalu sesederhana kedengarannya" },
  {
    type: "p",
    text: "Adanya API tidak otomatis berarti integrasi akan mudah dilakukan. Kedua sistem mungkin menyimpan data dengan struktur yang berbeda, ada batasan jumlah permintaan yang bisa dikirim dalam waktu tertentu, atau dokumentasinya kurang lengkap sehingga membutuhkan waktu lebih lama untuk dipahami pengembang. Karena itu, kemungkinan dan kompleksitas integrasi sebaiknya diperiksa sejak tahap awal, sebelum project dimulai dan anggaran sudah dikomitmenkan.",
  },
  { type: "h2", text: "Rencanakan saat integrasi gagal" },
  {
    type: "p",
    text: "Koneksi internet bisa terputus dan layanan pihak ketiga bisa mengalami gangguan sewaktu-waktu, di luar kendali Anda maupun vendor. Integrasi yang dirancang dengan baik memiliki mekanisme mencoba ulang secara otomatis, pencatatan setiap kegagalan yang terjadi, dan pemberitahuan kepada tim terkait — sehingga data yang gagal terkirim tidak hilang begitu saja tanpa disadari siapa pun.",
  },
  { type: "h2", text: "Ilustrasi: bisnis yang terhubung vs yang terpisah" },
  {
    type: "p",
    text: "Bayangkan dua toko online dengan volume pesanan yang sama. Toko pertama menerima pesanan dari marketplace, lalu setiap pagi admin mengunduh daftar pesanan dan mengetik ulang ke sistem stok internal secara manual. Prosesnya memakan waktu dua jam setiap hari, dan sesekali ada pesanan yang terlewat diinput karena kelelahan admin.",
  },
  {
    type: "p",
    text: "Toko kedua menggunakan integrasi API antara marketplace dan sistem stok mereka. Setiap pesanan yang masuk otomatis mengurangi stok dan tercatat di sistem internal tanpa campur tangan manusia. Admin mereka menghabiskan waktu yang dulu terpakai untuk input manual itu untuk hal lain yang lebih bernilai, seperti menganalisis produk mana yang paling laris.",
  },
  { type: "h2", text: "Memulai percakapan tentang integrasi dengan vendor" },
  {
    type: "p",
    text: "Anda tidak perlu memahami detail teknis API untuk memulai diskusi yang produktif dengan vendor. Cukup jelaskan sistem apa saja yang ingin Anda hubungkan dan data apa yang perlu mengalir di antaranya — misalnya “pesanan dari toko online harus otomatis mengurangi stok di sistem gudang”. Vendor yang kompeten akan menerjemahkan kebutuhan ini menjadi solusi teknis yang tepat.",
  },
  { type: "h2", text: "Langkah mengevaluasi kebutuhan integrasi" },
  {
    type: "ol",
    items: [
      "Daftar semua sistem yang sedang dipakai bisnis Anda",
      "Identifikasi data apa yang saat ini masih dipindahkan manual antar sistem",
      "Tanyakan ketersediaan API pada setiap sistem yang terlibat",
      "Diskusikan kompleksitas dan biaya integrasi dengan vendor",
      "Rencanakan penanganan kegagalan koneksi sejak awal",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah semua software modern pasti punya API?" },
  {
    type: "p",
    text: "Tidak selalu. Beberapa software, terutama yang lebih lama atau dibangun khusus tanpa perencanaan integrasi, mungkin tidak menyediakan API sama sekali. Selalu tanyakan secara spesifik sebelum berasumsi.",
  },
  { type: "h3", text: "Berapa biaya membangun integrasi API?" },
  {
    type: "p",
    text: "Bergantung pada kompleksitas kedua sistem yang dihubungkan dan kualitas dokumentasi API yang tersedia. Integrasi sederhana antara dua sistem populer dengan dokumentasi lengkap biasanya lebih terjangkau dibanding integrasi dengan sistem lama yang dokumentasinya minim.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "API bukan sekadar istilah teknis yang menakutkan, melainkan konsep sederhana yang menentukan seberapa lancar sistem-sistem bisnis Anda bisa saling berbicara. Dengan memahami dasarnya, Anda bisa bertanya hal yang tepat kepada vendor dan mengambil keputusan yang membuat data bisnis Anda mengalir lancar, bukan terkunci dan terpisah-pisah.",
  },
  {
    type: "cta",
    title: "Sistem Anda masih terpisah-pisah dan butuh input manual?",
    text: "Tim AG·SORA bisa membantu menghubungkan sistem yang sudah Anda pakai lewat integrasi API yang tepat.",
    href: "/services/api-integration",
    label: "Pelajari Integrasi API",
  },
];

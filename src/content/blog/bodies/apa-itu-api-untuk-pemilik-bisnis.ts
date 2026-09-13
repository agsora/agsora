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
  { type: "h2", text: "Jenis-jenis API yang mungkin Anda temui" },
  {
    type: "p",
    text: "Tidak semua API dibuat dengan cara yang sama, meski tujuannya serupa. Sebagian vendor menyediakan API terbuka yang dokumentasinya bisa diakses siapa saja secara publik di internet, sehingga pengembang mana pun bisa mempelajarinya tanpa perlu izin khusus terlebih dahulu. Sebagian lain menyediakan API tertutup yang hanya dibuka untuk mitra tertentu, biasanya disertai perjanjian kerja sama dan proses persetujuan sebelum akses diberikan.",
  },
  {
    type: "p",
    text: "Ada juga perbedaan dalam cara API dibayar. Sebagian layanan menyediakan API secara gratis sebagai bagian dari langganan yang sudah Anda bayar, sebagian lain mengenakan biaya tambahan berdasarkan jumlah permintaan yang dikirim setiap bulan. Saat mengevaluasi vendor, tanyakan secara spesifik skema biayanya, karena integrasi yang volumenya besar bisa membuat biaya API menjadi komponen yang cukup signifikan dalam total biaya kepemilikan sistem.",
  },
  { type: "h2", text: "Keamanan dalam integrasi API" },
  {
    type: "p",
    text: "Setiap kali dua sistem saling terhubung lewat API, ada jalur baru yang perlu diamankan. Akses ke API biasanya dikendalikan lewat kunci atau token khusus yang harus dijaga kerahasiaannya seperti kata sandi — jika kunci ini bocor atau tersebar tanpa sengaja, misalnya tertinggal di kode yang dibagikan secara terbuka, pihak yang tidak berwenang bisa saja mengakses data yang mengalir lewat integrasi tersebut.",
  },
  {
    type: "p",
    text: "Tanyakan kepada vendor bagaimana mereka mengelola akses ini: apakah setiap integrasi punya kunci terpisah yang bisa dicabut secara individual tanpa mengganggu integrasi lain, dan apakah ada catatan aktivitas yang bisa ditelusuri jika terjadi sesuatu yang mencurigakan. Pemilik bisnis tidak perlu memahami detail teknis kriptografinya, tetapi perlu memastikan pertanyaan keamanan dasar ini sudah dijawab sebelum integrasi berjalan dengan data pelanggan atau data keuangan yang sensitif.",
  },
  { type: "h2", text: "Ilustrasi: keputusan yang salah karena tidak bertanya" },
  {
    type: "p",
    text: "Sebuah bisnis ritel dengan banyak cabang memutuskan membeli sistem kasir baru tanpa menanyakan ketersediaan API sama sekali, karena harganya menarik dan fiturnya terlihat lengkap di demo penjualan. Belakangan, saat mereka ingin menghubungkan data penjualan dari sistem kasir ke software akuntansi yang sudah dipakai bertahun-tahun, ternyata sistem kasir baru itu tidak menyediakan cara otomatis untuk mengeluarkan data — satu-satunya opsi adalah mengekspor file setiap hari secara manual dan mengimpornya satu per satu.",
  },
  {
    type: "p",
    text: "Kejadian ini bisa dihindari sepenuhnya jika pertanyaan tentang API diajukan sejak sesi demo pertama. Bandingkan dengan bisnis lain yang secara khusus menanyakan hal ini sebelum membeli, memilih sistem kasir dengan API yang terdokumentasi jelas, dan berhasil menghubungkan data penjualan ke software akuntansi mereka secara otomatis sejak hari pertama sistem berjalan.",
  },
  { type: "h2", text: "Peran developer atau vendor teknis Anda" },
  {
    type: "p",
    text: "Anda sebagai pemilik bisnis tidak perlu bisa menulis kode untuk memanfaatkan API, tetapi perlu memiliki akses ke seseorang — baik staf internal maupun vendor — yang bisa menerjemahkan kebutuhan bisnis Anda menjadi implementasi teknis yang berjalan. Peran ini penting sejak tahap evaluasi vendor, bukan baru dilibatkan setelah kontrak diteken, karena mereka bisa membantu menilai apakah dokumentasi API benar-benar memadai atau ternyata banyak celah yang baru terasa saat implementasi sudah berjalan.",
  },
  { type: "h3", text: "Apakah saya perlu menyewa developer khusus untuk mengelola API?" },
  {
    type: "p",
    text: "Untuk kebutuhan integrasi yang sederhana dan jumlahnya sedikit, vendor sistem yang Anda pakai biasanya sudah menyediakan tim yang bisa membantu proses ini sebagai bagian dari layanan implementasi. Developer khusus internal lebih relevan ketika bisnis Anda memiliki banyak sistem yang perlu terus-menerus dihubungkan dan disesuaikan seiring waktu.",
  },
  { type: "h2", text: "Batas penggunaan dan perubahan versi API" },
  {
    type: "p",
    text: "Sebagian besar API membatasi jumlah permintaan yang boleh dikirim dalam periode waktu tertentu, dikenal sebagai rate limit. Batasan ini ada untuk menjaga stabilitas layanan agar tidak kewalahan menerima permintaan dari banyak pengguna sekaligus, tetapi bagi bisnis yang volumenya bertumbuh, batasan ini bisa menjadi kendala nyata jika tidak diperhitungkan sejak awal. Integrasi yang dirancang tanpa mempertimbangkan rate limit bisa berhenti berfungsi tiba-tiba begitu volume transaksi melewati ambang tertentu, justru pada saat bisnis sedang ramai-ramainya dan data yang mengalir paling dibutuhkan. Tanyakan kepada vendor berapa batas ini dan apakah tersedia opsi untuk menaikkannya seiring pertumbuhan kebutuhan Anda.",
  },
  {
    type: "p",
    text: "Vendor juga sewaktu-waktu memperbarui API mereka — menambah fitur, mengubah format data, atau menghentikan dukungan untuk versi lama. Perubahan seperti ini, jika tidak dikomunikasikan dan diantisipasi dengan baik, bisa membuat integrasi yang tadinya berjalan lancar tiba-tiba berhenti berfungsi tanpa peringatan. Vendor yang matang biasanya memberi masa transisi yang cukup panjang sebelum menghentikan dukungan versi lama, disertai dokumentasi perubahan yang jelas. Saat mengevaluasi vendor, tanyakan juga bagaimana mereka menangani perubahan versi API di masa depan, dan apakah tim teknis Anda atau vendor akan diberi tahu lebih dulu sebelum perubahan itu benar-benar diterapkan.",
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

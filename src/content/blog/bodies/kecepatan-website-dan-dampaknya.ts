import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Halaman produk masih berputar-putar loading. Lima detik. Tujuh detik. Calon pembeli yang sedang menunggu di halte bus dengan sinyal seadanya menyerah, menutup tab, dan kembali ke hasil pencarian untuk mencoba kompetitor Anda yang halamannya terbuka dalam sekejap.",
  },
  {
    type: "p",
    text: "Pengunjung jarang mau menunggu lama. Ketika halaman tidak kunjung tampil, terutama di ponsel dengan koneksi yang tidak selalu stabil, banyak orang menutupnya dan kembali ke hasil pencarian sebelum sempat membaca satu kata pun dari penawaran Anda. Bagi bisnis, itu berarti calon klien yang hilang bahkan sebelum mereka tahu apa yang sebenarnya Anda tawarkan.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Kecepatan website memengaruhi baik pengalaman pengunjung maupun penilaian mesin pencari",
      "Core Web Vitals mengukur seberapa cepat, responsif, dan stabil sebuah halaman",
      "Gambar besar dan skrip pihak ketiga adalah penyebab paling umum website lambat",
      "Uji kecepatan di perangkat dan koneksi yang mewakili pengunjung sesungguhnya",
      "Kecepatan adalah pekerjaan berkelanjutan, bukan perbaikan satu kali selesai",
    ],
  },
  { type: "h2", text: "Kecepatan dari sudut pandang pengguna" },
  {
    type: "p",
    text: "Google mengukur pengalaman sebuah halaman lewat metrik yang disebut Core Web Vitals. Secara sederhana, ketiga metrik utamanya menjawab hal-hal yang benar-benar dirasakan pengunjung saat membuka website Anda, bukan sekadar angka teknis abstrak.",
  },
  {
    type: "ul",
    items: [
      "Largest Contentful Paint (LCP): seberapa cepat konten utama halaman — biasanya gambar atau judul besar — benar-benar terlihat oleh pengunjung",
      "Interaction to Next Paint (INP): seberapa cepat halaman merespons ketika pengunjung mengklik tombol atau mengetuk sesuatu",
      "Cumulative Layout Shift (CLS): apakah tampilan halaman tiba-tiba bergeser saat sedang dimuat, membuat pengunjung salah klik",
    ],
  },
  {
    type: "p",
    text: "Ketiganya bukan sekadar angka teknis untuk pengembang, melainkan representasi langsung dari frustrasi atau kenyamanan yang dirasakan pengunjung nyata saat berinteraksi dengan website Anda.",
  },
  { type: "h2", text: "Penyebab website lambat yang umum" },
  {
    type: "ul",
    items: [
      "Gambar berukuran besar yang tidak dikompresi atau tidak disesuaikan dengan ukuran layar",
      "Terlalu banyak skrip pihak ketiga, seperti widget chat, pelacak analitik, dan plugin tambahan",
      "Hosting yang kurang memadai untuk menangani jumlah pengunjung website",
      "Font kustom dan animasi berlebihan yang memperlambat proses rendering halaman",
      "Halaman yang memuat semua konten sekaligus, termasuk yang belum terlihat pengunjung",
    ],
  },
  {
    type: "p",
    text: "Gambar yang tidak dioptimalkan adalah penyebab paling umum dan paling mudah diperbaiki. Satu foto produk berukuran lima megabita yang seharusnya cukup dua ratus kilobita bisa memperlambat halaman secara signifikan, terutama bagi pengunjung dengan koneksi seluler yang tidak secepat wifi kantor.",
  },
  {
    type: "callout",
    title: "Uji di ponsel dan koneksi biasa",
    text: "Website yang terasa cepat di laptop kantor dengan internet kencang bisa terasa sangat lambat di ponsel pelanggan yang sedang berada di area dengan sinyal terbatas. Uji website Anda dengan perangkat dan koneksi yang benar-benar mewakili kondisi pengunjung Anda, bukan hanya di lingkungan pengembangan yang ideal.",
  },
  { type: "h2", text: "Perbaikan yang biasanya paling berdampak" },
  {
    type: "ol",
    items: [
      "Mengoptimalkan gambar: sesuaikan ukuran dengan tampilan sebenarnya dan gunakan format modern seperti WebP",
      "Menunda pemuatan gambar yang berada di bawah layar pertama (lazy loading)",
      "Mengurangi skrip pihak ketiga yang sebenarnya tidak benar-benar diperlukan",
      "Memastikan konten utama tidak tersembunyi di balik animasi berlebihan saat halaman pertama kali dibuka",
    ],
  },
  {
    type: "p",
    text: "Perbaikan-perbaikan ini sering kali tidak membutuhkan desain ulang total, melainkan penyesuaian teknis yang bisa dikerjakan pengembang dalam waktu relatif singkat dengan dampak yang terasa signifikan.",
  },
  { type: "h2", text: "Ukur sebelum dan sesudah" },
  {
    type: "p",
    text: "Gunakan alat gratis seperti PageSpeed Insights untuk mengukur kondisi kecepatan website saat ini, lalu bandingkan hasilnya setelah perbaikan dilakukan. Data dari pengguna nyata yang tersedia di Google Search Console juga membantu melihat apakah perbaikan yang dilakukan benar-benar terasa oleh pengunjung sungguhan, bukan hanya terlihat baik di lingkungan pengujian.",
  },
  { type: "h2", text: "Ilustrasi: dampak nyata kecepatan pada bisnis" },
  {
    type: "p",
    text: "Bayangkan sebuah toko online fashion yang halaman produknya rata-rata membutuhkan enam detik untuk dimuat sepenuhnya, terutama karena foto produk beresolusi sangat tinggi yang belum dikompresi. Setelah menganalisis data, mereka menemukan tingkat pengunjung yang meninggalkan halaman sebelum sempat melihat detail produk cukup tinggi, terutama dari pengunjung ponsel.",
  },
  {
    type: "p",
    text: "Setelah mengoptimalkan ukuran gambar dan menunda pemuatan gambar yang belum terlihat, waktu muat halaman turun menjadi sekitar dua detik. Tingkat pengunjung yang bertahan hingga melihat detail produk meningkat, dan mereka mulai melihat lebih banyak pengunjung yang benar-benar sampai ke halaman checkout dibanding sebelumnya.",
  },
  { type: "h2", text: "Kecepatan dan SEO saling terkait" },
  {
    type: "p",
    text: "Selain memengaruhi pengalaman pengunjung secara langsung, kecepatan halaman juga menjadi salah satu faktor yang dipertimbangkan mesin pencari dalam menentukan peringkat hasil pencarian. Website yang lambat tidak hanya kehilangan pengunjung yang sudah datang, tetapi juga berpotensi kehilangan peluang ditemukan oleh calon pengunjung baru lewat pencarian organik.",
  },
  { type: "h2", text: "Kecepatan adalah pekerjaan berkelanjutan" },
  {
    type: "p",
    text: "Website cenderung melambat secara perlahan seiring waktu karena konten, gambar, dan skrip baru terus ditambahkan tanpa evaluasi terhadap yang lama. Jadikan pengecekan kecepatan sebagai bagian rutin setiap kali ada perubahan signifikan pada website — bukan hanya sekali di awal peluncuran lalu dilupakan begitu saja.",
  },
  { type: "h2", text: "Langkah memperbaiki kecepatan website" },
  {
    type: "ol",
    items: [
      "Ukur kondisi kecepatan saat ini dengan alat seperti PageSpeed Insights",
      "Identifikasi elemen yang paling memperlambat, biasanya gambar dan skrip",
      "Optimalkan gambar dan terapkan lazy loading untuk konten di bawah layar",
      "Evaluasi dan kurangi skrip pihak ketiga yang tidak esensial",
      "Uji ulang di perangkat dan koneksi yang mewakili pengunjung nyata",
      "Jadwalkan evaluasi kecepatan rutin, terutama setelah perubahan besar",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Berapa waktu muat halaman yang dianggap baik?" },
  {
    type: "p",
    text: "Sebagai patokan umum, halaman yang bisa menampilkan konten utamanya dalam waktu sekitar dua setengah detik dianggap baik. Namun angka pastinya bisa bervariasi tergantung jenis konten dan ekspektasi pengunjung di industri Anda.",
  },
  { type: "h3", text: "Apakah hosting murah selalu menjadi penyebab website lambat?" },
  {
    type: "p",
    text: "Hosting yang kurang memadai bisa menjadi salah satu faktor, tetapi sering kali penyebab utama justru ada di sisi konten dan kode website itu sendiri — gambar yang tidak dioptimalkan atau skrip yang berlebihan. Perbaiki dulu faktor-faktor ini sebelum berasumsi masalahnya di hosting.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Kecepatan website bukan sekadar metrik teknis untuk pengembang, melainkan faktor yang langsung memengaruhi apakah calon klien akan bertahan cukup lama untuk mengenal penawaran Anda atau pergi begitu saja ke kompetitor. Investasi kecil dalam mengoptimalkan kecepatan sering memberi dampak yang jauh lebih besar dibanding investasi desain yang mahal tapi lambat diakses.",
  },
  {
    type: "cta",
    title: "Website Anda terasa lambat, terutama di ponsel?",
    text: "AG·SORA membangun website dengan performa yang dioptimalkan sejak awal, bukan ditambal belakangan.",
    href: "/services/website",
    label: "Pelajari Layanan Website",
  },
];

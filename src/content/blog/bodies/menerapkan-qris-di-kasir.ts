import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Pelanggan menunjukkan layar ponselnya: “Sudah bayar kok, Mas.” Kasir mengangguk, mempercayai tampilan yang ditunjukkan, dan melepas pesanan. Sore harinya saat rekonsiliasi, dana yang seharusnya masuk untuk transaksi itu tidak ditemukan di mutasi rekening. Entah pembayarannya gagal, atau pelanggan menunjukkan bukti yang keliru — tidak ada yang bisa memastikan lagi.",
  },
  {
    type: "p",
    text: "Pembayaran nontunai, terutama QRIS, semakin umum di usaha kecil hingga besar di Indonesia. Memasang kode QR di meja kasir bisa dilakukan dengan cepat dan mudah. Tantangan yang lebih besar justru muncul setelahnya: memastikan setiap pembayaran benar-benar diterima dan mencocokkan uang yang masuk dengan transaksi yang tercatat di kasir.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Kode QR dinamis yang terhubung ke sistem kasir mengurangi kesalahan nominal dan mempermudah pencocokan",
      "Jangan konfirmasi pembayaran hanya dari tampilan layar ponsel pelanggan",
      "Integrasi sistem kasir dengan penyedia pembayaran membuat status transaksi berubah otomatis",
      "Pahami biaya transaksi dan jadwal pencairan dana dari penyedia layanan",
      "Cocokkan total pembayaran digital secara rutin dengan dana yang benar-benar diterima",
    ],
  },
  { type: "h2", text: "Kode QR statis dan dinamis" },
  {
    type: "p",
    text: "Secara umum ada dua pendekatan menerapkan QRIS. Kode QR statis dicetak sekali dan ditempel permanen, lalu pelanggan memasukkan nominal pembayaran sendiri di aplikasi mereka. Kode QR dinamis dibuat khusus untuk setiap transaksi dengan nominal yang sudah terisi otomatis sesuai tagihan.",
  },
  {
    type: "p",
    text: "Kode dinamis yang terhubung langsung ke sistem kasir jauh mengurangi risiko salah nominal — karena pelanggan tidak perlu mengetik angka sendiri — dan memudahkan pencocokan, karena setiap pembayaran terkait langsung dengan transaksi spesifik di kasir. Kode statis lebih sederhana untuk diterapkan tapi membuka lebih banyak celah kesalahan manusia, baik dari pelanggan yang salah ketik maupun kasir yang lupa mencocokkan.",
  },
  { type: "h2", text: "Masalah yang sering muncul" },
  {
    type: "ul",
    items: [
      "Pembayaran sudah masuk tetapi transaksi di kasir tidak ditandai lunas karena lupa dicatat",
      "Nominal yang dimasukkan pelanggan berbeda dengan tagihan sebenarnya",
      "Kasir mengonfirmasi pembayaran hanya dari tampilan layar ponsel pelanggan",
      "Dana masuk ke rekening tapi tidak jelas transaksi mana yang menyebabkannya",
      "Koneksi internet terputus saat pembayaran sedang diproses",
    ],
  },
  {
    type: "callout",
    title: "Jangan konfirmasi hanya dari layar pelanggan",
    text: "Tangkapan layar atau tampilan aplikasi di ponsel pelanggan bisa dimanipulasi atau salah tafsir — misalnya pembayaran yang sebenarnya masih dalam status diproses tapi terlihat seperti sudah berhasil. Konfirmasi pembayaran sebaiknya selalu berasal dari notifikasi resmi penyedia pembayaran atau langsung dari sistem kasir yang terhubung dengannya.",
  },
  { type: "h2", text: "Integrasi dengan sistem kasir" },
  {
    type: "p",
    text: "Idealnya, sistem kasir terhubung langsung dengan penyedia layanan pembayaran sehingga status transaksi berubah otomatis menjadi lunas begitu pembayaran berhasil diverifikasi oleh penyedia. Dengan integrasi seperti ini, laporan penjualan per metode pembayaran langsung tersedia tanpa perlu rekap manual di akhir hari, dan risiko kesalahan pencatatan berkurang signifikan.",
  },
  { type: "h2", text: "Pahami biaya dan waktu pencairan" },
  {
    type: "p",
    text: "Penyedia layanan pembayaran umumnya mengenakan biaya per transaksi, biasanya berupa persentase kecil dari nilai transaksi, dan memiliki jadwal pencairan dana ke rekening bisnis yang bervariasi — ada yang harian, ada yang membutuhkan beberapa hari kerja. Ketentuan ini berbeda antar penyedia dan dapat berubah dari waktu ke waktu, jadi periksa ketentuan terbaru langsung dari penyedia dan masukkan ke dalam perhitungan margin serta perencanaan arus kas bisnis Anda.",
  },
  { type: "h2", text: "Cocokkan secara rutin" },
  {
    type: "p",
    text: "Cocokkan secara berkala — idealnya setiap hari — total pembayaran digital yang tercatat di sistem kasir dengan dana yang benar-benar diterima dari penyedia pembayaran. Selisih yang ditemukan dan ditelusuri cepat jauh lebih mudah diselesaikan dibanding selisih yang dibiarkan menumpuk berminggu-minggu, di mana detail transaksi sudah sulit diingat siapa pun.",
  },
  { type: "h2", text: "Ilustrasi: sebelum dan sesudah integrasi" },
  {
    type: "p",
    text: "Bayangkan sebuah kedai kopi yang memasang kode QR statis di meja kasir. Setiap transaksi, kasir menyebutkan total secara lisan, pelanggan mengetik nominal sendiri, lalu menunjukkan layar konfirmasi. Kasir mencatat manual di buku sebagai “sudah bayar QRIS”. Di akhir bulan, ada beberapa transaksi yang tercatat lunas tapi dananya tidak ditemukan di mutasi rekening — kemungkinan pembayaran gagal yang tidak terdeteksi saat itu.",
  },
  {
    type: "p",
    text: "Setelah beralih ke kode QR dinamis yang terhubung sistem kasir, setiap transaksi otomatis membuat kode dengan nominal yang tepat, dan status lunas hanya berubah setelah konfirmasi resmi dari penyedia pembayaran diterima sistem. Kasir tidak lagi perlu mempercayai tampilan layar pelanggan, dan laporan akhir hari selalu cocok dengan mutasi rekening.",
  },
  { type: "h2", text: "Latih kasir untuk kasus tidak normal" },
  {
    type: "p",
    text: "Pembayaran gagal di tengah proses, pembayaran ganda karena pelanggan mencoba dua kali, atau permintaan pengembalian dana — kasir perlu tahu persis apa yang harus dilakukan dalam setiap situasi ini. Prosedur sederhana yang tertulis dan dilatihkan mencegah keputusan dadakan yang bisa merugikan pelanggan atau justru merugikan bisnis.",
  },
  { type: "h2", text: "Mempertimbangkan lebih dari satu penyedia" },
  {
    type: "p",
    text: "Beberapa bisnis memilih bekerja dengan lebih dari satu penyedia layanan pembayaran untuk membandingkan biaya atau sebagai cadangan jika salah satu mengalami gangguan. Jika memilih pendekatan ini, pastikan sistem kasir bisa menangani rekonsiliasi dari beberapa sumber tanpa membuat proses pencocokan menjadi lebih rumit dari manfaatnya.",
  },
  { type: "h2", text: "Langkah menerapkan QRIS yang rapi" },
  {
    type: "ol",
    items: [
      "Pilih penyedia layanan pembayaran yang terpercaya dan biayanya transparan",
      "Gunakan kode QR dinamis yang terhubung ke sistem kasir jika memungkinkan",
      "Latih kasir untuk selalu mengandalkan konfirmasi resmi, bukan tampilan layar pelanggan",
      "Siapkan prosedur untuk pembayaran gagal, ganda, atau pengembalian dana",
      "Jadwalkan pencocokan rutin antara sistem kasir dan mutasi rekening",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah usaha kecil tetap perlu integrasi dengan sistem kasir?" },
  {
    type: "p",
    text: "Untuk volume transaksi yang masih sedikit, pencatatan manual dengan disiplin pencocokan harian mungkin masih bisa diandalkan. Begitu volume bertambah, integrasi menjadi jauh lebih penting untuk mengurangi risiko kesalahan dan menghemat waktu rekonsiliasi.",
  },
  { type: "h3", text: "Bagaimana jika koneksi internet terputus saat pelanggan membayar?" },
  {
    type: "p",
    text: "Siapkan prosedur cadangan, misalnya menerima pembayaran tunai sementara atau meminta pelanggan menunggu sebentar sampai koneksi pulih. Pastikan kasir tahu cara memverifikasi apakah pembayaran benar-benar berhasil sebelum melepas barang, meski dalam kondisi koneksi tidak stabil.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "QRIS memudahkan pelanggan membayar, tapi kemudahan itu tidak berarti apa-apa jika bisnis tidak bisa memastikan setiap pembayaran benar-benar diterima dan tercatat dengan benar. Dengan kode dinamis yang terintegrasi, konfirmasi dari sumber resmi, dan pencocokan rutin, pembayaran digital bisa berjalan lancar tanpa meninggalkan misteri di akhir hari.",
  },
  {
    type: "cta",
    title: "Masih mengandalkan layar ponsel pelanggan untuk konfirmasi bayar?",
    text: "AG·SORA POS terintegrasi dengan payment gateway untuk konfirmasi pembayaran yang akurat dan otomatis.",
    href: "/products#pos",
    label: "Lihat AG·SORA POS",
  },
];

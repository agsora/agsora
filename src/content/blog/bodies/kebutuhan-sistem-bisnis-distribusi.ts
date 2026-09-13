import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Sales lapangan menawarkan diskon 15% ke toko langganan seperti biasa, tanpa tahu bahwa toko itu sudah menunggak pembayaran dua bulan dan sebenarnya sudah melewati batas kredit. Pesanan tetap diproses, barang dikirim, dan piutang yang sudah menumpuk makin membengkak — sampai bagian keuangan menyadarinya minggu depan, saat sudah terlambat untuk dicegah.",
  },
  {
    type: "p",
    text: "Distributor menghubungkan pemasok dengan banyak pelanggan — toko, agen, atau perusahaan lain. Operasionalnya melibatkan pembelian dalam jumlah besar, penyimpanan di satu atau beberapa gudang, pengambilan pesanan oleh sales lapangan, pengiriman, dan penagihan. Masalah kecil di salah satu titik dalam rantai ini cepat berdampak ke titik-titik lainnya, menciptakan efek domino yang sulit dihentikan setelah terlanjur berjalan.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Distributor membutuhkan stok yang akurat per gudang, bukan hanya total keseluruhan",
      "Sales lapangan perlu akses data stok dan harga terkini saat menerima pesanan",
      "Harga dan syarat kredit per pelanggan sebaiknya diterapkan otomatis, bukan diingat manual",
      "Bukti pengiriman digital mempercepat penagihan dan mengurangi perselisihan",
      "Laporan umur piutang membantu memprioritaskan penagihan yang paling berisiko",
    ],
  },
  { type: "h2", text: "Kompleksitas yang khas bisnis distribusi" },
  {
    type: "p",
    text: "Berbeda dengan retail yang umumnya menjual langsung ke konsumen akhir, distributor beroperasi di tengah rantai pasok — membeli dalam jumlah besar dari pemasok, lalu menjual dalam jumlah lebih kecil ke banyak pelanggan dengan syarat yang berbeda-beda. Kompleksitas ini menciptakan kebutuhan sistem yang berbeda dari sekadar sistem kasir atau inventori sederhana.",
  },
  { type: "h2", text: "Stok yang akurat per gudang" },
  {
    type: "p",
    text: "Distributor dengan beberapa gudang perlu mengetahui stok di setiap lokasi secara spesifik, bukan hanya total keseluruhan yang tidak menunjukkan di mana barang sebenarnya berada. Transfer antar gudang harus tercatat dengan jelas, dan barang yang sedang dalam perjalanan pengiriman perlu dibedakan statusnya dari barang yang benar-benar tersedia untuk dijual saat itu juga.",
  },
  { type: "h2", text: "Pesanan dari sales lapangan" },
  {
    type: "p",
    text: "Sales yang mengunjungi toko pelanggan membutuhkan akses ke informasi stok dan harga terbaru saat menerima pesanan di lapangan, bukan berdasarkan data yang mungkin sudah tidak akurat sejak beberapa hari lalu. Aplikasi pemesanan di ponsel yang terhubung langsung ke sistem pusat mencegah sales menjanjikan barang yang ternyata sudah habis stoknya, atau memberikan harga yang sudah tidak berlaku.",
  },
  { type: "h2", text: "Harga dan syarat per pelanggan" },
  {
    type: "p",
    text: "Distributor sering memiliki struktur harga berbeda untuk kategori pelanggan yang berbeda, diskon bertingkat berdasarkan jumlah pembelian, dan batas kredit yang berbeda untuk setiap pelanggan sesuai riwayat dan kepercayaan yang sudah dibangun. Aturan-aturan ini sebaiknya diterapkan secara otomatis di dalam sistem, bukan diingat dan diterapkan manual oleh sales satu per satu — yang rentan salah atau lupa, terutama untuk pelanggan yang jarang ditemui.",
  },
  {
    type: "callout",
    title: "Batas kredit mencegah piutang macet",
    text: "Sistem yang secara otomatis menahan pesanan baru ketika pelanggan sudah melewati batas kredit yang ditetapkan atau memiliki tagihan yang sudah jatuh tempo membantu mengendalikan risiko piutang macet — tanpa harus bergantung pada sales yang mengecek status tagihan secara manual sebelum setiap kali menerima pesanan.",
  },
  { type: "h2", text: "Pengiriman dan bukti terima" },
  {
    type: "p",
    text: "Perencanaan rute pengiriman, pemuatan barang ke kendaraan, dan bukti serah terima menentukan apakah barang benar-benar sampai ke tangan pelanggan sesuai pesanan. Bukti terima digital — tanda tangan elektronik atau foto kondisi barang di lokasi pengiriman — mempercepat proses penagihan dan secara signifikan mengurangi perselisihan tentang barang yang diklaim belum diterima.",
  },
  { type: "h2", text: "Penagihan dan piutang" },
  {
    type: "p",
    text: "Faktur sebaiknya terbentuk secara otomatis dari pesanan yang sudah terkirim dan terverifikasi, dan status pembayaran bisa dipantau per pelanggan secara real-time. Laporan umur piutang — menunjukkan tagihan mana yang sudah jatuh tempo dan berapa lama — membantu tim penagihan memprioritaskan pelanggan mana yang paling berisiko dan perlu ditindaklanjuti lebih dulu.",
  },
  { type: "h2", text: "Ilustrasi: rantai masalah yang saling terkait" },
  {
    type: "p",
    text: "Bayangkan sebuah distributor bahan makanan dengan tiga gudang dan lima belas sales lapangan. Sebelumnya, setiap sales membawa daftar harga cetak yang diperbarui manual setiap bulan, sering kali sudah ketinggalan zaman saat dipakai. Batas kredit pelanggan diingat berdasarkan pengalaman masing-masing sales, dan penagihan dilakukan berdasarkan catatan pengiriman kertas yang kadang hilang atau sobek.",
  },
  {
    type: "p",
    text: "Setelah beralih ke sistem terintegrasi, sales mengakses harga dan stok terkini langsung dari aplikasi di ponsel mereka. Sistem otomatis menahan pesanan dari pelanggan yang sudah melewati batas kredit, mencegah piutang macet bertambah. Bukti pengiriman digital membuat proses penagihan lebih cepat dan hampir tidak ada lagi perselisihan soal barang yang “belum diterima”.",
  },
  { type: "h2", text: "Kebutuhan yang saling terhubung" },
  {
    type: "ul",
    items: [
      "Pembelian dan penerimaan barang dari pemasok",
      "Stok per gudang dan per lokasi rak penyimpanan",
      "Pesanan penjualan dari kantor pusat dan sales lapangan",
      "Pengiriman, manajemen armada, dan bukti terima digital",
      "Faktur, pembayaran, dan pemantauan piutang",
      "Laporan penjualan per wilayah, per sales, dan per produk",
    ],
  },
  {
    type: "p",
    text: "Karena semua titik ini saling bergantung satu sama lain, bisnis distribusi termasuk yang paling merasakan manfaat besar dari sistem yang benar-benar terintegrasi — dan sebaliknya, paling dirugikan ketika data tersebar di banyak aplikasi terpisah yang tidak saling berbicara.",
  },
  { type: "h2", text: "Mengelola armada pengiriman" },
  {
    type: "p",
    text: "Untuk distributor dengan armada pengiriman sendiri, perencanaan rute yang efisien dan pemantauan status kendaraan real-time bisa menghemat waktu dan biaya bahan bakar secara signifikan. Pertimbangkan apakah kebutuhan ini cukup penting untuk diintegrasikan ke dalam sistem utama, atau bisa ditangani secara terpisah tergantung skala operasional pengiriman Anda.",
  },
  { type: "h2", text: "Langkah menerapkan sistem distribusi" },
  {
    type: "ol",
    items: [
      "Petakan alur kerja dari pembelian hingga penagihan secara menyeluruh",
      "Tentukan struktur harga dan batas kredit per kategori pelanggan",
      "Pilih atau bangun aplikasi pemesanan untuk sales lapangan",
      "Terapkan bukti terima digital untuk mempercepat penagihan",
      "Susun laporan umur piutang yang bisa dipantau rutin",
      "Uji sistem di satu gudang atau wilayah sebelum diperluas",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah distributor kecil dengan satu gudang tetap butuh sistem seperti ini?" },
  {
    type: "p",
    text: "Kebutuhan multi-gudang mungkin belum relevan, tapi kebutuhan seperti harga per pelanggan, batas kredit, dan penagihan yang terstruktur tetap bernilai bahkan untuk distributor dengan satu lokasi, terutama jika jumlah pelanggan dan sales sudah cukup banyak.",
  },
  { type: "h3", text: "Bagaimana menangani sales yang terbiasa kerja manual?" },
  {
    type: "p",
    text: "Libatkan mereka dalam proses pemilihan dan pengujian aplikasi, tunjukkan manfaat langsung bagi mereka seperti tidak perlu lagi membawa daftar harga cetak yang tebal, dan berikan pelatihan yang sabar dengan pendampingan di lapangan pada minggu-minggu awal.",
  },
  { type: "h2", text: "Retur barang dan klaim dari pelanggan" },
  {
    type: "p",
    text: "Barang yang dikembalikan pelanggan — karena rusak saat pengiriman, salah kirim, atau alasan lain — perlu proses pencatatan yang jelas agar stok dan piutang tetap akurat. Tanpa proses retur yang terstruktur, barang yang sudah dikembalikan bisa saja masih tercatat sebagai terjual di sistem, sementara faktur untuk barang tersebut belum juga disesuaikan, membuat catatan piutang pelanggan tidak mencerminkan kondisi sebenarnya.",
  },
  {
    type: "p",
    text: "Sistem yang menangani retur dengan baik mencatat alasan pengembalian, mengembalikan barang yang masih layak jual ke stok yang sesuai, dan secara otomatis menyesuaikan faktur atau menerbitkan nota kredit untuk pelanggan. Data alasan retur yang terkumpul dari waktu ke waktu juga berguna untuk mengevaluasi kualitas pengiriman atau menemukan produk tertentu yang lebih sering bermasalah dibanding yang lain, sehingga bisa ditindaklanjuti bersama pemasok terkait.",
  },
  { type: "h2", text: "Perencanaan pembelian berdasarkan data penjualan" },
  {
    type: "p",
    text: "Keputusan membeli stok baru dari pemasok sering kali masih didasarkan pada perkiraan kasar atau kebiasaan lama, bukan data penjualan aktual. Akibatnya, sebagian produk menumpuk di gudang karena dibeli terlalu banyak, sementara produk lain yang sebenarnya laris justru sering kehabisan stok karena pembelian ulang tidak dilakukan tepat waktu.",
  },
  {
    type: "p",
    text: "Dengan riwayat penjualan yang tercatat rapi per produk dan per gudang, perencanaan pembelian bisa didasarkan pada pola permintaan yang sebenarnya terjadi, termasuk memperhitungkan waktu yang dibutuhkan pemasok untuk mengirim barang setelah pesanan dibuat. Distributor yang bisa melihat kombinasi stok saat ini, kecepatan penjualan, dan waktu pengiriman pemasok dalam satu tampilan memiliki dasar yang jauh lebih kuat untuk menentukan kapan dan berapa banyak harus memesan ulang.",
  },
  { type: "h2", text: "Menangani produk dengan varian yang banyak" },
  {
    type: "p",
    text: "Distributor yang menjual produk dengan banyak varian — ukuran, warna, atau kemasan berbeda — menghadapi tantangan tambahan dalam mengelola stok, karena setiap varian pada dasarnya adalah item stok yang terpisah dengan pola permintaan yang bisa sangat berbeda satu sama lain. Sistem yang bisa melacak stok hingga level varian, bukan hanya di level produk induk, membantu mencegah situasi di mana produk secara umum terlihat tersedia di laporan padahal varian spesifik yang diminta pelanggan sebenarnya sudah habis.",
  },
  { type: "h3", text: "Bagaimana menangani pemasok yang pengirimannya sering terlambat?" },
  {
    type: "p",
    text: "Catat riwayat waktu pengiriman aktual dari setiap pemasok dibandingkan dengan waktu yang dijanjikan. Data ini membantu menentukan titik pemesanan ulang yang lebih realistis untuk pemasok yang riwayatnya sering meleset, sehingga stok pengaman yang disiapkan bisa disesuaikan dengan tingkat keandalan pemasok tersebut, bukan disamaratakan untuk semua pemasok.",
  },
  { type: "h2", text: "Menangani promo dan potongan harga musiman" },
  {
    type: "p",
    text: "Selain harga standar dan diskon bertingkat berdasarkan jumlah pembelian, distributor sering menjalankan promo terbatas waktu — potongan harga khusus untuk produk tertentu selama periode tertentu, atau bonus barang untuk pembelian dalam jumlah besar. Jika promo semacam ini hanya diingat lewat memo internal atau grup pesan singkat, sales lapangan bisa saja terlambat mengetahui promo sudah berakhir dan tetap menawarkannya ke pelanggan, atau sebaliknya tidak menawarkan promo yang sebenarnya masih berlaku.",
  },
  {
    type: "p",
    text: "Sistem yang bisa mengatur periode berlaku promo secara otomatis — kapan mulai dan kapan berakhir, untuk produk dan kategori pelanggan mana saja — memastikan setiap sales melihat harga yang sama dan benar-benar berlaku pada saat itu, tanpa perlu mengandalkan komunikasi manual yang rawan terlewat atau disalahpahami di lapangan.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Bisnis distribusi memiliki rantai operasional yang saling terhubung erat, dari gudang hingga penagihan. Sistem yang tepat menyatukan seluruh rantai ini, memberikan sales data yang akurat di lapangan, mengendalikan risiko piutang, dan mempercepat siklus dari pesanan hingga pembayaran diterima.",
  },
  {
    type: "cta",
    title: "Sales lapangan Anda masih pakai daftar harga cetak?",
    text: "AG·SORA ERP membantu menyatukan stok, harga, dan penagihan untuk bisnis distribusi Anda.",
    href: "/products#erp",
    label: "Lihat AG·SORA ERP",
  },
];

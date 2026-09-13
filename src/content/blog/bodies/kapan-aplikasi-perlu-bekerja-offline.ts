import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Kurir sudah sampai di lokasi pengiriman, tapi sinyal di kawasan itu hilang total. Aplikasi pengiriman yang dipakainya membutuhkan koneksi internet untuk setiap langkah — konfirmasi tiba, tanda tangan penerima, foto bukti serah terima. Tanpa sinyal, semua proses itu terhenti. Kurir terpaksa menunggu sampai keluar dari kawasan tersebut untuk bisa menyelesaikan transaksi, membuang waktu yang berharga di tengah jadwal pengiriman yang padat.",
  },
  {
    type: "p",
    text: "Masih banyak situasi di mana koneksi internet tidak bisa sepenuhnya diandalkan: gudang dengan sinyal lemah karena struktur bangunan yang tebal, lokasi proyek di daerah terpencil, kendaraan yang sedang dalam perjalanan melintasi area dengan cakupan sinyal buruk, atau gangguan jaringan mendadak yang terjadi di toko. Untuk sistem yang menopang pekerjaan inti bisnis, pertanyaannya bukan lagi apakah koneksi akan terputus, melainkan apa yang sebenarnya terjadi pada operasional ketika itu benar-benar terjadi.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Mode offline paling dibutuhkan untuk sistem kasir, aplikasi lapangan, dan pencatatan di lokasi bersinyal lemah",
      "Dashboard dan sistem administrasi kantor umumnya tidak membutuhkan mode offline",
      "Mode offline menambah kerumitan pengembangan, terapkan hanya pada fitur yang benar-benar membutuhkannya",
      "Rancang aturan penyelesaian konflik data sejak awal untuk mencegah masalah sinkronisasi",
      "Beri tahu pengguna dengan jelas status koneksi dan apakah data sudah tersimpan di server",
    ],
  },
  { type: "h2", text: "Memahami risiko koneksi yang tidak stabil" },
  {
    type: "p",
    text: "Koneksi internet, betapa pun stabilnya sebuah jaringan, tetap memiliki celah kegagalan yang tidak sepenuhnya bisa dikendalikan bisnis — gangguan dari penyedia layanan, cuaca buruk yang memengaruhi sinyal, atau sekadar lokasi fisik yang memang sulit dijangkau sinyal dengan baik. Untuk sistem yang menopang aktivitas bisnis sehari-hari, mengabaikan kemungkinan ini sama saja dengan berasumsi bahwa gangguan tidak akan pernah terjadi — asumsi yang cepat atau lambat akan terbukti keliru.",
  },
  { type: "h2", text: "Situasi yang biasanya membutuhkan mode offline" },
  {
    type: "ul",
    items: [
      "Sistem kasir yang tidak boleh berhenti melayani pelanggan kapan pun",
      "Aplikasi tim lapangan: sales, kurir, teknisi, dan petugas survei di berbagai lokasi",
      "Pencatatan di area gudang atau lokasi produksi dengan sinyal yang secara struktural lemah",
      "Pengumpulan data di lokasi yang jauh dari jangkauan jaringan seluler yang stabil",
    ],
  },
  { type: "h2", text: "Situasi yang umumnya tidak memerlukannya" },
  {
    type: "ul",
    items: [
      "Dashboard dan laporan yang ditujukan untuk manajemen tingkat atas",
      "Sistem administrasi yang dipakai sepenuhnya di lingkungan kantor dengan koneksi stabil",
      "Proses yang memang secara fundamental membutuhkan data terbaru dari server setiap saat",
    ],
  },
  {
    type: "callout",
    title: "Mode offline menambah kerumitan yang signifikan",
    text: "Aplikasi yang bekerja secara offline harus menyimpan data sementara di perangkat pengguna, lalu menyinkronkannya kembali dengan server begitu koneksi tersedia. Kerumitan teknis ini menambah waktu pengembangan dan pengujian secara signifikan. Karena itu, mode offline sebaiknya diterapkan hanya pada fitur yang benar-benar membutuhkannya, bukan dipaksakan ke seluruh aplikasi tanpa pertimbangan matang.",
  },
  { type: "h2", text: "Tantangan sinkronisasi data" },
  {
    type: "p",
    text: "Ketika dua orang mengubah data yang sama secara bersamaan saat keduanya sedang offline, sistem harus memiliki aturan yang jelas tentang data mana yang akan dipakai setelah koneksi kembali tersedia. Aturan penyelesaian konflik seperti ini perlu dirancang dengan cermat sejak tahap awal pengembangan. Untuk data seperti stok barang, kesalahan dalam proses sinkronisasi bisa menyebabkan angka yang tidak sesuai dengan kenyataan fisik di lapangan.",
  },
  { type: "h2", text: "Beri tahu pengguna tentang statusnya" },
  {
    type: "p",
    text: "Pengguna aplikasi perlu tahu dengan jelas apakah mereka sedang bekerja dalam mode offline saat ini, dan apakah data yang baru saja mereka masukkan sudah benar-benar terkirim ke server atau masih tersimpan lokal menunggu koneksi kembali. Indikator visual yang jelas mencegah pengguna mengira pekerjaan mereka sudah tersimpan aman padahal sebenarnya belum tersinkron sepenuhnya ke sistem pusat.",
  },
  { type: "h2", text: "Ilustrasi: dampak nyata bagi bisnis pengiriman" },
  {
    type: "p",
    text: "Bayangkan sebuah perusahaan jasa pengiriman yang aplikasinya membutuhkan koneksi internet aktif untuk setiap konfirmasi pengiriman. Di kawasan dengan sinyal lemah — yang cukup sering ditemui di berbagai wilayah pengiriman mereka — kurir harus menunggu hingga menemukan sinyal yang cukup kuat sebelum bisa menyelesaikan satu transaksi pengiriman, memperlambat seluruh rute pengiriman hari itu.",
  },
  {
    type: "p",
    text: "Setelah aplikasi diperbarui untuk mendukung mode offline — mencatat konfirmasi pengiriman, tanda tangan, dan foto bukti secara lokal di perangkat, lalu menyinkronkannya otomatis begitu sinyal kembali tersedia — kurir bisa terus menyelesaikan pengiriman tanpa hambatan berarti, meski sedang melintasi kawasan dengan sinyal yang buruk sekalipun.",
  },
  { type: "h2", text: "Lindungi data yang tersimpan di perangkat" },
  {
    type: "p",
    text: "Data yang tersimpan sementara di ponsel atau tablet ikut menanggung risiko jika perangkat tersebut hilang atau dicuri. Batasi jumlah data yang disimpan secara lokal hanya pada yang benar-benar diperlukan untuk operasional saat itu, dan lindungi aplikasi dengan mekanisme autentikasi yang memadai untuk mencegah akses tidak sah jika perangkat jatuh ke tangan yang salah.",
  },
  { type: "h2", text: "Uji dalam kondisi nyata, bukan hanya simulasi" },
  {
    type: "p",
    text: "Mode offline sering terlihat berjalan mulus saat diuji dalam kondisi terkendali di kantor dengan simulasi mematikan koneksi sesaat. Uji sistem ini di lokasi dan kondisi yang benar-benar mewakili penggunaan sesungguhnya — koneksi yang putus-sambung tidak menentu, perangkat dengan kapasitas penyimpanan terbatas, dan skenario penggunaan offline yang berlangsung dalam waktu cukup lama — sebelum benar-benar diterapkan secara luas kepada seluruh tim.",
  },
  { type: "h2", text: "Mempertimbangkan biaya pengembangan tambahan" },
  {
    type: "p",
    text: "Sebelum memutuskan menerapkan mode offline, bandingkan biaya tambahan pengembangan dan pengujian yang dibutuhkan dengan kerugian nyata yang ditimbulkan jika operasional terhenti akibat koneksi terputus. Untuk beberapa bisnis, kerugian dari operasional yang terhenti jauh lebih besar dibanding investasi tambahan untuk membangun kemampuan offline yang andal.",
  },
  { type: "h2", text: "Langkah menentukan kebutuhan mode offline" },
  {
    type: "ol",
    items: [
      "Identifikasi fitur dan proses yang paling kritis bagi operasional harian",
      "Evaluasi kondisi koneksi internet di lokasi-lokasi penggunaan aplikasi",
      "Hitung potensi kerugian jika proses tersebut terhenti akibat koneksi terputus",
      "Rancang aturan penyelesaian konflik data sejak tahap awal",
      "Sediakan indikator status koneksi yang jelas bagi pengguna",
      "Uji dalam kondisi lapangan yang sesungguhnya sebelum diterapkan luas",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah semua fitur dalam satu aplikasi harus mendukung offline sekaligus?" },
  {
    type: "p",
    text: "Tidak perlu. Fokuskan kemampuan offline hanya pada fitur inti yang benar-benar kritis bagi operasional, seperti mencatat transaksi atau konfirmasi pengiriman. Fitur pendukung yang kurang kritis bisa tetap membutuhkan koneksi tanpa banyak merugikan operasional secara keseluruhan.",
  },
  { type: "h3", text: "Berapa lama biasanya data offline bisa tersimpan sebelum harus tersinkron?" },
  {
    type: "p",
    text: "Bergantung pada kapasitas penyimpanan perangkat dan volume data yang dihasilkan. Untuk sebagian besar kasus penggunaan, data offline dirancang untuk tersinkron dalam hitungan menit hingga jam begitu koneksi kembali tersedia, bukan dirancang untuk bertahan offline dalam waktu yang sangat lama.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Mode offline bukan fitur yang dibutuhkan setiap aplikasi bisnis, tapi untuk sistem yang menopang operasional kritis di lokasi dengan koneksi tidak stabil, kemampuan ini bisa menjadi pembeda antara bisnis yang terus berjalan lancar dan yang terhenti setiap kali sinyal internet bermasalah. Pertimbangkan dengan cermat di mana fitur ini benar-benar dibutuhkan, dan rancang dengan teliti agar sinkronisasi data tetap andal ketika koneksi akhirnya kembali tersedia.",
  },
  {
    type: "cta",
    title: "Operasional Anda sering terhambat karena koneksi internet?",
    text: "Tim AG·SORA membangun aplikasi dengan kemampuan offline yang andal untuk kebutuhan lapangan Anda.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];

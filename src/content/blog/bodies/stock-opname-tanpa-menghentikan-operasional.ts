import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Toko tutup dua hari untuk stock opname akhir tahun. Karyawan lembur menghitung setiap rak, pelanggan yang datang kecewa menemukan pintu terkunci, dan setelah semua dihitung, selisihnya cukup besar — tapi tidak ada yang tahu kapan tepatnya selisih itu terjadi, karena penghitungan terakhir dilakukan setahun lalu.",
  },
  {
    type: "p",
    text: "Banyak bisnis melakukan stock opname setahun sekali atau setiap akhir periode dengan menghentikan seluruh aktivitas gudang atau toko. Cara ini memberikan satu angka yang pasti pada satu titik waktu, tetapi mengorbankan penjualan dan operasional selama penghitungan berlangsung — dan selisih yang ditemukan sudah menumpuk berbulan-bulan, sehingga sangat sulit ditelusuri penyebabnya.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Hitung siklus membagi penghitungan menjadi bagian kecil yang dilakukan rutin tanpa menutup operasional",
      "Kelompokkan barang berdasarkan nilai dan pergerakan untuk menentukan frekuensi hitung",
      "Selisih yang ditemukan cepat jauh lebih mudah ditelusuri penyebabnya",
      "Petugas yang menghitung sebaiknya tidak melihat angka sistem lebih dulu",
      "Penyesuaian stok harus melalui persetujuan dan tercatat alasannya",
    ],
  },
  { type: "h2", text: "Masalah dengan stock opname tahunan" },
  {
    type: "p",
    text: "Stock opname tahunan memang memberikan gambaran menyeluruh, tetapi datang dengan beberapa kelemahan mendasar. Pertama, menutup operasional berarti kehilangan penjualan selama periode tersebut — kerugian yang nyata meski jarang dihitung secara eksplisit. Kedua, selisih yang ditemukan sudah terakumulasi selama setahun penuh, membuatnya hampir mustahil ditelusuri ke penyebab spesifiknya: apakah karena kesalahan pencatatan di bulan tertentu, kehilangan barang, atau kombinasi banyak faktor kecil.",
  },
  {
    type: "p",
    text: "Ketiga, penghitungan besar seperti ini rentan kelelahan dan kesalahan manusia karena dilakukan dalam waktu terbatas dengan volume yang sangat besar sekaligus.",
  },
  { type: "h2", text: "Hitung siklus sebagai alternatif" },
  {
    type: "p",
    text: "Hitung siklus (cycle count) membagi penghitungan menjadi bagian-bagian kecil yang dilakukan secara rutin — harian atau mingguan. Setiap sesi hanya sebagian kecil barang yang dihitung, sehingga dalam satu periode tertentu seluruh barang tetap tercakup, tanpa toko atau gudang harus ditutup sama sekali.",
  },
  {
    type: "p",
    text: "Pendekatan ini mengubah stock opname dari peristiwa besar yang menakutkan setahun sekali menjadi rutinitas kecil yang terintegrasi dalam operasional sehari-hari, jauh lebih mudah dikelola dan jauh lebih akurat hasilnya.",
  },
  { type: "h2", text: "Menentukan barang yang dihitung lebih sering" },
  {
    type: "p",
    text: "Tidak semua barang perlu frekuensi penghitungan yang sama. Pendekatan yang umum dipakai adalah mengelompokkan barang berdasarkan nilai dan tingkat pergerakannya:",
  },
  {
    type: "ul",
    items: [
      "Barang bernilai tinggi atau cepat laku: dihitung paling sering, bisa mingguan",
      "Barang yang sering ditemukan selisih atau rawan hilang: dihitung lebih sering dari rata-rata",
      "Barang bernilai rendah dan jarang bergerak: dihitung lebih jarang, bisa bulanan atau triwulanan",
    ],
  },
  {
    type: "p",
    text: "Dengan pengelompokan ini, sumber daya untuk penghitungan difokuskan pada barang yang risikonya paling besar, alih-alih menghabiskan waktu yang sama untuk semua barang tanpa mempertimbangkan tingkat kepentingannya.",
  },
  { type: "h2", text: "Menangani barang yang sedang bergerak" },
  {
    type: "p",
    text: "Tantangan utama menghitung tanpa menutup operasional adalah transaksi yang tetap terjadi selama penghitungan berlangsung. Beberapa cara mengatasinya:",
  },
  {
    type: "ul",
    items: [
      "Menghitung lokasi tertentu pada jam ketika pergerakannya paling sepi",
      "Mengunci sementara lokasi yang sedang dihitung dari pengambilan barang",
      "Mencatat waktu penghitungan agar transaksi setelahnya bisa diperhitungkan dalam penyesuaian",
    ],
  },
  {
    type: "callout",
    title: "Selidiki selisih saat masih segar",
    text: "Keuntungan terbesar hitung siklus bukan hanya stok yang lebih akurat, melainkan selisih yang ditemukan jauh lebih cepat. Ketika selisih diketahui dalam hitungan hari, penyebabnya — salah catat penerimaan, salah ambil barang, atau kehilangan — masih bisa ditelusuri karena ingatan dan bukti pendukung masih segar.",
  },
  { type: "h2", text: "Peran sistem dalam hitung siklus" },
  {
    type: "p",
    text: "Sistem inventori yang baik membantu menjadwalkan barang yang perlu dihitung setiap harinya, menyediakan lembar atau aplikasi hitung di lapangan, mencatat hasil secara digital, dan menampilkan selisih dibanding catatan sistem secara otomatis. Penyesuaian stok berdasarkan hasil hitung sebaiknya membutuhkan persetujuan dan menyimpan alasannya, bukan langsung menimpa angka lama begitu saja tanpa jejak.",
  },
  { type: "h2", text: "Hitung tanpa melihat angka sistem lebih dulu" },
  {
    type: "p",
    text: "Petugas yang melakukan penghitungan fisik sebaiknya tidak melihat jumlah stok menurut sistem sebelum menghitung. Jika angka sistem terlihat lebih dulu, ada kecenderungan alami untuk “menyesuaikan” hasil hitung agar terlihat cocok — baik disengaja maupun tidak — dan selisih yang sebenarnya tidak pernah benar-benar terungkap.",
  },
  { type: "h2", text: "Ilustrasi: dari sekali setahun menjadi rutin" },
  {
    type: "p",
    text: "Bayangkan sebuah toko elektronik dengan ratusan jenis produk. Sebelumnya, stock opname dilakukan sekali setahun dengan menutup toko selama satu hari penuh, kehilangan penjualan yang signifikan di hari tersebut. Selisih yang ditemukan setiap tahun cukup besar, tapi tidak ada yang bisa menjelaskan kapan atau kenapa itu terjadi.",
  },
  {
    type: "p",
    text: "Setelah beralih ke hitung siklus, setiap hari petugas menghitung sekitar dua puluh produk berbeda sesuai jadwal, tanpa menutup toko. Produk bernilai tinggi seperti laptop dihitung setiap minggu, sementara aksesori kecil dihitung sebulan sekali. Dalam beberapa bulan, pola selisih mulai terlihat: satu kategori produk tertentu konsisten mengalami selisih kecil setiap minggu, mengarah ke penyelidikan yang akhirnya menemukan kesalahan prosedur penerimaan barang di area tersebut.",
  },
  { type: "h2", text: "Melibatkan tim dalam proses" },
  {
    type: "p",
    text: "Hitung siklus bekerja paling baik ketika menjadi bagian rutin pekerjaan staf gudang atau toko, bukan tugas tambahan yang dianggap mengganggu. Jelaskan kepada tim bahwa proses ini membantu menemukan masalah lebih cepat, yang pada akhirnya memudahkan pekerjaan mereka sendiri — daripada harus menghadapi penghitungan besar yang melelahkan setahun sekali.",
  },
  { type: "h2", text: "Teknologi yang mempermudah hitung siklus" },
  {
    type: "p",
    text: "Menghitung dengan kertas dan pena masih bisa dilakukan, tetapi memindahkan hasilnya ke sistem secara manual membuka celah kesalahan ketik dan menambah waktu kerja yang sebenarnya tidak perlu. Pemindai barcode atau aplikasi hitung di ponsel yang langsung mencocokkan barang dengan data sistem mempercepat proses penghitungan sekaligus mengurangi kesalahan pencatatan dibanding menulis di kertas lalu menyalinnya ulang ke komputer.",
  },
  {
    type: "p",
    text: "Untuk gudang dengan jumlah SKU yang besar, kemampuan sistem menghasilkan daftar hitung yang sudah terurut berdasarkan lokasi rak juga menghemat waktu petugas — mereka berjalan mengikuti urutan lokasi yang logis, bukan bolak-balik mencari barang yang tersebar acak di daftar.",
  },
  { type: "h2", text: "Menangani banyak lokasi atau gudang" },
  {
    type: "p",
    text: "Bisnis dengan lebih dari satu toko atau gudang menghadapi tantangan tambahan: jadwal hitung siklus perlu disusun per lokasi, dan hasilnya perlu bisa dibandingkan antar lokasi untuk melihat apakah ada pola selisih yang muncul konsisten di satu lokasi tertentu tetapi tidak di lokasi lain. Pola seperti ini sering menjadi petunjuk penting — misalnya menunjukkan masalah prosedur di satu cabang spesifik, bukan masalah sistemik yang berlaku di semua lokasi.",
  },
  {
    type: "p",
    text: "Sistem yang terpusat memudahkan manajemen memantau kepatuhan jadwal hitung di seluruh lokasi sekaligus, alih-alih harus menanyakan satu per satu ke setiap kepala toko atau kepala gudang apakah jadwal hitung mereka sudah dijalankan sesuai rencana.",
  },
  { type: "h2", text: "Langkah menerapkan hitung siklus" },
  {
    type: "ol",
    items: [
      "Kelompokkan barang berdasarkan nilai dan tingkat pergerakan",
      "Tentukan frekuensi hitung untuk setiap kelompok",
      "Buat jadwal harian atau mingguan barang yang akan dihitung",
      "Siapkan prosedur agar petugas tidak melihat angka sistem sebelum menghitung",
      "Tetapkan alur persetujuan untuk penyesuaian stok",
      "Tinjau pola selisih secara berkala untuk menemukan akar masalah",
    ],
  },
  { type: "h2", text: "Kesalahan umum dalam stock opname" },
  {
    type: "ul",
    items: [
      "Hanya melakukan penghitungan sekali setahun tanpa rutinitas di antaranya",
      "Membiarkan petugas melihat angka sistem sebelum menghitung fisik",
      "Tidak mencatat alasan setiap penyesuaian stok yang dilakukan",
      "Menghitung semua barang dengan frekuensi yang sama tanpa prioritas",
      "Tidak menindaklanjuti pola selisih yang berulang",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah hitung siklus cocok untuk bisnis kecil?" },
  {
    type: "p",
    text: "Ya, bahkan bisnis kecil dengan jumlah produk terbatas bisa menerapkan versi sederhana — misalnya menghitung sebagian rak setiap hari alih-alih menunggu penghitungan besar tahunan. Skalanya bisa disesuaikan dengan jumlah karyawan dan waktu yang tersedia.",
  },
  { type: "h3", text: "Apakah stock opname tahunan masih diperlukan jika sudah pakai hitung siklus?" },
  {
    type: "p",
    text: "Untuk sebagian besar bisnis, hitung siklus yang konsisten bisa menggantikan kebutuhan stock opname tahunan besar-besaran. Namun beberapa kebutuhan pelaporan keuangan atau audit mungkin tetap mensyaratkan verifikasi menyeluruh pada tanggal tertentu — periksa kebutuhan spesifik bisnis Anda.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Stock opname tidak harus menjadi peristiwa besar yang menghentikan operasional dan melelahkan seluruh tim setahun sekali. Dengan hitung siklus yang rutin dan terjadwal, stok menjadi lebih akurat, selisih ditemukan lebih cepat, dan operasional bisnis tetap berjalan normal setiap harinya.",
  },
  {
    type: "cta",
    title: "Lelah menutup toko setiap kali stock opname?",
    text: "AG·SORA Inventory mendukung hitung siklus dengan penjadwalan dan pelacakan selisih otomatis.",
    href: "/products#inventory",
    label: "Lihat AG·SORA Inventory",
  },
];

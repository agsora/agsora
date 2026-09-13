import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Karyawan magang yang baru dua minggu bergabung ternyata bisa melihat gaji seluruh direksi di sistem HR. Bukan karena ia mencoba meretas apa pun — akunnya memang diberi akses penuh sejak awal karena admin IT “biar praktis, tinggal salin dari akun karyawan lain yang sudah ada”.",
  },
  {
    type: "p",
    text: "Di awal penggunaan sebuah sistem, sering kali semua pengguna diberi akses yang sama agar tidak repot mengatur satu per satu. Ketika jumlah pengguna terus bertambah seiring pertumbuhan bisnis, kebiasaan ini membuat data sensitif — gaji, harga modal, data pelanggan — bisa dilihat bahkan diubah oleh orang yang sebenarnya sama sekali tidak memerlukannya untuk pekerjaan mereka.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Prinsip akses secukupnya membatasi dampak ketika terjadi kesalahan atau penyalahgunaan",
      "Atur hak akses berdasarkan peran, bukan per individu satu per satu",
      "Bedakan jenis akses: melihat, membuat, mengubah, menghapus, menyetujui",
      "Pisahkan tugas antara yang membuat transaksi dan yang menyetujuinya",
      "Tinjau hak akses secara berkala karena cenderung bertambah seiring waktu tanpa disadari",
    ],
  },
  { type: "h2", text: "Kenapa kebiasaan akses longgar berbahaya" },
  {
    type: "p",
    text: "Memberi akses penuh kepada semua orang memang terasa lebih praktis di awal — tidak perlu repot mengatur siapa boleh apa. Tetapi setiap orang dengan akses berlebih adalah titik risiko tambahan: kesalahan yang mereka buat bisa berdampak lebih luas dari yang seharusnya, dan jika akun mereka disusupi pihak luar, dampaknya jauh lebih besar dibanding jika akses mereka dibatasi sejak awal sesuai kebutuhan pekerjaan.",
  },
  { type: "h2", text: "Prinsip akses secukupnya" },
  {
    type: "p",
    text: "Setiap pengguna sebaiknya hanya mendapat akses yang benar-benar dibutuhkan untuk menjalankan pekerjaannya, tidak lebih. Prinsip yang dalam istilah teknis disebut “least privilege” ini membatasi dampak ketika terjadi kesalahan, penyalahgunaan yang disengaja, atau bahkan ketika akun seseorang berhasil dibobol pihak yang tidak berwenang.",
  },
  { type: "h2", text: "Atur berdasarkan peran, bukan per individu" },
  {
    type: "p",
    text: "Mengatur akses untuk setiap orang satu per satu secara individual cepat menjadi tidak terkendali seiring bertambahnya jumlah karyawan. Pendekatan yang jauh lebih rapi dan mudah dikelola adalah membuat peran-peran standar — misalnya kasir, supervisor, staf gudang, admin keuangan — masing-masing dengan hak akses yang sudah ditentukan, lalu menetapkan setiap pengguna baru ke salah satu peran tersebut sesuai posisinya.",
  },
  { type: "h2", text: "Bedakan jenis akses secara spesifik" },
  {
    type: "ul",
    items: [
      "Melihat data tanpa bisa mengubahnya",
      "Membuat data atau transaksi baru",
      "Mengubah data yang sudah ada sebelumnya",
      "Menghapus data secara permanen",
      "Menyetujui transaksi yang diajukan pihak lain",
      "Mengekspor data dalam jumlah besar sekaligus",
    ],
  },
  {
    type: "p",
    text: "Seseorang mungkin perlu melihat laporan penjualan untuk keperluan pekerjaannya tanpa perlu bisa mengubah data di dalamnya sama sekali. Pemisahan jenis akses seperti ini membuat pemberian hak bisa jauh lebih tepat sasaran dibanding sekadar memberi akses “penuh” atau “tidak sama sekali”.",
  },
  {
    type: "callout",
    title: "Pisahkan yang membuat dan yang menyetujui",
    text: "Untuk transaksi yang menyangkut uang atau keputusan penting, orang yang membuat pengajuan transaksi sebaiknya bukan orang yang sama dengan yang menyetujuinya. Pemisahan tugas seperti ini mengurangi risiko kesalahan maupun kecurangan yang mungkin tidak terdeteksi jika satu orang punya kendali penuh atas seluruh proses dari awal hingga akhir.",
  },
  { type: "h2", text: "Catat aktivitas penting" },
  {
    type: "p",
    text: "Sistem sebaiknya mencatat secara otomatis siapa melakukan apa dan kapan, terutama untuk perubahan data sensitif, penghapusan data, dan setiap persetujuan yang diberikan. Catatan seperti ini sangat penting untuk menelusuri masalah ketika terjadi kesalahan, dan juga membantu memenuhi kebutuhan audit internal maupun eksternal di kemudian hari.",
  },
  { type: "h2", text: "Tinjau secara berkala" },
  {
    type: "p",
    text: "Hak akses cenderung bertambah secara diam-diam seiring waktu — karyawan yang pindah divisi sering kali tetap membawa akses lamanya karena tidak ada yang mencabutnya, lalu ditambah akses baru sesuai peran barunya. Tinjau seluruh hak akses secara berkala, misalnya setiap enam bulan, dan pastikan akses segera ditutup ketika karyawan resmi keluar dari perusahaan.",
  },
  { type: "h2", text: "Ilustrasi: dampak dari akses yang tidak dikelola" },
  {
    type: "p",
    text: "Bayangkan sebuah perusahaan retail yang memberikan akses admin penuh kepada semua staf toko “agar mudah kalau ada yang perlu diperbaiki mendadak”. Suatu hari, seorang staf yang baru saja diberi teguran tanpa sengaja — atau mungkin sengaja karena kesal — mengubah harga puluhan produk menjadi sangat rendah sebelum akhirnya disadari beberapa jam kemudian, menyebabkan kerugian yang cukup signifikan.",
  },
  {
    type: "p",
    text: "Setelah insiden ini, perusahaan menerapkan hak akses berbasis peran: staf toko biasa hanya bisa memproses transaksi penjualan, sementara perubahan harga produk hanya bisa dilakukan supervisor dengan persetujuan tambahan dari kantor pusat. Insiden serupa tidak pernah terulang lagi setelah itu.",
  },
  { type: "h2", text: "Lindungi akun dengan kuat" },
  {
    type: "p",
    text: "Hak akses yang dirancang dengan rapi tetap rentan jika kata sandi yang dipakai lemah atau dipakai bersama-sama oleh beberapa orang. Terapkan kebijakan kata sandi yang kuat, aktifkan verifikasi dua langkah untuk akun-akun dengan akses penting, dan jangan pernah izinkan satu akun dipakai bergantian oleh beberapa orang — karena ini menghilangkan seluruh manfaat dari jejak audit yang sudah dibangun dengan susah payah.",
  },
  { type: "h2", text: "Menangani akses untuk pihak eksternal" },
  {
    type: "p",
    text: "Kadang bisnis perlu memberi akses terbatas kepada pihak eksternal — akuntan publik, konsultan, atau vendor teknologi yang sedang membantu perbaikan sistem. Buat kategori akses khusus untuk kebutuhan seperti ini, dengan batas waktu yang jelas dan cakupan yang benar-benar minimal sesuai kebutuhan spesifik mereka, lalu pastikan akses tersebut dicabut segera setelah tidak lagi diperlukan.",
  },
  { type: "h2", text: "Langkah merancang hak akses yang aman" },
  {
    type: "ol",
    items: [
      "Identifikasi peran-peran utama yang ada di organisasi Anda",
      "Tentukan jenis akses yang dibutuhkan setiap peran secara spesifik",
      "Pisahkan tugas pembuat dan penyetuju untuk transaksi penting",
      "Aktifkan pencatatan otomatis untuk aktivitas sensitif",
      "Jadwalkan tinjauan hak akses secara berkala",
      "Terapkan kebijakan keamanan akun yang kuat untuk semua pengguna",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah bisnis kecil dengan sedikit karyawan tetap perlu ini?" },
  {
    type: "p",
    text: "Ya, meski skalanya bisa lebih sederhana. Bahkan dengan lima karyawan, membedakan siapa yang bisa mengubah harga produk dan siapa yang hanya bisa memproses penjualan tetap bernilai untuk mengurangi risiko kesalahan yang berdampak besar.",
  },
  { type: "h3", text: "Bagaimana menangani situasi darurat yang butuh akses lebih luas mendadak?" },
  {
    type: "p",
    text: "Siapkan mekanisme akses darurat sementara yang membutuhkan persetujuan dan otomatis berakhir setelah periode tertentu, alih-alih memberikan akses permanen yang lebih luas hanya karena situasi darurat sesekali.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Merancang hak akses yang tepat bukan tentang tidak mempercayai karyawan, melainkan tentang membangun sistem yang membatasi dampak ketika kesalahan atau hal tak terduga terjadi — dan itu pasti akan terjadi cepat atau lambat di bisnis mana pun. Dengan akses berbasis peran, pemisahan tugas, dan tinjauan berkala, risiko yang selama ini tersembunyi dalam akses yang terlalu longgar bisa dikendalikan jauh lebih baik.",
  },
  {
    type: "cta",
    title: "Siapa saja yang punya akses penuh ke sistem bisnis Anda sekarang?",
    text: "Diskusikan kebutuhan pengaturan hak akses yang tepat untuk sistem bisnis Anda bersama tim AG·SORA.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];

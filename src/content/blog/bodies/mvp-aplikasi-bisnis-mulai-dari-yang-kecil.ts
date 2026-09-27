import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Seorang pemilik bisnis distribusi punya ide aplikasi yang jelas di kepalanya: pelanggan bisa memesan sendiri, sales bisa melihat stok secara langsung, gudang menerima instruksi pengiriman otomatis, dan semua transaksi langsung masuk ke laporan keuangan. Daftar fiturnya terus bertambah setiap kali ia membicarakannya dengan tim. Ketika akhirnya meminta penawaran, estimasi waktu dan biayanya membuatnya ragu untuk memulai sama sekali.",
  },
  {
    type: "p",
    text: "Situasi seperti ini sangat umum. Ide aplikasi bisnis cenderung tumbuh besar karena setiap orang di perusahaan melihat masalah yang berbeda dan ingin semuanya diselesaikan sekaligus. Padahal, membangun semua fitur sekaligus adalah cara paling mahal dan paling berisiko untuk mengetahui apakah sebuah aplikasi benar-benar berguna. Ada pendekatan yang jauh lebih masuk akal: mulai dari versi terkecil yang sudah memberi manfaat nyata, lalu kembangkan berdasarkan penggunaan yang sebenarnya.",
  },
  {
    type: "p",
    text: "Pendekatan ini dikenal sebagai MVP, singkatan dari minimum viable product. Istilahnya berasal dari dunia startup, tapi prinsipnya sangat relevan untuk bisnis yang ingin membangun aplikasi internal maupun aplikasi untuk pelanggan. Artikel ini membahas apa itu MVP dalam konteks bisnis, cara menentukan ruang lingkupnya, kesalahan yang sering terjadi, dan bagaimana melangkah dari versi pertama ke sistem yang lengkap.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "MVP adalah versi paling sederhana dari aplikasi yang sudah menyelesaikan satu masalah nyata dan bisa dipakai setiap hari",
      "MVP bukan prototipe asal jadi — kualitas teknisnya harus cukup baik untuk dikembangkan, bukan dibuang",
      "Ruang lingkup MVP ditentukan oleh satu alur kerja paling penting, bukan oleh daftar fitur terpanjang",
      "Umpan balik dari pengguna nyata di minggu-minggu pertama jauh lebih berharga daripada asumsi di tahap perencanaan",
      "Pendekatan bertahap mengurangi risiko biaya, mempercepat manfaat, dan memudahkan tim beradaptasi",
    ],
  },
  { type: "h2", text: "Apa sebenarnya MVP dalam konteks bisnis" },
  {
    type: "p",
    text: "Dalam dunia startup, MVP sering dipakai untuk menguji apakah pasar menginginkan sebuah produk. Dalam konteks bisnis yang sudah berjalan, tujuannya sedikit berbeda. Anda biasanya sudah tahu masalahnya nyata — pesanan tercecer, stok tidak sinkron, laporan terlambat. Yang belum diketahui adalah bentuk solusi yang paling tepat, fitur mana yang benar-benar dipakai, dan bagaimana tim akan beradaptasi dengan cara kerja baru.",
  },
  {
    type: "p",
    text: "MVP untuk aplikasi bisnis adalah versi pertama yang menyelesaikan satu alur kerja inti dari awal sampai akhir, cukup andal untuk dipakai setiap hari, dan dibangun di atas fondasi teknis yang bisa dikembangkan. Kata kuncinya adalah viable: layak dipakai. Aplikasi yang hanya bisa didemonstrasikan tapi tidak bisa dipakai dalam operasional nyata bukanlah MVP, melainkan prototipe. Prototipe berguna untuk menguji ide tampilan, tapi tidak memberi Anda data tentang penggunaan yang sesungguhnya.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
    alt: "Tangan memegang pensil sedang menggambar sketsa rancangan antarmuka aplikasi di atas kertas",
    caption: "Ruang lingkup MVP sebaiknya bisa digambarkan dalam satu alur sederhana sebelum pengembangan dimulai.",
  },
  { type: "h2", text: "Kenapa membangun semuanya sekaligus itu berisiko" },
  {
    type: "p",
    text: "Membangun aplikasi lengkap dalam satu proyek besar terlihat efisien di atas kertas: satu kali perencanaan, satu kali pengembangan, satu kali peluncuran. Dalam praktiknya, pendekatan ini membawa beberapa risiko yang sering baru terasa di akhir proyek.",
  },
  {
    type: "ul",
    items: [
      "Kebutuhan berubah selama pengembangan yang panjang, sehingga sebagian fitur sudah tidak relevan saat aplikasi selesai",
      "Asumsi tentang cara kerja pengguna ternyata keliru, dan baru ketahuan setelah semua fitur dibangun di atas asumsi itu",
      "Biaya dan waktu cenderung membengkak karena ruang lingkup yang besar sulit diperkirakan dengan akurat",
      "Tim harus mempelajari banyak hal baru sekaligus saat peluncuran, sehingga resistensi terhadap sistem meningkat",
      "Manfaat baru terasa setelah seluruh proyek selesai, sementara biaya sudah dikeluarkan sejak awal",
    ],
  },
  {
    type: "p",
    text: "MVP membalik urutan ini. Manfaat pertama sudah terasa dalam hitungan minggu atau bulan, bukan setelah proyek panjang selesai. Setiap tahap berikutnya dibangun berdasarkan apa yang sudah terbukti berguna, sehingga risiko membangun fitur yang tidak dipakai jauh berkurang.",
  },
  { type: "h2", text: "Cara menentukan ruang lingkup MVP" },
  {
    type: "p",
    text: "Bagian tersulit dari MVP bukanlah membangunnya, melainkan memutuskan apa yang tidak dimasukkan. Setiap pemangku kepentingan punya fitur favorit, dan semuanya terdengar penting. Beberapa pertanyaan berikut membantu memilah dengan lebih objektif.",
  },
  { type: "h3", text: "Masalah mana yang paling mahal saat ini?" },
  {
    type: "p",
    text: "Mulailah dari masalah yang paling banyak menghabiskan waktu, uang, atau peluang. Jika pesanan yang tercatat manual sering salah dan menyebabkan pengiriman ulang, alur pemesanan kemungkinan besar adalah kandidat MVP. Jika masalah terbesar adalah laporan yang terlambat, mungkin MVP-nya adalah dasbor sederhana yang mengambil data dari sumber yang sudah ada.",
  },
  { type: "h3", text: "Siapa pengguna utamanya?" },
  {
    type: "p",
    text: "MVP yang baik biasanya melayani satu kelompok pengguna utama dengan sangat baik, bukan semua kelompok dengan setengah hati. Apakah aplikasi ini terutama untuk sales di lapangan, admin gudang, atau pelanggan? Pilih satu, pahami cara kerja mereka secara mendalam, dan rancang alur yang paling mudah bagi mereka.",
  },
  { type: "h3", text: "Apa alur minimum dari awal sampai akhir?" },
  {
    type: "p",
    text: "Tuliskan langkah-langkah alur kerja inti dari awal hingga selesai. Misalnya: sales membuat pesanan, admin memverifikasi, gudang menyiapkan barang, status terkirim tercatat. Setiap langkah dalam alur ini harus ada di MVP, walaupun dalam bentuk sederhana. Fitur yang tidak berada di jalur ini — seperti laporan analitik mendalam, integrasi ke sistem lain, atau pengaturan hak akses yang rumit — bisa menunggu tahap berikutnya.",
  },
  {
    type: "callout",
    title: "Aturan praktis",
    text: "Jika sebuah fitur bisa digantikan sementara oleh proses manual yang masuk akal selama beberapa bulan, fitur itu kemungkinan besar tidak perlu masuk MVP. Catat sebagai kandidat tahap berikutnya, lalu lihat apakah kebutuhannya memang muncul.",
  },
  { type: "h2", text: "MVP bukan berarti kualitas rendah" },
  {
    type: "p",
    text: "Salah satu kesalahpahaman paling berbahaya tentang MVP adalah menganggapnya sebagai alasan untuk membangun asal jadi. Yang dikurangi dalam MVP adalah jumlah fitur, bukan kualitas fitur yang ada. Alur yang dibangun harus stabil, aman, dan nyaman dipakai, karena pengguna akan menilai seluruh sistem dari pengalaman pertama mereka. Aplikasi yang sering error di minggu pertama akan sulit mendapatkan kepercayaan kembali, sebaik apa pun versi berikutnya.",
  },
  {
    type: "p",
    text: "Fondasi teknis juga harus dipikirkan sejak awal. Struktur database, arsitektur aplikasi, keamanan data, dan cara aplikasi akan dikembangkan ke depan perlu dirancang dengan mempertimbangkan tahap-tahap berikutnya, walaupun fitur-fiturnya belum dibangun. MVP yang dibangun di atas fondasi rapuh sering berakhir harus dibangun ulang, dan justru menghilangkan penghematan yang ingin dicapai.",
  },
  { type: "h2", text: "Gambaran ruang lingkup MVP yang sehat" },
  {
    type: "p",
    text: "Kembali ke contoh bisnis distribusi di awal artikel. Dari daftar keinginan yang panjang, masalah paling mahal ternyata adalah pesanan dari sales lapangan yang dicatat lewat chat, lalu diketik ulang oleh admin — sering terlambat dan kadang salah jumlah. Maka ruang lingkup MVP yang masuk akal adalah aplikasi pemesanan untuk sales: memilih pelanggan, memilih produk dari katalog, melihat stok secara kasar, mengirim pesanan, dan admin menerima daftar pesanan yang rapi untuk diproses.",
  },
  {
    type: "p",
    text: "Portal pemesanan mandiri untuk pelanggan, integrasi otomatis ke akuntansi, dan perhitungan komisi sales tidak dimasukkan. Semuanya tetap penting, tapi bisa menunggu sampai alur pesanan dasar terbukti berjalan dan tim sudah terbiasa. Dengan ruang lingkup seperti ini, manfaat pertama — pesanan yang lebih cepat dan lebih akurat — bisa dirasakan jauh lebih awal, dan data pesanan yang terkumpul menjadi modal berharga untuk tahap berikutnya.",
  },
  { type: "h2", text: "Kesalahan umum saat membangun MVP" },
  {
    type: "ol",
    items: [
      "Ruang lingkup terus bertambah selama pengembangan, sampai MVP berubah menjadi proyek besar dengan nama berbeda",
      "Memilih fitur berdasarkan siapa yang paling keras bersuara, bukan berdasarkan masalah yang paling mahal",
      "Tidak melibatkan pengguna nyata sejak tahap perancangan, sehingga alur terasa asing saat diluncurkan",
      "Meluncurkan MVP tanpa rencana mengumpulkan umpan balik, sehingga tidak ada bahan untuk tahap berikutnya",
      "Menganggap MVP sebagai produk akhir dan berhenti mengembangkan setelah versi pertama berjalan",
    ],
  },
  {
    type: "p",
    text: "Kesalahan terakhir cukup sering terjadi. Setelah MVP berjalan dan masalah paling mendesak teratasi, perhatian perusahaan beralih ke hal lain. Aplikasi tetap dipakai, tapi dengan berbagai solusi darurat di sekitarnya — spreadsheet tambahan, catatan manual, atau grup chat untuk hal-hal yang belum ditangani sistem. Perlahan, keuntungan dari sistem terpusat kembali tergerus. MVP seharusnya menjadi awal dari peta pengembangan, bukan akhirnya.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    alt: "Beberapa anggota tim berdiskusi sambil melihat layar komputer di ruang kerja",
    caption: "Umpan balik dari pengguna harian adalah bahan utama untuk menentukan tahap pengembangan berikutnya.",
  },
  { type: "h2", text: "Dari MVP ke sistem yang lengkap" },
  {
    type: "p",
    text: "Setelah MVP dipakai beberapa minggu, Anda akan punya sesuatu yang tidak dimiliki di tahap perencanaan: bukti. Fitur mana yang paling sering dipakai, di bagian mana pengguna sering bingung, proses manual apa yang masih berjalan di luar sistem, dan permintaan apa yang paling sering muncul. Informasi inilah yang menjadi dasar untuk menentukan tahap berikutnya.",
  },
  {
    type: "p",
    text: "Susun peta pengembangan dalam tahap-tahap kecil yang masing-masing memberi manfaat yang bisa dirasakan. Tahap kedua mungkin menambahkan integrasi dengan sistem akuntansi. Tahap ketiga mungkin membuka akses untuk pelanggan. Tahap keempat mungkin menambahkan dasbor untuk manajemen. Urutannya ditentukan oleh nilai bisnis dan umpan balik, bukan oleh daftar awal yang dibuat sebelum ada yang memakai aplikasinya.",
  },
  {
    type: "ul",
    items: [
      "Tetapkan cara mengumpulkan umpan balik sejak hari pertama: formulir singkat, sesi tanya jawab rutin, atau pengamatan langsung",
      "Pantau data penggunaan untuk melihat fitur mana yang benar-benar dipakai",
      "Catat setiap proses manual yang masih berjalan di luar sistem sebagai kandidat pengembangan",
      "Tinjau prioritas secara berkala bersama perwakilan pengguna dan manajemen",
      "Rilis pembaruan dalam siklus pendek agar pengguna melihat masukan mereka ditindaklanjuti",
    ],
  },
  { type: "h2", text: "Memilih mitra pengembangan untuk pendekatan bertahap" },
  {
    type: "p",
    text: "Tidak semua pengembang terbiasa bekerja dengan pendekatan MVP. Sebagian lebih nyaman dengan proyek bertahap tunggal yang ruang lingkupnya ditetapkan di awal. Saat memilih mitra, perhatikan apakah mereka membantu Anda memangkas ruang lingkup atau justru menambahkan fitur. Mitra yang baik akan menanyakan masalah bisnis di balik setiap fitur, menyarankan urutan pengembangan yang masuk akal, dan menjelaskan bagaimana fondasi teknis MVP akan mendukung tahap-tahap berikutnya.",
  },
  {
    type: "p",
    text: "Perhatikan juga bagaimana kontrak dan pembayaran disusun. Pendekatan bertahap paling cocok dengan struktur kerja yang juga bertahap, di mana setiap tahap punya ruang lingkup, hasil, dan biaya yang jelas. Dengan begitu, Anda bisa mengevaluasi hasil setiap tahap sebelum berkomitmen pada tahap berikutnya.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Aplikasi bisnis yang berhasil jarang lahir dalam bentuk sempurna di hari pertama. Kebanyakan tumbuh dari versi sederhana yang menyelesaikan satu masalah dengan baik, lalu dikembangkan sedikit demi sedikit berdasarkan cara orang benar-benar memakainya. Jika ide aplikasi Anda terasa terlalu besar untuk dimulai, mungkin masalahnya bukan pada idenya, tapi pada ukuran langkah pertamanya. Temukan satu alur yang paling penting, bangun dengan baik, dan biarkan penggunaan nyata menunjukkan arah selanjutnya.",
  },
  {
    type: "cta",
    title: "Punya ide aplikasi, tapi bingung harus mulai dari mana?",
    text: "Tim AG·SORA dapat membantu memetakan alur kerja inti, menentukan ruang lingkup MVP yang realistis, dan menyusun peta pengembangan bertahap. Konsultasinya gratis, tanpa komitmen.",
    href: "/services/custom-software",
    label: "Konsultasi Gratis",
  },
];

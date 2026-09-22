import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Seorang pemilik bisnis jasa pengiriman bercerita bahwa timnya menghabiskan hampir dua jam setiap pagi hanya untuk menyusun rute kurir — menyalin alamat dari pesan WhatsApp pelanggan, mencocokkannya dengan catatan di spreadsheet, lalu membagikannya lewat grup chat yang isinya sudah ratusan pesan. Ketika ditanya kenapa belum punya aplikasi sendiri, jawabannya sederhana: 'rasanya belum butuh, masih bisa jalan pakai cara lama.'",
  },
  {
    type: "p",
    text: "Ini adalah jebakan yang sangat umum. 'Masih bisa jalan' dan 'berjalan dengan efisien' adalah dua hal yang berbeda jauh. Banyak bisnis terus memakai kombinasi WhatsApp, spreadsheet, dan proses manual bukan karena itu cara terbaik, tapi karena belum ada momen yang cukup menyakitkan untuk memaksa mereka berhenti dan bertanya: apakah sudah waktunya punya aplikasi sendiri?",
  },
  {
    type: "p",
    text: "Artikel ini membahas tanda-tanda yang biasanya muncul sebelum keputusan itu diambil, kapan justru belum saatnya, dan bagaimana memulai tanpa langsung membangun aplikasi yang terlalu besar untuk kebutuhan hari ini.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Aplikasi dibutuhkan ketika proses manual mulai menimbulkan biaya nyata — waktu, kesalahan, atau pelanggan yang kecewa",
      "Tim lapangan yang butuh data real-time adalah salah satu pemicu paling umum",
      "Tidak semua bisnis perlu aplikasi mobile; sebagian cukup dengan aplikasi web",
      "Memulai dari versi minimum (MVP) lebih aman daripada langsung membangun semua fitur",
      "Pilihan antara software jadi dan custom development bergantung pada seberapa unik proses bisnis Anda",
    ],
  },
  { type: "h2", text: "Kenapa pertanyaannya bukan 'aplikasi atau tidak'" },
  {
    type: "p",
    text: "Pertanyaan yang lebih berguna bukan 'apakah bisnis saya butuh aplikasi', tapi 'proses mana yang paling mahal jika terus dikerjakan manual'. Aplikasi bukan simbol status atau sekadar tren digital — ia adalah alat untuk menghilangkan pekerjaan berulang yang rawan salah, dan untuk memberi akses data kepada orang yang membutuhkannya, kapan pun dan di mana pun mereka berada. Jika tidak ada proses yang benar-benar diuntungkan oleh itu, aplikasi hanya akan menjadi biaya tanpa manfaat yang sepadan.",
  },
  { type: "h2", text: "Tanda 1: Proses bisnis sudah terlalu rumit untuk WhatsApp dan spreadsheet" },
  {
    type: "p",
    text: "WhatsApp dan spreadsheet bekerja baik untuk volume kecil dan tim yang masih bisa saling mengingatkan secara langsung. Masalah muncul ketika volume bertambah: pesan penting tenggelam di antara obrolan lain, versi spreadsheet yang benar tidak jelas karena banyak orang mengedit salinan berbeda, dan tidak ada cara mudah untuk melihat riwayat atau menelusuri kesalahan. Jika tim Anda menghabiskan lebih banyak waktu mencari informasi daripada menggunakannya, itu tanda paling awal bahwa alat yang dipakai sudah kalah dengan kompleksitas bisnis.",
  },
  { type: "h2", text: "Tanda 2: Tim lapangan butuh data secara real-time" },
  {
    type: "p",
    text: "Sales yang bertemu klien, kurir yang mengantar barang, atau teknisi yang menangani perbaikan di lokasi pelanggan — semuanya bekerja jauh dari kantor, tapi tetap butuh data terbaru: stok yang tersedia, status pesanan, atau riwayat pelanggan. Ketika mereka harus menelepon kantor untuk mengecek hal-hal ini, atau sebaliknya kantor tidak tahu di mana posisi mereka dan pekerjaan apa yang sudah selesai, itu adalah beban yang bisa dihilangkan dengan aplikasi yang memberi akses data langsung dari lapangan.",
  },
  {
    type: "callout",
    title: "Pertanyaan cepat",
    text: "Berapa kali dalam sehari tim lapangan Anda menelepon kantor hanya untuk menanyakan informasi yang sebenarnya sudah tercatat di suatu tempat? Jika jawabannya lebih dari beberapa kali, itu sudah cukup untuk menjadi alasan mempertimbangkan aplikasi.",
  },
  { type: "h2", text: "Tanda 3: Pelanggan mengharapkan pengalaman digital yang konsisten" },
  {
    type: "p",
    text: "Pelanggan yang terbiasa memesan lewat aplikasi, melacak status pesanan secara langsung, atau melihat riwayat transaksi mereka sendiri akan menganggap proses manual — menunggu balasan chat, menelepon untuk konfirmasi, atau mengisi formulir kertas — sebagai pengalaman yang terasa ketinggalan. Ini bukan soal gengsi, tapi soal ekspektasi yang sudah terbentuk dari interaksi mereka dengan bisnis lain. Ketika ekspektasi itu tidak terpenuhi, sebagian pelanggan memilih pindah ke kompetitor yang menawarkan pengalaman lebih mudah.",
  },
  { type: "h2", text: "Tanda 4: Kesalahan manual mulai berbiaya nyata" },
  {
    type: "p",
    text: "Salah catat pesanan, salah kirim alamat, atau data pelanggan yang hilang saat staf yang menyimpannya resign — semua ini adalah biaya yang jarang dihitung sebagai biaya, tapi nyata dampaknya. Ketika kesalahan seperti ini mulai berulang dan berdampak pada kepuasan pelanggan atau kerugian finansial langsung, biaya membangun aplikasi yang mengurangi kesalahan itu biasanya jauh lebih kecil dibanding biaya yang terus ditanggung dari kesalahan yang berulang.",
  },
  { type: "h2", text: "Tanda 5: Bisnis mulai bertumbuh melewati kapasitas manual" },
  {
    type: "p",
    text: "Proses yang berjalan baik untuk sepuluh transaksi sehari belum tentu bertahan untuk seratus. Pertumbuhan yang sehat seharusnya membuat operasional semakin lancar, bukan semakin kacau. Jika setiap penambahan pelanggan atau transaksi terasa proporsional dengan penambahan masalah administratif, itu tanda bahwa sistem manual sudah mendekati batasnya — dan aplikasi bisa menjadi cara untuk memisahkan pertumbuhan bisnis dari pertumbuhan beban administratif.",
  },
  {
    type: "p",
    text: "Tanda ini juga sering muncul bersamaan dengan pertumbuhan tim. Karyawan baru butuh waktu lebih lama untuk memahami cara kerja yang tidak terdokumentasi rapi, dan kesalahan lebih mudah terjadi karena pengetahuan operasional masih tersebar di kepala beberapa orang senior, bukan tertulis dalam sistem yang bisa diakses semua orang.",
  },
  { type: "h2", text: "Kapan justru belum saatnya" },
  {
    type: "p",
    text: "Tidak semua bisnis perlu buru-buru membangun aplikasi. Jika proses bisnis masih sederhana, volume transaksi masih kecil, dan tim masih bisa saling koordinasi dengan lancar tanpa banyak kesalahan, membangun aplikasi justru bisa menjadi beban baru — biaya pengembangan, biaya perawatan, dan waktu tim untuk belajar sistem baru, padahal manfaatnya belum sepadan.",
  },
  {
    type: "ul",
    items: [
      "Volume transaksi masih bisa ditangani dengan nyaman oleh 1-2 orang",
      "Kesalahan pencatatan jarang terjadi dan mudah diperbaiki",
      "Belum ada rencana ekspansi cabang, tim, atau saluran penjualan dalam waktu dekat",
      "Proses bisnis masih sering berubah-ubah dan belum stabil",
    ],
  },
  {
    type: "p",
    text: "Poin terakhir penting: membangun aplikasi untuk proses yang masih sering berubah biasanya berarti aplikasi itu harus dirombak berulang kali. Menstabilkan proses terlebih dahulu, baru kemudian membangun sistem di atasnya, umumnya menghasilkan aplikasi yang lebih tahan lama.",
  },
  { type: "h2", text: "Mulai dari MVP, bukan dari semua fitur sekaligus" },
  {
    type: "p",
    text: "Salah satu kesalahan paling umum adalah mencoba membangun aplikasi yang menyelesaikan semua masalah sekaligus sejak versi pertama. Pendekatan yang lebih aman adalah membangun minimum viable product (MVP) — versi aplikasi dengan fitur paling inti yang menyelesaikan masalah paling mendesak, lalu dikembangkan bertahap berdasarkan bagaimana tim dan pelanggan benar-benar menggunakannya.",
  },
  {
    type: "p",
    text: "MVP juga memberi kesempatan untuk menguji asumsi sebelum berinvestasi besar. Fitur yang di atas kertas terlihat penting, kadang setelah dipakai beberapa minggu ternyata jarang disentuh, sementara kebutuhan lain yang tidak terpikirkan sebelumnya justru muncul dari penggunaan nyata. Membangun bertahap membuat setiap tambahan fitur didasarkan pada bukti, bukan tebakan.",
  },
  { type: "h2", text: "Menghitung biaya yang selama ini tidak terlihat" },
  {
    type: "p",
    text: "Proses manual jarang muncul sebagai satu angka biaya yang jelas, sehingga mudah dianggap 'gratis' dibanding membangun aplikasi yang biayanya terlihat jelas di depan. Padahal biaya itu tetap ada, hanya tersembunyi dalam bentuk lain: jam kerja staf yang habis untuk pekerjaan berulang, pesanan yang batal karena responnya terlalu lambat, atau pelanggan yang tidak kembali karena pengalamannya terasa merepotkan.",
  },
  {
    type: "p",
    text: "Cara paling sederhana untuk membandingkan adalah menghitung perkiraan jam kerja yang hilang setiap bulan akibat proses manual, lalu mengalikannya dengan biaya waktu tim. Angka itu, dibandingkan dengan estimasi biaya membangun dan merawat aplikasi, sering memberi gambaran yang lebih jujur dibanding sekadar merasa 'sepertinya mahal' tanpa perhitungan.",
  },
  { type: "h2", text: "Pertanyaan yang perlu dijawab sebelum mulai" },
  {
    type: "p",
    text: "Sebelum menghubungi tim pengembang, ada baiknya menjawab beberapa pertanyaan dasar terlebih dahulu. Jawabannya akan sangat memengaruhi bentuk aplikasi yang dibangun, dan mencegah proyek melebar ke fitur-fitur yang sebenarnya belum dibutuhkan.",
  },
  {
    type: "ul",
    items: [
      "Siapa yang akan memakai aplikasi ini — tim internal, pelanggan, atau keduanya?",
      "Satu proses mana yang jika diperbaiki akan memberi dampak paling besar dalam waktu dekat?",
      "Perangkat apa yang dipakai pengguna sehari-hari — ponsel Android, iPhone, atau komputer?",
      "Apakah aplikasi perlu tetap berfungsi saat koneksi internet terputus?",
      "Siapa di internal yang akan bertanggung jawab memastikan data di aplikasi tetap akurat?",
    ],
  },
  {
    type: "p",
    text: "Pertanyaan terakhir sering diremehkan, padahal menentukan keberhasilan jangka panjang. Aplikasi secanggih apa pun akan kehilangan gunanya jika tidak ada yang bertanggung jawab menjaga data di dalamnya tetap benar dan mutakhir.",
  },
  { type: "h2", text: "Software jadi, custom development, atau keduanya?" },
  {
    type: "p",
    text: "Jika kebutuhan Anda relatif umum — pemesanan, pembayaran, manajemen stok dasar — aplikasi siap pakai atau platform SaaS sering kali sudah cukup dan jauh lebih cepat digunakan. Namun jika proses bisnis Anda punya aturan khusus yang tidak diakomodasi produk umum, atau Anda butuh integrasi mendalam dengan sistem internal yang sudah berjalan, custom development memberi fleksibilitas yang tidak bisa didapat dari software jadi.",
  },
  {
    type: "p",
    text: "Banyak bisnis juga memilih pendekatan campuran: memakai software jadi untuk fungsi standar seperti pembayaran, dan membangun modul khusus hanya untuk bagian proses yang benar-benar unik bagi bisnis mereka. Pendekatan ini sering lebih hemat biaya dibanding membangun semuanya dari nol.",
  },
  { type: "h2", text: "Menyiapkan tim, bukan hanya menyiapkan aplikasi" },
  {
    type: "p",
    text: "Aplikasi yang bagus bisa gagal kalau tim yang akan memakainya tidak dilibatkan sejak awal. Perubahan dari kebiasaan lama ke sistem baru butuh waktu, terutama bagi anggota tim yang sudah nyaman dengan cara kerja lama meski merepotkan. Melibatkan mereka sejak tahap perencanaan — menanyakan kesulitan yang mereka alami sehari-hari, bukan hanya menyampaikan keputusan yang sudah jadi — membuat adopsi jauh lebih lancar dibanding meluncurkan aplikasi secara tiba-tiba.",
  },
  {
    type: "p",
    text: "Masa transisi juga perlu direncanakan, bukan dianggap selesai begitu aplikasi diluncurkan. Memberi waktu tim untuk terbiasa, menyediakan panduan sederhana, dan tetap membuka jalur lama sebagai cadangan selama beberapa minggu pertama mengurangi risiko operasional terganggu di masa peralihan.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Tidak ada angka omzet atau jumlah karyawan yang secara otomatis menandakan sebuah bisnis sudah 'cukup besar' untuk punya aplikasi sendiri. Yang menentukan adalah seberapa mahal proses manual yang sedang berjalan — dalam waktu, kesalahan, dan peluang yang hilang. Jika beberapa tanda di atas terasa familiar, langkah paling masuk akal bukan langsung membangun aplikasi besar, tapi memetakan proses mana yang paling mendesak untuk diubah lebih dulu.",
  },
  {
    type: "cta",
    title: "Mengenali beberapa tanda di atas pada bisnis Anda?",
    text: "Ceritakan proses yang paling terasa berat. Tim AG·SORA akan membantu menentukan apakah aplikasi memang solusinya, dan bagaimana memulai dari MVP yang realistis — konsultasinya gratis.",
    href: "/services/mobile",
    label: "Konsultasi Gratis",
  },
];

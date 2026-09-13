import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Laporan pipeline minggu ini terlihat luar biasa. Nilai peluang di tahap “Negosiasi” naik tajam. Manajer sales tersenyum di rapat. Akhir bulan tiba, dan hampir tidak ada yang menutup. Ternyata, separuh peluang di tahap negosiasi baru sebatas pelanggan yang membalas “boleh kirim penawarannya”.",
  },
  {
    type: "p",
    text: "Banyak tim sales mulai memakai CRM dengan tahapan bawaan seperti Lead, Prospek, dan Negosiasi, tanpa pernah menyepakati artinya. Akibatnya, dua sales bisa menempatkan peluang yang kondisinya persis sama di tahap yang berbeda. Angka pipeline terlihat rapi di layar, tetapi tidak mencerminkan kenyataan — dan keputusan yang diambil dari angka itu ikut meleset.",
  },
  {
    type: "p",
    text: "CRM hanya seberguna tahapan pipeline di dalamnya. Artikel ini membahas cara mendefinisikan tahapan yang jelas, syarat berpindah tahap, cara menjaga pipeline tetap jujur, dan bagaimana pipeline yang baik membantu tim sales menjual lebih terarah.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Tahapan pipeline harus didefinisikan oleh kejadian yang bisa dicek, bukan perasaan sales",
      "Setiap tahap butuh syarat masuk yang tertulis dan disepakati",
      "Lima sampai tujuh tahap biasanya cukup untuk sebagian besar bisnis",
      "Alasan kalah sama berharganya dengan data peluang yang menang",
      "Pipeline perlu dibersihkan secara rutin agar perkiraan penjualan tetap realistis",
    ],
  },
  { type: "h2", text: "Kenapa pipeline yang kabur merugikan" },
  {
    type: "p",
    text: "Pipeline bukan sekadar daftar peluang. Ia adalah dasar perkiraan penjualan, perencanaan stok, penentuan target, bahkan keputusan merekrut sales baru. Ketika tahapan tidak jelas, semua keputusan itu dibangun di atas angka yang tidak bisa dipercaya.",
  },
  {
    type: "p",
    text: "Masalahnya juga menyentuh pembinaan tim. Manajer tidak bisa membantu sales yang kesulitan jika tidak tahu di tahap mana peluang mereka tersangkut. Apakah masalahnya di mencari prospek, di menggali kebutuhan, atau di negosiasi? Pipeline yang kabur menyembunyikan jawaban itu.",
  },
  { type: "h2", text: "Tahapan berdasarkan kejadian, bukan perasaan" },
  {
    type: "p",
    text: "Tahapan yang baik didefinisikan oleh sesuatu yang benar-benar terjadi dan bisa dicek oleh orang lain — bukan oleh keyakinan sales bahwa peluangnya “sudah hangat”. Perasaan setiap orang berbeda; kejadian tidak.",
  },
  {
    type: "ul",
    items: [
      "Kontak awal: prospek sudah merespons dan bersedia berdiskusi",
      "Kebutuhan dipetakan: sudah ada pertemuan untuk memahami kebutuhan, anggaran, dan pengambil keputusan",
      "Proposal terkirim: penawaran tertulis sudah diterima prospek",
      "Negosiasi: prospek memberi tanggapan konkret atas harga atau ruang lingkup",
      "Menunggu keputusan: semua pertanyaan sudah terjawab dan prospek sedang memproses persetujuan internal",
      "Menang atau kalah: ada keputusan yang jelas",
    ],
  },
  {
    type: "p",
    text: "Nama tahapan boleh disesuaikan dengan bahasa tim Anda. Yang penting bukan namanya, melainkan definisi di baliknya dan konsistensi semua orang dalam menerapkannya.",
  },
  { type: "h2", text: "Tetapkan syarat pindah tahap" },
  {
    type: "p",
    text: "Untuk setiap tahap, tuliskan apa yang harus terpenuhi sebelum peluang boleh dipindah ke tahap berikutnya. Misalnya, peluang baru boleh masuk tahap Kebutuhan Dipetakan jika sudah tercatat siapa pengambil keputusannya dan kira-kira kapan mereka ingin mulai. Peluang baru boleh masuk tahap Negosiasi jika prospek sudah memberikan tanggapan tertulis atas penawaran.",
  },
  {
    type: "p",
    text: "Syarat ini membuat pipeline antar-sales bisa dibandingkan secara adil, dan membantu sales baru memahami proses penjualan perusahaan dengan lebih cepat. Di CRM, beberapa syarat bisa dijadikan kolom wajib sehingga peluang tidak bisa dipindah sebelum informasi pentingnya diisi.",
  },
  {
    type: "callout",
    title: "Jangan terlalu banyak tahap",
    text: "Pipeline dengan terlalu banyak tahap membuat sales enggan memperbarui status, dan perbedaan antar tahap menjadi tipis. Umumnya lima sampai tujuh tahap sudah cukup menggambarkan perjalanan penjualan tanpa menjadi beban administrasi.",
  },
  { type: "h2", text: "Beri bobot peluang di setiap tahap" },
  {
    type: "p",
    text: "Setelah tahapan jelas, setiap tahap bisa diberi perkiraan kemungkinan menang. Peluang di tahap awal tentu memiliki kemungkinan lebih kecil dibanding peluang yang sudah menunggu keputusan. Dengan bobot ini, perkiraan penjualan dihitung dari nilai peluang dikali kemungkinannya, bukan dari total semua peluang.",
  },
  {
    type: "p",
    text: "Awalnya, bobot bisa berupa perkiraan. Setelah beberapa bulan data terkumpul, bobot sebaiknya diperbarui berdasarkan tingkat konversi nyata di bisnis Anda. Perkiraan yang dibangun dari data sendiri jauh lebih bisa dipercaya daripada angka umum dari luar.",
  },
  { type: "h2", text: "Catat alasan kalah" },
  {
    type: "p",
    text: "Peluang yang kalah sama berharganya dengan yang menang, asalkan alasannya tercatat. Dengan pilihan alasan yang seragam — harga, waktu yang tidak tepat, memilih pesaing, kebutuhan berubah, tidak ada anggaran — Anda bisa melihat pola yang berulang dan memperbaiki penawaran.",
  },
  {
    type: "p",
    text: "Hindari kolom alasan yang sepenuhnya bebas tanpa pilihan, karena hasilnya sulit dianalisis. Kombinasikan pilihan alasan yang seragam dengan kolom catatan singkat untuk konteks tambahan.",
  },
  { type: "h2", text: "Bersihkan pipeline secara rutin" },
  {
    type: "p",
    text: "Peluang yang terlalu lama diam di satu tahap biasanya sudah tidak aktif, meski belum ditandai kalah. Sales enggan menutupnya karena berharap masih ada kemungkinan, atau karena pipeline yang kosong terlihat buruk di mata atasan. Hasilnya, pipeline membengkak dengan peluang yang sebenarnya sudah mati.",
  },
  {
    type: "p",
    text: "Tinjauan rutin, misalnya mingguan, membantu membersihkan pipeline. Tetapkan batas waktu wajar untuk setiap tahap. Peluang yang melewati batas itu tanpa aktivitas perlu diputuskan: dilanjutkan dengan langkah konkret, atau ditutup sebagai kalah beserta alasannya.",
  },
  { type: "h2", text: "Metrik yang lahir dari pipeline yang jujur" },
  {
    type: "ul",
    items: [
      "Tingkat konversi dari satu tahap ke tahap berikutnya",
      "Rata-rata lama peluang di setiap tahap",
      "Nilai rata-rata peluang yang dimenangkan",
      "Alasan kalah yang paling sering muncul",
      "Perkiraan penjualan berbobot untuk periode berikutnya",
    ],
  },
  {
    type: "p",
    text: "Metrik ini menunjukkan di mana perbaikan paling berdampak. Jika banyak peluang berhenti setelah proposal dikirim, masalahnya mungkin ada di isi atau harga penawaran. Jika banyak peluang berhenti di tahap awal, mungkin prospek yang dikejar kurang tepat sasaran.",
  },
  { type: "h2", text: "Sesuaikan dengan cara Anda menjual" },
  {
    type: "p",
    text: "Bisnis dengan transaksi cepat dan bisnis B2B dengan siklus berbulan-bulan membutuhkan tahapan yang berbeda. Penjualan kepada perusahaan besar mungkin membutuhkan tahap uji coba atau presentasi kepada komite. Penjualan dengan nilai kecil mungkin cukup dengan tiga atau empat tahap. Mulailah dari cara tim benar-benar menjual hari ini, lalu sesuaikan setelah beberapa bulan data terkumpul.",
  },
  { type: "h2", text: "Peran manajer dalam menjaga kualitas pipeline" },
  {
    type: "p",
    text: "Pipeline yang jujur tidak terjadi dengan sendirinya. Manajer sales perlu meninjau pipeline secara rutin, mempertanyakan peluang yang datanya tidak lengkap, dan memberi contoh dengan memperbarui datanya sendiri jika ia juga menangani akun. Ketika manajer membiarkan data yang kabur tanpa ditindaklanjuti, tim akan menganggap kerapian data tidak benar-benar penting.",
  },
  {
    type: "p",
    text: "Sesi tinjauan pipeline yang baik tidak berupa interogasi, melainkan diskusi tentang langkah berikutnya untuk setiap peluang penting. Pertanyaan seperti “apa yang perlu terjadi agar peluang ini pindah tahap” jauh lebih membangun daripada sekadar “kenapa belum closing”.",
  },
  { type: "h2", text: "Ilustrasi: dua tim, dua pipeline" },
  {
    type: "p",
    text: "Bayangkan dua tim sales dengan jumlah orang dan produk yang sama. Tim pertama memakai tahapan bawaan tanpa definisi. Setiap sales menilai sendiri kapan peluang masuk tahap negosiasi. Laporan pipeline selalu terlihat penuh, tetapi realisasi penjualan jauh di bawah perkiraan setiap bulan, dan manajer tidak tahu sales mana yang perlu dibantu.",
  },
  {
    type: "p",
    text: "Tim kedua menyepakati definisi tahapan dan syarat pindah tahap, lalu membersihkan pipeline setiap Jumat. Pipeline mereka terlihat lebih kecil, tetapi perkiraan penjualannya jauh lebih mendekati realisasi. Manajer bisa melihat bahwa satu sales kesulitan di tahap proposal, lalu membantunya memperbaiki cara menyusun penawaran.",
  },
  { type: "h2", text: "Langkah menyusun ulang pipeline" },
  {
    type: "ol",
    items: [
      "Kumpulkan tim sales dan petakan perjalanan penjualan yang benar-benar terjadi",
      "Sepakati nama dan definisi setiap tahap",
      "Tuliskan syarat masuk setiap tahap dan jadikan kolom wajib di CRM",
      "Tetapkan pilihan alasan kalah yang seragam",
      "Tinjau semua peluang yang ada dan pindahkan ke tahap yang sesuai definisi baru",
      "Jadwalkan tinjauan pipeline rutin",
    ],
  },
  { type: "h2", text: "Kesalahan umum" },
  {
    type: "ul",
    items: [
      "Memakai tahapan bawaan tanpa menyepakati artinya",
      "Membuat tahapan terlalu banyak sehingga jarang diperbarui",
      "Menilai sales dari besar pipeline, bukan dari realisasi",
      "Membiarkan peluang mati menumpuk di pipeline",
      "Tidak mencatat alasan kalah",
    ],
  },
  {
    type: "p",
    text: "Kesalahan ketiga sering menjadi akar kesalahan lainnya. Ketika sales dinilai dari besarnya pipeline, mereka punya alasan untuk memasukkan dan mempertahankan peluang yang tidak realistis. Nilailah dari realisasi dan kualitas data, maka pipeline akan menjadi lebih jujur dengan sendirinya.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Berapa lama peluang boleh berada di satu tahap?" },
  {
    type: "p",
    text: "Bergantung pada siklus penjualan bisnis Anda. Gunakan data beberapa bulan terakhir untuk melihat rata-rata lama peluang di setiap tahap, lalu tetapkan batas yang sedikit di atas rata-rata itu. Peluang yang melewati batas tidak otomatis ditutup, tetapi wajib ditinjau.",
  },
  { type: "h3", text: "Apakah semua sales harus memakai tahapan yang sama?" },
  {
    type: "p",
    text: "Untuk produk dan jenis pelanggan yang sama, ya. Jika perusahaan menjual ke segmen yang sangat berbeda, misalnya ritel kecil dan korporat, pipeline terpisah dengan tahapan berbeda bisa lebih tepat, asalkan setiap pipeline tetap memiliki definisi yang jelas.",
  },
  { type: "h3", text: "Bagaimana jika sales malas memperbarui status?" },
  {
    type: "p",
    text: "Pastikan memperbarui status semudah mungkin, idealnya bisa dari ponsel dalam beberapa ketukan. Tunjukkan juga manfaatnya bagi sales sendiri, seperti pengingat follow-up dan perkiraan komisi. Dan yang terpenting, gunakan data pipeline dalam rapat sehingga pembaruan terasa berguna, bukan formalitas.",
  },
  { type: "h3", text: "Perlukah tahap khusus untuk prospek yang ditunda?" },
  {
    type: "p",
    text: "Sering kali berguna. Prospek yang tertarik tetapi baru siap beberapa bulan lagi sebaiknya dipisahkan dari pipeline aktif, misalnya dengan status ditunda dan tanggal tindak lanjut. Dengan begitu, perkiraan penjualan periode ini tidak tercemar, tetapi prospek tersebut tidak terlupakan.",
  },
  { type: "h3", text: "Siapa yang menentukan definisi tahapan?" },
  {
    type: "p",
    text: "Manajer sales sebaiknya memimpin, tetapi definisi disusun bersama tim. Sales yang ikut menyusun definisi jauh lebih mungkin mematuhinya dibanding sales yang hanya menerima aturan jadi.",
  },
  { type: "h3", text: "Bagaimana menangani peluang yang melibatkan banyak orang di sisi pembeli?" },
  {
    type: "p",
    text: "Untuk penjualan B2B, satu peluang bisa melibatkan pengguna, pemberi pengaruh, dan pengambil keputusan sekaligus. Tahapan tetap bisa sederhana, tetapi tambahkan kolom untuk mencatat siapa saja yang terlibat dan perannya. Peluang tidak sebaiknya pindah ke tahap negosiasi jika pengambil keputusan sebenarnya belum teridentifikasi.",
  },
  { type: "h2", text: "Pilihan di AG·SORA" },
  {
    type: "p",
    text: "AG·SORA CRM tersedia sebagai sistem siap pakai untuk mengelola pipeline dan relasi pelanggan. Untuk proses penjualan dengan tahapan dan persetujuan yang sangat khusus, CRM juga bisa dirancang mengikuti alur tim Anda.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Pipeline yang jujur mungkin terlihat lebih kecil daripada pipeline yang kabur, tetapi jauh lebih berguna. Dengan tahapan berbasis kejadian, syarat pindah tahap yang jelas, dan kebiasaan membersihkan secara rutin, pipeline berubah dari laporan yang menyenangkan dilihat menjadi alat yang benar-benar membantu tim menjual.",
  },
  {
    type: "cta",
    title: "Pipeline Anda terlihat penuh, tapi realisasinya jauh?",
    text: "Lihat bagaimana AG·SORA CRM membantu tim sales mengelola pipeline dengan lebih jelas dan terukur.",
    href: "/products#crm",
    label: "Lihat AG·SORA CRM",
  },
];

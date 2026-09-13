import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Pukul sembilan pagi, pesan mulai masuk ke grup: “Sudah sampai di toko pelanggan.” Foto buram, tanpa keterangan waktu yang jelas. Pukul tiga sore, seseorang lupa melapor. Di akhir bulan, admin HR menghabiskan dua hari menggulir riwayat chat untuk menghitung kehadiran dan uang transport setiap orang.",
  },
  {
    type: "p",
    text: "Mesin absensi di pintu kantor bekerja baik untuk karyawan yang datang ke tempat yang sama setiap hari. Tetapi untuk tim lapangan — sales, kurir, teknisi, petugas survei, merchandiser — cara ini tidak berlaku. Mereka memulai hari di lokasi pelanggan, berpindah beberapa kali, dan jarang menginjak kantor. Akibatnya, kehadiran mereka dicatat lewat laporan manual atau pesan singkat yang sulit diverifikasi dan melelahkan untuk direkap.",
  },
  {
    type: "p",
    text: "Artikel ini membahas cara mengelola absensi karyawan lapangan dengan lebih rapi: apa yang sebenarnya perlu dicatat, pilihan pendekatan yang tersedia, cara menjaga kepercayaan karyawan, dan bagaimana menghubungkan data kehadiran dengan payroll dan kinerja.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Untuk tim lapangan, yang penting bukan hanya jam masuk, tetapi kunjungan dan pekerjaan yang diselesaikan",
      "Check-in lewat aplikasi dengan lokasi dan foto menggantikan laporan chat yang sulit diverifikasi",
      "Aplikasi harus tetap bisa mencatat saat sinyal lemah",
      "Keterbukaan soal data yang dikumpulkan mencegah penolakan karyawan",
      "Data kehadiran paling bernilai ketika langsung mengalir ke payroll",
    ],
  },
  { type: "h2", text: "Kenapa absensi lapangan berbeda" },
  {
    type: "p",
    text: "Absensi kantor menjawab satu pertanyaan sederhana: apakah karyawan datang, dan jam berapa. Untuk tim lapangan, pertanyaan itu kurang bermakna. Seorang sales bisa “hadir” dari pagi hingga sore tetapi hanya mengunjungi satu pelanggan. Seorang teknisi bisa datang terlambat ke titik pertama karena pekerjaan sebelumnya memakan waktu lebih lama dari jadwal.",
  },
  {
    type: "p",
    text: "Karena itu, sistem absensi lapangan sebaiknya dirancang dari pertanyaan yang benar-benar dibutuhkan bisnis. Apakah yang penting adalah jam kerja, jumlah kunjungan, ketepatan waktu di lokasi tertentu, atau penyelesaian pekerjaan? Jawaban ini menentukan data apa yang perlu dikumpulkan dan seberapa rinci.",
  },
  { type: "h2", text: "Apa yang sebenarnya perlu dicatat" },
  {
    type: "ul",
    items: [
      "Waktu mulai dan selesai hari kerja",
      "Lokasi setiap kunjungan yang dijadwalkan",
      "Waktu tiba dan waktu meninggalkan lokasi",
      "Hasil kunjungan atau pekerjaan yang diselesaikan",
      "Alasan jika kunjungan dibatalkan atau dipindah",
    ],
  },
  {
    type: "p",
    text: "Tidak semua bisnis membutuhkan semuanya. Mulailah dari data yang benar-benar dipakai untuk keputusan atau perhitungan gaji. Mengumpulkan data yang tidak pernah dipakai hanya menambah beban karyawan dan risiko pengelolaan data.",
  },
  { type: "h2", text: "Pilihan pendekatan" },
  { type: "h3", text: "Check-in dengan lokasi" },
  {
    type: "p",
    text: "Karyawan melakukan check-in dan check-out melalui aplikasi di ponsel, yang merekam waktu dan koordinat lokasi. Pendekatan ini sederhana dan menggantikan laporan chat dengan data yang terstruktur dan bisa direkap otomatis.",
  },
  { type: "h3", text: "Foto sebagai bukti pendukung" },
  {
    type: "p",
    text: "Foto di lokasi, seperti tampak depan toko atau hasil pekerjaan, memberi bukti tambahan bahwa kunjungan benar-benar terjadi. Foto yang diambil langsung dari aplikasi, bukan diunggah dari galeri, lebih sulit dimanipulasi.",
  },
  { type: "h3", text: "Batas area" },
  {
    type: "p",
    text: "Aplikasi hanya mengizinkan check-in ketika karyawan berada dalam radius tertentu dari lokasi yang dijadwalkan. Pendekatan ini cocok untuk kunjungan ke lokasi tetap seperti toko pelanggan atau proyek, tetapi perlu toleransi yang wajar karena akurasi lokasi ponsel bisa bervariasi.",
  },
  { type: "h3", text: "Laporan kunjungan terhubung" },
  {
    type: "p",
    text: "Setiap check-in terhubung dengan formulir singkat: pesanan yang diambil, masalah yang ditemukan, atau pekerjaan yang diselesaikan. Data kehadiran dan data hasil kerja tersimpan di tempat yang sama, sehingga manajer tidak perlu menyatukan dua laporan terpisah.",
  },
  { type: "h2", text: "Pertimbangkan kondisi di lapangan" },
  {
    type: "p",
    text: "Sinyal internet di lapangan tidak selalu stabil, terutama di gudang, basement, atau daerah yang jauh dari kota. Aplikasi sebaiknya tetap bisa mencatat check-in saat offline — lengkap dengan waktu dan lokasi — lalu mengirim data begitu koneksi kembali. Tanpa kemampuan ini, karyawan terpaksa menunda check-in dan data menjadi tidak akurat.",
  },
  {
    type: "p",
    text: "Ponsel karyawan juga beragam spesifikasinya. Aplikasi yang berat atau boros baterai akan cepat dikeluhkan. Uji aplikasi di beberapa jenis ponsel yang benar-benar dipakai tim, bukan hanya di ponsel terbaru.",
  },
  {
    type: "callout",
    title: "Keterbukaan mencegah penolakan",
    text: "Pelacakan lokasi bisa terasa seperti pengawasan berlebihan. Jelaskan sejak awal data apa yang dikumpulkan, kapan, dan untuk apa — misalnya lokasi hanya direkam saat check-in dan check-out, bukan sepanjang hari. Aturan yang jelas dan masuk akal membuat karyawan jauh lebih mudah menerima.",
  },
  { type: "h2", text: "Menangani kasus yang tidak normal" },
  {
    type: "ul",
    items: [
      "Ponsel mati atau hilang di tengah hari",
      "Lokasi pelanggan berpindah atau tidak sesuai data",
      "Kunjungan dibatalkan pelanggan di tempat",
      "Karyawan harus lembur untuk menyelesaikan pekerjaan",
      "Akurasi GPS meleset di area padat gedung",
    ],
  },
  {
    type: "p",
    text: "Siapkan prosedur yang jelas untuk kasus seperti ini, misalnya pengajuan koreksi absensi dengan alasan dan persetujuan atasan. Tanpa prosedur, setiap kasus diselesaikan lewat chat dan kembali tidak tercatat.",
  },
  { type: "h2", text: "Hubungkan dengan payroll" },
  {
    type: "p",
    text: "Data kehadiran lapangan paling bernilai ketika langsung mengalir ke perhitungan uang transport, tunjangan kunjungan, lembur, atau potongan keterlambatan — tanpa direkap ulang secara manual. Pastikan aturan perhitungannya sudah tertulis dan disepakati sebelum dimasukkan ke sistem, karena aturan yang kabur akan menghasilkan perhitungan yang dipertanyakan.",
  },
  { type: "h2", text: "Gunakan untuk kinerja, dengan hati-hati" },
  {
    type: "p",
    text: "Data kunjungan bisa menjadi bahan penilaian kinerja yang lebih objektif dibanding laporan lisan. Tetapi jumlah kunjungan saja tidak menggambarkan kualitas kerja. Sales yang mengunjungi lebih sedikit pelanggan bisa saja menghasilkan pesanan lebih besar. Gabungkan data kehadiran dengan hasil kerja agar penilaian tetap adil.",
  },
  { type: "h2", text: "Peran supervisor lapangan" },
  {
    type: "p",
    text: "Sistem absensi lapangan tidak menggantikan supervisor, tetapi mengubah cara mereka bekerja. Alih-alih menelepon satu per satu untuk menanyakan posisi tim, supervisor bisa melihat kunjungan yang sudah dan belum dilakukan, lalu fokus membantu anggota tim yang tertinggal atau menghadapi kendala di lokasi.",
  },
  {
    type: "p",
    text: "Supervisor juga menjadi pihak pertama yang menyetujui koreksi absensi dan menilai apakah sebuah pengecualian wajar. Karena itu, mereka perlu dilatih lebih dulu dan memahami aturan dengan baik. Supervisor yang tidak konsisten dalam menyetujui koreksi akan membuat sistem terasa tidak adil bagi tim.",
  },
  { type: "h2", text: "Metrik yang bisa dipantau" },
  {
    type: "ul",
    items: [
      "Persentase kunjungan terjadwal yang benar-benar dilakukan",
      "Rata-rata waktu tiba dibanding jadwal",
      "Jumlah koreksi absensi per periode dan alasannya",
      "Rata-rata durasi kunjungan per jenis pekerjaan",
      "Kunjungan yang dibatalkan beserta penyebabnya",
    ],
  },
  {
    type: "p",
    text: "Metrik ini paling berguna untuk memperbaiki perencanaan, bukan hanya untuk menilai individu. Jika banyak kunjungan terlambat di rute yang sama, masalahnya mungkin ada pada jadwal yang terlalu padat, bukan pada karyawannya.",
  },
  { type: "h2", text: "Perhatikan pelindungan data" },
  {
    type: "p",
    text: "Lokasi dan foto karyawan termasuk data pribadi. Batasi siapa yang bisa mengaksesnya, tetapkan berapa lama data disimpan, dan pastikan pengelolaannya sesuai ketentuan pelindungan data pribadi yang berlaku. Hindari mengumpulkan lokasi di luar jam kerja atau di luar keperluan yang sudah dijelaskan kepada karyawan.",
  },
  { type: "h2", text: "Ilustrasi: dari chat ke sistem" },
  {
    type: "p",
    text: "Bayangkan tim merchandiser yang mengunjungi puluhan toko setiap minggu. Sebelumnya, setiap orang mengirim foto ke grup, dan admin mencatat kehadiran dari riwayat chat. Foto sering tertimbun, sebagian lupa dikirim, dan uang transport dihitung berdasarkan perkiraan.",
  },
  {
    type: "p",
    text: "Setelah beralih ke check-in lewat aplikasi, setiap kunjungan tercatat dengan waktu, lokasi, foto, dan catatan kondisi display toko. Rekap kehadiran dan uang transport tersedia otomatis di akhir periode. Supervisor bisa melihat toko mana yang belum dikunjungi minggu ini tanpa menelepon satu per satu, dan admin tidak lagi menghabiskan dua hari menggulir chat.",
  },
  { type: "h2", text: "Langkah menerapkan" },
  {
    type: "ol",
    items: [
      "Tentukan data kehadiran dan kunjungan yang benar-benar dibutuhkan",
      "Tuliskan aturan perhitungan transport, tunjangan, dan lembur",
      "Susun kebijakan penggunaan data lokasi dan sosialisasikan",
      "Uji aplikasi dengan beberapa karyawan di kondisi lapangan nyata",
      "Siapkan prosedur koreksi untuk kasus tidak normal",
      "Terapkan ke seluruh tim dan hentikan laporan lewat chat",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Bagaimana mencegah manipulasi lokasi?" },
  {
    type: "p",
    text: "Tidak ada sistem yang sepenuhnya kebal manipulasi, tetapi beberapa langkah membantu: foto yang diambil langsung dari aplikasi, batas area yang wajar, dan pencocokan dengan hasil kerja. Yang sering lebih efektif adalah membangun budaya kerja berbasis hasil, sehingga manipulasi lokasi tidak memberi keuntungan berarti.",
  },
  { type: "h3", text: "Apakah karyawan harus memakai ponsel pribadi?" },
  {
    type: "p",
    text: "Banyak perusahaan memakai ponsel pribadi karyawan, tetapi keputusan ini sebaiknya disertai kebijakan yang jelas, misalnya bantuan pulsa atau kuota dan batasan data yang dikumpulkan. Untuk tim dengan kebutuhan intensif, ponsel kerja bisa menjadi pilihan yang lebih rapi.",
  },
  { type: "h3", text: "Bagaimana dengan karyawan yang bekerja di kantor dan lapangan?" },
  {
    type: "p",
    text: "Sistem sebaiknya mendukung kedua pola dalam satu data kehadiran, sehingga rekap tidak terpecah. Karyawan bisa check-in di kantor pada hari tertentu dan check-in di lokasi pelanggan pada hari lain, dengan aturan perhitungan yang mengikuti jenis harinya.",
  },
  { type: "h3", text: "Bagaimana mencatat lembur karyawan lapangan?" },
  {
    type: "p",
    text: "Lembur di lapangan sering terjadi mendadak, misalnya pekerjaan di lokasi pelanggan memakan waktu lebih lama. Sediakan cara mengajukan lembur langsung dari aplikasi, lengkap dengan alasan, lalu disetujui supervisor. Jam check-out yang tercatat menjadi pembanding untuk memverifikasi jam lembur yang diajukan. Aturan perhitungan lembur sendiri perlu mengikuti ketentuan ketenagakerjaan yang berlaku.",
  },
  { type: "h3", text: "Seberapa sering lokasi perlu direkam?" },
  {
    type: "p",
    text: "Untuk sebagian besar kebutuhan, lokasi saat check-in dan check-out setiap kunjungan sudah cukup. Pelacakan terus-menerus sepanjang hari jarang diperlukan, lebih boros baterai, dan lebih sensitif dari sisi privasi. Rekam hanya sesering yang benar-benar dibutuhkan untuk tujuan yang sudah dijelaskan kepada karyawan.",
  },
  { type: "h3", text: "Bagaimana memperkenalkan sistem ini kepada tim yang sudah lama bekerja?" },
  {
    type: "p",
    text: "Karyawan lapangan yang sudah bertahun-tahun melapor lewat chat mungkin merasa sistem baru menambah pekerjaan atau menandakan ketidakpercayaan. Mulailah dengan menjelaskan manfaat yang langsung mereka rasakan: uang transport yang dihitung lebih cepat dan tepat, tidak perlu lagi mengirim foto berulang kali, dan bukti kehadiran yang jelas jika ada perselisihan. Libatkan beberapa anggota tim yang dihormati rekan-rekannya sebagai pengguna pertama, lalu biarkan pengalaman mereka yang meyakinkan yang lain.",
  },
  { type: "h2", text: "Pilihan di AG·SORA" },
  {
    type: "p",
    text: "AG·SORA HR tersedia sebagai platform HR siap pakai untuk mengelola absensi, cuti, dan payroll. Untuk tim lapangan dengan alur kunjungan yang spesifik, aplikasi absensi dan laporan kunjungan juga bisa dibangun mengikuti cara kerja tim Anda.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Absensi karyawan lapangan tidak harus berarti menggulir riwayat chat setiap akhir bulan. Dengan mencatat data yang benar-benar dibutuhkan, memilih pendekatan yang sesuai kondisi lapangan, dan menjaga keterbukaan dengan karyawan, kehadiran tim lapangan bisa tercatat rapi — dan admin HR bisa kembali mengerjakan hal yang lebih penting.",
  },
  {
    type: "cta",
    title: "Masih merekap absensi dari riwayat chat?",
    text: "Lihat bagaimana AG·SORA HR membantu mengelola kehadiran dan payroll tim Anda dalam satu tempat.",
    href: "/products#hr",
    label: "Lihat AG·SORA HR",
  },
];

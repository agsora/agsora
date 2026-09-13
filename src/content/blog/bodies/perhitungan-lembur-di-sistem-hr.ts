import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Karyawan gudang komplain slip gajinya kurang dibanding bulan lalu, padahal ia merasa lembur lebih banyak. HR mengecek catatan manual dari kepala shift, yang ternyata cuma coretan di buku dengan tulisan yang setengah tidak terbaca. Setelah dihitung ulang manual selama satu jam, ternyata memang ada kesalahan — tapi kepercayaan karyawan terhadap sistem penggajian sudah terlanjur goyah.",
  },
  {
    type: "p",
    text: "Lembur adalah salah satu komponen gaji yang paling sering menimbulkan pertanyaan dan ketidakpuasan karyawan. Karyawan ingin memastikan setiap jam kerja tambahan mereka dihargai dengan benar dan adil, sementara perusahaan perlu memastikan perhitungannya sesuai aturan yang berlaku sekaligus tetap terkendali dari sisi anggaran. Ketika dihitung secara manual, selisih kecil sangat mudah terjadi dan sering sulit dijelaskan secara meyakinkan.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Pahami ketentuan lembur yang berlaku sebagai dasar sebelum menyusun aturan di sistem",
      "Rapikan kebijakan internal perusahaan sebelum diterjemahkan menjadi rumus otomatis",
      "Wajibkan pengajuan dan persetujuan lembur sebelum dikerjakan, bukan sesudahnya",
      "Hubungkan perhitungan lembur langsung dengan data kehadiran yang tercatat sistem",
      "Uji perhitungan secara paralel dengan cara lama sebelum sepenuhnya diandalkan",
    ],
  },
  { type: "h2", text: "Kenapa perhitungan lembur rawan kesalahan" },
  {
    type: "p",
    text: "Lembur melibatkan banyak variabel sekaligus: jam kerja normal, jam lembur hari kerja, jam lembur hari libur, komponen upah yang menjadi dasar perhitungan, dan kadang aturan khusus untuk shift tertentu. Ketika semua variabel ini dihitung manual dengan kalkulator atau spreadsheet sederhana, peluang kesalahan sangat besar — terutama untuk perusahaan dengan banyak karyawan dan pola kerja yang bervariasi.",
  },
  { type: "h2", text: "Pahami aturan yang berlaku" },
  {
    type: "p",
    text: "Ketentuan waktu kerja lembur dan upahnya di Indonesia diatur dalam peraturan ketenagakerjaan, termasuk Peraturan Pemerintah Nomor 35 Tahun 2021. Aturan ini mencakup hal-hal seperti batas maksimal jam lembur yang diperbolehkan dan cara menghitung upah lembur berdasarkan komponen gaji tertentu. Karena regulasi dapat berubah dan penerapannya bisa bergantung pada kondisi spesifik perusahaan, susun aturan perhitungan di sistem berdasarkan ketentuan yang paling terbaru, dan sebaiknya konsultasikan dengan pihak yang memahami hukum ketenagakerjaan secara mendalam.",
  },
  { type: "h2", text: "Rapikan kebijakan internal lebih dulu" },
  {
    type: "ul",
    items: [
      "Siapa saja yang berhak menerima upah lembur sesuai posisi dan levelnya",
      "Bagaimana proses pengajuan dan persetujuan lembur dilakukan",
      "Perbedaan perhitungan lembur di hari kerja biasa dan di hari libur",
      "Komponen upah apa saja yang menjadi dasar perhitungan lembur",
      "Batas maksimal jam lembur yang diperbolehkan per hari dan per minggu",
    ],
  },
  {
    type: "p",
    text: "Kebijakan yang belum benar-benar jelas dituliskan di atas kertas akan menghasilkan rumus perhitungan yang salah begitu diterjemahkan ke dalam sistem — sistem hanya sebaik aturan yang dimasukkan ke dalamnya.",
  },
  {
    type: "callout",
    title: "Lembur disetujui sebelum dikerjakan, bukan sesudahnya",
    text: "Sistem yang mewajibkan pengajuan dan persetujuan lembur sebelum benar-benar dikerjakan membantu mengendalikan biaya lembur secara proaktif, sekaligus mencegah perselisihan tentang jam lembur yang ternyata tidak pernah disetujui atasan sejak awal.",
  },
  { type: "h2", text: "Hubungkan dengan data kehadiran" },
  {
    type: "p",
    text: "Perhitungan lembur paling akurat ketika mengambil data langsung dari sistem kehadiran yang tercatat otomatis, bukan dari rekap manual yang rawan kesalahan. Sistem dapat membandingkan jam lembur yang sudah disetujui sebelumnya dengan jam kerja aktual yang benar-benar tercatat, memastikan tidak ada kelebihan atau kekurangan perhitungan yang tidak sesuai kenyataan di lapangan.",
  },
  { type: "h2", text: "Uji dengan data nyata sebelum diandalkan penuh" },
  {
    type: "p",
    text: "Sebelum benar-benar dipakai untuk perhitungan penggajian resmi, jalankan perhitungan lembur di sistem secara paralel dengan cara lama untuk satu atau dua periode gaji penuh. Periksa dengan teliti kasus-kasus khusus seperti shift malam, lembur yang jatuh di hari libur, dan karyawan yang berpindah pola jadwal kerja. Setiap perbedaan hasil antara sistem baru dan perhitungan manual lama harus bisa dijelaskan dengan pasti sebelum sistem baru dipakai sepenuhnya untuk penggajian resmi.",
  },
  { type: "h2", text: "Ilustrasi: menemukan kesalahan sebelum berdampak" },
  {
    type: "p",
    text: "Bayangkan sebuah pabrik yang mulai menerapkan sistem perhitungan lembur otomatis. Selama masa uji paralel, tim HR menemukan bahwa perhitungan untuk karyawan shift malam yang lemburnya melewati tengah malam menghasilkan angka yang berbeda dari perhitungan manual sebelumnya — ternyata aturan tentang bagaimana lembur lintas hari dihitung belum sepenuhnya dikonfigurasi dengan benar di sistem.",
  },
  {
    type: "p",
    text: "Karena masalah ini ditemukan selama masa uji paralel, bukan setelah slip gaji resmi diterbitkan, tim HR punya waktu memperbaiki konfigurasi sebelum berdampak pada karyawan mana pun. Jika kesalahan ini baru ditemukan setelah slip gaji sudah dibagikan, dampaknya terhadap kepercayaan karyawan akan jauh lebih besar dan sulit diperbaiki.",
  },
  { type: "h2", text: "Tampilkan rincian kepada karyawan" },
  {
    type: "p",
    text: "Slip gaji yang menampilkan rincian jam dan nilai lembur secara jelas dan transparan mengurangi pertanyaan berulang dari karyawan dan membangun kepercayaan terhadap sistem penggajian. Karyawan bisa memeriksa sendiri apakah jam lembur mereka sudah dihitung dengan benar, dan jika memang ada kesalahan, bisa lebih cepat ditemukan dan diperbaiki sebelum menjadi masalah yang lebih besar.",
  },
  { type: "h2", text: "Menangani perubahan aturan lembur di masa depan" },
  {
    type: "p",
    text: "Kebijakan perusahaan atau ketentuan regulasi terkait lembur bisa berubah seiring waktu. Pastikan sistem yang dipakai cukup fleksibel untuk menyesuaikan perubahan aturan tanpa harus membangun ulang seluruh logika perhitungan dari awal, dan tetapkan proses untuk meninjau kembali konfigurasi lembur secara berkala agar tetap sesuai dengan aturan yang berlaku saat itu.",
  },
  { type: "h2", text: "Langkah menyiapkan perhitungan lembur yang akurat" },
  {
    type: "ol",
    items: [
      "Pahami dan pastikan mengikuti ketentuan ketenagakerjaan yang berlaku terkini",
      "Rapikan dan dokumentasikan kebijakan lembur internal perusahaan",
      "Terapkan alur pengajuan dan persetujuan lembur sebelum dikerjakan",
      "Hubungkan perhitungan lembur dengan data kehadiran yang tercatat sistem",
      "Jalankan uji paralel dengan cara lama sebelum sepenuhnya diandalkan",
      "Tampilkan rincian perhitungan yang transparan di slip gaji karyawan",
    ],
  },
  { type: "h2", text: "Kesalahan umum saat menerapkan sistem lembur otomatis" },
  {
    type: "p",
    text: "Salah satu kesalahan yang paling sering terjadi adalah memindahkan kebijakan lama yang sebenarnya sudah usang ke dalam sistem baru tanpa meninjaunya kembali terlebih dahulu. Banyak perusahaan memiliki kebiasaan lembur yang berjalan bertahun-tahun tanpa pernah didokumentasikan ulang, sehingga ketika tim IT atau vendor sistem meminta “aturan lembur yang berlaku”, yang diberikan justru campuran antara kebijakan resmi lama dan kebiasaan tidak tertulis yang berkembang di lapangan. Hasilnya adalah rumus yang secara teknis berjalan dengan benar, tetapi tidak benar-benar mencerminkan apa yang seharusnya diterima karyawan.",
  },
  {
    type: "p",
    text: "Kesalahan kedua adalah terburu-buru mematikan sistem lama sebelum sistem baru benar-benar teruji. Tekanan untuk segera “go live” sering membuat masa uji paralel dipersingkat atau bahkan dilewati sama sekali, padahal justru di masa itulah sebagian besar kesalahan konfigurasi ditemukan. Kesalahan ketiga adalah tidak melibatkan perwakilan karyawan atau serikat pekerja saat menyusun ulang kebijakan lembur, padahal merekalah yang paling memahami pola kerja nyata di lapangan dan bisa membantu mengenali skenario yang mungkin terlewat oleh tim HR maupun tim IT.",
  },
  { type: "h2", text: "Menangani kasus khusus: shift bergilir dan karyawan paruh waktu" },
  {
    type: "p",
    text: "Karyawan dengan shift bergilir sering menjadi sumber kerumitan tersendiri karena jam kerja normal mereka bisa berbeda setiap minggu, sehingga definisi “jam lembur” pun ikut bergeser tergantung jadwal shift yang berlaku saat itu. Sistem yang hanya mengenal satu pola jam kerja tetap untuk seluruh karyawan akan salah menghitung lembur bagi kelompok ini. Pastikan sistem mampu mengenali jadwal shift masing-masing karyawan secara individual, bukan menyamaratakan semua orang dengan satu jam kerja normal yang sama.",
  },
  {
    type: "p",
    text: "Karyawan paruh waktu juga memerlukan perhatian khusus. Ada perusahaan yang menghitung lembur paruh waktu berdasarkan jam kerja normal penuh waktu, padahal jam kerja normal karyawan tersebut sebenarnya lebih pendek — sehingga jam kerja yang sebenarnya sudah melebihi kontrak paruh waktunya belum tentu terhitung sebagai lembur oleh sistem jika acuannya keliru. Tinjau kembali bagaimana kontrak kerja paruh waktu mendefinisikan jam kerja normal, dan pastikan definisi itulah yang menjadi dasar perhitungan lembur di sistem, bukan asumsi umum yang berlaku untuk karyawan tetap.",
  },
  { type: "h2", text: "Melibatkan atasan langsung dalam proses persetujuan" },
  {
    type: "p",
    text: "Atasan langsung memiliki posisi penting dalam sistem lembur karena merekalah yang paling memahami apakah pekerjaan tambahan tersebut benar-benar dibutuhkan atau sekadar kebiasaan yang berulang tanpa alasan jelas. Sistem persetujuan berjenjang yang melibatkan atasan langsung sebelum lembur disetujui membantu menyaring pengajuan yang tidak perlu, sekaligus memberi kesempatan bagi atasan untuk mempertimbangkan alternatif lain, seperti mengatur ulang pembagian tugas di dalam tim, sebelum benar-benar menyetujui tambahan jam kerja.",
  },
  {
    type: "p",
    text: "Namun, proses persetujuan yang terlalu berbelit juga bisa menjadi masalah tersendiri — jika atasan sulit dihubungi atau lambat merespons, karyawan yang sudah terlanjur bekerja lembur akhirnya tetap melakukannya tanpa persetujuan resmi karena kebutuhan operasional mendesak. Pastikan proses persetujuan cukup cepat dan sederhana untuk dijalankan, misalnya melalui notifikasi di ponsel yang bisa disetujui dalam hitungan menit, sehingga alur formal ini tidak malah menjadi hambatan yang membuat karyawan mengabaikannya.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah aturan lembur sama untuk semua jenis industri?" },
  {
    type: "p",
    text: "Ketentuan dasar dalam regulasi ketenagakerjaan berlaku umum, tetapi beberapa sektor tertentu bisa memiliki ketentuan khusus tambahan. Selalu periksa apakah ada ketentuan sektoral yang relevan dengan industri bisnis Anda.",
  },
  { type: "h3", text: "Bagaimana menangani karyawan yang sering lembur tanpa pengajuan resmi?" },
  {
    type: "p",
    text: "Ini menunjukkan perlunya sosialisasi ulang tentang prosedur pengajuan lembur, dan kemungkinan perlu ditinjau apakah beban kerja karyawan tersebut memang membutuhkan penyesuaian jadwal atau penambahan tenaga kerja, alih-alih terus mengandalkan lembur yang tidak tercatat resmi.",
  },
  { type: "h3", text: "Apakah lembur bisa diganti dengan hari libur pengganti, bukan uang?" },
  {
    type: "p",
    text: "Tergantung pada kebijakan internal perusahaan dan ketentuan yang berlaku, sebagian perusahaan memang menawarkan opsi ini sebagai alternatif selain pembayaran tunai. Jika opsi ini diterapkan, pastikan sistem mampu mencatat saldo hari libur pengganti secara terpisah dari cuti tahunan biasa, agar tidak tercampur dan membingungkan karyawan maupun tim HR saat menghitung sisa hak cuti.",
  },
  { type: "h3", text: "Apa yang harus dilakukan jika kesalahan perhitungan baru ditemukan setelah slip gaji dibagikan?" },
  {
    type: "p",
    text: "Segera informasikan kepada karyawan yang terdampak secara transparan begitu kesalahan ditemukan, jelaskan penyebabnya, dan lakukan koreksi pada periode gaji berikutnya atau melalui pembayaran susulan jika nilainya cukup signifikan. Menunda atau menutupi kesalahan semacam ini jauh lebih merusak kepercayaan karyawan dibanding kesalahan itu sendiri, karena karyawan biasanya bisa memaklumi kekeliruan teknis selama ditangani secara jujur dan cepat.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Perhitungan lembur yang akurat dan transparan bukan hanya soal kepatuhan terhadap regulasi, melainkan juga soal menjaga kepercayaan karyawan terhadap keadilan sistem penggajian perusahaan. Dengan kebijakan yang jelas, alur persetujuan yang tertib, dan pengujian yang teliti sebelum diterapkan penuh, perhitungan lembur bisa menjadi proses yang bisa diandalkan oleh kedua belah pihak.",
  },
  {
    type: "cta",
    title: "Masih menghitung lembur karyawan dengan kalkulator manual?",
    text: "AG·SORA HR membantu menghitung lembur secara otomatis, terhubung langsung dengan data kehadiran.",
    href: "/products#hr",
    label: "Lihat AG·SORA HR",
  },
];

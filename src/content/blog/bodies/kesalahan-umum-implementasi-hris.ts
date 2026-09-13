import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Tanggal gajian. Grup WhatsApp kantor ramai. Seorang karyawan bertanya kenapa lemburnya tidak terhitung, yang lain bertanya kenapa potongannya berbeda dari bulan lalu. Tim HR baru saja beralih ke sistem baru yang katanya akan membuat semuanya otomatis. Hari itu, tidak ada yang terasa otomatis.",
  },
  {
    type: "p",
    text: "HRIS menyentuh hal yang paling sensitif bagi karyawan: kehadiran, gaji, dan penilaian kinerja. Karena itu, kesalahan penerapan tidak hanya merepotkan tim HR, tetapi juga cepat menurunkan kepercayaan seluruh perusahaan terhadap sistem baru. Kabar baiknya, sebagian besar kesalahan itu bisa diprediksi dan dicegah. Berikut kesalahan yang paling sering terjadi, beserta cara menghindarinya.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Rapikan kebijakan HR sebelum menerjemahkannya ke sistem",
      "Rancang sistem untuk semua jenis karyawan, bukan hanya staf kantor",
      "Mulai dari data karyawan dan absensi, bukan dari payroll",
      "Jalankan sistem lama dan baru secara paralel sebelum beralih penuh",
      "Perlakukan pelatihan dan pelindungan data sebagai bagian inti project",
    ],
  },
  { type: "h2", text: "Kesalahan 1: Menyalin aturan yang belum jelas" },
  {
    type: "p",
    text: "Banyak perusahaan baru menyadari saat menerapkan HRIS bahwa aturan cuti, lembur, atau tunjangan mereka tidak pernah tertulis rapi. Yang ada adalah kebiasaan, pengecualian, dan kesepakatan lisan yang berbeda antar atasan. Sistem, di sisi lain, membutuhkan aturan yang tegas dan konsisten.",
  },
  {
    type: "p",
    text: "Memindahkan kondisi yang kabur ke dalam sistem hanya akan membuat aturan yang tidak jelas menjadi kaku dan keliru. Karyawan yang dulu mendapat pengecualian tiba-tiba kehilangan haknya, atau sebaliknya, sistem memberikan hak yang sebenarnya tidak pernah dimaksudkan. Keduanya memicu keluhan.",
  },
  {
    type: "callout",
    title: "Kebijakan dulu, sistem kemudian",
    text: "Sebelum konfigurasi dimulai, tuliskan kebijakan HR yang berlaku dan minta pihak terkait menyepakatinya. Proses ini sering memunculkan perbedaan tafsir yang selama ini tidak terlihat — dan jauh lebih murah diselesaikan di atas kertas daripada di slip gaji.",
  },
  { type: "h2", text: "Kesalahan 2: Mengabaikan pengecualian yang nyata" },
  {
    type: "p",
    text: "Selalu ada kasus yang tidak standar: karyawan shift, staf lapangan tanpa jam kerja tetap, tim yang bekerja lintas hari, karyawan paruh waktu, atau pekerja kontrak dengan skema berbeda. Jika sistem hanya dirancang untuk karyawan kantor yang bekerja pukul sembilan sampai lima, sebagian karyawan akan kembali dicatat manual.",
  },
  {
    type: "p",
    text: "Hasilnya, perusahaan memiliki dua sistem sekaligus: HRIS untuk sebagian karyawan dan spreadsheet untuk sisanya. Pekerjaan administrasi tidak berkurang, bahkan bertambah karena kedua sumber harus disatukan setiap periode penggajian.",
  },
  {
    type: "ul",
    items: [
      "Karyawan dengan pola shift bergilir atau shift malam",
      "Tim lapangan yang absen dari lokasi berbeda-beda",
      "Karyawan paruh waktu dengan perhitungan per jam",
      "Pekerja kontrak dengan komponen gaji berbeda",
      "Karyawan yang berpindah divisi atau lokasi di tengah periode",
    ],
  },
  { type: "h2", text: "Kesalahan 3: Memulai dari payroll" },
  {
    type: "p",
    text: "Payroll adalah modul yang paling tidak memaafkan kesalahan. Salah hitung absensi mungkin masih bisa dikoreksi diam-diam, tetapi salah hitung gaji langsung terasa oleh karyawan dan bisa berdampak pada kepercayaan. Memulai penerapan dari payroll berarti menempatkan risiko tertinggi di masa ketika tim paling belum terbiasa dengan sistem.",
  },
  {
    type: "p",
    text: "Urutan yang lebih aman adalah membangun fondasi terlebih dahulu: data karyawan yang bersih, struktur organisasi, jadwal kerja, dan absensi. Setelah data kehadiran terbukti akurat selama beberapa periode, perhitungan payroll bisa dibangun di atasnya dengan jauh lebih percaya diri.",
  },
  {
    type: "ol",
    items: [
      "Data karyawan dan struktur organisasi",
      "Jadwal kerja dan pola shift",
      "Absensi, cuti, dan izin",
      "Lembur beserta alur persetujuannya",
      "Payroll dan slip gaji",
      "Penilaian kinerja dan fitur lanjutan",
    ],
  },
  { type: "h2", text: "Kesalahan 4: Menganggap pelatihan sebagai formalitas" },
  {
    type: "p",
    text: "Pengguna HRIS bukan hanya tim HR, melainkan seluruh karyawan. Jika cara mengajukan cuti terasa membingungkan, karyawan akan kembali mengirim pesan ke atasan seperti biasa. Atasan menyetujui lewat chat, dan data di sistem tidak pernah mencerminkan kenyataan.",
  },
  {
    type: "p",
    text: "Pelatihan satu kali di awal jarang cukup. Siapkan panduan singkat untuk setiap jenis pengguna, sediakan tempat bertanya selama minggu-minggu pertama, dan tunjuk beberapa orang di setiap divisi yang lebih dulu dilatih agar bisa membantu rekan-rekannya.",
  },
  { type: "h2", text: "Kesalahan 5: Langsung beralih tanpa masa paralel" },
  {
    type: "p",
    text: "Mematikan cara lama di hari yang sama saat sistem baru mulai dipakai terasa efisien, tetapi sangat berisiko. Jika ada kesalahan konfigurasi, tidak ada pembanding untuk mendeteksinya sebelum berdampak pada karyawan.",
  },
  {
    type: "callout",
    title: "Jalankan paralel sebelum beralih penuh",
    text: "Untuk satu atau dua siklus gaji, jalankan perhitungan di sistem lama dan baru secara bersamaan, lalu bandingkan hasilnya per karyawan. Ini cara paling murah menemukan selisih sebelum sampai ke slip gaji.",
  },
  { type: "h2", text: "Kesalahan 6: Melupakan siapa pemilik data" },
  {
    type: "p",
    text: "Data karyawan termasuk data pribadi: nomor identitas, rekening, gaji, bahkan informasi kesehatan. Di Indonesia, pengelolaannya diatur dalam Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi. Pastikan sejak awal siapa yang boleh mengakses data apa, di mana data disimpan, dan bagaimana prosedurnya ketika karyawan meminta koreksi.",
  },
  {
    type: "p",
    text: "Hak akses yang dirancang di awal jauh lebih mudah diterapkan daripada dirapikan setelah sistem berjalan dan semua orang terlanjur memiliki akses luas. Batasi data gaji hanya pada pihak yang mengurus penggajian, dan pastikan atasan hanya melihat data timnya sendiri.",
  },
  { type: "h2", text: "Kesalahan 7: Tidak mengukur keberhasilan" },
  {
    type: "p",
    text: "Tanpa ukuran yang jelas, sulit menilai apakah HRIS benar-benar membantu. Catat kondisi sebelum penerapan: berapa lama proses penggajian, berapa banyak pertanyaan rutin yang masuk ke HR, dan seberapa sering terjadi koreksi gaji. Bandingkan dengan kondisi setelah beberapa bulan berjalan.",
  },
  { type: "h2", text: "Peran setiap pihak dalam project HRIS" },
  {
    type: "p",
    text: "Salah satu penyebab penerapan HRIS tersendat adalah anggapan bahwa project ini urusan tim HR saja, atau urusan tim IT saja. Kenyataannya, HRIS menyentuh hampir semua orang di perusahaan, dan setiap pihak punya peran yang tidak bisa digantikan.",
  },
  { type: "h3", text: "Tim HR" },
  {
    type: "p",
    text: "HR adalah pemilik proses. Mereka yang paling memahami kebijakan, pengecualian, dan kebutuhan laporan. Tugas utamanya adalah memastikan aturan yang dimasukkan ke sistem benar, data karyawan akurat, dan hasil perhitungan diverifikasi sebelum dipakai.",
  },
  { type: "h3", text: "Atasan dan kepala divisi" },
  {
    type: "p",
    text: "Atasan menyetujui cuti, lembur, dan penilaian kinerja. Jika mereka tetap menyetujui lewat chat dan tidak memakai sistem, alur persetujuan di HRIS tidak akan pernah berjalan. Libatkan mereka sejak awal dan pastikan mereka memahami perannya.",
  },
  { type: "h3", text: "Tim IT atau vendor" },
  {
    type: "p",
    text: "IT atau vendor bertanggung jawab atas konfigurasi, integrasi dengan sistem lain, keamanan, dan hak akses. Mereka membutuhkan kebijakan yang jelas dari HR; tanpa itu, mereka terpaksa menebak, dan tebakan dalam urusan gaji hampir selalu berujung masalah.",
  },
  { type: "h3", text: "Manajemen" },
  {
    type: "p",
    text: "Manajemen memutuskan kebijakan yang masih diperdebatkan, menyediakan waktu bagi tim untuk terlibat, dan memberi sinyal bahwa sistem baru adalah cara kerja resmi. Tanpa dukungan yang terlihat dari atas, sebagian karyawan akan menganggap sistem baru bersifat opsional.",
  },
  { type: "h2", text: "Pertanyaan yang perlu diajukan ke penyedia HRIS" },
  {
    type: "ol",
    items: [
      "Bagaimana sistem menangani karyawan shift, lapangan, dan paruh waktu?",
      "Bisakah aturan lembur dan tunjangan disesuaikan dengan kebijakan kami?",
      "Bagaimana data kehadiran dari lokasi berbeda dikumpulkan?",
      "Bagaimana hak akses data gaji dan data pribadi diatur?",
      "Apakah karyawan bisa mengakses layanan mandiri dari ponsel?",
      "Bagaimana data diekspor jika kami berpindah sistem?",
      "Seperti apa dukungan yang tersedia saat periode penggajian?",
    ],
  },
  { type: "h2", text: "Integrasi HRIS dengan sistem lain" },
  {
    type: "p",
    text: "HRIS jarang berdiri sendiri. Data kehadiran mungkin berasal dari mesin absensi atau aplikasi ponsel, hasil payroll perlu diteruskan ke bank untuk pembayaran gaji, dan biaya gaji harus tercatat di sistem akuntansi. Setiap titik sambungan ini perlu direncanakan, karena di situlah data paling sering tidak cocok.",
  },
  {
    type: "ul",
    items: [
      "Sumber data kehadiran: mesin absensi, aplikasi ponsel, atau keduanya",
      "Format file atau koneksi untuk pembayaran gaji melalui bank",
      "Pencatatan biaya gaji ke sistem akuntansi atau ERP",
      "Data karyawan yang dipakai sistem lain, seperti hak akses aplikasi",
    ],
  },
  {
    type: "p",
    text: "Sebelum memilih sistem, daftar semua sambungan yang dibutuhkan dan tanyakan secara spesifik bagaimana setiap sambungan akan ditangani. Integrasi yang baru dipikirkan setelah sistem berjalan hampir selalu lebih mahal dan lebih lambat.",
  },
  { type: "h2", text: "Berapa lama penerapan HRIS?" },
  {
    type: "p",
    text: "Tidak ada durasi yang berlaku untuk semua perusahaan. Waktu penerapan dipengaruhi oleh jumlah karyawan, keragaman pola kerja, kerapian kebijakan yang sudah ada, kondisi data karyawan, dan jumlah integrasi. Perusahaan dengan kebijakan yang sudah tertulis rapi dan data yang bersih biasanya bisa bergerak jauh lebih cepat. Karena itu, pekerjaan merapikan kebijakan dan data di awal bukan pemborosan waktu — justru itulah yang paling mempercepat seluruh project.",
  },
  { type: "h2", text: "Mengomunikasikan perubahan ke karyawan" },
  {
    type: "p",
    text: "Karyawan sering curiga ketika sistem absensi dan gaji diganti. Apakah perhitungan akan berubah? Apakah mereka akan diawasi lebih ketat? Kekhawatiran ini wajar dan sebaiknya dijawab langsung, bukan dibiarkan menjadi rumor. Jelaskan apa yang berubah, apa yang tidak berubah, kapan perubahan berlaku, dan ke mana mereka bisa bertanya.",
  },
  {
    type: "p",
    text: "Tunjukkan juga manfaat bagi karyawan sendiri: bisa melihat sisa cuti kapan saja, mengunduh slip gaji tanpa meminta ke HR, dan mengajukan izin tanpa harus menunggu atasan di kantor. Perubahan lebih mudah diterima ketika orang melihat apa yang mereka dapatkan.",
  },
  { type: "h2", text: "Tanda penerapan HRIS berjalan di jalur yang benar" },
  {
    type: "ul",
    items: [
      "Karyawan mengajukan cuti dan izin lewat sistem tanpa diingatkan",
      "Tidak ada lagi rekap absensi paralel di spreadsheet",
      "Pertanyaan rutin ke HR berkurang karena karyawan bisa melihat datanya sendiri",
      "Koreksi gaji semakin jarang dari periode ke periode",
      "Laporan kehadiran bisa dibuat kapan saja tanpa persiapan khusus",
    ],
  },
  { type: "h2", text: "Checklist sebelum go-live" },
  {
    type: "ol",
    items: [
      "Kebijakan HR tertulis dan disepakati",
      "Semua jenis karyawan dan pola kerja sudah terakomodasi",
      "Data karyawan dibersihkan dan diverifikasi",
      "Hak akses ditetapkan per peran",
      "Pelatihan untuk HR, atasan, dan karyawan sudah dilakukan",
      "Rencana masa paralel dan pembandingan hasil sudah disiapkan",
    ],
  },
  { type: "h2", text: "Pilihan di AG·SORA" },
  {
    type: "p",
    text: "Bagi perusahaan dengan kebutuhan HR yang relatif umum, AG·SORA HR tersedia sebagai platform siap pakai. Untuk organisasi dengan pola kerja yang kompleks — banyak shift, tim lapangan, atau aturan tunjangan khusus — sistem HRIS bisa dirancang mengikuti kebijakan Anda. Apa pun pilihannya, urutan penerapan dan persiapan di atas tetap berlaku.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "HRIS yang berhasil tidak diukur dari banyaknya fitur, tetapi dari seberapa sedikit keluhan di hari gajian dan seberapa jarang tim HR harus merapikan data secara manual. Siapkan kebijakan, mulai dari fondasi, uji secara paralel, dan libatkan karyawan. Sistemnya akan mengikuti.",
  },
  {
    type: "cta",
    title: "Ingin hari gajian tanpa drama?",
    text: "Pelajari bagaimana AG·SORA HR membantu mengelola absensi, cuti, dan payroll dalam satu tempat — atau diskusikan kebutuhan HR yang lebih khusus bersama tim kami.",
    href: "/products",
    label: "Lihat AG·SORA HR",
  },
];

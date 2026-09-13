import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Sekolah membeli sistem informasi lengkap tahun lalu — modul nilai, absensi, keuangan, semuanya ada. Bulan pertama semester baru, guru-guru bersemangat memakainya. Bulan ketiga, sebagian besar wali kelas sudah kembali mencatat kehadiran di buku, karena mengisi di aplikasi katanya “ribet dan makan waktu di sela mengajar”.",
  },
  {
    type: "p",
    text: "Sekolah mengelola banyak data: siswa, kelas, jadwal, nilai, kehadiran, dan pembayaran. Sistem informasi sekolah menjanjikan semua itu rapi dalam satu tempat. Tetapi cukup sering sistem yang sudah dibeli dengan biaya tidak sedikit akhirnya hanya dipakai sebagian, sementara guru kembali ke buku dan spreadsheet karena sistemnya tidak dirancang dari sudut pandang mereka yang sesungguhnya sibuk mengajar.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Guru adalah pengisi data terbanyak — rancang sistem dari beban kerja mereka lebih dulu",
      "Kurangi input berulang dengan data yang saling terhubung otomatis",
      "Uji sistem bersama guru sungguhan, bukan hanya demo ke pimpinan sekolah",
      "Data siswa adalah data pribadi anak yang perlu perlindungan ketat",
      "Terapkan mengikuti kalender akademik, idealnya di masa libur sebelum tahun ajaran baru",
    ],
  },
  { type: "h2", text: "Kenapa sistem sekolah sering gagal dipakai konsisten" },
  {
    type: "p",
    text: "Berbeda dengan sistem bisnis di mana pengguna utamanya adalah karyawan administratif, pengguna utama sistem sekolah sehari-hari adalah guru — orang yang tugas utamanya mengajar, bukan mengoperasikan aplikasi. Setiap menit yang dihabiskan berjuang dengan antarmuka yang rumit adalah menit yang diambil dari waktu mempersiapkan pelajaran atau berinteraksi dengan siswa.",
  },
  {
    type: "p",
    text: "Ketika sistem dirancang tanpa mempertimbangkan kondisi ini — guru mengajar berpindah kelas, waktu istirahat yang singkat, dan kesibukan menjelang jam pelajaran dimulai — adopsi akan gagal meski fiturnya lengkap secara teknis.",
  },
  { type: "h2", text: "Sistem gagal di beban guru, bukan di fiturnya" },
  {
    type: "p",
    text: "Guru adalah pengisi data terbanyak: kehadiran setiap pertemuan pelajaran, nilai tugas dan ujian, dan catatan perkembangan siswa. Jika mengisi data di sistem memakan waktu lebih lama daripada mencatat di buku — karena terlalu banyak klik, halaman yang lambat, atau alur yang membingungkan — guru akan menunda, lalu berhenti sama sekali, dan data menjadi tidak lengkap.",
  },
  {
    type: "p",
    text: "Rancang sistem dari sudut pandang guru terlebih dahulu: berapa detik yang dibutuhkan untuk mencatat kehadiran satu kelas? Berapa langkah untuk memasukkan nilai satu tugas untuk tiga puluh siswa? Pertanyaan sederhana seperti ini lebih menentukan keberhasilan adopsi dibanding daftar fitur yang panjang.",
  },
  { type: "h2", text: "Kebutuhan yang biasanya utama" },
  {
    type: "ul",
    items: [
      "Data induk siswa dan pembagian kelas yang akurat setiap tahun ajaran",
      "Jadwal pelajaran dan pengajar yang mudah diperbarui",
      "Kehadiran siswa yang bisa diisi cepat, idealnya dalam hitungan detik per kelas",
      "Nilai dan penyusunan rapor yang otomatis terhitung sesuai bobot",
      "Tagihan dan pembayaran biaya pendidikan yang transparan bagi orang tua",
      "Informasi untuk orang tua tentang perkembangan anak",
    ],
  },
  { type: "h2", text: "Kurangi input berulang" },
  {
    type: "p",
    text: "Data yang sudah ada tidak perlu diketik ulang di tempat lain. Daftar siswa per kelas seharusnya otomatis muncul saat guru mengisi kehadiran, bukan diketik manual setiap kali. Nilai yang sudah diinput di satu modul langsung terhitung ke rapor sesuai bobot yang ditetapkan, tanpa guru harus menyalin angka dari satu tempat ke tempat lain.",
  },
  {
    type: "p",
    text: "Prinsip ini — data diinput satu kali dan dipakai di banyak tempat — adalah salah satu faktor paling menentukan apakah guru akan terus memakai sistem atau menyerah kembali ke cara manual.",
  },
  {
    type: "callout",
    title: "Uji dengan guru, bukan hanya dengan pimpinan",
    text: "Demo kepada kepala sekolah atau yayasan menunjukkan fitur yang tersedia di atas kertas. Uji coba bersama beberapa guru sungguhan, di tengah jadwal mengajar yang padat, menunjukkan apakah sistem benar-benar bisa dipakai dalam kondisi nyata — bukan hanya dalam kondisi ideal saat demo berlangsung tenang di ruang rapat.",
  },
  { type: "h2", text: "Komunikasi dengan orang tua" },
  {
    type: "p",
    text: "Portal atau notifikasi untuk orang tua — kehadiran, nilai, dan tagihan — mengurangi pertanyaan berulang ke wali kelas dan bagian administrasi sekolah. Orang tua bisa memantau perkembangan anak tanpa harus menunggu pertemuan orang tua atau menghubungi sekolah secara langsung untuk hal-hal rutin.",
  },
  {
    type: "p",
    text: "Pastikan informasi yang dibagikan kepada orang tua sudah diverifikasi sebelum ditampilkan — nilai yang belum final atau catatan yang masih perlu diklarifikasi sebaiknya tidak langsung terlihat, untuk menghindari kesalahpahaman yang tidak perlu.",
  },
  { type: "h2", text: "Jaga data anak dengan ketat" },
  {
    type: "p",
    text: "Data siswa adalah data pribadi anak yang perlu dijaga dengan standar keamanan yang tinggi. Batasi akses sesuai peran — guru hanya melihat kelas yang diajarnya, wali kelas melihat kelasnya sendiri — dan jangan tampilkan data siswa lain kepada orang tua yang mengakses portal. Pastikan pengelolaan data ini sesuai ketentuan pelindungan data pribadi yang berlaku, mengingat data anak termasuk kategori yang perlu perhatian ekstra.",
  },
  { type: "h2", text: "Ilustrasi: dua sekolah, dua hasil" },
  {
    type: "p",
    text: "Bayangkan dua sekolah menengah yang sama-sama menerapkan sistem informasi baru. Sekolah pertama langsung meluncurkan sistem lengkap dengan semua modul di awal semester, tanpa uji coba bersama guru terlebih dahulu. Guru kewalahan mempelajari sistem sambil tetap mengajar, dan dalam sebulan sebagian besar kembali ke kebiasaan lama.",
  },
  {
    type: "p",
    text: "Sekolah kedua menguji modul kehadiran terlebih dahulu bersama lima guru selama dua minggu di masa persiapan sebelum tahun ajaran dimulai, memperbaiki alur berdasarkan masukan mereka, lalu meluncurkan ke seluruh guru dengan modul yang sudah terbukti mudah dipakai. Modul nilai dan rapor menyusul di semester berikutnya setelah kebiasaan mencatat kehadiran digital sudah terbentuk.",
  },
  { type: "h2", text: "Terapkan mengikuti kalender akademik" },
  {
    type: "p",
    text: "Waktu penerapan sangat berpengaruh terhadap keberhasilan adopsi. Memulai sistem di tengah semester, saat guru sedang sibuk dengan penilaian atau ujian, hampir selalu sulit diterima dan mudah ditolak karena dianggap menambah beban di waktu yang tidak tepat. Persiapan di masa libur dan penerapan bertahap di awal tahun ajaran baru memberi ruang yang cukup untuk pelatihan dan penyesuaian tanpa tekanan waktu yang berlebihan.",
  },
  { type: "h2", text: "Melibatkan siswa untuk jenjang tertentu" },
  {
    type: "p",
    text: "Untuk sekolah menengah dan perguruan tinggi, siswa sendiri bisa menjadi pengguna aktif sistem — melihat jadwal, nilai, atau mengumpulkan tugas secara digital. Pertimbangkan tingkat kemandirian dan akses teknologi siswa saat merancang fitur ini, karena tidak semua siswa memiliki akses perangkat atau internet yang sama di rumah.",
  },
  { type: "h2", text: "Langkah menerapkan sistem informasi sekolah" },
  {
    type: "ol",
    items: [
      "Petakan alur kerja guru sehari-hari sebelum memilih sistem",
      "Uji coba modul dasar bersama beberapa guru sebelum peluncuran penuh",
      "Rancang hak akses yang ketat untuk data siswa",
      "Latih guru secara bertahap, dimulai dari modul yang paling sering dipakai",
      "Terapkan di masa libur sebelum tahun ajaran baru dimulai",
      "Sediakan pendampingan intensif di minggu-minggu pertama semester",
    ],
  },
  { type: "h2", text: "Kesalahan umum dalam penerapan" },
  {
    type: "ul",
    items: [
      "Meluncurkan semua modul sekaligus tanpa uji coba bertahap",
      "Tidak melibatkan guru dalam proses pemilihan dan pengujian sistem",
      "Menerapkan di tengah semester saat guru sedang sibuk",
      "Hak akses yang terlalu longgar terhadap data siswa",
      "Tidak menyediakan pendampingan yang cukup di masa transisi",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Bagaimana jika sebagian guru gagap teknologi?" },
  {
    type: "p",
    text: "Sediakan pelatihan yang sabar dan berulang, panduan bergambar langkah demi langkah, dan pendamping sesama guru yang lebih cepat menguasai sistem untuk membantu rekan-rekannya. Jangan berasumsi satu sesi pelatihan cukup untuk semua orang.",
  },
  { type: "h3", text: "Apakah sekolah kecil tetap butuh sistem seperti ini?" },
  {
    type: "p",
    text: "Manfaatnya tetap terasa meski skalanya lebih kecil, terutama untuk mengurangi pekerjaan administratif berulang dan mempermudah komunikasi dengan orang tua. Pilih sistem dengan fitur yang sesuai skala sekolah, tidak perlu yang paling lengkap jika kebutuhannya sederhana.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Sistem informasi sekolah yang berhasil bukan yang paling lengkap fiturnya, melainkan yang benar-benar dipakai guru setiap hari tanpa menambah beban kerja mereka. Rancang dari sudut pandang guru, uji sebelum meluncurkan penuh, dan terapkan mengikuti ritme kalender akademik — bukan mengikuti keinginan meluncurkan semuanya sekaligus.",
  },
  {
    type: "cta",
    title: "Ingin sistem sekolah yang benar-benar dipakai guru?",
    text: "Diskusikan kebutuhan sistem informasi sekolah Anda bersama tim AG·SORA, dari alur guru hingga portal orang tua.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];

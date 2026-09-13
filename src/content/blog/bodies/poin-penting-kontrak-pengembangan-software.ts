import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Project sudah selesai delapan bulan, tapi hubungan dengan vendor memburuk karena satu kalimat yang tidak pernah tertulis jelas di kontrak: siapa sebenarnya pemilik source code-nya? Vendor bersikeras itu properti mereka yang hanya dilisensikan, klien yakin sudah membayar penuh sehingga otomatis jadi milik mereka. Tidak ada dokumen yang bisa menyelesaikan perdebatan ini dengan pasti.",
  },
  {
    type: "p",
    text: "Project software hampir selalu menemui perubahan, keterlambatan, atau perbedaan pemahaman di sepanjang perjalanannya — itu bagian normal dari pekerjaan yang kompleks. Kontrak yang disusun dengan baik tidak mencegah semua masalah ini terjadi, tetapi memberikan acuan yang jelas dan disepakati bersama ketika masalah itu muncul. Artikel ini bukan nasihat hukum; untuk kontrak bernilai besar, tetap libatkan penasihat hukum profesional.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Ruang lingkup pekerjaan harus tertulis rinci dan merujuk pada dokumen yang jelas",
      "Kriteria penerimaan menentukan kapan sebuah tahap dianggap benar-benar selesai",
      "Kepemilikan source code harus dinyatakan eksplisit, jangan berasumsi",
      "Pertimbangkan kewajiban kedua belah pihak, bukan hanya kewajiban vendor",
      "Rencanakan apa yang terjadi jika kerja sama berakhir sebelum project selesai",
    ],
  },
  { type: "h2", text: "Kenapa kontrak yang jelas sangat penting" },
  {
    type: "p",
    text: "Tanpa kontrak yang jelas, setiap ketidaksepakatan bergantung pada ingatan masing-masing pihak tentang apa yang pernah dibicarakan — dan ingatan manusia sangat mudah bias sesuai kepentingan masing-masing. Kontrak yang komprehensif menjadi acuan objektif yang bisa dirujuk kembali kapan pun diperlukan, melindungi kedua belah pihak dari kesalahpahaman yang bisa merusak hubungan kerja yang seharusnya saling menguntungkan.",
  },
  { type: "h2", text: "Ruang lingkup yang tertulis rinci" },
  {
    type: "p",
    text: "Kontrak sebaiknya merujuk secara eksplisit pada dokumen ruang lingkup yang rinci: fitur apa saja yang akan dibangun, platform yang dipakai, integrasi yang dibutuhkan, dan batasan-batasan yang berlaku. Hal-hal yang tidak tertulis secara jelas cenderung menjadi sumber perselisihan paling umum ketika project berjalan, karena masing-masing pihak punya ekspektasi berbeda tentang apa yang “seharusnya” termasuk.",
  },
  { type: "h2", text: "Poin-poin yang layak diperiksa dalam kontrak" },
  {
    type: "ul",
    items: [
      "Ruang lingkup pekerjaan dan dokumen acuan yang menjelaskannya secara detail",
      "Tahapan pengerjaan, hasil yang diserahkan di setiap tahap, dan kriteria penerimaannya",
      "Jadwal pengerjaan dan konsekuensi jika terjadi keterlambatan dari masing-masing pihak",
      "Nilai total kontrak dan skema termin pembayaran yang disepakati",
      "Mekanisme yang jelas untuk menangani perubahan ruang lingkup di tengah jalan",
      "Kepemilikan source code dan hak kekayaan intelektual lainnya",
      "Kerahasiaan informasi dan pelindungan data yang terlibat dalam project",
      "Masa perbaikan bug setelah sistem resmi diluncurkan",
      "Dukungan dan pemeliharaan setelah masa perbaikan berakhir",
      "Mekanisme penyelesaian sengketa dan ketentuan pengakhiran kontrak",
    ],
  },
  { type: "h2", text: "Kriteria penerimaan yang jelas" },
  {
    type: "p",
    text: "Kapan sebuah tahap pengerjaan dianggap benar-benar selesai? Tanpa kriteria yang jelas dan disepakati, satu pihak bisa menganggap pekerjaan sudah selesai sepenuhnya, sementara pihak lain merasa masih ada yang kurang. Tetapkan cara pengujian yang akan dipakai dan periode waktu tertentu untuk memberikan catatan perbaikan sebelum tahap tersebut dianggap resmi diterima.",
  },
  {
    type: "callout",
    title: "Kepemilikan source code harus dinyatakan eksplisit",
    text: "Jangan pernah berasumsi source code otomatis menjadi milik pemesan hanya karena pembayaran sudah dilakukan penuh. Kontrak sebaiknya menyatakan dengan sangat jelas siapa pemiliknya, apakah ada komponen milik vendor yang hanya dilisensikan untuk dipakai — bukan dimiliki sepenuhnya, dan kapan tepatnya serah terima kepemilikan tersebut dilakukan secara resmi.",
  },
  { type: "h2", text: "Kewajiban kedua belah pihak, bukan hanya vendor" },
  {
    type: "p",
    text: "Keterlambatan project tidak selalu berasal dari kesalahan vendor. Klien yang terlambat memberikan data yang dibutuhkan, terlambat membuat keputusan penting, atau terlambat memberikan umpan balik juga sangat memengaruhi jadwal keseluruhan project. Kontrak yang adil dan seimbang sebaiknya mencantumkan kewajiban dari kedua belah pihak secara jelas, bukan hanya kewajiban sepihak dari vendor saja.",
  },
  { type: "h2", text: "Rencanakan jika kerja sama berhenti di tengah jalan" },
  {
    type: "p",
    text: "Pertimbangkan sejak awal apa yang akan terjadi jika kerja sama berakhir sebelum project benar-benar selesai — entah karena keputusan salah satu pihak atau situasi lain yang tidak terduga. Pekerjaan apa yang akan diserahkan sampai titik tersebut, bagaimana pembayaran untuk pekerjaan yang sudah dilakukan dihitung, dan bagaimana source code serta dokumentasi yang sudah ada diserahkan kepada klien. Membahas skenario ini di awal jauh lebih mudah dan lebih tenang dibanding membahasnya ketika hubungan sudah memburuk dan penuh ketegangan.",
  },
  { type: "h2", text: "Ilustrasi: kontrak yang menyelamatkan hubungan kerja" },
  {
    type: "p",
    text: "Bayangkan sebuah project pengembangan aplikasi yang di tengah jalan mengalami perubahan kebutuhan cukup signifikan karena kondisi pasar klien berubah. Karena kontraknya mencantumkan mekanisme perubahan ruang lingkup yang jelas — bagaimana dampaknya terhadap waktu dan biaya dihitung serta disepakati — kedua belah pihak bisa duduk bersama, menyesuaikan rencana dengan tenang, dan melanjutkan kerja sama tanpa perselisihan berarti.",
  },
  {
    type: "p",
    text: "Bandingkan dengan project serupa yang kontraknya hanya menyebutkan “pengembangan aplikasi sesuai kebutuhan klien” tanpa detail lebih lanjut. Ketika perubahan kebutuhan muncul, tidak ada acuan yang jelas tentang bagaimana menghitung dampaknya, memicu perdebatan panjang yang akhirnya merusak hubungan kerja yang sebelumnya baik-baik saja.",
  },
  { type: "h2", text: "Membaca kontrak bersama tim yang akan menjalankan" },
  {
    type: "p",
    text: "Libatkan orang yang akan benar-benar mengelola project sehari-hari dari pihak Anda saat membaca dan meninjau kontrak, bukan hanya bagian legal atau manajemen puncak yang mungkin tidak memahami detail operasionalnya. Mereka sering bisa mengenali ketentuan yang sulit dijalankan dalam praktik nyata, meski terlihat baik-baik saja di atas kertas.",
  },
  { type: "h2", text: "Menangani kerahasiaan dan data sensitif" },
  {
    type: "p",
    text: "Jika project melibatkan akses ke data sensitif perusahaan — data pelanggan, data keuangan, atau rahasia bisnis lainnya — pastikan kontrak mencantumkan klausul kerahasiaan yang jelas dan ketentuan tentang bagaimana data tersebut akan dikelola, disimpan, dan dihapus setelah project selesai atau kerja sama berakhir.",
  },
  { type: "h2", text: "Langkah meninjau kontrak sebelum menandatangani" },
  {
    type: "ol",
    items: [
      "Baca seluruh kontrak bersama tim yang akan menjalankan project",
      "Pastikan ruang lingkup merujuk pada dokumen yang detail dan jelas",
      "Periksa kriteria penerimaan untuk setiap tahap pengerjaan",
      "Konfirmasi kepemilikan source code dinyatakan eksplisit",
      "Pastikan kewajiban kedua belah pihak tercantum secara seimbang",
      "Diskusikan skenario pengakhiran kerja sama sebelum project selesai",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah wajib menggunakan pengacara untuk semua kontrak software?" },
  {
    type: "p",
    text: "Untuk project bernilai kecil dan ruang lingkup sederhana, checklist di atas mungkin sudah cukup membantu meninjau kontrak secara mandiri. Untuk project bernilai besar atau dengan kompleksitas tinggi, melibatkan penasihat hukum sangat disarankan untuk melindungi kepentingan Anda secara lebih menyeluruh.",
  },
  { type: "h3", text: "Bagaimana jika vendor menolak mencantumkan kepemilikan source code secara eksplisit?" },
  {
    type: "p",
    text: "Ini patut menjadi tanda peringatan yang perlu ditanyakan lebih lanjut. Vendor yang profesional dan transparan biasanya bersedia mencantumkan hal ini dengan jelas, karena justru melindungi mereka juga dari kesalahpahaman di kemudian hari.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Kontrak pengembangan software yang baik bukan tentang mengantisipasi setiap kemungkinan buruk, melainkan tentang menciptakan acuan bersama yang jelas ketika situasi tidak berjalan sesuai rencana — dan dalam project software, situasi semacam itu hampir pasti akan terjadi. Luangkan waktu meninjau poin-poin penting ini sebelum menandatangani, dan hubungan kerja Anda dengan vendor akan jauh lebih sehat sepanjang project berjalan.",
  },
  {
    type: "cta",
    title: "Akan menandatangani kontrak pengembangan software?",
    text: "Tim AG·SORA selalu menyusun kontrak dengan ruang lingkup dan kepemilikan source code yang jelas sejak awal.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];

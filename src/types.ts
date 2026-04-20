import { LucideIcon } from 'lucide-react';

export interface BudgetData {
  id: string;
  name: string;
  pagu: number;
  realization: number;
  percentage: number;
  ikpa: number;
  status: 'on-track' | 'warning' | 'alert';
  outputStatus: string;
  bottleneck?: string;
  physicalProgress: number;
  earlyBirdScore: number;
}

export interface MonthlyTrend {
  month: string;
  target: number;
  actual: number;
}

export interface SpendingType {
  name: string;
  value: number;
  color: string;
}

export const DIRECTORATES: BudgetData[] = [
  { 
    id: '1', 
    name: 'DIT OTSUS', 
    pagu: 5000000000, 
    realization: 2000000000, 
    percentage: 40, 
    ikpa: 92.4,
    status: 'on-track',
    outputStatus: '65% Progress Fisik',
    bottleneck: '-',
    physicalProgress: 65,
    earlyBirdScore: 88
  },
  { 
    id: '2', 
    name: 'DIT FKDH', 
    pagu: 3500000000, 
    realization: 1200000000, 
    percentage: 34.2, 
    ikpa: 88.5,
    status: 'warning',
    outputStatus: '30% SK Terdistribusi',
    bottleneck: 'Validasi NIK KDH',
    physicalProgress: 30,
    earlyBirdScore: 45
  },
  { 
    id: '3', 
    name: 'Direktorat Produk Hukum Daerah', 
    pagu: 4500000000, 
    realization: 3200000000, 
    percentage: 71.1, 
    ikpa: 96.8,
    status: 'on-track',
    outputStatus: '85% Harmonisasi Selesai',
    physicalProgress: 85,
    earlyBirdScore: 92
  },
  { 
    id: '4', 
    name: 'Direktorat Evaluasi Kinerja (EKPKD)', 
    pagu: 3000000000, 
    realization: 900000000, 
    percentage: 30, 
    ikpa: 84.1,
    status: 'alert',
    outputStatus: '20% Uji Petik Selesai',
    bottleneck: 'Data LPPD Terlambat',
    physicalProgress: 20,
    earlyBirdScore: 35
  },
  { 
    id: '5', 
    name: 'Sekretariat Ditjen', 
    pagu: 8000000000, 
    realization: 5800000000, 
    percentage: 72.5, 
    ikpa: 98.2,
    status: 'on-track',
    outputStatus: '95% Layanan Ops',
    physicalProgress: 95,
    earlyBirdScore: 98
  },
  { 
    id: '6', 
    name: 'Dit FKKPD', 
    pagu: 4200000000, 
    realization: 1800000000, 
    percentage: 42.8, 
    ikpa: 91.5,
    status: 'on-track',
    outputStatus: '70% Mutasi Selesai',
    bottleneck: '-',
    physicalProgress: 70,
    earlyBirdScore: 75
  }
];

export const MONTHLY_TRENDS: MonthlyTrend[] = [
  { month: 'Jan', target: 5, actual: 4 },
  { month: 'Feb', target: 12, actual: 10 },
  { month: 'Mar', target: 20, actual: 18 },
  { month: 'Apr', target: 28, actual: 25 },
  { month: 'Mei', target: 35, actual: 30 },
  { month: 'Jun', target: 45, actual: 38 },
  { month: 'Jul', target: 55, actual: 48 },
  { month: 'Agu', target: 65, actual: 55 },
  { month: 'Sep', target: 75, actual: 68 },
  { month: 'Okt', target: 85, actual: 78 },
  { month: 'Nov', target: 92, actual: 85 },
  { month: 'Des', target: 100, actual: 98 },
];

export const SPENDING_TYPES: SpendingType[] = [
  { name: 'Belanja Pegawai', value: 35, color: '#6366f1' },
  { name: 'Belanja Barang', value: 50, color: '#10b981' },
  { name: 'Belanja Modal', value: 15, color: '#f59e0b' },
];

export interface ActivityData {
  id: string;
  directorateId: string;
  name: string;
  accountCode: string;
  pagu: number;
  realization: number;
  percentage: number;
  volumeTarget: number;
  volumeActual: number;
  unit: string;
  status: 'on-track' | 'warning' | 'alert';
  outputStatus: string;
  bottleneck?: string;
}

export const ACTIVITIES: ActivityData[] = [
  // Penataan Daerah (1)
  { 
    id: 'a1', 
    directorateId: '1', 
    name: 'Verifikasi Lapangan Calon DOB', 
    accountCode: '524111', 
    pagu: 2000000000, 
    realization: 1200000000, 
    percentage: 60, 
    volumeTarget: 20,
    volumeActual: 15,
    unit: 'Lokasi',
    status: 'warning', 
    outputStatus: 'Laporan Observasi Fisik',
    bottleneck: 'Kendala cuaca ekstrem di wilayah Papua Tengah menghambat jadwal tim survei.'
  },
  { 
    id: 'a2', 
    directorateId: '1', 
    name: 'Kajian Kelayakan Pemekaran', 
    accountCode: '522131', 
    pagu: 1500000000, 
    realization: 500000000, 
    percentage: 33.3, 
    volumeTarget: 5,
    volumeActual: 2,
    unit: 'Naskah',
    status: 'alert', 
    outputStatus: 'Naskah Akademik',
    bottleneck: 'Terjadi keterlambatan penyerahan draf dari pihak universitas mitra.'
  },
  { 
    id: 'a3', 
    directorateId: '1', 
    name: 'Honor Tim Penilai Desain Besar', 
    accountCode: '521213', 
    pagu: 1500000000, 
    realization: 300000000, 
    percentage: 20, 
    volumeTarget: 12,
    volumeActual: 4,
    unit: 'OB',
    status: 'on-track', 
    outputStatus: 'Honorarium Tim',
    bottleneck: 'Sedang dalam proses verifikasi administrasi absen.'
  },
  
  // Fasilitasi Kepala Daerah (2)
  { 
    id: 'a4', 
    directorateId: '2', 
    name: 'Pencetakan SK Pengangkatan KDH', 
    accountCode: '521811', 
    pagu: 1000000000, 
    realization: 500000000, 
    percentage: 50, 
    volumeTarget: 548,
    volumeActual: 270,
    unit: 'Berkas',
    status: 'on-track', 
    outputStatus: 'SK Fisik & Digital',
    bottleneck: 'Progres sesuai jadwal pelantikan serentak.'
  },
  { 
    id: 'a5', 
    directorateId: '2', 
    name: 'Fasilitasi Pelantikan KDH', 
    accountCode: '524111', 
    pagu: 1500000000, 
    realization: 400000000, 
    percentage: 26.6, 
    volumeTarget: 38,
    volumeActual: 10,
    unit: 'Provinsi',
    status: 'alert', 
    outputStatus: 'Berita Acara Pelantikan',
    bottleneck: 'Penundaan pelantikan di beberapa daerah karena gugatan MK.'
  },
  { 
    id: 'a6', 
    directorateId: '2', 
    name: 'Pengiriman Dokumen Negara (SK)', 
    accountCode: '522111', 
    pagu: 1000000000, 
    realization: 300000000, 
    percentage: 30, 
    volumeTarget: 548,
    volumeActual: 150,
    unit: 'Daerah',
    status: 'warning', 
    outputStatus: 'Resi Pengiriman',
    bottleneck: 'Koordinasi kurir logistik untuk daerah 3T masih terkendala akses.'
  },
  
  // Produk Hukum Daerah (3)
  { 
    id: 'a7', 
    directorateId: '3', 
    name: 'Rapat Harmonisasi Perda', 
    accountCode: '524119', 
    pagu: 2500000000, 
    realization: 2000000000, 
    percentage: 80, 
    volumeTarget: 500,
    volumeActual: 450,
    unit: 'Dokumen',
    status: 'on-track', 
    outputStatus: 'BA Harmonisasi',
    bottleneck: 'Volume rapat meningkat menjelang akhir tahun.'
  },
  { 
    id: 'a8', 
    directorateId: '3', 
    name: 'Maintenance & Upgrade E-Perda', 
    accountCode: '523111', 
    pagu: 1000000000, 
    realization: 700000000, 
    percentage: 70, 
    volumeTarget: 4,
    volumeActual: 3,
    unit: 'Kuartal',
    status: 'on-track', 
    outputStatus: 'Uptime & Fitur Baru',
    bottleneck: 'Selesai integrasi modul tanda tangan elektronik.'
  },
  { 
    id: 'a9', 
    directorateId: '3', 
    name: 'Langganan Database Hukum JDIH', 
    accountCode: '522119', 
    pagu: 1000000000, 
    realization: 500000000, 
    percentage: 50, 
    volumeTarget: 12,
    volumeActual: 6,
    unit: 'Bulan',
    status: 'on-track', 
    outputStatus: 'Akses Referensi',
    bottleneck: 'Pembayaran rutin per semester.'
  },
  
  // Evaluasi Kinerja (4)
  { 
    id: 'a10', 
    directorateId: '4', 
    name: 'Konsultansi Pengolahan LPPD Masa', 
    accountCode: '522131', 
    pagu: 1200000000, 
    realization: 300000000, 
    percentage: 25, 
    volumeTarget: 1,
    volumeActual: 0,
    unit: 'Tabel',
    status: 'alert', 
    outputStatus: 'Peringkat Kinerja',
    bottleneck: 'Banyak daerah belum mengunggah dokumen pendukung di sistem.'
  },
  { 
    id: 'a11', 
    directorateId: '4', 
    name: 'Pengadaan Trofi Parasamya', 
    accountCode: '522111', 
    pagu: 800000000, 
    realization: 200000000, 
    percentage: 25, 
    volumeTarget: 10,
    volumeActual: 2,
    unit: 'Unit',
    status: 'warning', 
    outputStatus: 'Fisik Penghargaan',
    bottleneck: 'Proses lelang ulang karena penyedia jasa tidak memenuhi spek.'
  },
  { 
    id: 'a12', 
    directorateId: '4', 
    name: 'Uji Petik Verifikasi Lapangan', 
    accountCode: '524111', 
    pagu: 1000000000, 
    realization: 400000000, 
    percentage: 40, 
    volumeTarget: 34,
    volumeActual: 12,
    unit: 'Provinsi',
    status: 'warning', 
    outputStatus: 'BAP Verifikasi',
    bottleneck: 'Penyesuaian jadwal dengan tim verifikator antar-kementerian.'
  },
  
  // Sekretariat (5)
  { 
    id: 'a13', 
    directorateId: '5', 
    name: 'Dukungan Manajemen & Operasional', 
    accountCode: '521111', 
    pagu: 4000000000, 
    realization: 3500000000, 
    percentage: 87.5, 
    volumeTarget: 12,
    volumeActual: 10,
    unit: 'Bulan',
    status: 'on-track', 
    outputStatus: 'Layanan Internal',
    bottleneck: 'Alokasi sisa untuk operasional Desember.'
  },
  { id: 'a14', directorateId: '5', name: 'Layanan Pemeliharaan IT', accountCode: '523111', pagu: 2000000000, realization: 1500000000, percentage: 75, volumeTarget: 12, volumeActual: 9, unit: 'Bulan', status: 'on-track', outputStatus: 'Infrastructure Stable', bottleneck: 'Upgrade server terjadwal.' },
  { id: 'a15', directorateId: '5', name: 'Diklat Reformasi Birokrasi', accountCode: '522115', pagu: 2000000000, realization: 800000000, percentage: 40, volumeTarget: 4, volumeActual: 1, unit: 'Sesi', status: 'warning', outputStatus: 'Sertifikasi Peserta', bottleneck: 'Kapasitas gedung pelatihan penuh di kuartal ini.' },
  
  // FKKPD (6)
  { 
    id: 'a16', 
    directorateId: '6', 
    name: 'Layanan Mutasi Jabatan & Kepegawaian', 
    accountCode: '522191', 
    pagu: 1200000000, 
    realization: 700000000, 
    percentage: 58.3, 
    volumeTarget: 5000,
    volumeActual: 3500,
    unit: 'SK Mutasi',
    status: 'on-track', 
    outputStatus: 'SLA 3 Hari Kerja',
    bottleneck: 'Validasi dokumen diperketat untuk cegah maladministrasi.'
  },
  { 
    id: 'a17', 
    directorateId: '6', 
    name: 'Penataan Kelembagaan (SOTK)', 
    accountCode: '522131', 
    pagu: 1000000000, 
    realization: 400000000, 
    percentage: 40, 
    volumeTarget: 38,
    volumeActual: 15,
    unit: 'Rekomendasi',
    status: 'warning', 
    outputStatus: 'Validasi ABK',
    bottleneck: 'Beberapa Pemprov belum menyerahkan peta jabatan terbaru.'
  },
  { 
    id: 'a18', 
    directorateId: '6', 
    name: 'Persetujuan Pengisian Jabatan', 
    accountCode: '522191', 
    pagu: 1000000000, 
    realization: 500000000, 
    percentage: 50, 
    volumeTarget: 200,
    volumeActual: 120,
    unit: 'Dokumen',
    status: 'on-track', 
    outputStatus: 'Pengisian Jabatan Kosong',
    bottleneck: 'Menunggu hasil asesmen kompetensi daerah.'
  },
  { 
    id: 'a19', 
    directorateId: '6', 
    name: 'Pengembangan Kapasitas Aparatur', 
    accountCode: '522115', 
    pagu: 1000000000, 
    realization: 2000000000, 
    percentage: 20, 
    volumeTarget: 1000,
    volumeActual: 250,
    unit: 'Alumni',
    status: 'warning', 
    outputStatus: 'Peningkatan Kompetensi',
    bottleneck: 'Minat kepesertaan dari daerah luar Jawa masih rendah.'
  }
];

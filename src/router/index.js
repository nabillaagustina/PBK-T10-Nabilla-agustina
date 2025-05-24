import { createRouter, createWebHistory } from 'vue-router';

import Beranda from '../components/Beranda.vue';
import Masuk from '../components/Masuk.vue';  // Import Masuk
import DataAnggota from '../components/DataAnggota.vue';
import DataPelatih from '../components/DataPelatih.vue';
import DataKelas from '../components/DataKelas.vue';
import JadwalKelas from '../components/JadwalKelas.vue';
import Reservasi from '../components/Reservasi.vue';
import RiwayatPembayaran from '../components/RiwayatPembayaran.vue';
import PembayaranBaru from '../components/PembayaranBaru.vue';
import LaporanKehadiran from '../components/LaporanKehadiran.vue';
import LaporanKeuangan from '../components/LaporanKeuangan.vue';
import Profil from '../components/Profil.vue';
import Logout from '../components/Logout.vue';

const routes = [
  {
    path: '/',
    redirect: '/masuk',  // Redirect ke /masuk
  },
  {
    path: '/Beranda',
    component: Beranda,
  },
  {
    path: '/masuk',
    component: Masuk,
  },
  {
    path: '/anggota',
    component: DataAnggota,
  },
  {
    path: '/pelatih',
    component: DataPelatih,
  },
  {
    path: '/kelas',
    component: DataKelas,
  },
  {
    path: '/jadwal',
    component: JadwalKelas,
  },
  {
    path: '/reservasi',
    component: Reservasi,
  },
  {
    path: '/pembayaran/riwayat',
    component: RiwayatPembayaran,
  },
  {
    path: '/pembayaran/baru',
    component: PembayaranBaru,
  },
  {
    path: '/laporan/kehadiran',
    component: LaporanKehadiran,
  },
  {
    path: '/laporan/keuangan',
    component: LaporanKeuangan,
  },
  {
    path: '/profil',
    component: Profil,
  },
  {
    path: '/logout',
    component: Logout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

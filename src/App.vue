<template>
  <div id="app">
    <header>
      <h1>Sistem Manajemen Gym</h1>

      <!-- Navigasi hanya muncul kalau bukan halaman masuk -->
      <nav v-if="showNav">
        <ul class="navigasi">
          <li><router-link to="/Beranda">Beranda</router-link></li>
          <li><router-link to="/anggota">Data Anggota</router-link></li>
          <li><router-link to="/pelatih">Data Pelatih</router-link></li>
          <li><router-link to="/kelas">Data Kelas</router-link></li>
          <li><router-link to="/jadwal">Jadwal Kelas</router-link></li>
          <li><router-link to="/reservasi">Reservasi</router-link></li>
          <li><router-link to="/pembayaran/riwayat">Riwayat Pembayaran</router-link></li>
          <li><router-link to="/pembayaran/baru">Pembayaran Baru</router-link></li>
          <li><router-link to="/laporan/kehadiran">Laporan Kehadiran</router-link></li>
          <li><router-link to="/laporan/keuangan">Laporan Keuangan</router-link></li>
          <li><router-link to="/profil">Profil</router-link></li>
          <li><router-link to="/logout">Logout</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2025 Sistem Manajemen Gym</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showNav() {
      // this.$route.path akan berisi path aktif saat ini
      // jika path adalah '/masuk', navigasi disembunyikan
      return this.$route.path !== '/masuk';
    }
  }
}
</script>

<style scoped>
/* Reset dasar */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background: linear-gradient(to right, #0072ff, #00c6ff);
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

header h1 {
  margin-bottom: 10px;
  font-size: 28px;
}

.navigasi {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  list-style: none;
  padding: 10px 0;
}

.navigasi li {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background-color 0.3s;
}

.navigasi li a {
  display: block;
  padding: 10px 16px;
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.navigasi li:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

main {
  flex: 1;
  padding: 30px;
}

footer {
  background-color: #0072ff;
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 14px;
}
</style>

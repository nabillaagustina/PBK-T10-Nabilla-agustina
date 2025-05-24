<!-- sumber/components/JadwalKelas.vue -->
<template>
  <section class="jadwal-kelas">
    <div class="container">
      <h2>Jadwal Kelas Gym</h2>

      <label for="filterHari" class="label-filter">Filter Hari:</label>
      <select id="filterHari" v-model="filterHari" class="select-filter">
        <option value="">Semua Hari</option>
        <option v-for="hari in hariList" :key="hari" :value="hari">{{ hari }}</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Kelas</th>
            <th>Pelatih</th>
            <th>Hari</th>
            <th>Waktu</th>
            <th>Durasi (menit)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jadwal in hasilFilter" :key="jadwal.id">
            <td>{{ jadwal.kelas }}</td>
            <td>{{ jadwal.pelatih }}</td>
            <td>{{ jadwal.hari }}</td>
            <td>{{ jadwal.waktu }}</td>
            <td>{{ jadwal.durasi }}</td>
          </tr>
          <tr v-if="hasilFilter.length === 0">
            <td colspan="5" class="kosong">Tidak ada jadwal untuk hari tersebut.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JadwalKelas',
  data() {
    return {
      filterHari: '',
      hariList: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
      jadwalList: [
        {
          id: 1,
          kelas: 'Yoga Pemula',
          pelatih: 'Rina Saputra',
          hari: 'Senin',
          waktu: '08:00 - 09:00',
          durasi: 60,
        },
        {
          id: 2,
          kelas: 'HIIT Intensif',
          pelatih: 'Dedi Pratama',
          hari: 'Rabu',
          waktu: '18:00 - 18:45',
          durasi: 45,
        },
        {
          id: 3,
          kelas: 'Zumba Dance',
          pelatih: 'Lisa Marlina',
          hari: 'Jumat',
          waktu: '17:00 - 17:50',
          durasi: 50,
        },
        {
          id: 4,
          kelas: 'Pilates Intermediate',
          pelatih: 'Rina Saputra',
          hari: 'Sabtu',
          waktu: '10:00 - 11:00',
          durasi: 60,
        },
      ],
    };
  },
  computed: {
    hasilFilter() {
      if (!this.filterHari) return this.jadwalList;
      return this.jadwalList.filter(
        (jadwal) => jadwal.hari === this.filterHari
      );
    },
  },
};
</script>

<style scoped>
.jadwal-kelas {
  padding: 30px 20px;
  max-width: 900px;
  margin: 0 auto;
  background: #f5faff;
  border-radius: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 6px 18px rgba(0, 114, 255, 0.15);
}

h2 {
  color: #005bb5;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}

.label-filter {
  font-weight: 600;
  margin-right: 10px;
  color: #005bb5;
}

.select-filter {
  padding: 8px 15px;
  border-radius: 25px;
  border: 2px solid #005bb5;
  font-size: 1rem;
  margin-bottom: 25px;
  transition: border-color 0.3s;
}

.select-filter:focus {
  outline: none;
  border-color: #003d7a;
  box-shadow: 0 0 10px rgba(0, 61, 122, 0.5);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}

thead tr {
  background-color: #005bb5;
  color: white;
  text-align: left;
  border-radius: 10px;
}

thead th,
tbody td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}

tbody tr:hover {
  background-color: #dceeff;
  cursor: default;
}

.kosong {
  text-align: center;
  color: #999;
  font-style: italic;
  padding: 20px 0;
}

@media (max-width: 600px) {
  .select-filter {
    font-size: 0.9rem;
  }

  table,
  thead tr,
  tbody tr,
  thead th,
  tbody td {
    font-size: 0.9rem;
  }
}
</style>

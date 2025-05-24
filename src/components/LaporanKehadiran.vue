<!-- sumber/components/LaporanKehadiran.vue -->
<template>
  <section class="laporan-kehadiran">
    <div class="container">
      <h2>Laporan Kehadiran Anggota</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Anggota</th>
            <th>Tanggal</th>
            <th>Status Kehadiran</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in daftarKehadiran" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.nama }}</td>
            <td>{{ formatTanggal(item.tanggal) }}</td>
            <td>
              <span
                :class="{
                  hadir: item.status === 'Hadir',
                  izin: item.status === 'Izin',
                  alfa: item.status === 'Alfa'
                }"
              >
                {{ item.status }}
              </span>
            </td>
          </tr>
          <tr v-if="daftarKehadiran.length === 0">
            <td colspan="4" class="kosong">Belum ada data kehadiran.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LaporanKehadiran',
  data() {
    return {
      daftarKehadiran: [
        { id: 1, nama: 'Rina Putri', tanggal: '2025-05-18', status: 'Hadir' },
        { id: 2, nama: 'Doni Saputra', tanggal: '2025-05-18', status: 'Izin' },
        { id: 3, nama: 'Eka Susilo', tanggal: '2025-05-18', status: 'Alfa' },
        { id: 4, nama: 'Maya Sari', tanggal: '2025-05-17', status: 'Hadir' }
      ]
    };
  },
  methods: {
    formatTanggal(tgl) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(tgl).toLocaleDateString('id-ID', options);
    }
  }
};
</script>

<style scoped>
.laporan-kehadiran {
  max-width: 900px;
  margin: 30px auto;
  background: #e8f0fe;
  padding: 25px 20px;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 91, 255, 0.15);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  color: #1a237e;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 700;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}

thead tr {
  background-color: #1a237e;
  color: white;
  text-align: left;
}

thead th,
tbody td {
  padding: 12px 15px;
  border-bottom: 1px solid #cfd8dc;
}

tbody tr:hover {
  background-color: #bbdefb;
}

span.hadir {
  color: #2e7d32;
  font-weight: 600;
  background-color: #c8e6c9;
  padding: 4px 10px;
  border-radius: 12px;
  display: inline-block;
}

span.izin {
  color: #f9a825;
  font-weight: 600;
  background-color: #fff9c4;
  padding: 4px 10px;
  border-radius: 12px;
  display: inline-block;
}

span.alfa {
  color: #d32f2f;
  font-weight: 600;
  background-color: #ffcdd2;
  padding: 4px 10px;
  border-radius: 12px;
  display: inline-block;
}

.kosong {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 20px 0;
}

@media (max-width: 600px) {
  table,
  thead tr,
  tbody tr,
  thead th,
  tbody td {
    font-size: 0.9rem;
  }
}
</style>

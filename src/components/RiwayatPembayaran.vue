<!-- sumber/components/RiwayatPembayaran.vue -->
<template>
  <section class="riwayat-pembayaran">
    <div class="container">
      <h2>Riwayat Pembayaran</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Anggota</th>
            <th>Tanggal Pembayaran</th>
            <th>Jumlah (Rp)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in pembayaranList" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.namaAnggota }}</td>
            <td>{{ formatTanggal(item.tanggal) }}</td>
            <td>{{ formatRupiah(item.jumlah) }}</td>
            <td>
              <span
                :class="{
                  'status-lunas': item.status === 'Lunas',
                  'status-pending': item.status === 'Pending',
                  'status-gagal': item.status === 'Gagal',
                }"
              >
                {{ item.status }}
              </span>
            </td>
          </tr>
          <tr v-if="pembayaranList.length === 0">
            <td colspan="5" class="kosong">Belum ada riwayat pembayaran.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RiwayatPembayaran',
  data() {
    return {
      pembayaranList: [
        {
          id: 1,
          namaAnggota: 'Adi Prasetyo',
          tanggal: '2025-05-01',
          jumlah: 300000,
          status: 'Lunas',
        },
        {
          id: 2,
          namaAnggota: 'Sari Wulandari',
          tanggal: '2025-04-28',
          jumlah: 300000,
          status: 'Pending',
        },
        {
          id: 3,
          namaAnggota: 'Budi Santoso',
          tanggal: '2025-04-15',
          jumlah: 300000,
          status: 'Gagal',
        },
      ],
    };
  },
  methods: {
    formatTanggal(tanggal) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(tanggal).toLocaleDateString('id-ID', options);
    },
    formatRupiah(angka) {
      return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',00';
    },
  },
};
</script>

<style scoped>
.riwayat-pembayaran {
  max-width: 850px;
  margin: 30px auto;
  padding: 25px 20px;
  background-color: #f0f8ff;
  border-radius: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 8px 20px rgba(0, 90, 179, 0.15);
}

h2 {
  text-align: center;
  color: #004080;
  font-weight: 700;
  margin-bottom: 25px;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}

thead tr {
  background-color: #004080;
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
  background-color: #dbe9ff;
  cursor: default;
}

.status-lunas {
  color: #2e7d32;
  font-weight: 600;
}

.status-pending {
  color: #f9a825;
  font-weight: 600;
}

.status-gagal {
  color: #d32f2f;
  font-weight: 600;
}

.kosong {
  text-align: center;
  font-style: italic;
  color: #777;
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

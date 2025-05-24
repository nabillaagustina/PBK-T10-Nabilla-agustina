<!-- sumber/components/DataKelas.vue -->
<template>
  <section class="data-kelas">
    <div class="container">
      <h2>Data Kelas Gym</h2>

      <input
        type="text"
        v-model="cari"
        placeholder="Cari kelas berdasarkan nama kelas..."
        class="input-cari"
      />

      <table>
        <thead>
          <tr>
            <th>Nama Kelas</th>
            <th>Deskripsi</th>
            <th>Durasi (menit)</th>
            <th>Level</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="kelas in hasilCari" :key="kelas.id">
            <td>{{ kelas.nama }}</td>
            <td>{{ kelas.deskripsi }}</td>
            <td>{{ kelas.durasi }}</td>
            <td>{{ kelas.level }}</td>
            <td>
              <button class="btn-detail" @click="lihatDetail(kelas)">
                Detail
              </button>
            </td>
          </tr>
          <tr v-if="hasilCari.length === 0">
            <td colspan="5" class="kosong">Data kelas tidak ditemukan.</td>
          </tr>
        </tbody>
      </table>

      <div v-if="detailKelas" class="modal" @click.self="tutupDetail">
        <div class="modal-konten">
          <h3>Detail Kelas</h3>
          <p><strong>Nama Kelas:</strong> {{ detailKelas.nama }}</p>
          <p><strong>Deskripsi:</strong> {{ detailKelas.deskripsi }}</p>
          <p><strong>Durasi:</strong> {{ detailKelas.durasi }} menit</p>
          <p><strong>Level:</strong> {{ detailKelas.level }}</p>
          <button class="btn-tutup" @click="tutupDetail">Tutup</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DataKelas',
  data() {
    return {
      cari: '',
      detailKelas: null,
      kelasList: [
        {
          id: 1,
          nama: 'Yoga Pemula',
          deskripsi: 'Kelas yoga untuk pemula yang fokus pada pernapasan dan postur dasar.',
          durasi: 60,
          level: 'Pemula',
        },
        {
          id: 2,
          nama: 'HIIT Intensif',
          deskripsi: 'High Intensity Interval Training untuk pembakaran kalori maksimal.',
          durasi: 45,
          level: 'Lanjutan',
        },
        {
          id: 3,
          nama: 'Zumba Dance',
          deskripsi: 'Kelas tari zumba yang menyenangkan dan membakar kalori.',
          durasi: 50,
          level: 'Menengah',
        },
      ],
    };
  },
  computed: {
    hasilCari() {
      const keyword = this.cari.toLowerCase().trim();
      if (!keyword) return this.kelasList;
      return this.kelasList.filter((kelas) =>
        kelas.nama.toLowerCase().includes(keyword)
      );
    },
  },
  methods: {
    lihatDetail(kelas) {
      this.detailKelas = kelas;
    },
    tutupDetail() {
      this.detailKelas = null;
    },
  },
};
</script>

<style scoped>
.data-kelas {
  padding: 30px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(255, 114, 0, 0.1);
}

h2 {
  color: #ff7200;
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
}

.input-cari {
  width: 100%;
  padding: 12px 16px;
  border-radius: 50px;
  border: 2px solid #ff7200;
  font-size: 1rem;
  margin-bottom: 20px;
  transition: border-color 0.3s;
}

.input-cari:focus {
  outline: none;
  border-color: #cc5900;
  box-shadow: 0 0 8px rgba(204, 89, 0, 0.5);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}

thead tr {
  background-color: #ff7200;
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
  background-color: #fff4e6;
  cursor: pointer;
}

.btn-detail {
  background-color: #ff7200;
  border: none;
  color: white;
  padding: 8px 14px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.btn-detail:hover {
  background-color: #cc5900;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 114, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-konten {
  background: white;
  padding: 30px 40px;
  border-radius: 15px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 25px rgba(255, 114, 0, 0.2);
}

.modal-konten h3 {
  margin-bottom: 20px;
  color: #ff7200;
  font-weight: 700;
}

.modal-konten p {
  margin: 8px 0;
  font-size: 1rem;
  color: #333;
}

.btn-tutup {
  margin-top: 25px;
  background-color: #ff7200;
  border: none;
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.btn-tutup:hover {
  background-color: #cc5900;
}

.kosong {
  text-align: center;
  color: #999;
  font-style: italic;
  padding: 20px 0;
}

@media (max-width: 600px) {
  .modal-konten {
    padding: 25px 20px;
  }

  .input-cari {
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

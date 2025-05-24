<!-- sumber/components/DataAnggota.vue -->
<template>
  <section class="data-anggota">
    <div class="container">
      <h2>Data Anggota Gym</h2>

      <input
        type="text"
        v-model="cari"
        placeholder="Cari anggota berdasarkan nama..."
        class="input-cari"
      />

      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Jenis Kelamin</th>
            <th>Usia</th>
            <th>Status Keanggotaan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="anggota in hasilCari" :key="anggota.id">
            <td>{{ anggota.nama }}</td>
            <td>{{ anggota.jenisKelamin }}</td>
            <td>{{ anggota.usia }}</td>
            <td>
              <span
                :class="{
                  aktif: anggota.status === 'Aktif',
                  nonaktif: anggota.status !== 'Aktif'
                }"
              >
                {{ anggota.status }}
              </span>
            </td>
            <td>
              <button class="btn-detail" @click="lihatDetail(anggota)">
                Detail
              </button>
            </td>
          </tr>
          <tr v-if="hasilCari.length === 0">
            <td colspan="5" class="kosong">Data anggota tidak ditemukan.</td>
          </tr>
        </tbody>
      </table>

      <div v-if="detailAnggota" class="modal" @click.self="tutupDetail">
        <div class="modal-konten">
          <h3>Detail Anggota</h3>
          <p><strong>Nama:</strong> {{ detailAnggota.nama }}</p>
          <p><strong>Jenis Kelamin:</strong> {{ detailAnggota.jenisKelamin }}</p>
          <p><strong>Usia:</strong> {{ detailAnggota.usia }}</p>
          <p><strong>Status:</strong> {{ detailAnggota.status }}</p>
          <p><strong>Email:</strong> {{ detailAnggota.email }}</p>
          <button class="btn-tutup" @click="tutupDetail">Tutup</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DataAnggota',
  data() {
    return {
      cari: '',
      detailAnggota: null,
      anggotaList: [
        {
          id: 1,
          nama: 'Andi Wijaya',
          jenisKelamin: 'Laki-laki',
          usia: 28,
          status: 'Aktif',
          email: 'andi@example.com',
        },
        {
          id: 2,
          nama: 'Sari Melati',
          jenisKelamin: 'Perempuan',
          usia: 32,
          status: 'Nonaktif',
          email: 'sari@example.com',
        },
        {
          id: 3,
          nama: 'Budi Santoso',
          jenisKelamin: 'Laki-laki',
          usia: 25,
          status: 'Aktif',
          email: 'budi@example.com',
        },
      ],
    };
  },
  computed: {
    hasilCari() {
      const keyword = this.cari.toLowerCase().trim();
      if (!keyword) return this.anggotaList;
      return this.anggotaList.filter((a) =>
        a.nama.toLowerCase().includes(keyword)
      );
    },
  },
  methods: {
    lihatDetail(anggota) {
      this.detailAnggota = anggota;
    },
    tutupDetail() {
      this.detailAnggota = null;
    },
  },
};
</script>

<style scoped>
.data-anggota {
  padding: 30px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 114, 255, 0.1);
}

h2 {
  color: #0072ff;
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
}

.input-cari {
  width: 100%;
  padding: 12px 16px;
  border-radius: 50px;
  border: 2px solid #0072ff;
  font-size: 1rem;
  margin-bottom: 20px;
  transition: border-color 0.3s;
}

.input-cari:focus {
  outline: none;
  border-color: #005bb5;
  box-shadow: 0 0 8px rgba(0, 91, 181, 0.5);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}

thead tr {
  background-color: #0072ff;
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
  background-color: #f0f8ff;
  cursor: pointer;
}

span.aktif {
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: 600;
}

span.nonaktif {
  background-color: #e74c3c;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: 600;
}

.btn-detail {
  background-color: #0072ff;
  border: none;
  color: white;
  padding: 8px 14px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.btn-detail:hover {
  background-color: #005bb5;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
  box-shadow: 0 8px 25px rgba(0, 114, 255, 0.2);
}

.modal-konten h3 {
  margin-bottom: 20px;
  color: #0072ff;
  font-weight: 700;
}

.modal-konten p {
  margin: 8px 0;
  font-size: 1rem;
  color: #333;
}

.btn-tutup {
  margin-top: 25px;
  background-color: #0072ff;
  border: none;
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.btn-tutup:hover {
  background-color: #005bb5;
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

<!-- sumber/components/Reservasi.vue -->
<template>
  <section class="reservasi-kelas">
    <div class="container">
      <h2>Reservasi Kelas Gym</h2>
      <form @submit.prevent="submitReservasi" novalidate>
        <div class="form-group">
          <label for="nama">Nama Lengkap</label>
          <input
            id="nama"
            type="text"
            v-model="form.nama"
            placeholder="Masukkan nama lengkap"
            :class="{ error: errors.nama }"
          />
          <small v-if="errors.nama" class="error-text">{{ errors.nama }}</small>
        </div>

        <div class="form-group">
          <label for="kelas">Pilih Kelas</label>
          <select
            id="kelas"
            v-model="form.kelas"
            :class="{ error: errors.kelas }"
          >
            <option value="" disabled>-- Pilih kelas --</option>
            <option v-for="kelas in kelasList" :key="kelas.id" :value="kelas.nama">
              {{ kelas.nama }}
            </option>
          </select>
          <small v-if="errors.kelas" class="error-text">{{ errors.kelas }}</small>
        </div>

        <div class="form-group">
          <label for="tanggal">Tanggal Reservasi</label>
          <input
            id="tanggal"
            type="date"
            v-model="form.tanggal"
            :min="tanggalMin"
            :class="{ error: errors.tanggal }"
          />
          <small v-if="errors.tanggal" class="error-text">{{ errors.tanggal }}</small>
        </div>

        <button type="submit" class="btn-submit">Reservasi Sekarang</button>
      </form>

      <div v-if="pesanBerhasil" class="pesan-berhasil">
        <p>Reservasi berhasil! Terima kasih, {{ form.nama }}.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Reservasi',
  data() {
    return {
      form: {
        nama: '',
        kelas: '',
        tanggal: '',
      },
      errors: {},
      pesanBerhasil: false,
      kelasList: [
        { id: 1, nama: 'Yoga Pemula' },
        { id: 2, nama: 'HIIT Intensif' },
        { id: 3, nama: 'Zumba Dance' },
        { id: 4, nama: 'Pilates Intermediate' },
      ],
    };
  },
  computed: {
    tanggalMin() {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = (today.getMonth() + 1).toString().padStart(2, '0');
      const dd = today.getDate().toString().padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    },
  },
  methods: {
    submitReservasi() {
      this.errors = {};

      if (!this.form.nama.trim()) {
        this.errors.nama = 'Nama lengkap wajib diisi.';
      }
      if (!this.form.kelas) {
        this.errors.kelas = 'Silakan pilih kelas.';
      }
      if (!this.form.tanggal) {
        this.errors.tanggal = 'Tanggal reservasi harus dipilih.';
      } else if (this.form.tanggal < this.tanggalMin) {
        this.errors.tanggal = 'Tanggal tidak boleh sebelum hari ini.';
      }

      if (Object.keys(this.errors).length === 0) {
        this.pesanBerhasil = true;
        // Reset form setelah submit sukses
        this.form = { nama: '', kelas: '', tanggal: '' };
        // Hilangkan pesan berhasil setelah 4 detik
        setTimeout(() => {
          this.pesanBerhasil = false;
        }, 4000);
      }
    },
  },
};
</script>

<style scoped>
.reservasi-kelas {
  max-width: 500px;
  margin: 30px auto;
  background: #fff8f0;
  padding: 30px 25px;
  border-radius: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 8px 25px rgba(255, 114, 0, 0.2);
}

h2 {
  text-align: center;
  color: #ff7200;
  margin-bottom: 25px;
  font-weight: 700;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 8px;
  color: #cc5800;
}

input[type='text'],
input[type='date'],
select {
  padding: 10px 15px;
  border-radius: 25px;
  border: 2px solid #ffad70;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input[type='text']:focus,
input[type='date']:focus,
select:focus {
  outline: none;
  border-color: #ff7200;
  box-shadow: 0 0 10px rgba(255, 114, 0, 0.5);
}

.error {
  border-color: #d9534f !important;
}

.error-text {
  color: #d9534f;
  margin-top: 5px;
  font-size: 0.875rem;
}

.btn-submit {
  width: 100%;
  background-color: #ff7200;
  color: white;
  font-weight: 700;
  padding: 12px 0;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #cc5900;
}

.pesan-berhasil {
  margin-top: 25px;
  background-color: #dff0d8;
  color: #3c763d;
  padding: 15px 20px;
  border-radius: 15px;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 6px 18px rgba(60, 118, 61, 0.2);
}

@media (max-width: 480px) {
  .reservasi-kelas {
    padding: 25px 15px;
  }

  input[type='text'],
  input[type='date'],
  select {
    font-size: 0.9rem;
  }

  .btn-submit {
    font-size: 1rem;
  }
}
</style>

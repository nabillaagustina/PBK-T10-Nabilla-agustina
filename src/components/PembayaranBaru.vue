<!-- sumber/components/PembayaranBaru.vue -->
<template>
  <section class="pembayaran-baru">
    <div class="container">
      <h2>Input Pembayaran Baru</h2>
      <form @submit.prevent="submitPembayaran" novalidate>
        <div class="form-group">
          <label for="nama">Nama Anggota</label>
          <input
            id="nama"
            type="text"
            v-model="form.nama"
            placeholder="Masukkan nama anggota"
            :class="{ error: errors.nama }"
          />
          <small v-if="errors.nama" class="error-text">{{ errors.nama }}</small>
        </div>

        <div class="form-group">
          <label for="jumlah">Jumlah Pembayaran (Rp)</label>
          <input
            id="jumlah"
            type="number"
            v-model.number="form.jumlah"
            placeholder="Masukkan jumlah pembayaran"
            min="1000"
            :class="{ error: errors.jumlah }"
          />
          <small v-if="errors.jumlah" class="error-text">{{ errors.jumlah }}</small>
        </div>

        <div class="form-group">
          <label for="tanggal">Tanggal Pembayaran</label>
          <input
            id="tanggal"
            type="date"
            v-model="form.tanggal"
            :min="tanggalMin"
            :class="{ error: errors.tanggal }"
          />
          <small v-if="errors.tanggal" class="error-text">{{ errors.tanggal }}</small>
        </div>

        <button type="submit" class="btn-submit">Simpan Pembayaran</button>
      </form>

      <div v-if="pesanBerhasil" class="pesan-berhasil">
        <p>Pembayaran berhasil dicatat untuk {{ form.nama }}.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PembayaranBaru',
  data() {
    return {
      form: {
        nama: '',
        jumlah: null,
        tanggal: '',
      },
      errors: {},
      pesanBerhasil: false,
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
    submitPembayaran() {
      this.errors = {};

      if (!this.form.nama.trim()) {
        this.errors.nama = 'Nama anggota wajib diisi.';
      }
      if (this.form.jumlah === null || this.form.jumlah < 1000) {
        this.errors.jumlah = 'Jumlah pembayaran minimal Rp 1.000.';
      }
      if (!this.form.tanggal) {
        this.errors.tanggal = 'Tanggal pembayaran harus dipilih.';
      } else if (this.form.tanggal < this.tanggalMin) {
        this.errors.tanggal = 'Tanggal tidak boleh sebelum hari ini.';
      }

      if (Object.keys(this.errors).length === 0) {
        this.pesanBerhasil = true;
        // Reset form setelah submit sukses
        this.form = { nama: '', jumlah: null, tanggal: '' };
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
.pembayaran-baru {
  max-width: 480px;
  margin: 30px auto;
  padding: 25px 20px;
  background-color: #fff9f5;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(255, 111, 0, 0.15);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  color: #e65100;
  margin-bottom: 30px;
  font-weight: 700;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 6px;
  color: #bf360c;
}

input[type='text'],
input[type='number'],
input[type='date'] {
  padding: 10px 15px;
  border-radius: 30px;
  border: 2px solid #ff7043;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input[type='text']:focus,
input[type='number']:focus,
input[type='date']:focus {
  outline: none;
  border-color: #e65100;
  box-shadow: 0 0 10px rgba(230, 81, 0, 0.5);
}

.error {
  border-color: #d32f2f !important;
}

.error-text {
  color: #d32f2f;
  margin-top: 5px;
  font-size: 0.875rem;
}

.btn-submit {
  width: 100%;
  background-color: #e65100;
  color: white;
  font-weight: 700;
  padding: 12px 0;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #bf360c;
}

.pesan-berhasil {
  margin-top: 25px;
  background-color: #e8f5e9;
  color: #388e3c;
  padding: 15px 20px;
  border-radius: 15px;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 6px 18px rgba(56, 142, 60, 0.2);
}

@media (max-width: 480px) {
  .pembayaran-baru {
    padding: 20px 15px;
  }

  input[type='text'],
  input[type='number'],
  input[type='date'] {
    font-size: 0.95rem;
  }

  .btn-submit {
    font-size: 1rem;
  }
}
</style>

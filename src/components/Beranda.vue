<!-- sumber/components/Beranda.vue -->
<template>
  <section class="beranda">
    <div class="container">
      <h2>Selamat Datang di Sistem Manajemen Gym</h2>
      <p>
        Kelola keanggotaan, jadwal kelas, pelatih, dan pembayaran dengan mudah dan efisien.  
        Mari mulai perjalanan kebugaran Anda bersama kami!
      </p>
      <button @click="mulaiSekarang" class="btn-utama">Mulai Sekarang</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Beranda',
  methods: {
    mulaiSekarang() {
      // Contoh aksi: arahkan ke halaman reservasi
      this.$router.push('/reservasi');
    }
  }
};
</script>

<style scoped>
.beranda {
  background: linear-gradient(135deg, #00c6ff 0%, #0072ff 100%);
  color: white;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 114, 255, 0.4);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 700px;
}

h2 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
}

p {
  font-size: 1.25rem;
  margin-bottom: 30px;
  line-height: 1.5;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
}

.btn-utama {
  background-color: #fff;
  color: #0072ff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 14px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.4);
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.btn-utama:hover {
  background-color: #005bb5;
  color: white;
  box-shadow: 0 8px 25px rgba(0, 91, 181, 0.7);
}

@media (max-width: 600px) {
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .btn-utama {
    width: 100%;
    padding: 14px 0;
  }
}
</style>

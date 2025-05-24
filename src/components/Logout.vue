<template>
  <section class="logout">
    <div class="container">
      <h2>Keluar...</h2>
      <p>Anda sedang logout, mohon tunggu sebentar...</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Logout',
  mounted() {
    // Contoh: hapus session / token di localStorage atau cookie
    localStorage.removeItem('token');  // contoh hapus token
    // Bisa juga hapus data lain jika ada

    // Redirect ke halaman masuk setelah 1 detik
    setTimeout(() => {
      this.$router.push('/masuk');
    }, 1000);
  }
};
</script>

<style scoped>
.logout {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f8d7da;
  color: #721c24;
  padding: 40px 20px;
  text-align: center;
  border-radius: 10px;
}

.container {
  max-width: 400px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.2);
}

h2 {
  margin-bottom: 20px;
}
</style>

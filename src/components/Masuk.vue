<template>
  <section class="masuk">
    <div class="container">
      <h2>Masuk ke Akun Anda</h2>
      <form @submit.prevent="prosesMasuk" novalidate>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Masukkan username Anda"
            required
          />
          <span v-if="errorUsername" class="error">{{ errorUsername }}</span>
        </div>

        <div class="form-group">
          <label for="password">Kata Sandi</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Masukkan kata sandi"
            required
          />
          <span v-if="errorPassword" class="error">{{ errorPassword }}</span>
        </div>

        <button type="submit" class="btn-utama">Masuk</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Masuk',
  data() {
    return {
      username: '',
      password: '',
      errorUsername: '',
      errorPassword: ''
    };
  },
  methods: {
    prosesMasuk() {
      this.errorUsername = '';
      this.errorPassword = '';

      if (!this.username) {
        this.errorUsername = 'Username wajib diisi.';
      }

      if (!this.password) {
        this.errorPassword = 'Kata sandi wajib diisi.';
      }

      if (!this.errorUsername && !this.errorPassword) {
        alert(`Login berhasil dengan username: ${this.username}`);
        this.$router.push('/Beranda');
      }
    }
  }
};
</script>

<style scoped>
.masuk {
  background: #f0f8ff;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 114, 255, 0.15);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h2 {
  margin-bottom: 30px;
  color: #0072ff;
  font-weight: 700;
  font-size: 2rem;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #444;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input[type='text']:focus,
input[type='password']:focus {
  outline: none;
  border-color: #0072ff;
  box-shadow: 0 0 8px rgba(0, 114, 255, 0.3);
}

.error {
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 6px;
  display: block;
}

.btn-utama {
  background-color: #0072ff;
  color: white;
  font-weight: 700;
  border: none;
  padding: 14px 0;
  width: 100%;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 114, 255, 0.4);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.btn-utama:hover {
  background-color: #005bb5;
  box-shadow: 0 8px 25px rgba(0, 91, 181, 0.7);
}

@media (max-width: 480px) {
  .container {
    padding: 30px 20px;
  }

  h2 {
    font-size: 1.6rem;
  }
}
</style>

<template>
  <section class="profil">
    <div class="container">
      <h2>Profil Pengguna</h2>
      <div class="profil-card">
        <div class="avatar">
          <img :src="user.avatar || defaultAvatar" alt="Avatar Pengguna" />
        </div>
        <div class="info">
          <h3>{{ user.nama }}</h3>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Telepon:</strong> {{ user.telepon }}</p>
          <p><strong>Alamat:</strong> {{ user.alamat }}</p>
          <button @click="editProfil" class="btn-edit">Edit Profil</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Profil",
  data() {
    return {
      defaultAvatar:
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      user: {
        nama: "Rizky Pratama",
        email: "rizky.pratama@example.com",
        telepon: "+62 812-3456-7890",
        alamat: "Jl. Merdeka No. 123, Jakarta",
        avatar: "", // bisa isi URL avatar jika ada
      },
    };
  },
  methods: {
    editProfil() {
      alert("Fitur edit profil belum tersedia.");
    },
  },
};
</script>

<style scoped>
.profil {
  max-width: 700px;
  margin: 40px auto;
  background: #e0f2f1;
  border-radius: 20px;
  padding: 30px 25px;
  box-shadow: 0 12px 25px rgba(0, 77, 64, 0.15);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #004d40;
}

h2 {
  text-align: center;
  font-weight: 700;
  margin-bottom: 40px;
  color: #00796b;
  letter-spacing: 1px;
}

.profil-card {
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  background: white;
  border-radius: 20px;
  padding: 25px 20px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.07);
}

.avatar {
  flex: 0 0 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #00796b;
  width: 150px;
  height: 150px;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  flex: 1 1 auto;
}

.info h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 700;
  color: #004d40;
}

.info p {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #00695c;
}

.btn-edit {
  margin-top: 20px;
  background-color: #2e7d32;
  color: white;
  padding: 10px 22px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-edit:hover {
  background-color: #1b5e20;
}

@media (max-width: 600px) {
  .profil-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .avatar {
    margin-bottom: 20px;
  }

  .info p {
    font-size: 1rem;
  }
}
</style>

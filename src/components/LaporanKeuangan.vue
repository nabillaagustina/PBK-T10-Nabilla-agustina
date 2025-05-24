<template>
  <section class="laporan-keuangan">
    <div class="container">
      <h2>Laporan Keuangan Gym</h2>

      <div class="summary">
        <div class="card pemasukan">
          <h3>Pemasukan</h3>
          <p>Rp {{ formatRupiah(totalPemasukan) }}</p>
        </div>
        <div class="card pengeluaran">
          <h3>Pengeluaran</h3>
          <p>Rp {{ formatRupiah(totalPengeluaran) }}</p>
        </div>
        <div
          class="card saldo"
          :class="{ positif: saldo >= 0, negatif: saldo < 0 }"
        >
          <h3>Saldo</h3>
          <p>Rp {{ formatRupiah(saldo) }}</p>
        </div>
      </div>

      <p class="catatan">
        * Grafik tidak ditampilkan karena fitur Chart.js tidak digunakan.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "LaporanKeuangan",
  data() {
    return {
      pemasukanBulanan: [5000000, 6000000, 4500000, 7000000, 6500000, 6000000],
      pengeluaranBulanan: [3000000, 3500000, 3200000, 4000000, 3800000, 3600000],
    };
  },
  computed: {
    totalPemasukan() {
      return this.pemasukanBulanan.reduce((a, b) => a + b, 0);
    },
    totalPengeluaran() {
      return this.pengeluaranBulanan.reduce((a, b) => a + b, 0);
    },
    saldo() {
      return this.totalPemasukan - this.totalPengeluaran;
    },
  },
  methods: {
    formatRupiah(nilai) {
      return nilai.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style scoped>
.laporan-keuangan {
  max-width: 700px;
  margin: 30px auto;
  background: #f0f4f3;
  padding: 30px 25px;
  border-radius: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 12px 25px rgba(50, 80, 80, 0.1);
  color: #004d40;
}

h2 {
  text-align: center;
  font-weight: 700;
  margin-bottom: 40px;
  color: #00796b;
  letter-spacing: 1px;
}

.summary {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  flex: 1 1 30%;
  background-color: white;
  border-radius: 18px;
  padding: 30px 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  cursor: default;
}

.card:hover {
  transform: translateY(-6px);
}

.card h3 {
  margin-bottom: 15px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #004d40;
  letter-spacing: 0.05em;
}

.card p {
  font-size: 2rem;
  font-weight: 800;
  color: #00695c;
}

.pemasukan {
  border-top: 6px solid #2e7d32;
}

.pengeluaran {
  border-top: 6px solid #d32f2f;
}

.saldo {
  border-top: 6px solid #00796b;
}

.saldo.positif p {
  color: #2e7d32;
}

.saldo.negatif p {
  color: #d32f2f;
}

.catatan {
  margin-top: 30px;
  font-style: italic;
  text-align: center;
  color: #777;
}

@media (max-width: 720px) {
  .summary {
    flex-direction: column;
  }

  .card {
    flex: 1 1 100%;
    margin-bottom: 20px;
  }
}
</style>

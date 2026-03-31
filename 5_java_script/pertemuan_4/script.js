// ===== Data Model Section =====
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
    this.createdAt = new Date();
    this.lastActionAt = new Date();
  }

  // Menyimpan kendaraan yang sedang disewa.
  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    this.lastActionAt = new Date();
    return `[Transaksi Sukses] ${this.nama} telah menyewa kendaraan: ${this.kendaraanDisewa}.`;
  }

  // Mengosongkan kendaraan sewaan pelanggan.
  kembalikanKendaraan() {
    const kendaraanTerakhir = this.kendaraanDisewa;
    this.kendaraanDisewa = null;
    this.lastActionAt = new Date();
    return `[Pengembalian] ${this.nama} telah mengembalikan kendaraan: ${kendaraanTerakhir}.`;
  }
}

class SistemManajemen {
  constructor() {
    this.daftarPelanggan = [];
  }

  // Menambahkan pelanggan baru ke daftar.
  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  // Mengambil pelanggan dengan status sewa aktif.
  getPenyewaAktif() {
    return this.daftarPelanggan.filter((pelanggan) => pelanggan.kendaraanDisewa !== null);
  }
}

// ===== App State Section =====
const sistemTransportasi = new SistemManajemen();
const activityEntries = [];

// ===== DOM Reference Section =====
const activityLog = document.getElementById("activityLog");
const penyewaList = document.getElementById("penyewaList");
const totalPelanggan = document.getElementById("totalPelanggan");
const totalPenyewa = document.getElementById("totalPenyewa");
const lastUpdated = document.getElementById("lastUpdated");
const refreshButton = document.getElementById("refreshButton");
const tambahPelangganForm = document.getElementById("tambahPelangganForm");
const namaInput = document.getElementById("namaInput");
const teleponInput = document.getElementById("teleponInput");
const kendaraanInput = document.getElementById("kendaraanInput");

// ===== Utility Function Section =====
// Memformat waktu ke tampilan lokal Indonesia.
const formatDateTime = (date) =>
  new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);

// Mengubah waktu menjadi format relatif.
const formatRelativeTime = (date) => {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 60) {
    return "baru saja";
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} menit lalu`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} jam lalu`;
  }

  const days = Math.floor(hours / 24);
  return `${days} hari lalu`;
};

// Menambahkan aktivitas baru ke catatan.
const addActivity = (message) => {
  activityEntries.unshift({
    message,
    timestamp: new Date(),
  });

  if (activityEntries.length > 12) {
    activityEntries.pop();
  }

  renderActivity();
};

// ===== Render Function Section =====
// Menampilkan semua pelanggan beserta statusnya.
const renderPelanggan = () => {
  penyewaList.innerHTML = "";

  if (sistemTransportasi.daftarPelanggan.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className =
      "rounded-2xl border border-dashed border-slate-700 px-4 py-6 text-center text-sm text-slate-400";
    emptyState.textContent = "Belum ada pelanggan yang terdaftar.";
    penyewaList.appendChild(emptyState);
    return;
  }

  sistemTransportasi.daftarPelanggan.forEach((pelanggan, index) => {
    const isAktif = pelanggan.kendaraanDisewa !== null;
    const statusLabel = isAktif ? "Aktif" : "Nonaktif";
    const statusClasses = isAktif
      ? "border-cyan-300/40 text-cyan-200"
      : "border-slate-500/60 text-slate-300";
    const kendaraanLabel = isAktif ? pelanggan.kendaraanDisewa : "Belum menyewa";

    const item = document.createElement("article");
    item.className =
      "rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 transition hover:border-cyan-400/50";

    item.innerHTML = `
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.24em] text-slate-500">Pelanggan #${index + 1}</p>
          <h4 class="mt-1 text-lg font-semibold text-slate-100">${pelanggan.nama}</h4>
          <p class="text-sm text-slate-400">${pelanggan.nomorTelepon}</p>
          <p class="mt-1 text-xs text-slate-500">Update: ${formatRelativeTime(pelanggan.lastActionAt)}</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <span class="rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses}">
            ${statusLabel}
          </span>
          <span class="rounded-full border border-slate-600/70 px-3 py-1 text-xs font-semibold text-slate-200">
            ${kendaraanLabel}
          </span>
        </div>
      </div>
    `;

    penyewaList.appendChild(item);
  });
};

// Menampilkan daftar aktivitas terbaru sistem.
const renderActivity = () => {
  activityLog.innerHTML = "";

  if (activityEntries.length === 0) {
    const item = document.createElement("li");
    item.className =
      "rounded-xl border border-slate-800/70 bg-slate-900/60 px-4 py-3 text-xs text-slate-400";
    item.textContent = "Belum ada aktivitas.";
    activityLog.appendChild(item);
    return;
  }

  activityEntries.forEach((entry) => {
    const item = document.createElement("li");
    item.className =
      "rounded-xl border border-slate-800/70 bg-slate-900/60 px-4 py-3 text-xs text-slate-300";
    item.innerHTML = `
      <p class="font-medium text-slate-200">${entry.message}</p>
      <p class="mt-1 text-[11px] text-slate-500">${formatRelativeTime(entry.timestamp)} (${formatDateTime(entry.timestamp)})</p>
    `;
    activityLog.appendChild(item);
  });
};

// Memperbarui ringkasan dan data tampilan.
const renderDashboard = () => {
  renderPelanggan();
  totalPelanggan.textContent = sistemTransportasi.daftarPelanggan.length;
  totalPenyewa.textContent = sistemTransportasi.getPenyewaAktif().length;
  lastUpdated.textContent = formatDateTime(new Date());
};

// ===== Event Function Section =====
// Menangani submit form tambah pelanggan.
const handleTambahPelanggan = (event) => {
  event.preventDefault();

  const nama = namaInput.value.trim();
  const nomorTelepon = teleponInput.value.trim();
  const kendaraan = kendaraanInput.value.trim();

  if (!nama || !nomorTelepon) {
    return;
  }

  const pelangganBaru = new Pelanggan(nama, nomorTelepon);
  sistemTransportasi.tambahPelanggan(pelangganBaru);
  addActivity(`[Pelanggan Baru] ${nama} berhasil ditambahkan ke sistem.`);

  if (kendaraan) {
    const pesanSewa = pelangganBaru.sewaKendaraan(kendaraan);
    addActivity(pesanSewa);
  } else {
    addActivity(`[Status] ${nama} terdaftar sebagai pelanggan nonaktif.`);
  }

  tambahPelangganForm.reset();
  renderDashboard();
};

// Menangani klik tombol refresh dashboard.
const handleRefresh = () => {
  addActivity("[Refresh] Dashboard diperbarui.");
  renderDashboard();
};

// ===== Initialization Function Section =====
// Mengisi data awal pelanggan untuk simulasi.
const seedInitialData = () => {
  const pelanggan1 = new Pelanggan("Andi Saputra", "081234567890");
  const pelanggan2 = new Pelanggan("Budi Santoso", "085678901234");
  const pelanggan3 = new Pelanggan("Citra Kirana", "089876543210");

  sistemTransportasi.tambahPelanggan(pelanggan1);
  sistemTransportasi.tambahPelanggan(pelanggan2);
  sistemTransportasi.tambahPelanggan(pelanggan3);

  addActivity("[Data Awal] 3 pelanggan awal dimuat.");

  addActivity(pelanggan1.sewaKendaraan("Mobil Toyota Avanza"));
  addActivity(pelanggan3.sewaKendaraan("Motor Honda Vario"));
  addActivity(`[Status] ${pelanggan2.nama} terdaftar sebagai pelanggan nonaktif.`);
};

// Menghubungkan event listener ke elemen.
const bindEvents = () => {
  tambahPelangganForm.addEventListener("submit", handleTambahPelanggan);
  refreshButton.addEventListener("click", handleRefresh);
};

// Menjalankan inisialisasi aplikasi saat awal.
const initApp = () => {
  seedInitialData();
  bindEvents();
  renderDashboard();
};

initApp();
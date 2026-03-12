// 1. Array untuk menyimpan daftar produk
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// 2. Fungsi untuk menampilkan produk ke dalam tabel HTML
function tampilkanProduk() {
    const tbody = document.getElementById("daftarProduk");
    const badge = document.getElementById("jumlahProduk");

    if (badge) badge.textContent = produkToko.length + " Produk";

    tbody.innerHTML = "";

    if (produkToko.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5"><div class="empty-state">Belum ada produk. Tambahkan produk pertama Anda.</div></td></tr>`;
        return;
    }

    produkToko.forEach(produk => {
        let formatHarga = new Intl.NumberFormat('id-ID', {
            style: 'currency', 
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(produk.harga);

        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${produk.id}</td>
            <td>${produk.nama}</td>
            <td>${formatHarga}</td>
            <td>${produk.stok}</td>
            <td>
                <button class="btn-hapus" onclick="hapusProduk(${produk.id})">Hapus</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// 3. Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
    let idBaru = 1;
    if (produkToko.length > 0) {
        idBaru = Math.max(...produkToko.map(p => p.id)) + 1;
    }

    produkToko.push({
        id: idBaru,
        nama: nama,
        harga: parseInt(harga),
        stok: parseInt(stok)
    });

    tampilkanProduk();
}

// 4. Fungsi untuk menghapus produk
function hapusProduk(id) {
    produkToko = produkToko.filter(produk => produk.id !== id);

    tampilkanProduk();
}

// 5. Integrasi Form HTML 
document.getElementById("formTambahProduk").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nama = document.getElementById("nama").value;
    let harga = document.getElementById("harga").value;
    let stok = document.getElementById("stok").value;

    tambahProduk(nama, harga, stok);

    this.reset();
});

tampilkanProduk();
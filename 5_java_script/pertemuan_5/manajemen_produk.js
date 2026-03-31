// List produk
let inventory = [
    { id: 1, nama: "Laptop Pro", harga: 15000000, stok: 10 },
    { id: 2, nama: "Mouse Wireless", harga: 250000, stok: 50 },
    { id: 3, nama: "Keyboard Mechanical", harga: 800000, stok: 20 },
    { id: 4, nama: "Monitor 24 Inch", harga: 2100000, stok: 15 },
    { id: 5, nama: "Headset Gaming", harga: 600000, stok: 25 }
];

const tambahProduk = (produkBaru) => {
    inventory = [...inventory, { id: inventory.length + 1, ...produkBaru }];
    console.log(`✅ Produk "${produkBaru.nama}" berhasil ditambahkan!`);
};

const hapusProduk = (...ids) => {
    inventory = inventory.filter(item => !ids.includes(item.id));
    console.log( `🗑️  Produk dengan ID [${ids}] telah dihapus.`);
};

const tampilkanProduk = () => {
    console.log("\n=== DAFTAR PRODUK TOKO ONLINE ===");
    console.log("--------------------------------------------------");
    inventory.forEach(({ id, nama, harga, stok }) => {
        console.log(`ID: ${id} | Nama: ${nama.padEnd(20)} | Harga: Rp${harga.toLocaleString()} | Stok: ${stok}`);
    });
    console.log("--------------------------------------------------\n");
};

tampilkanProduk();
// contoh penggunaan fungsi
tambahProduk({ nama: "Webcam HD", harga: 450000, stok: 12 });
hapusProduk(2, 4);
tampilkanProduk();
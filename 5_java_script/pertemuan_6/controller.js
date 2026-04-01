let dataUsers = require('./data.js');

const tampilkanData = (pesan) => {
    console.log(`\n=== ${pesan} ===`);
    console.log("------------------------------------------------------------");
    dataUsers.map((user, index) => {
        console.log(`${index + 1}. ${user.nama} (${user.umur} thn) - ${user.alamat} [${user.email}]`);
    });
    console.log("------------------------------------------------------------");
};

const tambahData = () => {
    const dataBaru1 = { nama: "Joko", umur: 28, alamat: "Papua", email: "joko@mail.com" };
    const dataBaru2 = { nama: "Kiki", umur: 22, alamat: "Aceh", email: "kiki@mail.com" };
    
    dataUsers.push(dataBaru1, dataBaru2);
    console.log("✅ 2 Data baru berhasil ditambahkan!");
};

const hapusDataTerakhir = () => {
    const dihapus = dataUsers.pop();
    console.log(`🗑️  Data dengan nama "${dihapus.nama}" telah dihapus.`);
};


// contoh penggunaan

tampilkanData("DATA AWAL (10 DATA)");

tambahData();
tampilkanData("DATA SETELAH DITAMBAH (12 DATA)");

hapusDataTerakhir();
tampilkanData("DATA AKHIR SETELAH DIHAPUS 1");
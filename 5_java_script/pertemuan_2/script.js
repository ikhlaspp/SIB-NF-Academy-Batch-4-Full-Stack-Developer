// 1. Data Pegawai
let namaPegawai = "Dodi Prayodi";
let umur = "25 tahun";
let jabatan = "Manajer";
let status = "Menikah";

// 2. Logika Gaji Pokok (IF)
let gapok = 0;
let jabatanLower = jabatan.toLowerCase(); 

if (jabatanLower === "manajer") {
    gapok = 15000000;
} else if (jabatanLower === "asisten manajer") {
    gapok = 10000000;
} else if (jabatanLower === "staff") {
    gapok = 5000000;
}

// 3. Tunjangan Jabatan & BPJS
let tunjab = 0.15 * gapok;
let bpjs = 0.10 * gapok;

// 4. Logika Tunjangan Keluarga (Ternary)
let tunjanganKeluarga = (status.toLowerCase() === "menikah") ? (0.20 * gapok) : 0;

// 5. Hitung Total Gaji
let totalGaji = gapok + tunjab + bpjs + tunjanganKeluarga;

function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
}

// 6. Cetak ke TBODY
let tbodyHTML = `
    <tr>
        <td>${namaPegawai}</td>
        <td>${umur}</td>
        <td>${jabatan}</td>
        <td>${status}</td>
        <td>${formatRupiah(gapok)}</td>
        <td>${formatRupiah(tunjab)}</td>
        <td>${formatRupiah(bpjs)}</td>
        <td>${formatRupiah(tunjanganKeluarga)}</td>
    </tr>
`;
document.getElementById("isiData").innerHTML = tbodyHTML;

// 7. Cetak ke TFOOT
let tfootHTML = `
    <tr>
        <td colspan="4" style="text-align: right;"><strong>Total Gaji Keseluruhan:</strong></td>
        <td colspan="4" style="text-align: center;"><strong>${formatRupiah(totalGaji)}</strong></td>
    </tr>
`;
document.getElementById("totalData").innerHTML = tfootHTML;
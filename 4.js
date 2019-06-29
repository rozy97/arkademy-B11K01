// FIRMANSYAH ROZY

const hitungPohon = (tinggiAwal, tahun) => {
	let tinggi = tinggiAwal;
	for (let i = 0; i < tahun; i++) {
		tinggi = tinggi + 1;
		tinggi = tinggi * 3;
		tinggi = tinggi - 1.5;
		tinggi = (tinggi * 0.15) + tinggi;
		if (i % 2 == 1) {
			tinggi = tinggi / 2;
		}
	}
	return tinggi.toFixed(1) + " m";
}
console.log(hitungPohon(2,2));
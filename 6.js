// FIRMANSYAH ROZY

// (kutipan dari soal) Setiap saklar mempunyai kemampuan masing-masing, saklar nomor X hanya dapat menyalakan lampu bernomor kelipatan X. 
// berarti saklar nomor 1 bisa menyalakan semua lampu
// kurang paham denga soalnya
// saya anggap saklar hanya no 2 & 3 

const hitung_lampu_on = num => {
	let lampuOn = 0;
	let str = num.toString();
	for (var i = 0; i < str.length; i++) {
		if ((str[i] % 2 == 0) || (str[i] % 3 == 0)) {
			lampuOn += 1;
		}
	}
	return lampuOn + " lampu on";
}
console.log(hitung_lampu_on(135786557890907));
// FIRMANSYAH ROZY

const segitiga_kosong = num => {
	let segitiga = "";
	for (let i = 0; i < num/2; i++) {
		for (let j = 0; j < num; j++) {
			if (i == 0) {
				segitiga += "* ";
			} else if (i == j || j == num - i - 1) {
				segitiga += "* ";
			} else {
				segitiga += "  ";
			}
		}
		segitiga += "\n";
	}
	return segitiga;
}
console.log(segitiga_kosong(11));
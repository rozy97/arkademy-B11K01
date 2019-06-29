// FIRMANSYAH ROZY
// disarankan menggunakan regular expression,
// tapi belum terlalu paham regex, maaf.
const isUsernameValid = username => {
	let alphabet = "qwertyuiopasdfghjklzxcvbnm";
	let num = 0;
	if (username.length < 5 && username.length > 9) {
		return false;
	} else {
		for (let i = 0; i < username.length; i++) {
			if (alphabet.includes(username[i]) == false) {
				num += 1;
			}
		}
		if (num > 0) {
			return false;
		} else {
			return true;
		}
	}
}

const isPasswordValid = password => {
	let hurufBesar, hurufKecil, simbol, pagar, ;
	hurufBesar = "QWERTYUIOPASDFGHJKLZXCVBNM";
	hurufKecil ="qwertyuiopasdfghjklzxcvbnm";
	simbol = "!@$%^&*()_-+=[]{}/><.,0123456789";
	pagar = 0;
	let a,b,c = 0;
	if (password.length > 8) {
		for (let i = 0; i < password.length; i++) {
			if (password[i] == "#") {
				pagar += 1;
			} 
		}
		if (pagar > 0) {
			for (let j = 0; j < password.length; j++) {
				if (hurufBesar.includes(password[j])) {a += 1;}
				if (hurufKecil.includes(password[j])) {b += 1;}
				if (simbol.includes(password[j])) {c += 1;}
			}
			if (a == 0 || b == 0 || c == 0) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	} else {
		return false;
	}

}
const isEmailValid = email => {
	return false;
}
const isPhoneValid = phone => {
	let num = 0;
	let number = "0123456789"
	if (((phone[0] == "+" && phone[1] == "6") && phone[2] == "2") && (phone.length > 8 && phone.length < 15)) {
		for (var i = 3; i < phone.length; i++) {
			if (number.includes(phone[i]) == false) {
				num += 1;
			}
		}
		if (num > 0) {return false;} else {return true;};
	} else {return false;}
}

console.log(isUsernameValid('zeronull'));
console.log(isUsernameValid('userOke'));
console.log(isPasswordValid('p@ssW0rd#'));
console.log(isPasswordValid('C0d3YourFuture!@'));
console.log(isPhoneValid('+6281234567890'));
console.log(isEmailValid('iqbal@mail.c'));

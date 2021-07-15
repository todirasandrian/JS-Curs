//alert('hello again'); 

//Exercitiul 1

var str = 'abcde';
console.log(str[0]); //va socoti litera 'a'
console.log(str[1]); //va socoti litera 'b'
console.log(str[4]); //va socoti litera 'e'

//alert(str[0]); //va socoti litera 'a'
//alert(str[1]); //va socoti litera 'b'
//alert(str[4]); //va socoti litera 'e'

function func() { return (60 * 60); }
console.log(func());

//console.log(60 * 60); //secunde intr-o ora
//alert(60 * 60); //secunde intr-o ora

//Exercitiul 2 (Работа с переменными)

var a = 10;
var b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

function calc() {
	var c = parseInt(document.querySelector("#value1").value);
	var d = parseInt(document.querySelector("#value2").value);
	var op = document.querySelector ("#operator").value;

	if (op == "add") {
		calculate = c + d;
	}
	else if (op == "min") {
		calculate = c - d;
	}
	else if (op == "div") {
		calculate = c / d;
	}
	else if (op == "mul") {
		calculate = c * d;
	}
	document.querySelector("#result").innerHTML = calculate;
}

//Exercitiul 3 (Работа со строками)

let str1 = 'Hello,';
let str2 = ' World';
console.log(str1 + str2);

//Exercitiul 4 (Интерполяция)

function myInfo(fname, lage, country) {
	return "My name is " + fname + " I' am " + lage + " old age " 
						+ country + " i my country."; 
}
console.log(myInfo("Andrei", "30", "Moldova"));

//Exercitiul 5 folosind html incorport in js

let user = {
	name: 'Ion',
	age: 32,
	marStatus: true,
};

let divTemp = document.querySelector('#temp');

divTemp.innerHTML = `<h2>${user.name}</h2>
										<p>Age: ${user.age}</p>
										<p>Marial status: ${user.marStatus}</p>
										`;
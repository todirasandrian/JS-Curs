//let countDownDate = new Date("Sep 1, 2021 00:00:00");
//const dOut = document.querySelector('#out');
//let clear;
//function endData() {
// let now = new Date().getTime();
// let timeInterval = countDownDate - now;

// let days = Math.floor(timeInterval  /(1000 * 60 * 60 * 24));
// let hours = Math.floor((timeInterval % (1000 * 60 * 60 * 24)) /
//(1000 * 60 * 60));
// let minutes = Math.floor((timeInterval % (1000 * 60 * 60)) / (1000 * 60));
// let seconds = Math.floor((timeInterval % (1000 * 60)) / 1000);

// dOut.innerHTML = days + " " + "zile" + " " + hours + " " + "ore" + "
//" + minutes + " " + "minute" + seconds + " " + "secunde";
// if(timeInterval  < 0) {
//   clearInterval(clear);
//   dOut.innerHTML = 'Vara să sfărșit!!!! Obidna da?'
// }
//}

//clear = setInterval(endData, 1000);

//setInterval// function name, interval
//setTimeout//function name, interval
//clearTimeout//asign to variable, variable



let counter = 5;
let timer = document.querySelector('#clear');
let clear;

showMessage();
function showMessage() {
	document.querySelector('#message').innerHTML = 'Cam asa ceva';
	counter --;
	timer.innerHTML = 'Mesajul acesta va disparea in urmatoarele secumde' + " "  + counter;
	if (counter < 0) {
		clearTimeout (clear);
		timer.innerHTML = " ";
	} else {
		clear = setTimeout (showMessage, 1000);
	}
}
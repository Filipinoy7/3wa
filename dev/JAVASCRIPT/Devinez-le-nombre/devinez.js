var chiffre;
var ordi;
var tentative = 0;


function getRandomInteger(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;

}

ordi = getRandomInteger(1, 1000);

console.log(ordi);




do {
		chiffre = parseInt(window.prompt("choisir un chiffre"));
	if (chiffre < ordi) {
		alert("Plus grand");
		tentative++;
}

	else if (chiffre > ordi) {
		alert("Plus petit");
		tentative++;
}
	else if (chiffre == ordi) {
		tentative++;
	}

}	while (chiffre != ordi);

document.write("<p>trouvé en "+tentative+" fois</p>");
console.log(tentative);


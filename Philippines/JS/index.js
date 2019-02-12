/*'use strict';

var choixUtilisateur = window.prompt("Choisissez entre Pierre,Feuille et Ciseaux ?").toLowerCase();

var choixOrdi = Math.random();
console.log(choixOrdi);

var result ;

if (choixOrdi < (1/3)) { 
	choixOrdi = "Pierre";
	document.write("Pierre");

} else if (choixOrdi >= (1/3) && choixOrdi < (2/3)) {
	choixOrdi = "Feuille";
	document.write("Feuille");

} else {
	choixOrdi = "Ciseaux"
	document.write("Ciseaux");

}


if (choixUtilisateur == "pierre" && choixOrdi == "Ciseaux") {
	document.write("<p>Vous avez gagné !</p>");
}
else if (choixUtilisateur == "pierre" && choixOrdi == "Feuille") {
	document.write("<p>Vous avez perdu !</p>");
}
else if (choixUtilisateur == "pierre" && choixOrdi == "Pierre") {
	document.write("<p>Egalité !</p>");
}*/
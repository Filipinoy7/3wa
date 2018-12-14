'use strict';

var choixUtilisateur = window.prompt("Choisissez entre Pierre,Feuille et Ciseaux ?").toLowerCase();

var choixOrdi = Math.random();
console.log(choixOrdi);



var result ;

/*switch (choixOrdi) {
	case (choixOrdi <= 0.33) :
	document.write("Pierre");
	break;

	case (choixOrdi >= 0.33) :
	document.write("Feuille");
	break;

	case (choixOrdi == 0.66) :
	document.write("Ciseaux");
	break;

	case (choixOrdi >= 0.66) :
	document.write("Ciseaux");
	break;
}*/

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
}


/*'use strict';

var computer;
var player;
var random;

player = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');
player = player.toLowerCase();

random = Math.random();

if(random < 1 / 3)          // Entre 0.00 et ~0.33 : l'ordinateur sélectionne la pierre
{
    computer = 'pierre';
}
else if(random < 2 / 3)     // Entre ~0.33 et ~0.66 : l'ordinateur sélectionne la feuille
{
    computer = 'feuille';
}
else                        // Au-delà de ~0.66 : l'ordinateur sélectionne le ciseau
{
    computer = 'ciseau';
}

document.write("<p>Choix de l'ordinateur : <strong>" + computer + '</strong></p>');


if(computer == player)
{
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}
else
{
	switch(computer) {
    	case 'pierre': 
            if(player == 'feuille')
            {
                document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
            }
            else // player == 'ciseau'
            {
                document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
            }
        break;
        
        case 'feuille':
            if(player == 'pierre')
            {
                document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
            }
            else // player == 'ciseau'
            {
                document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
            }
        break;
        
        case 'ciseau':
            if(player == 'pierre')
            {
                document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
            }
            else // player == 'feuille'
            {
                document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
            }
        break;
    }
} CORRECTION */
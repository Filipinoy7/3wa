'use strict';
const TVA = 0.2;

var HT = parseFloat(window.prompt('saisissez le montant HT'));

var remise = (window.prompt('Voulez-vous une remise ?'));

var montantTVA = TVA * HT ; 

var TTC = montantTVA *   ;


if (remise == "oui" || "yes") {
	parseFloat(window.prompt('saisissez le pourcentage'));
	document.write('<p>Votre total est de :'+TTC+'</p>');
}
else (remise == "non");
{
	document.write("<p>Aucune remise na été appliquée</p>");
}

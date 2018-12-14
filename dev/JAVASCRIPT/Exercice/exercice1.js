var HT = parseFloat(window.prompt("Saisissez votre montant HT"));
var TVA = 0.2;
var montantTVA = HT * TVA;
var montantTTC = HT + montantTVA;

document.write("<p>Le montant de la TVA est de : "+montantTVA+" €</p>");
document.write("<p>Le montant TTC est de : "+montantTTC+" €</p>");









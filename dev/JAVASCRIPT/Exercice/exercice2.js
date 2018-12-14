var voiture = {
	marque : "audi",
	année : 2015,
	achat : "18 mars 2016",
	passager1 : "bernard",
	passager2 : "nanard"
};

document.write('<p>'+voiture.marque+'</p>', '<p>'+voiture.année+'</p>','<p>'+voiture.achat+'</p>','<p>'+voiture.passager1+'</p>','<p>'+voiture.passager2+'</p>');
console.log(voiture);


var myCar = new Object();

myCar.brand         = 'Alfa Roméo';
myCar.buyDate       = new Date('2013-06-20');
myCar.passengers    = new Array();
myCar.passengers[0] = 'Nicolas';
myCar.passengers[1] = 'Charlotte';
myCar.year          = 2012;

//CORRECTION//
var myCar = new Object();

myCar.brand         = 'Alfa Roméo';
myCar.buyDate       = new Date('2013-06-20');
myCar.passengers    = new Array();
myCar.passengers[0] = 'Nicolas';
myCar.passengers[1] = 'Charlotte';
myCar.year          = 2012;

document.write('<ul>');
document.write('<li>Marque : ' + myCar.brand + '</li>');
document.write('<li>Année de fabrication : ' + myCar.year + '</li>');
document.write('<li>Date de l\'achat : ' + myCar.buyDate.toDateString() + '</li>');
document.write('<li>Passager 1 : ' + myCar.passengers[0] + '</li>');
document.write('<li>Passager 2 : ' + myCar.passengers[1] + '</li>');
document.write('</ul>');

var fruits = ["banane, pomme, raisin, goyave, mangue"];

function sayFruits()
{
	console.log(fruits);
}

sayFruits();


fruits.push('fraise');

console.log(fruits);

fruits.splice(2, 1);

console.log(fruits);

fruits.splice(0);

console.log(fruits);


/*function suppFruits(supprimer)
{
	console.log(supprimer);
}

var supprimer = window.prompt("Fruit à supprimer");*/

var game = {};

function initializeGame() {

game.difficulte  = requestInteger('Niveau de difficulte ? \n1. Facile - 2. Normal - 3. Difficile', 1, 3);

game.armure = requestInteger('Armure ? \n1. Cuivre - 2. Fer - 3. Magique', 1 , 3);

game.arme = requestInteger('Epée ? \n1. Bois - 2. Acier - 3. Excalibur', 1 , 3);

switch (game.difficulte) {
	case 1:
	game.JavawanHp = getRandomInteger(150, 200);
	game.LukHp = getRandomInteger(200, 250);
	break;
	case 2:
	game.JavawanHp = getRandomInteger(200, 250);
	game.LukHp = getRandomInteger(200, 250);
	break;
	case 3:
	game.JavawanHp = getRandomInteger(200, 250);
	game.LukHp = getRandomInteger(150, 200);
	break;
	}
switch (game.armure) {
	case 1: 
	game.armorRatio = 1
	break;
	case 2: 
	game.armorRatio = 1.25
	break;
	case 3: 
	game.armorRatio = 1.5
	break;
	}
switch (game.arme) {
	case 1:
	game.weaponRatio = 0.5
	break;
	case 2: 
	game.weaponRatio = 1
	break;
	case 3: 
	game.weaponRatio = 1.5
	break;
	}
}

function damageDragon() {
	var degat;
	switch (game.difficulte) {
		case 1:
		degat = getRandomInteger(10, 20)/game.armorRatio;
		break;

		default:
		degat = getRandomInteger(20, 30)/game.armorRatio;
		break;

		
	}

	return Math.round(degat);
}

initializeGame();
console.log(game);



console.log(game.LukHp - damageDragon());

function damagePlayer() {
	var degat;
	switch (game.difficulte) {
		case 1:
		degat = getRandomInteger(25, 30) * game.weaponRatio;
		break;

		case 2:
		degat = getRandomInteger(15, 20) * game.weaponRatio;
		break;

		case 3: 
		degat = getRandomInteger(5, 10) * game.weaponRatio;
	}
	/*console.log(degat);*/
	return Math.round(degat);
}
	
	console.log(game.JavawanHp - damagePlayer());


function battle() {
		var tour = 1;
	do {
	game.start = getRandomInteger (1, 2);

	
	if (game.start == 1) {
		damageDragon();
		game.LukHp -= damageDragon();
		console.log("Tour: "+tour+" \n javawan est plus rapide et vous inflige "+damagePlayer()+". \n player : "+game.LukHp+" pv - javawan : "+game.JavawanHp+"pv");
	}
	else {
		damagePlayer();
		game.JavawanHp -= damagePlayer();
		console.log("Tour: "+tour+" \n Joueur plus rapide et vous infligez "+damagePlayer()+ " à javawan.\n player : "+game.LukHp+" pv - javawan : "+game.JavawanHp+"pv");
	}
	tour ++;
}
	while (game.JavawanHp > 0 && game.LukHp > 0);
		if (game.LukHp > 0) {
			console.log("Vous avez gagné !");
			document.write('<img src="images/knight.jpg">');
		}
		else if (game.JavawanHp > 0) {
			console.log("Vous avez perdu !");
			document.write('<img src="images/dragon.jpg">');
		}
}


battle();

console.log(game);

var Program = function() {

	this.Pirate = new Perso('Luffy', 500 , 50, 10, 25 );
	this.Bete = new Perso('Kaido', 1000 , 100, 20, 50 );

	$('#attaquer').on('click', this.onClickAttaque.bind(this));
	$('#defendre').on('click', this.onClickDefense.bind(this));
    $('#sort').on('click', this.onClickSort.bind(this));

    this.affichage();
}

Program.prototype.onClickAttaque = function(event) {
	event.preventDefault();

	console.log(this);

	this.Pirate.attaquer(this.Bete);
	$('#luffyy').addClass('luffyAnim');
	$('#kaidoo').addClass('kaidoAnim');


	this.onClickBeteAttaque();

	this.affichage();
	this.victory();
}

Program.prototype.onClickDefense = function(event) {
	event.preventDefault();

	console.log(this);

	this.Pirate.defendre(this.Bete);

	this.onClickBeteAttaque();
	
	this.affichage();
	this.victory();
}

Program.prototype.onClickSort = function(event) {
	event.preventDefault();

	console.log(this);

	this.Pirate.sort(this.Bete);

	this.onClickBeteAttaque();
	
	this.affichage();
	this.victory();
}

Program.prototype.affichage = function() {

	$('#affiche1 span').html('<p>'+this.Pirate.name+' : '+this.Pirate.hp+' HP </p><p> Force : '+ this.Pirate.attack +'</p> <p> Defense : '+this.Pirate.defense+'</p> <p>Haki : '+this.Pirate.magie+'</p>');

	$('#affiche2 span').html('<p>'+this.Bete.name+' : '+this.Bete.hp+' HP </p><p> Force : '+ this.Bete.attack +' </p><p>Defense :'+this.Bete.defense+'</p><p> Haki : '+this.Bete.magie+'</p>');

}




Program.prototype.onClickBeteAttaque = function() {
	
	var beteAttaque = getRandomInteger(1,3);

	if (beteAttaque == 1) {

		this.Bete.attaquer(this.Pirate);
	}
	else if (beteAttaque == 2) {

		this.Bete.defendre(this.Pirate);
	}
	else {
		this.Bete.sort(this.Pirate);
	}
	
}

Program.prototype.victory = function() {

		if (this.Pirate.hp <= 0) {
				$('#affiche1 span').html('<p> Defeat ! </p>');
				$('#affiche2 span').html('<p> Victory ! </p>');
				$('#commande').addClass('hide');

		}
		else if (this.Bete.hp <= 0) {

			$('#affiche2 span').html('<p> Defeat ! </p>');
			$('#affiche1 span').html('<p> Victory ! </p>');
			$('#commande').addClass('hide');

		}

}
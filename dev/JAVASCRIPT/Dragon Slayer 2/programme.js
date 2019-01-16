var Program = function() {

	this.Pirate = new Perso('Luffy', 500 , 100, 10, 50 );
	this.Bete = new Perso('Kaido', 1000 , 200, 20, 100 );

	$('#attaquer').on('click', this.onClickAttaque.bind(this));

}


Program.prototype.onClickAttaque = function(event) {
	event.preventDefault();

	console.log(this);
	this.Pirate.attaquer(this.Bete);
	this.Bete.attaquer(this.Pirate);
}
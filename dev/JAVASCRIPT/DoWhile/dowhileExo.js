do {

	var nombre = parseFloat(window.prompt('nombre'));

	document.write('<p>'+nombre+'</p>');


} while(isNaN(nombre) == true );



document.write('<p>trouvé</p>')
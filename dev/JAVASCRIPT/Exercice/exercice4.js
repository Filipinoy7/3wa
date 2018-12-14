var num1 = parseFloat(window.prompt('Saisissez un nombre'));

var operation = window.prompt("Choisissez l\'opération mathématique");

var num2 = parseFloat(window.prompt('Saisissez un nombre'));


var result;

switch (operation) {
	case '+' : 
	case 'addition' : 
	result = num1 + num2;
	break;

	case '-' : 
	case 'soustraction' : 
	result = num1 - num2;
	break;


	case '*' : 
	case 'multiplication' : 
	result = num1 * num2;
	break;


	case '/' : 
	case 'division' : 
	result = num1 / num2;
	break;

	case '^' : 
	case 'puissance' : 
	result = num1 ** num2;
	break;

	default :
	document.write("<p>Ce calcul n'éxiste pas</p>"); 
	break;
}

if (isNaN(result) == true) {
	document.write('<p>Vous avez saisi nimp</p>');
}
else if (result == Infinity) {
	document.write('<p>Cette division ne fonctionne pas</p>')
}
else {
	document.write("<p>Votre resultat est égale à "+result+"</p>");
	console.log(result);
}

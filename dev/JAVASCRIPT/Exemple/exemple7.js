var test = 23;


console.log(isNaN(test));

var test2 = "une string";


console.log(isNaN(test2));


if (isNaN(test2) == true) {

	document.write('test2 pas un chiffre');
    
} else {
	document.write('test2 chiffre');
}

// switch 


var name = "Jo"


switch (name) {

	case 'Jean':
    document.write('Vous êtes Jean');
    break;
    
    case 'Pierre':
    document.write('Vous êtes Pierre');
    break;

	case 'Jacques':
    document.write('Vous êtes Jacques');
    break;
    
    case 'Jo':
    document.write('Vous êtes Jo');
    break;
    
    default:
    document.write('Vous êtes qui');
    break;


}
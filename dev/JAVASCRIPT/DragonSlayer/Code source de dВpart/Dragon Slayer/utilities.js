'use strict'; 

function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function requestInteger(message, min, max)
{
	var integer;
    
    do
    {
    	integer = parseInt(window.prompt(message));
    
    }while(isNaN(integer) == true || integer < min || integer > max);
    
    return integer;

}

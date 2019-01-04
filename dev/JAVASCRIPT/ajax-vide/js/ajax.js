'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/



function htmlArticle(response) {


	$('#target').html(response);


}

function json(response) {

	
	$('#target').html('').append('<ul>');
	
	for(var i = 0; i < response.length; i++) {
		$('#target ul').append('<li>Prénom : '+response[i].firstName+ ' Téléphone : '+response[i].phone+'</li>');


	}



}


function movies(response) {

	
	$('#target').html(response);


}


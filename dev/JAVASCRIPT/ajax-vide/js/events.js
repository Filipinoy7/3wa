'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/



function changeRun() {
	if ($('input[name=what]:checked').val() == 1) {

	$.get('php/1-get-html-article.php', htmlArticle);
}


	else if ($('input[name=what]:checked').val() == 2 ) {

	$.getJSON('php/2-get-json-data.php', json);
}


	else if ($('input[name=what]:checked').val() == 3 ) {

	$.get('php/3-get-html-movies.php', movies);
}

}
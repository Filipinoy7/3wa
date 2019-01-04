const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';
const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
/*const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';*/
    
   // 'https://api.themoviedb.org/3/movie/76341?api_key=2ee2c5b569240ea2a2a879dd9c8a822c'

	/*$.getJSON('https://api.themoviedb.org/3/movie/76341?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', callBack);
    
    function callBack(response) {
    	
        console.log(response);
        console.log(response.id);
  		console.log(response.genres[1].name);
  		document.write('<img src="'+url_img+response.backdrop_path+'" />')
  
  
    }*/

    /*'https://image.tmdb.org/t/p/w185_and_h278_bestv2/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg'*/

     /*$.getJSON('https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&query=avengers', myFunc);
    
    function myFunc(response) {
    
    	console.log(response);
    
    }*/

    							/*TEST*/
    /*$('#run').on('click', myFunc);

    

    function myFunc(event) {
    	event.preventDefault();

    	if ($('input[name=what]:checked').val() == 'legend') {
    	$.getJSON('https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&language=en-US&query=legend&page=1&include_adult=false', replace);

    	}

    }

    function replace(response) {
    	$('#target').html(response);
    }
    
    $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&language=en-US&query=legend&page=1&include_adult=false');*/




    function onClickSearchMovie(event) {
    	event.preventDefault();

    	var query = $('#search').val();

    	console.log(query);

    	$.getJSON('https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&query='+query, getMovies);
    }

    function getMovies(response) {

    	console.log(response);

    	for (var i = 0; i < response.results.length; i++)

    		$('#list ul').append('<li data-id="'+response.results[i].id+'">'+response.results[i].title+'</li>');

    }


		$('#run').on('click', onClickSearchMovie);



		$(document).on('click', 'li', detail);

		

function detail() {

		var data = $(this).data('id');

    	$.getJSON('https://api.themoviedb.org/3/movie/'+data+'?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', getDetails);
    	
    }

    function getDetails(response) {
    	$('#details').html('');
      	$('#details').append('<img src='+url_img+response.poster_path+'>');
    	$('#details').append('<p>'+response.title+'</p>');
    	$('#details').append('<p>'+response.release_date+'</p>');
    	$('#details').append('<p>'+response.overview+'</p>');


    	console.log(response);
    }

                /****************************
                 *       CORRECTION	        *
                 ****************************/

    /*<!DOCTYPE html> 
<html>
<head>
	<title>Movie</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<header>

	</header>
	<h1>Moteur de recherche de film</h1>
	<div class="form">
		<h2>Trouver un film :<h2>
		<form>
			<input type="text" name="search" id="search">
			<input type="submit" name="send" id="send" value="rechercher">
		</form>
	</div>
	<div class="info">
		<div id="list" class="hide">
			
		</div>
		<div id="result" class="hide">
			<p>hello</p>
		</div>
	</div>
	<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
  <script type="text/javascript" src="js/api.js"></script>
  <script type="text/javascript" src="js/events.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
</body>
</html>


<!----------------- api.js -------->
<script>

function recupAllMovies(response) {

	console.log(response);
    var data = response.results;
	var list = $('<ul>');
    
    for (var i= 0; i < data.length; i ++ ) {
		list.append($('<li data-id="'+data[i].id+'">').append(data[i].title));
	}
    
    $("#list").html(list);
    $("#list").removeClass('hide');
}

function displayDetails(response) {

	var result = $('<div>');

	var img = $('<img>').attr('src', url_img+response.poster_path).css('width', '250px');
	var title = $('<h1>').append(response.title);
	var year = $('<h2>').append(response.release_date);
	var desc = $('<p>').append( response.overview );
	var note = $('<p>').append( response.vote_average );
	var companies = $('<div>').append('<h2>Companies</h2>')
	companies.append('<ul>');
    
    result.append(img).append(title).append(year).append(desc).append(note).append(companies);
    
	$('#result').html(result);
	
}

</script>
<!----------------- events.js -------->

<script>

const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';
const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

function onClickShowListMovies(event){

	event.preventDefault();
    
	var query = $('input[name=search]').val();
    
    console.log(query);
    
	$.getJSON('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+query, recupAllMovies);
    
}

function onClickShowDetails() {
	var id = $(this).data('id');
    console.log(id);
    
    $getJSON('https://api.themoviedb.org/3/movie/'+id+'?api_key='+API_KEY, displayDetails);

}

</script>


<!----------------- main.js -------->

<script>



$('#send').on('click', onClickShowListMovies);
$(document).on('click', 'li', onClickShowDetails);

</script>*/
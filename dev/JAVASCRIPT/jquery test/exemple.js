$('#para2').css('color', 'red');
$('#para2').css('background-color', 'blue');

/*var para2 = document.getElementById('para2');
var para = document.querySelectorAll('.para');

para2.style.color = "red";
para2.style.backgroundColor = "blue";


for(var i = 0; i < para.length; i++) {

	para[i].addEventListener('click', togglePink);

}

function togglePink() {

	this.classList.toggle('pink');

}*/

$('.para').on('click', togglePink);

function togglePink() {

	$(this).toggleClass('pink');
  	//$(this).addClass('pink');
	//$(this).removeClass('pink');
}

$('#send').on('click', changePara);

function changePara() {
	
    $('#container2').html('<p>remplacement par ce qui a dans html</p>');
    $('#container').append('<p class="para" id="para4">para4</p>');

}


$.get('../ajax-vide/php/1-get-html-article.php', myFunction);


function myFunction(response) {

	console.log(response);

}

$('#container3').html(response);
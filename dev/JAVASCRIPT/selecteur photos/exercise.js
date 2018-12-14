var image1 = document.querySelector('imageUn');




image1.classList.add('new');


image1.addEventListener('click' , myFunction);

	function myFunction() {
	image1.classList.toggle('new');
}


/*CORRECTION CSS*/



/*<style>

body
{
    margin: 0 auto;
    width: 90%;
}

em
{
    color: red;
    font-weight: bold;
}


.photo-list
{
    /* structure 
    padding-left: 0;
    width: 800px;

    /* presentation 
    list-style-type: none;
}
.photo-list li
{
    /* structure 
    display: inline-block;
    margin: 1em;
    padding: 0.5em;

    /* presentation 
    border-radius: 8px;
    transition: background-color 0.5s;
}
.photo-list li:hover
{
    background-color: silver;
}
.photo-list li.selected
{
    background-color: forestgreen;
}

</style>*/


/*CORRECTION JS*/


/*<script>
'use strict';

var photos = document.querySelectorAll('.photo-list li');
var total  = document.querySelector('#total em');

function onClickListItem()
{
	this.classList.toggle('selected');
	var selectedPhotos = document.querySelectorAll('.photo-list li.selected');
	total.textContent = selectedPhotos.length;
}




for(index = 0; index < photos.length; index++)
{
    photos[index].addEventListener('click', onClickListItem);
}


</script>
*/


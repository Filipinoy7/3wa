var rectangle = document.querySelector('.rectangle');
var bouton = document.getElementById('toggle');


bouton.addEventListener('click' , myFunction);

function myFunction() {
	rectangle.classList.toggle('hidden');

}

rectangle.addEventListener('mouseover', red);
function red() {
	rectangle.classList.add('important')
}

rectangle.addEventListener('mouseout', blue);
function blue() {
	rectangle.classList.remove('important');
	rectangle.classList.remove('good');

	
}

rectangle.addEventListener('dblclick', green);
function green() {
	rectangle.classList.toggle('good');
}



function animation() {
	var val = document.getElementById('percent');
	if (val >= 100) {
		val = 5;
		var newVal = val*1+0.25;
		var txt = Math.floor(newVal)+'%';

	} 
}

/*CORRECTION*/

/*<style>

body
{
    margin: 0 auto;
    width: 90%;
}


.hide
{
    display: none;
}

.rectangle
{
    /* structure 
    height: 300px;
    width: 400px;

    /* presentation 
    background-color: royalblue;
    border-radius: 8px;
    transition: background-color 0.8s;
}
.rectangle.important
{
    background-color: firebrick;
}
.rectangle.important.good
{
    background-color: limegreen;
}

</style>


<!----------- souris.js ---------------->



<script>

var button    = document.getElementById('toggle-rectangle');
var rectangle = document.querySelector('.rectangle');



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/************************************************************************************************

function onClickButton()
{
    rectangle.classList.toggle('hide');
}


function onDoubleClickRectangle()
{
	rectangle.classList.toggle('good');

}

function onMouseOverRectangle()
{

    rectangle.classList.add('important');
}

function onMouseOutRectangle()
{
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/************************************************************************************************


button.addEventListener('click', onClickButton);

rectangle.addEventListener('dblclick', onDoubleClickRectangle);

rectangle.addEventListener('mouseout', onMouseOutRectangle);
rectangle.addEventListener('mouseover', onMouseOverRectangle);




</script>*/

function move() {
	var bar = document.getElementById("fill");
	var width = 1;
	var id = setInterval(action, 100);
	function action() {
		if (width >= 100) {
			clearInterval(id);
		}
		else {
			width++;
			bar.style.width = width +'%';
			bar.innerHTML = width * 1 + '%';
		}
	}

}

move();


/*CORRECTION*/

/*<script>
var fill = document.getElementById("fill");
var percent = document.getElementById("percent");
var size = 0;
var timer;

function interval()
{
	size += 2;
    fill.style.width=size+"%";
	percent.textContent = size+"%";
    
    if(size >= 100) {
    	window.clearInterval(timer);
  
    }
}


timer = window.setInterval(interval,50)

</script>*/


'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/



/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

var rocket = document.getElementById('rocket');
var compteur = document.getElementById('rebours');
var start = document.getElementById('firingButton')
var time = 10;
var timer;



function push() {
	timer = window.setInterval(launch, 1000);
	rocket.src = "images/rocket2.gif";
	start.removeEventListener('click', push);
}

function launch() {
	rebours.textContent = time;
	time--;
	if (time < 0) {
		window.clearInterval(timer);
		rocket.src = "images/rocket3.gif";
		rocket.classList.add('tookOff');
	}

}

start.addEventListener('click', push);

/*CORRECTION*/

/*'use strict';

var rocket = document.getElementById('rocket');
var billboard = document.querySelector('#billboard span');
var firingButton  = document.getElementById('firingButton');
var count = 10;
var timer;

function onClickFiringButton()
{

	timer = setInterval(countDown, 1000);
	rocket.src = 'images/rocket2.gif';
    
    window.setTimeout(out, count * 1000)

}


function out() {
	
    rocket.src = 'images/rocket3.gif';
    rocket.classList.add('tookOff');
    firingButton.removeEventListener('click', onClickFiringButton);
    

}


function countDown()
{
	billboard.textContent = count;
	count--;
    
    if( count == -1 ){
        
        clearInterval(timer);
        //rocket.src = 'images/rocket3.gif';
        //rocket.classList.add('tookOff');
        //firingButton.removeEventListener('click', onClickFiringButton);
    }

}






firingButton.addEventListener('click', onClickFiringButton);*/
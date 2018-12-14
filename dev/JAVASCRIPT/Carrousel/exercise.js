'use strict';

var barre = document.getElementById('toolbar-toggle');

var bouttons = document.querySelector('.toolbar ul');

var fleche = document.getElementById('fleche');

var pictures = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg'];

var title = ['Street Art','Fast Lane','Colorful Building', 'Skyscrapers','City by night','Tour Eiffel la nuit'];

var gauche = document.getElementById('slider-previous');

var droite = document.getElementById('slider-next');

var play = document.getElementById('slider-toggle');

var aleatoire = document.getElementById('slider-random');

var slide = document.querySelector('#slider img');

var legende = document.getElementById('legende');

var i = 0;

var isPlaying = false;

var timer;

var touchePause = document.getElementById('play');

legende.textContent = title[i];



slide.src = pictures[i];

function push() {
	
		bouttons.classList.toggle('hide');
		fleche.classList.toggle('fa-arrow-down');
		fleche.classList.toggle('fa-arrow-right');
}


function changeRight(event) {
	

		if (i >= pictures.length -1) {
			i = 0 ;
		}
		else {
			i++
		}
		slide.src = pictures[i];
		legende.textContent = title[i];
	}

function changeLeft() {
	if (i <= 0 ){
		i = pictures.length -1;
	}
	else {
		i--;
	}	
	slide.src = pictures[i];
	legende.textContent = title[i];
}


function playNow() {
	if (isPlaying == false) {
		timer = window.setInterval(changeRight, 1000)
		isPlaying = true;
	}
	else {
		window.clearInterval(timer);
		isPlaying = false;
	}
	touchePause.classList.toggle('fa-pause-circle');
	touchePause.classList.toggle('fa-play');
}


function random() {
	 
	 	i = getRandomInteger(0, pictures.length - 1);
	 	slide.src = pictures[i];
	 	legende.textContent = title[i];

	 	console.log(i);
	 
}



function key(event) {
	if (event.keyCode == 39) {

		if (isPlaying == true) {
			playNow();
		}
		changeRight(); 
	}
	else if (event.keyCode == 37) {

		if (isPlaying == true) {
			playNow();
		}
		changeLeft();
	}
	else if (event.keyCode == 32) {

		playNow();
	}
	else if (event.keyCode == 38) {

		if (isPlaying == true) {
			playNow();
		}
		random();
	}
	else if (event.keyCode == 40) {
		push();
	}

	console.log(event.keyCode);
}
/*VARIANTE DE FUNCTION KEY (EVENT) PLUS PROPRE*/
/*function onPushButtons(event) {
	
    console.log(event);
    
    if (isPlaying == true) {
        goToPlay();	
    }
    
    switch(event.keyCode) {
    	
        case 39:
        goToNext();
        break;
        
        case 37:
        goToPrev();
        break
        
        case 82:
        goToRandom();
        break;
        
        case 32:
        goToPlay();
        break
    }


}*/


document.addEventListener('keyup', key)
aleatoire.addEventListener('click', random);
play.addEventListener('click', playNow);
gauche.addEventListener('click', changeLeft);
droite.addEventListener('click', changeRight);
barre.addEventListener('click', push);


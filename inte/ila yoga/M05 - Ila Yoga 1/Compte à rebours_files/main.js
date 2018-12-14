'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var rocket;
var billboard;
var firingButton;
var count;
var timer;


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

// Gestionnaire d'événement au clic sur le bouton de mise à feu
function onClickFiringButton()
{
    // Programmation du décollage pour dans x secondes
    setTimeout(function(){
        
        // On change la source de l'image de la fusée
        rocket.src = 'images/rocket3.gif';
         
        // On fait décoller la fusée en lui donnant la classe 'tookOff', la transition CSS fera le reste
        rocket.classList.add('tookOff');
        
        // Une fois que la fusée à décollé, on désactive le bouton de mise à feu
        firingButton.removeEventListener('click', onClickFiringButton);
        firingButton.classList.add('disabled');
        
    }, count * 1000);
    
    // Affichage initial du compte à rebours
    countDown();
    
    // Lancement du compte à rebours
    timer = setInterval(countDown, 1000);
    
    // On change la source de l'image de la fusée
    rocket.src = 'images/rocket2.gif';
}

// Gestion du compte à rebours
function countDown()
{
    // Affichage sur le panneau du compte à rebours
    billboard.textContent = count;
    
    // On décrémente le compteur
    count--;
    
    // Si le compteur arrive à -1, on stoppe le chronomètre
    if( count == -1 ){
        
        clearInterval(timer);
    }
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

// Initialisation des variables globales
count = 10;

// Sélection des différents éléments du DOM sur lesquels nous allons agir
rocket = document.getElementById('rocket');
billboard = document.querySelector('#billboard span');
firingButton = document.getElementById('firingButton');

// Installation du gestionnaire d'événement au clic sur le bouton de mise à feu
firingButton.addEventListener('click', onClickFiringButton);
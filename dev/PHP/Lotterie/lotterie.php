<?php 

$tirage = [];


function tirage() {
    $tab = [];
    $random;
    for ( $i = 0; $i < 6; $i++) {
        do {
            $random = rand(1 , 49);
        } while (in_array($random, $tab) == true);
        array_push($tab, $random);
}
return $tab;
}


$tirage = tirage(); 

var_dump($tirage);



$result = implode(' , ', $tirage); 






include "lotterie.phtml";

?>

<!-----CORRECTION----->

<!------ s/*
$random = rand(min, max); // renvoi un entier aléatoire entre min et max

 array_push($tab, $value); // push une valeur $value dans un tableau $tab
 
 count($tab) // compte le nombre d'element dans un tableau comme .length en JS
 
 implode(', ', $tab); // $tab = ['a', 'b', 'c' ]  // a, b, c*/
 
const NUMBER_COUNT = 6;
const MIN_BOUND = 1;
const MAX_BOUND = 49;

$lotteryDraw = [];

function getLotteryDraw()
{
	$draw = [];
    $random;
    
    while( count($draw) < NUMBER_COUNT ){
    	do {
        
    
    		$random = rand(MIN_BOUND, MAX_BOUND);
        
        } while (in_array($random, $draw) == true);
        
    	array_push($draw, $random);
    
    }
    
    
    sort($draw);
    
    return $draw;

}

$lotteryDraw = getLotteryDraw();


 
 
 
 include 'index.phtml'

?> ------->

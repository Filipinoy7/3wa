<?php

$name = 'Jl';

var_dump($name);

for ($i = 0; $i < 6; $i++) {

	 echo '<p>Salut '.$name.'</p>';
}

if ($name == 'paul') {
	echo 'Tu es Paul' ;
}
else {
	echo 'tu n\' es pas Paul';
}

function addition($num1, $num2) {

	$result = $num1 + $num2;
	return $result;

}

$result = addition(3, 5);

$table = ['Chien','Chat','Souris'];/**/


echo '<p>'.$table[1].'</p>';



$dico = [

	'name' => 'Robert',
	'age'=> 23,
	'taille' => '1m85',
	'fumeur' => false
];

echo '<p>'.$dico['name'].'</p>';



array_key_exists('name', $dico); // renvoie true si la clef existe ou sinon false

in_array(23, $dico);// renvoie true si la value existe ou sinon false

array_search('1m85', $dico); // renvoie la clef

$dico['age']; // renvoie la value


include 'exemple.phtml';
include 'exemple.phtml';
include 'footer.phtml';

?>

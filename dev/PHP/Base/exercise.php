<?php




$tab = [
	
	'merci' => 'salamat',
	'non'=> 'hindi',
	'fille' => 'babae',
	'garçon' => 'lalake',
	'froid'=> 'malamig',
	'chaud' => 'mahinit'
];


function translate($word, $sens, $tab) {
	if ($sens == "versTagalog") 
	{
			
		if (array_key_exists($word, $tab)) 
		{
			$answer = $tab[$word];
		}
		else 
		{
			$answer = 'Réponse invalide';
		}
	}

	else 
	{

		if (in_array($word, $tab)) 
		{
			$answer = array_search($word, $tab);
		}
		else 
		{
			$answer = 'Réponse invalide';
		}

	} 
	return $answer;
}





if(array_key_exists('word', $_POST) == true)
{
	$word = strtolower($_POST['word']);
    var_dump($word);
    $sens = $_POST['direction'];
    $answer = translate($word, $sens, $tab);
}




















include "exercise.phtml";

?>


<?php

$requestUrl = $_SERVER['SCRIPT_NAME'];

$adresse = $_SERVER["REQUEST_URI"];

// $_SERVER["REQUEST_URI"]  => rooting/index2.php/register

$url = substr($adresse, 17);


//$adresse => http://10.10.109.52/rooting/index2.php/register

// $url => register

$repo = 'models';
$dossier = opendir($repo);

while($fichier = readdir($dossier)){
	 if(is_file($repo.'/'.$fichier) && $fichier !='/' && $fichier !='.' && $fichier != '..'){
     
        include $repo.'/'.$fichier;
        
    }

}
closedir($dossier);



if($url == false || $url=='') {

	include 'controllers/homeController.class.php';
    
    $page = 'home';
    
} else {

	include 'controllers/'.$url.'Controller.class.php';
	$page = $url;
}

include 'www/layout2.phtml';

?>


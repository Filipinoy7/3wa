<?php
$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT
        FirstName
        LastName
     FROM Author
    '
);

$query->execute(); 

$offices = $query->fetchAll(PDO::FETCH_ASSOC);

/*Recuperer les données*/

var_dump($offices);


?>
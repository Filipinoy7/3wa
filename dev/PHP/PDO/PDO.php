<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

            /*Connection avec votre base de données*/


$pdo->exec('SET NAMES UTF8');

        /*Caractères utilisés*/


$query = $pdo->prepare
(
	'SELECT contactLastName, contactFirstName 
	FROM customers 
	WHERE country = "France"'
);



$query->execute();  

    /*Executer*/ 


$offices = $query->fetchAll(PDO::FETCH_ASSOC);

/*Recuperer les données*/

var_dump($offices);

?>

<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

            /*Connection avec votre base de données*/


$pdo->exec('SET NAMES UTF8');

        /*Caractères utilisés*/


$query = $pdo->prepare
(
	'SELECT orderNumber, orderDate, shippedDate, status FROM orders ORDER BY orderDate'
	
);



$query->execute();  

    /*Executer*/ 


$orders = $query->fetchAll(PDO::FETCH_ASSOC);

/*Recuperer les données*/

/*var_dump($orders);*/


include 'exercice.phtml';
?>

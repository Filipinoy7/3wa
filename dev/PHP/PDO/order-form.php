<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT
        customerName,
        contactFirstName,
        contactLastName,
        addressLine1,
        addressLine2,
        city
     FROM customers
     INNER JOIN orders ON orders.customerNumber = customers.customerNumber
     WHERE orderNumber = ?'
);

$query->execute( array( $_GET['orderNumber'] ) );

$customer = $query->fetch(PDO::FETCH_ASSOC);
//var_dump($customer);


$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
    'SELECT
     productName,
     quantityOrdered,
     priceEach,
     priceEach * quantityOrdered as prixTotal

     FROM products
     INNER JOIN orderdetails ON products.productCode =orderdetails.productCode
     WHERE orderNumber = ?'
);

$query->execute( array( $_GET['orderNumber'] ) );

$commande = $query->fetchAll(PDO::FETCH_ASSOC);


$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
    'SELECT
     
     SUM(priceEach * quantityOrdered) as prix

    FROM orderdetails
     WHERE orderNumber = ?'
);

$query->execute( array( $_GET['orderNumber'] ) );

$montant = $query->fetch(PDO::FETCH_ASSOC);
var_dump($montant);

include "order-form.phtml";
?>
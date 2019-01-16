<?php

$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');


$query = $pdo->prepare
   (
       'DELETE
       FROM `Post`
       WHERE Id= ?'
);

$query->execute([$_GET['id']]);



header('Location: admin.php');
   exit();



?>
<?php

$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');


$query = $pdo->prepare
(
	'SELECT Title, Contents, FirstName, LastName, Name
	FROM Post
	INNER JOIN Author
	ON Author.Id = Post.Author_Id
	INNER JOIN Category
	ON Category.Id = Post.Category_Id
	'
);

$query->execute();  



$adminRecup = $query->fetchAll(PDO::FETCH_ASSOC);

/*Recuperer les données*/

/*var_dump($adminRecup);*/



$template = 'admin';

include 'blog.phtml';



?>
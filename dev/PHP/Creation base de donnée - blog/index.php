<?php

$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');


$query = $pdo->prepare
(
	'SELECT Title, Contents, CreationDate, FirstName, LastName, Post.Id
	FROM Post
	INNER JOIN Author
	ON Author.Id = Post.Author_Id
	'
);

$query->execute();



$indexRecup = $query->fetchAll(PDO::FETCH_ASSOC);

/*Recuperer les données*/

//var_dump($indexRecup)


$template = 'index';

include 'blog.phtml';


?>
<?php

session_start();

$pdo = new PDO('mysql:host=localhost;dbname=Philippines', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');


$query = $pdo->prepare
(
	'SELECT Title, Contents, CreationDate, Post.Id, pseudo , role, Post.User_Id AS userId
	FROM Post
	INNER JOIN users
	ON users.Id = Post.User_Id
	'
);

$query->execute();



$experienceRecup = $query->fetchAll(PDO::FETCH_ASSOC);

/*******secondPDO******************/



$template = 'experience';

include 'index.phtml';

?>
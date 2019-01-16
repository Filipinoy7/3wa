<?php

if(array_key_exists('id', $_GET) == false || ctype_digit($_GET['id']) == false) {
    header('Location: index.php');
    exit();
}



$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$id = $_GET['id'];

$query = $pdo->prepare
(
	'SELECT Title, Contents, CreationDate, FirstName, LastName, Post.Id
	FROM Post
	INNER JOIN Author
	ON Author.Id = Post.Author_Id
	WHERE Post.Id = ?
	'
);

$query->execute([$id]);  



$indexRecup = $query->fetchAll(PDO::FETCH_ASSOC);

/*Recuperer les données*/

//var_dump($indexRecup);

$query = $pdo->prepare(
	'SELECT
            Pseudo,
            Contents,
            CreationDate
        FROM
            Comment
        WHERE
            Post_Id = ?'
	);
    
$query->execute( [ $_GET['id'] ] );  
$addPseudo = $query->fetchAll(PDO::FETCH_ASSOC);



$template = 'show_post';

include 'blog.phtml';


?>
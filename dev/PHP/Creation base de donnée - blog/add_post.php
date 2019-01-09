<?php

$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT
       *
     FROM Author
    '
);

$query->execute(); 

$admin = $query->fetchAll(PDO::FETCH_ASSOC);

/*Recuperer les données*/




$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT
        *
     FROM Category
    '
);

$query->execute(); 

$filleMetro = $query->fetchAll(PDO::FETCH_ASSOC);

/*Recuperer les données*/

var_dump($_POST);


if (empty($_POST) ==  false) {

		$title = $_POST['title'];
		$content = $_POST['contents'];
		$author = $_POST['author'];
		$category = $_POST['category'];

		$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(

	'INSERT INTO Post (Title, Contents, CreationDate, Author_Id, Category_Id)
	VALUE (? , ? ,  NOW() , ? , ?)'

);
 

 	$query->execute( array($title, $content, $author, $category)); 



 	header('Location: index.php');
    exit();


}
























$template = 'add_post';


include 'blog.phtml';





?>
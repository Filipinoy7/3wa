<?php

session_start();

if (empty($_POST) ==  false) {

		$title = $_POST['title'];
		$content = $_POST['contents'];
		$user = $_SESSION['Id'];

		$pdo = new PDO('mysql:host=localhost;dbname=Philippines', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(

	'INSERT INTO Post (Title, Contents, CreationDate, User_Id)
	VALUE (? , ? ,  NOW(), ?)'

);
 

 	$query->execute( array($title, $content, $user)); 



 	header('Location: experience.php');
    exit();


}

$template = 'rediger';

include 'index.phtml';

?>
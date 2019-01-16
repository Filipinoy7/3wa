<?php

$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');


if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id'])){
     header('Location: admin.php');
     exit();
}

include 'application/bdd_connection.php';

$query = $pdo->prepare(
	'DELETE FROM Post WHERE Id= ?'
);

$query->execute( [ $_GET['id'] ] );

$query = $pdo->prepare(
	'DELETE FROM Comment WHERE Post_Id= ?'
);

$query->execute( [ $_GET['id'] ] );

header('Location: admin.php');
exit();


?>

?>

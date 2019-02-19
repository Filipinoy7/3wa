<?php

session_start();

if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id'])){
            header('Location: index.php');
            exit();
}

include '../application/bdd_connection.php';

$query = $pdo->prepare(
	'DELETE FROM Category WHERE Id= ?'
	);

$query->execute( [ $_GET['id'] ] );



header('Location: ../admin.php');
exit();

?>
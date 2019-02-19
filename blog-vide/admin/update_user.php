<?php

	if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id'])){
	            //header('Location: index.php');
	            //exit();
		
	}


	var_dump($_POST);

	include '../application/bdd_connection.php';


	$query = $pdo->prepare(
		'UPDATE
	                Users
	            SET
	                Role = ?
	            WHERE
	                Id = ?'
		);

	$query->execute( [ $_POST['role'],  $_GET['id'] ] );


	//header('Location: ../admin.php');
   //exit();


?>
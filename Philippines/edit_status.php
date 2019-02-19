<?php
	session_start();

	if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id']))
	{
	  //header('Location: index.php');
	  //exit();
	}

	include 'bdd_connection.php'; 

	if (empty($_POST) == false ) 
	{
		
		$query = $pdo->prepare(
			'UPDATE
		                Post
		    		SET
		                Status = ?
		    		WHERE
		                Id = ?'
			);

		$query->execute( [ $_POST['Status'],  $_GET['id'] ] );


		header('Location: experience.php');
	   	exit();
 	}

?>
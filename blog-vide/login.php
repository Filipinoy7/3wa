<?php

session_start();

include 'application/hash.php';

$error = false;
$message = '';

if(empty($_POST) === false) {

	//var_dump($_POST);

	include 'application/bdd_connection.php';



	$query = $pdo->prepare
	(
	    'SELECT
	        *
	     FROM Users Where Mail = ?'
	);

	$query->execute( [ $_POST['email'] ]);
	$user = $query->fetch(PDO::FETCH_ASSOC);

	//var_dump($user);

	if ($user == false) {

		$error = true;
		$message = "Votre adresse mail n'existe pas...";

	} else if ( verifyPassword($_POST['password'], $user['Password']) == true ) {

		$_SESSION['email'] = $user['Mail'];
		$_SESSION['firstName'] = $user['FirstName'];
		$_SESSION['lastName'] = $user['LastName'];
		$_SESSION['pseudo'] = $user['Pseudo'];
		$_SESSION['role'] = $user['Role'];

		header('Location: index.php');
		exit();

	} else {
		$error = true;
		$message = "Votre mot de passe est incorrect...";
	}


}



$template = 'login';
include 'layout.phtml';

?>
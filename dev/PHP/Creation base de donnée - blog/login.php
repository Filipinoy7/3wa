<?php

session_start();
include 'application.php';

$error = false;
$message = '';

if(empty($_POST) === false) {

	include 'application/bdd_connection.php';
	$query = $pdo->prepare
	(
	    'SELECT
	        *
	     FROM Users Where Mail = ?'
	);

	$query->execute( [ $_POST['email'] ]);
	$user = $query->fetch(PDO::FETCH_ASSOC);
    
    
	if ($user == false) {
    
    
    } else if ( verifyPassword$_POST['Password'], $user['password']) == true ) {
    
    	$_SESSION['Mail'] = $user['mail'];
		$_SESSION['Prénom'] = $user['firstName'];
		$_SESSION['Nom'] = $user['lastName'];
		$_SESSION['Pseudo'] = $user['pseudo'];
		$_SESSION['role'] = $user['Role'];

		header('Location: index.php');
		exit();
    
    
    } else {
    
    	$error = true;
		$message = "Votre mot de passe est incorrect...";
    
    
    }



}






$template = 'login';
include 'blog.phtml';


?>
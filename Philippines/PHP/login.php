<?php

session_start();

include 'application.php';

$error = false;
$message = '';

if(empty($_POST) == false) 
{

	$pdo = new PDO('mysql:host=localhost;dbname=Philippines', 'root', 'troiswa'); 
	
	$query = $pdo->prepare
	(
	    'SELECT
	        *
	     FROM users Where mail = ?'
	);

	$query->execute( [ $_POST['email'] ]);
	$user = $query->fetch(PDO::FETCH_ASSOC);
    
	if ($user == false) 
	{

    	$error = true;
		$message = "Votre email est incorrect...";
 
    } 
    else if ( verifyPassword($_POST['password'], $user['password']) == true ) 
    {
    
    	$_SESSION['Mail'] = $user['mail'];
		$_SESSION['Prénom'] = $user['firstName'];
		$_SESSION['Nom'] = $user['lastName'];
		$_SESSION['Pseudo'] = $user['pseudo'];
		$_SESSION['role'] = $user['role'];


		header('Location: index.php');
		exit();
    
    
	} 
	else 
	{
	    
	    	$error = true;
			$message = "Votre mot de passe est incorrect...";
	     
	}

}

$template = 'login';

include 'index.phtml';

?>
<?php

session_start();
include 'application/hash.php';

if(empty($_POST) == false) {


	var_dump($_POST);

	$hashPassword = hashPassword($_POST['password']);

	include 'application/bdd_connection.php';
	$query = $pdo->prepare
	(
	    '
            INSERT INTO
                Users
                (Mail, Password, FirstName, LastName, Pseudo, Role)
            VALUES
                (?, ?, ?, ?, ?, "user")
        '

	);

	$query->execute( [ $_POST['email'], $hashPassword, $_POST['firstName'], $_POST['lastName'], $_POST['pseudo']  ] );


	header('Location: index.php');
	exit();


}



$template = 'register';
include 'layout.phtml';

?>
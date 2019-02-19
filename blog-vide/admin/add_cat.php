<?php

if (empty($_POST) == false) {

	//var_dump($_POST);
	include '../application/bdd_connection.php';

	$query = $pdo->prepare
	(
	    '
            INSERT INTO
                Category
                (Name)
            VALUES
                (?)
        '

	);

	$query->execute( [ $_POST['catName']  ] );

	header('Location: ../admin.php');
	exit();

}

?>
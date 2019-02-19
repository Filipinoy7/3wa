<?php

session_start();

include 'application/bdd_connection.php';



	$query = $pdo->prepare
	(
	    'SELECT
	        *
	     FROM Author'
	);

	$query->execute();
	$authors = $query->fetchAll(PDO::FETCH_ASSOC);

	$query = $pdo->prepare
	(
	    'SELECT
	        *
	     FROM Category'
	);

	$query->execute();
	$categories = $query->fetchAll(PDO::FETCH_ASSOC);


if (empty($_POST) == false) {

	//var_dump($_POST);

	$query = $pdo->prepare
	(
	    '
            INSERT INTO
                Post
                (Title, Contents, Author_Id, Category_Id, CreationDate)
            VALUES
                (?, ?, ?, ?, NOW())
        '

	);

	$query->execute( [ $_POST['title'], $_POST['contents'], $_POST['author'], $_POST['category']  ] );

	header('Location: index.php');
	exit();

}






$template = 'add_post';

include 'layout.phtml';  

?>
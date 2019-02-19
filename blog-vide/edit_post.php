<?php

session_start();

include 'application/bdd_connection.php';


if(empty($_POST) == true){

	if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id'])){
            header('Location: index.php');
            exit();
    }


    $query = $pdo->prepare(
	'SELECT
                Id,
                Title,
                Contents
            FROM
                Post
            WHERE
                Id = ?'
	);

	$query->execute( [ $_GET['id'] ] );
	$post = $query->fetch(PDO::FETCH_ASSOC);
	//var_dump($post);

	$template = 'edit_post';
	include 'layout.phtml';

} else {

	$query = $pdo->prepare(
		'UPDATE
	                Post
	            SET
	                Title = ?,
	                Contents = ?
	            WHERE
	                Id = ?'
		);

	$query->execute( [ $_POST['title'], $_POST['contents'], $_POST['postId'] ] );


	header('Location: admin.php');
    exit();

}






?>
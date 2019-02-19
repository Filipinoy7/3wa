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
		                users
		            SET
		                role = ?
		            WHERE
		                Id = ?'
			);

		$query->execute( [ $_POST['role'],  $_GET['id'] ] );


		//header('Location: index.php');
	   	//exit();
 	}

	$query = $pdo->prepare(
    'SELECT Title, Contents, CreationDate, Post.Id, pseudo , role, file, Post.Id AS postId, Status
        FROM
           Post
        INNER JOIN users
        ON users.Id = Post.User_Id'
	);

		$query->execute();
		$Posts = $query->fetchAll(PDO::FETCH_ASSOC);


	$template = 'profil';

	include 'index.phtml';

?>
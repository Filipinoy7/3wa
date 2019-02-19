<?php

	session_start();

	include 'bdd_connection.php'; 

	$query = $pdo->prepare
	(
		'SELECT Title, Contents, CreationDate, Post.Id, pseudo , role, file, Post.User_Id AS userId, Status
		FROM Post
		INNER JOIN users
		ON users.Id = Post.User_Id
		'
	);

	$query->execute();

	$experienceRecup = $query->fetchAll(PDO::FETCH_ASSOC);

	$template = 'experience';

	include 'index.phtml';

?>
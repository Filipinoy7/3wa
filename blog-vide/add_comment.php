<?php

if(array_key_exists('role', $_SESSION) == false) {
	header('Location: login.php');
	exit();

}

include 'application/bdd_connection.php';

//var_dump($_POST);

$query = $pdo->prepare(
	' INSERT INTO
            Comment
            (Pseudo, Contents, Post_Id, CreationDate)
        VALUES
            (?, ?, ?, NOW())'
	);

$query->execute( [ $_POST['nickName'], $_POST['contents'], $_POST['postId'] ] );

header('Location: show_post.php?id='.$_POST['postId']);
exit();
?>

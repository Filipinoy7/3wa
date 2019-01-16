<?php

$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

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
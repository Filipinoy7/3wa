<?php

$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');


if(empty($_POST) == true){
	if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id'])){
            header('Location: admin.php');
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
             	iD=?'
     );
      
     $query->execute( [ $_GET['id'] ] );
	 $post = $query->fetch(PDO::FETCH_ASSOC);
     
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
<?php
    session_start();
    $pdo = new PDO('mysql:host=localhost;dbname=Philippines', 'root', 'troiswa'); 

    if(empty($_POST))
    {
        
        if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id']))
        {
            header('Location: index.php');
            exit();
        }

        
        $query =
        '
            SELECT
                Id,
                Title,
                Contents
            FROM
                Post
            WHERE
                Id = ?
        ';
        $query = $pdo->prepare($query);
        $query->execute([$_GET['id']]);
        $post = $query->fetch();

        
        $template = 'edit';
        include 'index.phtml';
    }
    else
    {
       
        $query =
        '
            UPDATE
                Post
            SET
                Title = ?,
                Contents = ?
            WHERE
                Id = ?
        ';
        $post = $pdo->prepare($query);
        $post->execute( [ $_POST['title'], $_POST['contents'], $_POST['postId'] ] );

        
        header('Location: experience.php');
        exit();
    }



?>
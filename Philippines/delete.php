<?php


    if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id']))
    {
        header('Location: index.php');
        exit();
    }

    include 'bdd_connection.php'; 
    
    $query = $pdo->prepare
    (

        'DELETE FROM Post 
        WHERE Id = ?'

    );

    $query->execute( [ $_GET['id'] ] );




    header('Location: experience.php');
    exit();

?>
<?php


    if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id']))
    {
        header('Location: index.php');
        exit();
    }

    $pdo = new PDO('mysql:host=localhost;dbname=Philippines', 'root', 'troiswa');

    $pdo->exec('SET NAMES UTF8');



    $query = $pdo->prepare
    (

        'DELETE FROM Post 
        WHERE Id = ?'

    );

    $query->execute( [ $_GET['id'] ] );




    header('Location: experience.php');
    exit();
<?php
session_start();

if(array_key_exists('role', $_SESSION) == false ) {
    

    header('Location: login.php');
    exit();

} else if ( $_SESSION['role'] != 'admin') {

    header('Location: index.php');
    exit();

}


include 'application/bdd_connection.php';


$query = $pdo->prepare(
	'SELECT
            Post.Id,
            Title,
            Contents,
            CreationDate,
            FirstName,
            LastName,
            Category.Name AS Category_Name
        FROM
            Post
        INNER JOIN
            Author
        ON
            Post.Author_Id = Author.Id
        INNER JOIN
            Category
        ON
            Post.Category_Id = Category.Id
        ORDER BY
            CreationDate DESC'
);

$query->execute();
$posts = $query->fetchAll(PDO::FETCH_ASSOC);



$query = $pdo->prepare(
    'SELECT*
        FROM
           Category'
);

$query->execute();
$categories = $query->fetchAll(PDO::FETCH_ASSOC);

$query = $pdo->prepare(
    'SELECT*
        FROM
           Author'
);

$query->execute();
$authors = $query->fetchAll(PDO::FETCH_ASSOC);
//var_dump($authors);


$query = $pdo->prepare(
    'SELECT*
        FROM
           Users'
);

$query->execute();
$users = $query->fetchAll(PDO::FETCH_ASSOC);

$config = "admin/";
$template = 'admin';
include 'layout.phtml';


?>
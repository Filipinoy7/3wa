<?php

include 'application.php';



$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

if (empty($_POST) == false) {
	$hashPassword = hashPassword($_POST['password']);

var_dump($_POST);

$mail = $_POST['Mail'];
$password = $_POST['Password'];
$firstName = $_POST['Prénom'];
$lastName = $_POST['Nom'];
$pseudo = $_POST['Pseudo'];

$query = $pdo->prepare(
	' INSERT INTO
            users
            (mail, password, firstName, lastName, pseudo, role)
        VALUES
            (?, ?, ?, ?, ?, "user")'
	);

$query->execute([ $mail, $hashPassword, $firstName, $lastName, $pseudo ]);


}

$template = 'register';

include 'blog.phtml';

?>

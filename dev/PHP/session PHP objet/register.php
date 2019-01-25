<?php
session_start();

include 'Database.php';
include 'User.php';


if(empty($_POST) == false) {

	var_dump($_POST);
    
    $user = new User();
    
    $user->addUser($_POST);


}

$template = 'register';
include 'layout.phtml';

?>
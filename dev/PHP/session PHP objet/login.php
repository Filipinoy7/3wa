<?php 

session_start();

include 'Database.php';
include 'User.php';

if(empty($_POST) == false) {
	//var_dump($_POST);
	
	$user = new User();
	$user->connectUser($_POST);
}



$template = 'login';
include 'layout.phtml';


?>
<?php

if (empty($_POST) == false) {



    var_dump($_POST);



	$firstName = $_POST['firstname'];
    $lastName = $_POST['lastname'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    


include 'header.phtml';
include 'recap.phtml';
include 'footer.phtml';

} else {
	header('Location: form.php');
    exit();
}





?>
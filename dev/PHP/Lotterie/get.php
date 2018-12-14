<?php

if (array_key_exists('name', $_GET) == true && array_key_exists('id', $_GET) == true) {

    $name = $_GET['name'];

    $id = $_GET['id'];

    var_dump($name);

    var_dump($id);

    include 'header.phtml';
    include 'get.phtml';
    include 'footer.phtml';

} else {

	header('Location: get.php?name=Nanard&id=15550');
    exit();

}



?>

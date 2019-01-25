<?php

session_start();

include 'Database.php';

$data = new Database();

$users = $data->query('
						SELECT
                         * 
                        FROM 
                         users', 
                         
                       [] );

var_dump($users);


$template = 'index';
include 'layout.phtml';

?>

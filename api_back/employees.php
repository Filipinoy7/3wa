<?php

header('access-control-allow-origin: *');
header('Content-Type: application/json');


include 'class/Database.class.php';
$database = new Database();


if (array_key_exists('id', $_GET) == false) {

    $sql = 'SELECT * FROM employees';


    $execute = [];

    $employees = $database->query($sql, $execute);


    echo json_encode($employees);
    exit();


} else if (array_key_exists('id', $_GET) == true) {

	$sql = 'SELECT * FROM employees WHERE employeeNumber=?';

	$execute = [$_GET['id']];

	$employee = $database->queryOne($sql, $execute);
    
    echo json_encode($employee);
    exit();

}



?>
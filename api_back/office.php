<?php



header('access-control-allow-origin: *');
header('Content-Type: application/json');


include 'class/Database.class.php';
$database = new Database();


if (empty($_GET) == true) {

	$sql = 'SELECT * FROM offices';


	$execute = [];

	$offices = $database->query($sql, $execute);

	
	echo json_encode($offices);
	exit();

}else if (array_key_exists('country', $_GET) == true) {

	$sql = 'SELECT * FROM offices WHERE country = ?';

	$execute = [$_GET['country']];

	$office = $database->query($sql, $execute);

	echo json_encode($office);
	exit();
	
} else if (array_key_exists('id', $_GET) == true) {

	$sql = 'SELECT * FROM offices WHERE officeCode=?';

	$execute = [$_GET['id']];

	$office = $database->queryOne($sql, $execute);

	echo json_encode($office);
	exit();
}




?> 
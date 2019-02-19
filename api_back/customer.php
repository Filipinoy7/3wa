 <?php

header('access-control-allow-origin: *');
header('Content-Type: application/json');

include 'class/Database.class.php';
$database = new Database();

$API_KEY = "aze";

if(array_key_exists('id', $_GET) == true && $_GET['api_key'] == $API_KEY) {

	$sql = 'SELECT * FROM customers WHERE customerNumber =?';

	$execute = [$_GET['id']];

	$customer = $database->queryOne($sql, $execute);
    
    echo json_encode($customer);
	exit();


} else if (array_key_exists('keyword', $_GET) == true && $_GET['api_key'] == "aze"){

	$sql = 'SELECT * FROM customers WHERE customerName LIKE "%"?"%"';


	$execute = [$_GET['keyword']];
    
    $customers = $database->query($sql, $execute);
    
    if ($customers != false) {
		
	    echo json_encode($customers);
		exit();

	} else {

		echo 'Erreur 404 pas de customer avec ce key word';
	}


}else if ( $_GET['api_key'] != "aze") {

	echo 'error 401 va te faire foutre';

}

?>
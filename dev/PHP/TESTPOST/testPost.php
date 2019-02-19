
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare(
	    'SELECT
	        *
	     FROM testTable 
		 WHERE Id=1'
	);

$query->execute();
$str = $query->fetch(PDO::FETCH_ASSOC);



include 'testPost.phtml';

?>


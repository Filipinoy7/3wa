<?php

session_start();


if (empty($_POST) ==  false && !empty($_FILES['photoProfil']['name'])) 
{

	$tailleMax = 2097152;
	$extensionsValides = array('jpg','jpeg','gif','png');


	if($_FILES['photoProfil']['size'] <= $tailleMax)
	{
		$extensionUpload = strtolower(substr(strrchr($_FILES['photoProfil']['name'], '.'),1));

	
		if(in_array($extensionUpload, $extensionsValides))
		{

		 	$chemin = "recupImages/".$_FILES['photoProfil']['name'] ;
		 	$move = move_uploaded_file($_FILES['photoProfil']['tmp_name'], $chemin);


		 	if($move)
		 	{

				$title = $_POST['title'];
				$content = $_POST['contents'];
				$user = $_SESSION['Id'];

				include 'bdd_connection.php'; 

				$query = $pdo->prepare
				(

					'INSERT INTO Post (Title, Contents, CreationDate, User_Id, file, Status)
					VALUE (? , ? ,  NOW(), ?, ?, "waiting")'

				);
		 

		 		$query->execute( array($title, $content, $user, $_FILES['photoProfil']['name']));



			 	header('Location: experience.php');
			    exit();
	 		}

 		}

 	}

}



$template = 'rediger';

include 'index.phtml';

?>
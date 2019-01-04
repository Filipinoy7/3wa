<?php 
include 'utilities.php';


if(empty($_POST['title']) == false) {


	/*var_dump($_POST);*/
    $description = $_POST['tache'];
    $date        = $_POST['année'].'-'.$_POST['mois'].'-'.$_POST['jours'];
    $priority    = $_POST['priority'];
    $title       = $_POST['title'];

    
    addTask($title, $description, $date, $priority);
    header('Location: todo.php');
}

function addTask($title, $description, $date, $priority) {
	
    $taskData =
    [
        $title,
        $description,
        $date,
        $priority
    ];
    
    saveTask($taskData);


}



?>
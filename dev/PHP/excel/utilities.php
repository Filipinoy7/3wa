<?php

function saveTask(array $taskData)
{
	$file = fopen('todo.csv', 'a');
    
    fputcsv($file, $taskData);
    
    fclose($file);
    
}

?>

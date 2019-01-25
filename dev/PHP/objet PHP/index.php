<?php

include 'Time.class.php';
include 'Watch.class.php';

$time = new Time(14, 29, 44);

$time->showTime();

$minute = $time->getMinute();

echo $minute;

$time->setHour(12);

$hours = $time->getHour();

echo $hours;

$watch = new Watch(21, 18, 35, 2001);

var_dump($watch);

$watch->showTime();

?>


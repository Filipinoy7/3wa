$colors = array(50 => 'red', 200 => 'green', 'color' => 'blue');

foreach($colors as $index => $color)
{
   if ($colors[$index] == $_GET['color'])
   {
     echo $color;
   }
}
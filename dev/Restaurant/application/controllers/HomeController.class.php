<?php

class HomeController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        
        $meal = new MealModel();
        $mealData = $meal->listAll();
        
        return [
            
            'meals' => $mealData
        
        ];
        
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    
    
    }
}

?>

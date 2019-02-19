<?php

class OrderController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
  		if(array_key_exists('user', $_SESSION) == false) {

    		$http->redirectTo('/user/login');
    	}
        
        $mealModel = new MealModel();
        $meals     = $mealModel->listAll();
        
       return
		[
			'meals' => $meals
		];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    
    }
}

?>

                                                                          <?php

class MealController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	// index.php/meal?id=3
      
        if(array_key_exists('id', $_GET) == true && ctype_digit($_GET['id']) == true)
        {
        	$mealModel = new MealModel();
            $meal      = $mealModel->find($_GET['id']);
            
            $http->sendJsonResponse($meal);
        
        } else {
        
        	$http->redirectTo('/');
        
        }
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    
    }
}


?>

<?php

class RegisterController{

   public function httpGetMethod(Http $http, array $queryFields)
   {

   }

   public function httpPostMethod(Http $http, array $formFields)
   {
       $data = new UserModel();
       $data -> addUser($_POST);

           
   }
}




<?php


class UserModel{

   public function addUser($post){


       $hash = $this -> hashPassword($post['password']);

       $data = new Database();
       $data -> executeSql('INSERT INTO User(FirstName,LastName,Email,Password,BirthDate,CreationTimestamp,Address,City,ZipCode,Phone)
                           VALUES (?, ?, ?, ?, ?, NOW(), ?, ?, ?, ?)',
                           [
                               $post['firstName'],
                               $post['lastName'],
                               $post['email'],
                               $hash,
                               $post['birthYear'].'-'.$post['birthMonth'].'-'.$post['birthDay'],
                               $post['address'],
                               $post['city'],
                               $post['zipCode'],
                               $post['phone']
                           ]);


       $http = new Http();
       $http->redirectTo('/');


   }
   public function logInUser($post){


       $data = new Database();
       $infoUser = $data ->  queryOne('SELECT *
                           FROM User
                           WHERE Email = ?',
                           [
                               $post['email']
                           ]);

       if ($infoUser == false){
           var_dump('Le mail est incorrect.');
       }
       else{
           if ($this -> verifyPassword($post['password'],$infoUser['Password']) == true){

               $_SESSION['Id'] = $infoUser['Id'];
               $_SESSION['FirstName'] = $infoUser['FirstName'];
               $_SESSION['LastName'] = $infoUser['LastName'];
               $_SESSION['Email'] = $infoUser['Email'];
               $_SESSION['Password'] = $infoUser['Password'];
               $_SESSION['BirthDate'] = $infoUser['BirthDate'];
               $_SESSION['Address'] = $infoUser['Address'];
               $_SESSION['City'] = $infoUser['City'];
               $_SESSION['ZipCode'] = $infoUser['ZipCode'];
               $_SESSION['Country'] = $infoUser['Country'];
               $_SESSION['Phone'] = $infoUser['Phone'];
               $_SESSION['CreationTimestamp'] = $infoUser['CreationTimestamp'];
               $_SESSION['LastLoginTimestamp'] = $infoUser['LastLoginTimestamp'];


               $http = new Http();
               $http->redirectTo('/');

           }
           else{
               var_dump('Le password est incorrect.');
           }
       }
   }
   private function hashPassword($password){

// le cost est à faire varier en fonction de la rapidité du serveur
//http://php.net/manual/fr/function.password-hash.php     permet de vérifier quel cost est adapté à son serveur
       $options = [
           'cost' => 8,
       ];
       return password_hash($password, PASSWORD_BCRYPT, $options);
   }
   private function verifyPassword($password,$hash){

       return password_verify($password,$hash);
   }






}


?>
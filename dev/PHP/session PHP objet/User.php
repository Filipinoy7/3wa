<?php 


class User {


	public function addUser($post) {
    
    	$hashPwd = $this->hashPassword($post['psw']);
    
    	$data = new Database();
        
        $data->executeSql('INSERT INTO 
								users(email, psw, firstName, lastName, age) 
							   VALUES 
							   (?, ?, ?, ?, ?)',
                               
                               [
                               	$post['email'],
                               	$hashPwd,
                               	$post['firstName'], 
								$post['lastName'], 
								$post['age'] 
                               ]
                               
                          	);
                            
    	header('Location: index.php');
		exit();
    
    }
    
    public function connectUser($post) {
    
    	$database = new Database();
        
        $user = $database->queryOne('SELECT * FROM users WHERE email =?', [ $post['email'] ]);
        
        var_dump($user);
        
        if( $user != false && $this->verifyPassword($post['psw'], $user['psw']) == true ) {
        	
            $_SESSION['id'] = $user['id'];
			$_SESSION['email'] = $user['email'];
			$_SESSION['firstName'] = $user['firstName'];
			$_SESSION['lastName'] = $user['lastName'];
			$_SESSION['age'] = $user['age'];
            
            header('Location: index.php');
			exit();
 
        } else {
        	echo 'pas le bon mot de passe ou adresse mail';
        
        }
    
    	
    }
    
    
    
    private function hashPassword($password)
    {

        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        return crypt($password, $salt);
    }

    private function verifyPassword($password, $hashedPassword)
	{
		return crypt($password, $hashedPassword) == $hashedPassword;
	}

    
    



}






?>
<?php


class Database
{
	private $pdo;
    
    public function __construct() {
    
    	$this->pdo = new PDO('mysql:host=localhost;dbname=session', 'root', 'troiswa');
    
    }
    
    
    public function query($sql, array $criteria= [] )
    {
    	$this->pdo->exec('SET NAMES UTF8');

		$query = $this->pdo->prepare( $sql );
        
        $query->execute( $criteria ); 
        
        return $query->fetchAll(PDO::FETCH_ASSOC);
	}
    
    public function queryOne($sql, array $criteria= [] )
    {
    	$this->pdo->exec('SET NAMES UTF8');

		$query = $this->pdo->prepare( $sql );
        
        $query->execute( $criteria ); 
        
        return $query->fetch(PDO::FETCH_ASSOC);
	}

	
	public function executeSql($sql, array $values = array())
	{
    	$this->pdo->exec('SET NAMES UTF8');
        
        $query = $this->pdo->prepare($sql);
        
        $query->execute($values);

    }
	
}


?>
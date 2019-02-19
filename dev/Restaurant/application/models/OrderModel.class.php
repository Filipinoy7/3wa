<?php


class OrderModel
{   

	public function validate($userId, array $orders)
    {
    	$database = new Database();
        
        $orderId = $database->executeSql
        (
            'INSERT INTO `Order`
			(
				User_Id,
				CreationTimestamp,
				TaxRate,
                Status
			) VALUES (?, NOW(), 20.0, "not payed")',
            [ $userId ]
        );


    }


}
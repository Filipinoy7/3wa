<!DOCTYPE html>
<html>
<head>
	<title>payment</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css"/>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

</head>
<body>
		<div class="container">
			<h2 class="my-4 text-center">Intro to react course price 50$</h2>
			<form action="charge.php" method="post" id="payment-form">
			  <div class="form-row">
			    <input type="text" class="form-control mb-3 StripeElement StripeElemen--empty" placeHolder="Prénom" name="first_name">

			    <input type="text" class="form-control mb-3 StripeElement StripeElemen--empty" placeHolder="Nom" name="last_name">

			    <input type="email" class="form-control mb-3 StripeElement StripeElemen--empty" placeHolder="Email" name="email">

			    <div id="card-element" class="form-control ">
			      <!-- A Stripe Element will be inserted here. -->
			    </div>

			    <!-- Used to display form errors. -->
			    <div id="card-errors" role="alert"></div>
			  </div>

			  <button>Submit Payment</button>
			</form>
		</div>
		<script src="https://js.stripe.com/v3/"></script>
		<script src="charge.js"></script>		
</body>
</html>
'use strict';


var OrderForm = function()
{
	this.basket = new BasketSession();
	this.onChangeMeal();
	$('#meal').on('change', this.onChangeMeal.bind(this));
    $('#order-form button').on('click', this.validateMeal.bind(this));
    $(document).on('click', '.trash', this.removeMeal.bind(this));
}

OrderForm.prototype.onChangeMeal = function(event)
{

	var mealId = $('#meal').val();
    console.log(getRequestUrl() + '/meal?id=' + mealId);
    
    $.getJSON( getRequestUrl() + '/meal?id=' + mealId, this.onAjaxChangeMeal);  
}

OrderForm.prototype.onAjaxChangeMeal = function(response)
{
	console.log(response);
    
    var imageUrl = getWwwUrl() + '/images/meals/' + response.Photo;

    $('#meal-details p').text(response.Description);
    $('#meal-details strong').text(parseFloat(response.SalePrice).toFixed(2));
    $('#meal-details img').attr('src', imageUrl);

}

OrderForm.prototype.validateMeal = function(event) {
	event.preventDefault();
	
    var mealId = $('#meal').val();
	var name = $('#meal').find('option:selected').text();
    var quantity = $('#quantity').val();
    var salePrice = $('#meal-details strong').text();
    var img = $('#meal-details img').attr('src');

	this.basket.add(mealId, name, quantity, salePrice, img);

}

OrderForm.prototype.removeMeal = function(event) {
	
    event.preventDefault();
    var index = event.currentTarget.dataset.id;
	this.basket.remove(index);

}
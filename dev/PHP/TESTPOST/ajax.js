function onAjaxChangeDb(event) {
	
    event.preventDefault();
    
	var query = $('#changedString').val();
    
    console.log(query);

	var value = { 'query': query }
    
    $.ajax({
        url: "modif.php",
        type: "POST",
        data: value,
    })
	.done(callB)
	.fail( function(error) {
    	
        console.log(error);
    
    });


}


function callB(res) {

	console.log(JSON.parse(res));
    
}

$('#changeText').on('click', onAjaxChangeDb);

var contacts = loadDataFromDomStorage('carnet');

if(contacts == null) {
	contacts = [];
}

showAll();


function onClickAddContact()
{
	$('#contact-form').removeClass('hide');
	$('#contact-form').data('mode', 'add');
    
 // $('#contact-form').fadeIn('fast');  retire un display none avec un transition fondu au noir
	

}


function createContact(title, lastName, firstName, phone) {
	var contact = {
		civility: title,
		lastName: lastName.toUpperCase(),
		firstName: firstName,
		phone: phone
	}

	return contact;
}
        	


function onClickSaveContact(event) {
	event.preventDefault();

	var title = $('#title').val();
	var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
	var phone = $('#phone').val();

	var contact = createContact(title, lastName, firstName, phone);
	console.log(contact);
	contacts.push(contact);
	console.log(contacts);

    if ($('#contact-form').data('mode') == 'add') {
    	
        addressBook.push(contact);
    
    } else {
    	var id = $('#contact-details').data('id');
        
        addressBook[id] = contact;
    
    }
    

	 saveDataToDomStorage("carnet", contacts);

	 showAll();

	 $('#contact-details').addClass('hide');
    $('#contact-form').addClass('hide');
}

function showAll() {
	$('#address-book').html('<ul>');
	 for (var i = 0; i < contacts.length ; i++) {

	 	$('#address-book ul').append('<li data-id="'+i+'"> <a>'+contacts[i].firstName+' '+contacts[i].lastName+'</a></li>');

	 }
}

function onClickShowContactDetails() {

	var id = $(this).data('id');
    
	$('#contact-details h3').text(contacts[id].title+'. '+contacts[id].firstName+' '+contacts[id].lastName);
    $('#contact-details p').text(contacts[id].phone);
    
    $('#contact-details').removeClass('hide');
    $('#contact-details').data('id', id);
    
}

function onClickEditContact() {

	var id =  $('#contact-details').data('id');
     $('#title').val(addressBook[id].title);
    $('#firstName').val(addressBook[id].firstName);
    $('#lastName').val(addressBook[id].lastName);
    $('#phone').val(addressBook[id].phone);
    
	$('#contact-form').data('mode', 'edit');
    $('#contact-form').removeClass('hide');
}

function onClickClearAddressBook(event) {
	event.preventDefault();
    
    addressBook = [];
    saveDataToDomStorage('contacts', []);
    refreshAddressBook(addressBook);

}
'use strict';

$('#add-contact').on('click', onClickAddContact);
$('#save-contact').on('click', onClickSaveContact);
$(document).on('click', '#address-book li', onClickShowContactDetails);
$('#contact-details a').on('click', onClickEditContact);
$('#clear-address-book').on('click', onClickClearAddressBook);
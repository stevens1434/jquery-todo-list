$(document).ready(function() {
	var textBox;
	var addButton = document.getElementById('#button');
	var wholeList = document.getElementById('#wholelist');

$('#button').on('click', function() {
	textBox = $('#textbox').val();
	var newItem = $('<li>').append(textBox);
	// $('#wholelist').append('<li>' + textBox + '</li>');
	$(newItem).append('<input type="button" value="X" class="deletebutton">');
	$("#wholelist").append(newItem);
	jQuery('#textbox').focus(function()	{
	$(this).val('');
	});
});

$(function() {
	$("#textbox").focus();
});

$('#wholelist').on('click', "input", function(e) {
	$(e.target).parent().remove();
	});
});

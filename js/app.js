$(document).ready(function() {
  var textBox;
  var addButton = document.getElementById('#button');
  var wholeList = document.getElementById('#wholelist');

  $('#button').on('click', function() {
	textBox = $('#textbox').val();
	$('#wholelist').append('<li>' + textBox + '</li>');
	$('#wholelist').append('<input type="button" value="X" class="deletebutton">');
	jQuery('#textbox').focus(function()
	{
  	$(this).val('');
});
  });

$(function() {
  $("#textbox").focus();
});

  $('#wholelist').on('click', "li", function() {
	$("li").remove(this.li); });
	$('li').remove('#deletebutton');
});


// i think i need to have teh DOM add a specific "id" tag to each NEW "li" item and then reference taht to delete it.

// also need to add a function to allow me to start typing right away.

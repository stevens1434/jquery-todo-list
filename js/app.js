$(document).ready(function() {


var textBox;
var addButton = document.getElementById("#button");
var wholeList = document.getElementById("#wholelist");

$("#button").on('click', function() {
	textBox = $('#textbox').val();
	$("#wholelist").append('<li>' + textBox + "</li>");
	$("#wholelist").append('<input type="button" value="X" class="deletebutton">');
	jQuery("#textbox").focus( function()
	{ 
  	$(this).val(""); 
});

});
$("#wholelist").on('click',function() { 
	$(this).remove()});
    $("#deletebutton").remove("li");

});





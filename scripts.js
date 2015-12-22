var d = new Date();
var currentDay = d.getDate();
var currentMonth = d.getMonth();
var currentDate = currentMonth + "/" + currentDay;


$(document).ready(function(){

	$('#button').click(function(){
		$.get('http://numbersapi.com/' + currentDate + '/date', function(data) {
		    $('#output').text(data);
		});
	});
})
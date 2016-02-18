$(document).ready(function(){
	var button = $('#submitButt')
	var seatNumber = [];
	//NEW FUNK TION HERE
	for(var i=1; i<=24; i++){
		seatNumber.push(i);
		$("#seat-chart").append(function(){
			return "<div class='available'><h3>" + i + "</h3></div>";
		})
	}
		$("div.available").click(function(){
		$(this).toggleClass("reserved");
	});
		$('.available').on('click', function() {
		$('#seat').replaceWith('test');
	});
});


// attempt to create object with customer input 
// (unsuccessful so far)

$( "form" ).submit(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});




// creates an array of customer info and appends it to reserved divs 
// (successful, but not what we want)

// $("button").click(function () {
// 	var firstName = $("input[name='firstName']").val();
// 	var lastName = $("input[name='lastName']").val();
// 	var phoneNumber = $("input[name='phoneNumber']").val();
// 	var customer = [];
// 	customer.push(firstName, lastName, customer);
// 	if ($("div").hasClass("reserved")) {
// 		$(".reserved").append(customer);
// 	}
// });
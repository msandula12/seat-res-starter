
console.log("Hello world, its Kwaku!");

$(document).ready(function(){
	
	// looping function creates seating chart divs
	// (successful)
	var seatNumber = [];
	for(var i = 1; i <= 24; i++){
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

	// serialize form input
	// (successful)
	$( "form" ).submit(function( event ) {
		var customer = $( this ).serializeArray();
		console.log(customer);
		event.preventDefault();
	});

	// $("#submitButton").click(function () {
	// 	$( "form" ).submit(function( event ) {
	// 		var customer = $( this ).serializeArray();
	// 		console.log(customer);
	// 		event.preventDefault();
	// 		if ($("div").hasClass("reserved")) {
	// 			$(".reserved").data("First", "");
	// 		}
	// 	});
	// });

	
	// show one form field at a time
	// (successful — but wondering if it could be DRY with a "for" loop?)
	$("#firstName").focus(function() {
		$("#lastNameDiv").fadeIn(400);
	});

	$("#lastName").focus(function() {
		$("#phoneNumberDiv").fadeIn(400);
	});

	$("#phoneNumber").focus(function() {
		$("#submitButton").fadeIn(400);
	});
	
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


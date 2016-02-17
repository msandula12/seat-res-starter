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
		// function showValues() {
		// 	var results = $(":input").serializeArray();
		// 	// $('#seat-chart').empty();
		// 	jQuery.each( results, function( i, field)
		// 		$( "#seat-chart" ).append(field.value + " ");
		// });
});




	
$(document).ready(function(){
	
			var button = $('#submitButt')
			var seatNumber = [];
			//NEW FUNK TION HERE
			for(var i=1; i<=24; i++){
				seatNumber.push(i);
				$("#seat-chart").append(function(){
					return "<div class='available'>" + i + "</div>";
				})
			}

		$("div.available").click(function(){
		$(this).toggleClass("reserved");

		});


	});




	
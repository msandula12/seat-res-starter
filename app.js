$(document).ready(function(){

		$("div.available").click(function(){
		$(this).toggleClass("reserved");

	});

$('form').submit(function() {
    // get all the inputs into an array.
    var $values = $(this).serialize();

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    // var values = {};
    // $inputs.each(function() {
    //     values[this.name] = $(this).val();
    // });
$(values).submit(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});

  // function showValues() {
  //   var values = $( "submitButt" ).serializeArray();
  //   $( /*the array values*/ ).empty();
  //   jQuery.each( fields, function( i, field ) {
  //     $( "#results" ).append( field.value + " " );
  //   });
  // }
 
  // $( ":checkbox, :radio" ).click( showValues );
  // $( "select" ).change( showValues );
  // showValues();







});

// document.forms[form].getElementsbyId('custName');
		// $( "form" ).data( "test", {first: "Tom", last: "Alexander"});
		// $( "span:first" ).text( $( "div.reserved" ).data("test").first )
});


	// $('submitButt').click(function){
	// 	getElementById('custName').value;


// function getInputElements() {
// 	var custName = document.getElementsbyId('custName');



	// var custName = document.getElementById('custName').value;
	// var custEmail = document.getElementById('custEmail').value;
	// 	$('submitButt').click(function(){
	// 	$('#first').append("<span></span>");
	// 	}
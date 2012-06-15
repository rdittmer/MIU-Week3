
var parseTeeForm = function( data ) {
	
	console.log(data);
};

$(document).bind('pageinit' ,function(event) {
    
	var teeForm = $( '#teeForm' );
	
	teeForm.validate({
		invalidHandler: function( form, validator ){},
		submitHandler: function(){
			var data = teeForm.serializeArray();
			parseTeeForm( data );
			}
		});
	
});
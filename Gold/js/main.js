$(document).bind('pageinit', function(){
   var form = $('#teeForm');
   form.validate({
      invalidHandler: function(form, validator){},
      submitHandler: function(){
         
      }
   });
});
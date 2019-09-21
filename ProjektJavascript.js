$(document).ready(function(){
    var $regexname=/^([a-zA-Z]{3,16})$/;
    $('#name').on('keypress keydown keyup',function(){
             if (!$(this).val().match($regexname)) {
              
                 $('#spanName').removeClass('hideForm');
                 $('#spanName').show();
             }
           else{
                
                $('#spanName').addClass('hideForm');
               }
         });
});
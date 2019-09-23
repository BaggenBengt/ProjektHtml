$(document).ready(function(){
    formValidate();
});

$(document).keyup(function(){

    formValidate();  
    
  
  
    /*  if($('#namn').is(':focus')){
              validNamn();
                  
      }
      if ($('#email').is(':focus')) {
              validEmail();
      }
      //validEmail();
      //validTel();
      //validMeddelande();*/
  });





function formValidate(){
    
    var validNamn = false;
    var validEmail = false;

    
      // /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g   /^(\w+\S+)$/
    if(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test($('#namn').val()) || ($('#namn').val().length >= 4 )){
    validNamn = true;
    $('#spanNamn').addClass('hideForm');
    }

     if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test($('#namn').val()) && ($('#namn').val().length <= 2 )){
        validNamn = false;
        $('#spanNamn').removeClass('hideForm');
        }
        
    if(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test($('#email').val())){
        $('#spanEmail').addClass('hideForm');
        valid = true;
        }
    if (!/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test($('#email').val())){
        $('#spanEmail').removeClass('hideForm');
        valid = false;
        }
    if (validNamn && validEmail){
        $('#submit').removeClass('disabled');
    }
    if (!validNamn && !validEmail){
        $('#submit').addClass('disabled');
    }
}

/*function submitToggle(){
    if(formValidate()){
        $('#submit').removeClass('disabled');
    }
    else {
        $('#submit').addClass('disabled');
    }
}*/

/*function validNamn(){

        var valid= false;
        $('#namn').keyup(function(){
 if(!/^(\w+\S+)$/.test($('#namn').val()) || $('#namn').val().length < 3 ){
     $('#spanNamn').removeClass('hideForm');
     valid = false;
     //submitToggle();
     }
 else{
     $('#spanNamn').addClass('hideForm');
     valid = true;
    // submitToggle();
 }
 return valid;
 });
} */


/*function validEmail(){

    var valid= false;
    $('#email').keyup(function(){
           
           
           
    if(!/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test($(this).val())){
        $('#spanEmail').removeClass('hideForm');
        valid = false;
       // submitToggle();
        }
    else{
        $('#spanEmail').addClass('hideForm');
        valid = true;
       // submitToggle();
    }
    return valid;
    });
} */


/*
function validTel(){
    $('#tel').keyup(function(){
        var valid= false;
        
        
 if(!//.test($(this).val())){
     valid = false;
     $('#spanTel').removeClass('hideForm');
     }
 else{
     $('#spanTel').addClass('hideForm');
     valid = true;
 }
 return valid;
 });
}*/

//function validMeddelande(){}

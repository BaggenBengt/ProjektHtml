$(document).ready(function(){
    submitToggle();
})

$(document).on('change',function(){
    validEmail();
    validNamn();
    //validTel();
    //validMeddelande();
});


function formValidate(){

    var validForm = false;
    
    if(validNamn() && validEmail() && validTel() && validMeddelande()){
        validForm = true;
    }
    else {
        validForm = false;
    }
    return validForm;
}

function submitToggle(){
    if(formValidate()){
        $('#submit').removeClass('disabled');
    }
    else {
        $('#submit').addClass('disabled');
    }
}

function validNamn(){

    $('#namn').keyup(function(){
        var valid= false;
              
 if(!/^(\w+\S+)$/.test($(this).val()) || $(this).val().length < 3 ){
     $('#spanNamn').removeClass('hideForm');
     valid = false;
     submitToggle();
     }
 else{
     $('#spanNamn').addClass('hideForm');
     valid = true;
     submitToggle();
 }
 return valid;
 });
}

function validEmail(){

    $('#email').keyup(function(){
           var valid= false;
           
           
    if(!/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test($(this).val())){
        $('#spanEmail').removeClass('hideForm');
        valid = false;
        submitToggle();
        }
    else{
        $('#spanEmail').addClass('hideForm');
        valid = true;
        submitToggle();
    }
    return valid;
    });
}


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

function validMeddelande(){
    

    }

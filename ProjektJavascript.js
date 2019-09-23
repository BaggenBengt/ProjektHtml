$(document).ready(function(){
    formValidate();
});

$(document).keyup(function(){

    formValidate();  
  });

function formValidate(){
    
    var validNamn = false;
    var validEmail = false;
    var validTel = false;
    var validMeddelande = false;

    if(/^[a-zA-Z]{3,}\s[a-zA-Z]{2,}$/.test($('#namn').val())){
        validNamn = true;
        $('#spanNamn').addClass('hideForm');
        }

    if (!/^[a-zA-Z]{3,}\s[a-zA-Z]{2,}$/.test($('#namn').val())){
        validNamn = false;
        $('#spanNamn').removeClass('hideForm');
        }
        
    if(/^[^@]+@[^@]+.[^@]{2,3}/.test($('#email').val())){
        $('#spanEmail').addClass('hideForm');
        validEmail = true;
        }

    if (!/^[^@]+@[^@]+.[^@]{2,3}/.test($('#email').val())){
        $('#spanEmail').removeClass('hideForm');
        validEmail = false;   
        }

    if (/(\+?46|0)7\d{8}$/.test($('#tel').val())){
        $('#spanTel').addClass('hideForm');
        validTel = true;   
        } 

    if (!/^(\+?46|0)7\d{8}$/.test($('#tel').val())){
        $('#spanTel').removeClass('hideForm');
        validTel = false;   
        } 

    if (/^\w/.test(($('#meddelande').val()))){
        $('#spanMeddelande').addClass('hideForm');
        validMeddelande = true;
        }

    if (!/^\S+$/.test(($('#meddelande').val()))){
        $('#spanMeddelande').removeClass('hideForm');
        validMeddelande = false;
        }

    if (validNamn && validEmail && validTel && validMeddelande){
        $('#submit').removeClass('disabled');
        }

    if (!validNamn || !validEmail ||!validTel ||!validMeddelande){
        $('#submit').addClass('disabled');
    }
}


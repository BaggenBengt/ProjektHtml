$(document).ready(function(){
//Startar och stänger av Timern anropar även funktionen "bytBild()" ---->

$('#spelaBildspel').click(function(){
    var namn = $('#spelaBildspel').val();
    if (namn == " "){
    tid = setInterval("bytBild()", 1000);

    $('#spelaBildspel').val("  ");
    $('#spelaBildspel').css('opacity', '0.3');
    $("#spelaBildspel").css("background-image", "url('pause1.png')");
}
     if (namn == "  "){
    clearInterval(tid);
    $('#spelaBildspel').val(" ");
    $('#spelaBildspel').css('opacity', '1');
    $("#spelaBildspel").css("background-image", "url('play1.png')");
     }
    });
    //Startar och stänger av Timern <----
});



 // För Hambugeren (navbaren) så att den slide in och slide ut. On click!
function navSlide(){
var burger = document.querySelector('.scrollLista');
var nav = document.querySelector('.meny');


burger.addEventListener('click',()=>{
    nav.classList.toggle('meny-active');

});

}

navSlide();



// Funktionen som byter själva bilden!
function bytBild(){
   
    var image = document.getElementById("imgBildSpel");
    if(image.src.match("bild1.jpg")){
    image.src = "bild2.jpg";
  
    
    }
    else if (image.src.match("bild2.jpg")){
    image.src = "bild3.jpg";
    }
    else if (image.src.match("bild3.jpg")){
    image.src = "bild4.jpg";
    }
    else{
    image.src = "bild1.jpg";
   
    }
    }

   

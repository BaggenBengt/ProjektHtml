$(document).ready(function(){
//Startar och stänger av Timern ---->

$('#spelaBildspel').click(function(){
    var namn = $('#spelaBildspel').val();
    if (namn == " "){
    tid = setInterval("bytBild()", 1000);

    $('#spelaBildspel').val("  ");
    $("#spelaBildspel").css("background-image", "url('pause1.png')");
}
     if (namn == "  "){
    clearInterval(tid);
    $('#spelaBildspel').val(" ");
    $("#spelaBildspel").css("background-image", "url('play-button.png')");
     }
    });
    //Startar och stänger av Timern <----
});

//Funktionen som byter bild! Den ska ligga utanför Document RDY funtionen annars blir den inte inläst!

function bytBild(){
   
    var image = document.getElementById("imgBildSpel");
    if(image.src.match("bild1.jpg")){
    image.src = "bild2.jpg";
    document.getElementById("nav2").style.backgroundColor = '#3b3a3a8f';
    document.getElementById("nav1").style.backgroundColor = 'black';
    
    }
    else if (image.src.match("bild2.jpg")){
    image.src = "bild3.jpg";
    document.getElementById("nav3").style.backgroundColor = '#3b3a3a8f';
    document.getElementById("nav2").style.backgroundColor = 'black';
    }
    else{
    image.src = "bild1.jpg";
    document.getElementById("nav3").style.backgroundColor = 'black';
    document.getElementById("nav1").style.backgroundColor = '#3b3a3a8f';
    }
    }

   

$(document).ready(function(){
//Startar och stänger av Timern ---->

$('#spelaBildspel').click(function(){
    var namn = $('#spelaBildspel').val();
    if (namn == "Starta bildspelet"){
    tid = setInterval("bytBild()", 1000);

    $('#spelaBildspel').val("Pausa bildspelet");
}
     if (namn == "Pausa bildspelet"){
    clearInterval(tid);
    $('#spelaBildspel').val("Starta bildspelet");
    
     }
    });
    //Startar och stänger av Timern <----
});

var bildVisning1 = getElementById("bildid1");
var bildVisning2 = getElementById("bildid2");
var bildVisning3 = getElementById("bildid3");


//Funktionen som byter bild! Den ska ligga utanför Document RDY funtionen annars blir den inte inläst!
function bytBild(){
   
    var image = document.getElementById("imgBildSpel");
    if(image.src.match("bild1.jpg")){
    image.src = "bild2.jpg";
    
    }
    else if (image.src.match("bild2.jpg")){
    image.src = "bild3.jpg";
    }
    else{
    image.src = "bild1.jpg";
    }
    }

   

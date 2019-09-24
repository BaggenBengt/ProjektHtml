$(document).ready(function(){
        
    $("#robin").click(function(){
     $("#bottom").empty();
     $("#bottom").load("https://raw.githubusercontent.com/BaggenBengt/ProjektHtml/Robin/RobinPersonliga.html");     
    }) 

    $("#mattias").click(function(){
        $("#bottom").empty();
        $("#bottom").load("https://raw.githubusercontent.com/BaggenBengt/ProjektHtml/Robin/RobinPersonliga.html");     
       }) 
   
       $("#oskar").click(function(){
        $("#bottom").empty();
        $("#bottom").load("https://raw.githubusercontent.com/BaggenBengt/ProjektHtml/Robin/RobinPersonliga.html");     
       }) 


      




    $("#overlaySpotify").click(function(){
        $("#spotifyText").fadeIn(1500);
        })
        $("#overlayChrome").click(function(){       // När man trycker på logon kommer texten fram
            $("#chromeText").fadeIn(1500);
            })




      });


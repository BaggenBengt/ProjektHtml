$(document).ready(function(){
         
    $("#robin").click(function(){
    $("#robin").removeClass("fornamn"); 
    $("#mattias, #oskar, #alla").removeClass("selected");
    $("#mattias, #oskar, #alla").addClass("fornamn")
     $("#robin").addClass("selected");   
     $("#bottom").empty();
     $("#bottom").load("https://raw.githubusercontent.com/BaggenBengt/ProjektHtml/Robin/RobinPersonliga.html");     
    }) 

    $("#mattias").click(function(){
        $("#bottom").empty();
        $("#mattias").removeClass("fornamn"); 
        $("#robin, #oskar, #alla").removeClass("selected");
        $("#robin, #oskar, #alla").addClass("fornamn")
         $("#mattias").addClass("selected"); 
        $("#bottom").load("https://raw.githubusercontent.com/BaggenBengt/ProjektHtml/Robin/MattiasPersonliga.html");     
       }) 
   
       $("#oskar").click(function(){
        $("#bottom").empty();
        $("#oskar").removeClass("fornamn"); 
        $("#mattias, #robin, #alla").removeClass("selected");
        $("#mattias, #robin, #alla").addClass("fornamn")
         $("#oskar").addClass("selected"); 
        $("#bottom").load("https://raw.githubusercontent.com/BaggenBengt/ProjektHtml/Robin/OskarPersonliga.html");     
       }) 


       $("#alla").click(function(){
        $("#alla").removeClass("fornamn"); 
        $("#mattias, #robin, #oskar").removeClass("selected");
        $("#mattias, #robin, #oskar").addClass("fornamn")
         $("#alla").addClass("selected"); 
         $("#bakgrund").load("");




       })

      




    $("#overlaySpotify").click(function(){
        $("#spotifyText").fadeIn(1500);
        })
        $("#overlayChrome").click(function(){       // När man trycker på logon kommer texten fram
            $("#chromeText").fadeIn(1500);
            })




      });


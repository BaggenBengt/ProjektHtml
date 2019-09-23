$(document).ready(function(){
        
    $("#profilBildEtt").click(function(){
     $("#bottom").empty();
     $("#profilBildTva").hide();
     $("#profilBildTre").hide();
     


    }) 

    $("#overlaySpotify").click(function(){
        $("#spotifyText").fadeIn(1500);
        })
        $("#overlayChrome").click(function(){       // När man trycker på logon kommer texten fram
            $("#chromeText").fadeIn(1500);
            })




      });


$(document).ready(function(){

    var doamain = "http://raspberrypi:8080/"

    $("#ledON").click(function(){
       $.ajax({
            url: doamain+"Led/on",
            async: true,
            dataType: "text",
            success: function(data, status){
                alert("functioniert")
            },
            error: function(xhr, status, error){
                alert("functioniert nicht")
            },
            type: "post"
       });

    });

    $("#ledOFF").click(function(){
        $.ajax({
             url: doamain+"Led/off",
             async: true,
             dataType: "text",
             success: function(data, status){
                 alert("functioniert")
             },
             error: function(xhr, status, error){
                 alert("functioniert nicht")
             },
             type: "post"
        });
 
     });
});
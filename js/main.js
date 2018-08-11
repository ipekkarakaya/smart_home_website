$(document).ready(function(){

    var doamain = "http://raspberrypi:8080/"

    $("#led_on").click(function(){
       $.ajax({
            url: doamain+"led/on",
            async: false,
            dataType: "text",
            error: function(xhr, status, error){
                alert("Server ist nicht erreichbar")
            },
            type: "post"
       });

    });

    $("#led_off").click(function(){
        $.ajax({
             url: doamain+"led/off",
             async: false,
             dataType: "text",
             error: function(xhr, status, error){
                alert("Server ist nicht erreichbar")
             },
             type: "post"
        });
 
     });

     $("#alarm_on").click(function(){
        $.ajax({
             url: doamain+"alarm/activate",
             async: false,
             dataType: "text",
             error: function(xhr, status, error){
                alert("Server ist nicht erreichbar")
             },
             type: "post"
        });
 
     });

     $("#alarm_off").click(function(){
        $.ajax({
             url: doamain+"alarm/deactivate",
             async: false,
             dataType: "text",
             error: function(xhr, status, error){
                alert("Server ist nicht erreichbar")
             },
             type: "post"
        });
 
     });

     $("#alarm_sleeping").click(function(){
        $.ajax({
             url: doamain+"alarm/off",
             async: false,
             dataType: "text",
             error: function(xhr, status, error){
                alert("Server ist nicht erreichbar")
             },
             type: "post"
        });
 
     });
});
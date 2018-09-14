$(document).ready(function(){

    var doamain = "http://raspberrypi:8080/"

    $("#led_living_room_on").click(function(){
       $.ajax({
            url: doamain+"led1/on",
            async: false,
            dataType: "text",
            error: function(xhr, status, error){
                alert("Server ist nicht erreichbar")
            },
            type: "post"
       });

    });

    $("#led_living_room_off").click(function(){
        $.ajax({
             url: doamain+"led1/off",
             async: false,
             dataType: "text",
             error: function(xhr, status, error){
                alert("Server ist nicht erreichbar")
             },
             type: "post"
        });
 
     });

     $("#led_kitchen_on").click(function(){
        $.ajax({
             url: doamain+"led2/on",
             async: false,
             dataType: "text",
             error: function(xhr, status, error){
                 alert("Server ist nicht erreichbar")
             },
             type: "post"
        });
 
     });
 
     $("#led_kitchen_off").click(function(){
         $.ajax({
              url: doamain+"led2/off",
              async: false,
              dataType: "text",
              error: function(xhr, status, error){
                 alert("Server ist nicht erreichbar")
              },
              type: "post"
         });
  
      });

      $("#led_bedroom_on").click(function(){
        $.ajax({
             url: doamain+"led3/on",
             async: false,
             dataType: "text",
             error: function(xhr, status, error){
                 alert("Server ist nicht erreichbar")
             },
             type: "post"
        });
 
     });
 
     $("#led_bedroom_off").click(function(){
         $.ajax({
              url: doamain+"led3/off",
              async: false,
              dataType: "text",
              error: function(xhr, status, error){
                 alert("Server ist nicht erreichbar")
              },
              type: "post"
         });
  
      });

      $("#led_bathroom_on").click(function(){
        $.ajax({
             url: doamain+"led4/on",
             async: false,
             dataType: "text",
             error: function(xhr, status, error){
                 alert("Server ist nicht erreichbar")
             },
             type: "post"
        });
 
     });
 
     $("#led_bathroom_off").click(function(){
         $.ajax({
              url: doamain+"led4/off",
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

     $("#update_temperature").click(function(){
        $.ajax({
             url: doamain+"temperature",
             async: false,
             dataType: "text",
             error: function(xhr, status, error){
                alert("Server ist nicht erreichbar")
             },
             success: function(response){
                $("#temperature_display").text(response);
             },
             type: "get"
        });
     });
});
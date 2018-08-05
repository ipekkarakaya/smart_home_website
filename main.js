$(document).ready(function(){

    var doamain = "http://192.168.178.61:8080/"

    $("#ledON").click(function(){
       $.ajax({
            url: doamain+"Led/on",
            async: true,
            dataType: "html or json",
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
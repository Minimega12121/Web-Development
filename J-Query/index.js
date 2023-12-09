$("h1").addClass("big-title margin-15");

$("h1").html("<em>Archit</em>");

$("h1").click(function(){
    $("h1").css("color","orange");
    
});

//Withour for loops selects all buttons
$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

$(document).keypress(function(event){
    $("h1").html(event.key);
});
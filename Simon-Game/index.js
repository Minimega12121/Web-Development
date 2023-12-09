
var buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;

$(document).keypress(function(){
    if(!started){
        nextSequence();
        started=true;
}   
});

var userChosenColor;

$(".btn").click(function(){ 
    var userChosenColor = this.getAttribute("id");
    animatePress(userChosenColor);
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    
});

function nextSequence(){
    userClickedPattern = [];
    $("h1").html("Level "+level);
    var randomNumber = Math.floor(4*Math.random());
    var randomChosenColor = buttonColors[randomNumber];
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
    gamePattern.push(randomChosenColor);
}

function checkAnswer(index){
    
   if(gamePattern[index]==userClickedPattern[index])
   {
       if(gamePattern.length==userClickedPattern.length)
       {
         level++;
        setTimeout(nextSequence,1000);
       }
    }
    else{
        $("h1").html("Game Over, Press any key to restart");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over")},100);
        gameOver();
    }
}

function animatePress(curentColour){
     $("#"+curentColour).addClass("pressed");
     setTimeout(function(){$("#"+curentColour).removeClass("pressed");},100);
     
}

function playSound(colorName){
    var audio= new Audio("sounds/"+colorName+".mp3");
    audio.play();
}

function gameOver(){
    gamePattern=[];
    level=0;
    started=false;
}


var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red","green","yellow","blue"];
var level = 0;
var started = false;

$(document).keypress(function (){
    if(!started){
        $(".heading").text("Level" + level);
        nextSequence();
        started = true;
    }
});

$(".box").click(function (){

    var userChosenColour = $(this).attr("id");
    makeSound(userChosenColour);

    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer((userClickedPattern.length)-1); 

});



function nextSequence (){

    userClickedPattern = [];

    level++;
    $(".heading").text("Level "+ level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColour);
}

function makeSound(colour){
    new Audio("sounds/" + colour + ".mp3").play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function (){
        $("#" + currentColour).removeClass("pressed");
    },100);
}

function checkAnswer (currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success");
        if (gamePattern.length === userClickedPattern.length){
            setTimeout(nextSequence,1000);
        }
    } else {
        makeSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        },200);
        $(".heading").text("Game Over ! Press any key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
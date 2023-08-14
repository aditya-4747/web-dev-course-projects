

function nextLevel (levelNo) {

    $(document).keypress(function (){

        var buttonColors = ["red","green","yellow","blue"];

        var pattern = [];

        $(".heading").text("Level " + levelNo);

        for(var i = 0; i < levelNo; i++){

            var randomNumber = Math.floor(Math.random()*4);

            var randomChosenColor = buttonColors[randomNumber];

            pattern.push(randomChosenColor);

            makeSound(randomChosenColor);
            $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

        }

        levelNo++;
    });

}

function makeSound(color){
        
    switch (color){
        case "red" :
            new Audio("sounds/red.mp3").play();
            break;

        case "green" :
            new Audio("sounds/green.mp3").play();
            break;

        case "yellow" :
            new Audio("sounds/yellow.mp3").play();
            break;

        case "blue" :
            new Audio("sounds/blue.mp3").play();
            break;

        default :
            new Audio("sounds/wrong.mp3").play();

    }
}

nextLevel(1);
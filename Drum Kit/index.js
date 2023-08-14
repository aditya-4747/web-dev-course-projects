
// var buttons = document.querySelectorAll("button.drum");
// for (var i = 0;i < buttons.length; i++){
//     buttons[i].addEventListener("click",clickDetector);
// }

// function clickDetector() {
//     var audio = new Audio("sounds/tom-1.mp3").play();
//     audio.play();
// }


// OR (Both do same task)

var buttons = document.querySelectorAll("button.drum");
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function () {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        makeAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function (event){

    makeSound(event.key);

    makeAnimation(event.key);

});



function makeSound(key){
    switch (key) {

        case "w" :
            new Audio("sounds/tom-1.mp3").play();
            break;

        case "a" :
            new Audio("sounds/tom-2.mp3").play();
            break;

        case "s" :
            new Audio("sounds/tom-3.mp3").play();
            break;

        case "d" :
            new Audio("sounds/tom-4.mp3").play();
            break;

        case "j" :
            new Audio("sounds/crash.mp3").play();
            break;

        case "k" :
            new Audio("sounds/snare.mp3").play();
            break;

        case "l" :
            new Audio("sounds/kick-bass.mp3").play();
            break;

        default :
            console.log(key);
    }
}


function makeAnimation (currentKey){
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    } , 100);
}

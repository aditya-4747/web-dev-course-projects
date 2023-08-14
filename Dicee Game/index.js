var randomNumber1 = Math.floor(Math.random()*6) + 1;
var diceLeft = "images/dice"+randomNumber1+".png";
document.querySelector(".left-dice img").setAttribute("src",diceLeft);


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var diceRight = "images/dice"+randomNumber2+".png";
document.querySelector(".right-dice img").setAttribute("src",diceRight);


if (randomNumber1 > randomNumber2){
    document.querySelector(".main-heading").textContent = "🚩Player 1 Wins!!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".main-heading").textContent = "Player 2 Wins!!🚩";
} else {
    document.querySelector(".main-heading").textContent = "Draw!!";
}
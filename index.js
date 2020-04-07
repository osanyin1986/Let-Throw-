
var randomNumber1=Math.floor(Math.random()*6)+1;// randomnumber from 1-6

var randomDiceImage="dice" + randomNumber1 + ".png";// dice1.png-dice6.png

var randomimagesource="images/" + randomDiceImage;//image/dice.png-image/dice.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);




//dice for player two progamming



var randomNumber2=Math.floor(Math.random()*6)+1;

var randomimagesource2="images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩player1win🚩";
}

else if (randomNumber2 > randomNumber1 ) {
  document.querySelector("h1").innerHTML="😝player2win😝";
}

else {
  document.querySelector("h1").innerHTML="😁Draw!😁";
}

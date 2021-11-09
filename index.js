var random_num1=Math.floor(Math.random()* 6) + 1;  //Random number between 1 & 6

var imageSource1= "images/dice" + random_num1 + ".png"; //Images/dice1.png-dice6.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource1);


var random_num2=Math.floor(Math.random()*6) + 1;
var imageSource2= "images/dice" + random_num2 + ".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);

if(random_num1>random_num2){
  document.querySelector("h1").innerHTML= "Player 1 Wins!";
}else if(random_num2>random_num1){
  document.querySelector("h1").innerHTML="player 2 wins!";
}else{
  document.querySelector("h1").innerHTML="Draw";
}

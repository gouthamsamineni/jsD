var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImages = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImages);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImages2 ="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImages2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = '<i class="flag-col fad fa-pennant"></i> player 1 Wins';
} else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = 'player 2 Wins <i class="flag-col fad fa-pennant"></i>';
} else{
  document.querySelector("h1").innerHTML = " DRAW !";
}

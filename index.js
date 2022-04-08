function rolldice(){
    
var randomvariable1= Math.floor(Math.random () *6)+1;
var randomimg= "d"+randomvariable1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg);


var randomvariable2= Math.floor(Math.random () *6)+1;
var randomimg2= "d"+randomvariable2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);
if (randomvariable1>randomvariable2){
    document.querySelector("h1").innerHTML="Player 1 wins! 🚩";
}
else if(randomvariable1<randomvariable2){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw Match! ⚡";
}
}


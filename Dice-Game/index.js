//Generating random numbers for the roll
var r1=6*Math.random()+1;
var r2=6*Math.random()+1;
r1=Math.floor(r1);
r2=Math.floor(r2);
var str1="images/dice"+r1+".png"
var str2="images/dice"+r2+".png"

//Selecting the image elements to eb changed
document.querySelectorAll("img")[0].setAttribute("src", str1);
document.querySelectorAll("img")[1].setAttribute("src", str2);

//Changing the heading depending on the rolls
if(r1>r2){
    document.querySelector("h1").innerHTML=" 🚩Player1 wins";
}
if(r2>r1){
    document.querySelector("h1").innerHTML="Player2 wins 🚩";
}
if(r1==r2){
    document.querySelector("h1").innerHTML="Draw!";
}

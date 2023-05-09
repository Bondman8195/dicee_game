var randomnumber1=Math.random();
randomnumber1=(randomnumber1*6)+1;
randomnumber1=Math.floor(randomnumber1);

var randomnumber2=Math.random();
randomnumber2=(randomnumber2*6)+1;
randomnumber2=Math.floor(randomnumber2);

document.querySelector(".img1").setAttribute("src","images/dice"+randomnumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomnumber2+".png");


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 🚩"; 
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
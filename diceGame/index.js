'use strict'

window.addEventListener('DOMContentLoaded', e => {
   document.querySelector(".btn").addEventListener("click", e => {
    //  console.log(e);
     const randomNumber1 = Math.floor(Math.random() * 6) + 1
     const randomNumber2 = Math.floor(Math.random() * 6) + 1
     const randomDiceImage1 = "dice" + randomNumber1 + ".png";
     const randomDiceImage2 = "dice" + randomNumber2 + ".png";
     const randomImage1 = "images/" + randomDiceImage1;
     const randomImage2 = "images/" + randomDiceImage2;
     // const image1 = randomImage1.src = randomDiceImage1;
     const pOne = document.getElementById("img1").setAttribute("src", randomImage1)
     const pTwo = document.getElementById("img2").setAttribute("src", randomImage2)

     if (randomNumber1 > randomNumber2) {
       document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
     }
     else if (randomNumber1 < randomNumber2) {
       document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"
     }
     else {
       document.querySelector("h1").innerHTML = "🚩 Draw"
     }
 })
})

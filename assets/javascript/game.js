var currentRandom;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var wins = 0;
var losses = 0;
var adder;

function reset() {
  currentRandom = Math.floor(Math.random() * (120 - 19) ) + 19;
  crystal1 = Math.floor(Math.random() * (12 - 1) ) + 1;
  crystal2 = Math.floor(Math.random() * (12 - 1) ) + 1;
  crystal3 = Math.floor(Math.random() * (12 - 1) ) + 1;
  crystal4 = Math.floor(Math.random() * (12 - 1) ) + 1;
  adder = 0;
  $("#number").html(currentRandom)
  $("#number2").html(adder);
  $("#wins").html(wins);
  $("#losses").html(losses);
}

//setup (runs when page loads)
$(document).ready(function() {
    reset();
    $("#crystal1").click(function() { 
        adder+=crystal1; 
        totalScore();
    });
    $("#crystal2").click(function() { 
        adder+=crystal2; 
        totalScore();
    });
    $("#crystal3").click(function() { 
        adder+=crystal3; 
        totalScore();
    });
    $("#crystal4").click(function() { 
        adder+=crystal4; 
        totalScore();
    });
});

function totalScore() {
$("#number2").html(adder);
    if (adder == currentRandom) {
        alert("You win!");
        wins++;
        reset();
    }
    else if (adder > currentRandom) {
        alert("You lose!");
        losses++;
        reset();
    }
}
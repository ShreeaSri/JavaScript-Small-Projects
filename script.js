"use strict";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 130;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const deciderFunction = function (secretNumber, guess) {
  if (score > 1) {
    if (!guess) {
      displayMessage("No Number!");
    } else if (guess > secretNumber) {
      displayMessage("Too high!");
    } else if (guess < secretNumber) {
      displayMessage("Too low!");
    }
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    displayMessage("You loose !");
  }
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    deciderFunction(secretNumber, guess);
  } else if (guess === secretNumber) {
    displayMessage("Congratulations! you win.");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    deciderFunction(secretNumber, guess);
  } else if (guess < secretNumber) {
    deciderFunction(secretNumber, guess);
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});

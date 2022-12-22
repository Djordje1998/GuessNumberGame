"use strict";

let secretNumber = getRandom();
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function getRandom() {
  return Math.trunc(Math.random() * 20) + 1;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // No Guess
  if (!guess) {
    displayMessage("⛔ No number!");
    // Correct Guess
  } else if (secretNumber === guess) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".check").disabled = true;
    // Guess is wrong
  } else if (secretNumber !== guess) {
    displayMessage(secretNumber < guess ? "📈 Too high!" : "📉 Too low!");
    score--;
    if (score <= 0) {
      displayMessage("💥 You lost the game!");
      score = 0;
    }
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = getRandom();
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

const finalNumberEl = document.getElementById("final-number");
const againBtnEl = document.getElementById("again-button");
const checkForm = document.getElementById("check-form");
const gameStatusEl = document.getElementById("game-status");
const gameCounterEl = document.getElementById("game-counter");
const gameResultEl = document.getElementById("game-result");

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let counter = 15;
let game = true;
let result = 0

console.log(randomNumber);
checkForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (game) {
    const inputValue = checkForm["check-input"].value;

    if (inputValue == randomNumber) {
      document.body.style.background = "#CDFAD5";
      gameStatusEl.textContent = "You won ! 👑";
      finalNumberEl.textContent = inputValue;
      
      if (counter > result) {
        gameResultEl.textContent = counter
      }
      
      game = false;
      
    } else {
      counter--;
      gameCounterEl.textContent = counter;

      if (randomNumber - inputValue > 0) {
        gameStatusEl.textContent = "Too Low 👇";
      } else {
        gameStatusEl.textContent = "Too High ☝️";
      }

      if (counter == 0) {
        document.body.style.background = "#E95793";
        gameStatusEl.textContent = "You fail ! ❌";
        finalNumberEl.textContent = randomNumber;
        game = false;
      }
    }
  }
});

againBtnEl.addEventListener("click", () => {
  finalNumberEl.textContent = "?";
  checkForm["check-input"].value = "";
  gameStatusEl.textContent = "Start Game";
  gameCounterEl.textContent = 15;
  counter = 15;
  document.body.style.backgroundColor = "#FDE5D4";
  game = true;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
});

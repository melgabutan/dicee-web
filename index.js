let diceOne = document.querySelector("#dice-one");
let diceTwo = document.querySelector("#dice-two");
let winnerPrompt = document.querySelector("h1");

setUpEventListeners();

function displayWinner(diceOneNumber, diceTwoNumber) {
  if (diceOneNumber > diceTwoNumber) {
    winnerPrompt.textContent = "Player One Wins! 🚩";
  } else if (diceOneNumber < diceTwoNumber) {
    winnerPrompt.textContent = "Player Two Wins! 🚩";
  } else {
    winnerPrompt.textContent = "Draw!";
  }
}

function getRandomDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function onDiceClick() {
  let diceOneNumber = getRandomDiceNumber();
  let diceTwoNumber = getRandomDiceNumber();
  diceOne.setAttribute("src", `images/dice${diceOneNumber}.png`);
  diceTwo.setAttribute("src", `images/dice${diceTwoNumber}.png`);
  displayWinner(diceOneNumber, diceTwoNumber);
}

function setUpEventListeners() {
  diceOne.addEventListener("click", onDiceClick);
  diceTwo.addEventListener("click", onDiceClick);
}

const lapisButton = document.getElementById("rock");
const papyrusButton = document.getElementById("paper");
const scalpellusButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");
const playerMoveText = document.getElementById("playerMoveText");
const compMoveText = document.getElementById("compMoveText");
const resultText = document.getElementById("resultText");
const playerScoreText = document.getElementById("playerScoreText");
const compScoreText = document.getElementById("compScoreText");
const lapisIcon = document.getElementById("rockIcon");
const papyrusIcon = document.getElementById("paperIcon");
const scalpellusIcon = document.getElementById("scissorsIcon");
const choices = { 1: "Lapis", 2: "Papyrus", 3: "Scalpellus" };

let playerChoice = 0;
let compChoice = 0;
let playerScore = 0;
let compScore = 0;

function compMove() {
  compChoice = Math.floor(Math.random() * 3 + 1);
  choices[`${compChoice}`];
  compMoveText.innerText = choices[`${compChoice}`];
}

function calculateWinner() {
  if (playerChoice === compChoice) {
    resultText.innerText = "It's a tie!";
  } else if (playerChoice === 1) {
    if (compChoice === 2) {
      resultText.innerText = "Computer wins!";
      setTimeout(compScore++, 2000);
      compScoreText.innerText = compScore;
    } else {
      resultText.innerText = "Congratulations! You win!";
      setTimeout(playerScore++, 2000);
      playerScoreText.innerText = playerScore;
    }
  } else if (playerChoice === 2) {
    if (compChoice === 3) {
      resultText.innerText = "Computer wins!";
      setTimeout(compScore++, 2000);
      compScoreText.innerText = compScore;
    } else {
      resultText.innerText = "Congratulations! You win!";
      setTimeout(playerScore++, 2000);
      playerScoreText.innerText = playerScore;
    }
  } else if (playerChoice === 3) {
    if (compChoice === 1) {
      resultText.innerText = "Computer wins!";
      setTimeout(compScore++, 2000);
      compScoreText.innerText = compScore;
    } else {
      resultText.innerText = "Congratulations! You win!";
      setTimeout(playerScore++, 2000);
      playerScoreText.innerText = playerScore;
    }
  }
}
function resetIcons() {
  papyrusIcon.style.opacity = "1";
  scalpellusIcon.style.opacity = "1";
  lapisIcon.style.opacity = "1";
}

function initializeGame() {
  setTimeout(compMove, 1000);
  setTimeout(calculateWinner, 2000);
}

lapisButton.addEventListener("click", function () {
  resetIcons();
  compMoveText.innerText = "";
  resultText.innerHTML = "&hearts; &hearts; &hearts;";
  playerChoice = 1;
  playerMoveText.innerText = choices[`${playerChoice}`];
  papyrusIcon.style.opacity = "0.4";
  scalpellusIcon.style.opacity = "0.4";
  initializeGame();
});
papyrusButton.addEventListener("click", function () {
  resetIcons();
  compMoveText.innerText = "";
  resultText.innerHTML = "&hearts; &hearts; &hearts;";
  playerChoice = 2;
  playerMoveText.innerText = choices[`${playerChoice}`];
  lapisIcon.style.opacity = "0.4";
  scalpellusIcon.style.opacity = "0.4";
  initializeGame();
});
scalpellusButton.addEventListener("click", function () {
  resetIcons();
  compMoveText.innerText = "";
  resultText.innerHTML = "&hearts; &hearts; &hearts;";
  playerChoice = 3;
  playerMoveText.innerText = choices[`${playerChoice}`];
  lapisIcon.style.opacity = "0.4";
  papyrusIcon.style.opacity = "0.4";
  initializeGame();
});

resetButton.addEventListener("click", function () {
  playerScore = 0;
  compScore = 0;
  playerChoice = 0;
  compChoice = 0;
  playerScoreText.innerText = 0;
  compScoreText.innerText = 0;
  playerMoveText.innerText = "";
  compMoveText.innerText = "";
  resultText.innerHTML = "&hearts; &hearts; &hearts;";
  resetIcons();
});

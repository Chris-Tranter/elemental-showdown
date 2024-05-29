const choices = ["fire", "air", "earth", "water", "wood", "iron"];
const defeats = {
  fire: ["wood", "air"],
  air: ["earth", "water"],
  earth: ["water", "fire"],
  water: ["fire", "iron"],
  wood: ["earth", "iron"],
  iron: ["wood", "air"],
};

let playerScore = 0;
let computerScore = 0;
let round = 1;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log(`Round ${round}`);
  console.log(`Player choice: ${playerChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  const result = document.getElementById("result");
  const roundResult = document.getElementById("roundResult");

  if (playerChoice === computerChoice) {
    result.textContent = "It's a tie!";
  } else if (defeats[playerChoice].includes(computerChoice)) {
    result.textContent = "You win this round!";
    playerScore++;
  } else {
    result.textContent = "Computer wins this round!";
    computerScore++;
  }

  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);

  updateScore();

  round++;

  if (round > 3) {
    const finalResult = document.getElementById("finalResult");
    if (playerScore > computerScore) {
      finalResult.textContent = "You win the game!";
    } else if (playerScore < computerScore) {
      finalResult.textContent = "Computer wins the game!";
    } else {
      finalResult.textContent = "It's a tie game!";
    }
    roundResult.textContent = "";
    resetGame();
  } else {
    roundResult.textContent = `Round ${round}`;
  }
}

function updateScore() {
  const score = document.getElementById("score");
  score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  updateScore();
  console.clear();
}

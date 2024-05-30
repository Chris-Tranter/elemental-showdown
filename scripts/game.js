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

  // Play the sound effect based on the player's choice
  const sound = document.getElementById(`${playerChoice}Sound`);
  sound.play();

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
      endOfGame('player');
    } else if (playerScore < computerScore) {
      finalResult.textContent = "Computer wins the game!";
      endOfGame('computer');
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
  const playerName = localStorage.getItem("playerName");
  score.textContent = `${playerName}: ${playerScore} | Computer: ${computerScore}`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  updateScore();
  console.clear();
}

// End of Game modal
var modal = document.getElementById("end-game-modal");
var playAgainBtn = document.getElementById("play-again");
var closeModalBtn = document.getElementsByClassName("close")[0];
var exitGameBtn = document.getElementById("admit-defeat");
var endResult = document.getElementById("end-result")
var endMessage = document.getElementById("end-message")
var playerName = localStorage.getItem("playerName");

function endOfGame(winner) {
  modal.style.display = "block";
  if (winner === 'player') {
    endResult.innerText = `You won the Elemental Showdown!`
    endMessage.innerText = `You can now rest on your laurels ${playerName} or join the fight again!`
    playAgainBtn.innerText = `Play Again!`
    exitGameBtn.innerText = `Leave with Pride`
  } else {
    endResult.innerText = `You lost the Elemental Showdown...`
    endMessage.innerText = `The Singularity may have won this battle ${playerName} but you could win the war...`
    playAgainBtn.innerText = `Try Again!`
    exitGameBtn.innerText = `Accept Defeat...`
  };
}

closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

playAgainBtn.onclick = function () {
  navigateToGame();
};

exitGameBtn.onclick = function () {
  navigateToHome();
};

function navigateToHome() {
  var url = "../index.html";
  location.href = url;
}

function navigateToGame() {
  var url = "./game.html";
  location.href = url;
}
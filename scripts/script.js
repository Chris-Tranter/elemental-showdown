// logic for index.html
// Model
var modal = document.getElementById("playerModal");
var openModalBtn = document.getElementById("openModal");
var closeModalBtn = document.getElementsByClassName("close")[0];
var playButton = document.getElementById("playButton");
var playerNameInput = document.getElementById("playerName");

openModalBtn.onclick = function () {
  modal.style.display = "block";
};

closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

playerNameInput.oninput = function () {
  var playerName = playerNameInput.value.trim();
  if (playerName.length > 3) {
    playButton.disabled = false;
  } else {
    playButton.disabled = true;
  }
};

playButton.onclick = function () {
  var playerName = playerNameInput.value.trim();
  localStorage.setItem("playerName", playerName);
  navigateToGame(playerName);
};

function navigateToGame(playerName) {
  var url = "../pages/game.html";
  window.location.href = url;
}

// drifting cards
// Drift in/out animation for rule cards
const cards = document.querySelectorAll(".card");

function showCards() {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 200);
  });
}

function hideCards() {
  cards.forEach((card) => {
    card.classList.remove("show");
  });
}

// Show cards when the page loads
window.addEventListener("load", showCards);

// Hide cards when the modal is opened
openModalBtn.addEventListener("click", hideCards);

// Show cards when the modal is closed
closeModalBtn.addEventListener("click", showCards);
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    showCards();
  }
});

// ...

// logic for game-anonymous.html

let timerInterval;
let remainingTime = 5;

function updateScoreDisplay() {
  document.getElementById('score').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function playGame(playerChoice) {
  const choices = ['fire', 'earth', 'air', 'water', 'wood', 'iron'];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = ''; 
  console.log('player choice', playerChoice);
  console.log('computer choice', computerChoice);
  
  let playerScore = 0;
  let computerScore = 0;
  if (playerChoice === computerChoice) {
    result = "You have checked the Calamity's power for now, Shadow Warrior!";
  } else if (
    (playerChoice === 'fire' && (computerChoice === 'air' || computerChoice === 'wood')) ||
    (playerChoice === 'earth' && (computerChoice === 'water' || computerChoice === 'fire')) ||
    (playerChoice === 'air' && (computerChoice === 'earth' || computerChoice === 'water')) ||
    (playerChoice === 'water' && (computerChoice === 'fire' || computerChoice === 'iron')) ||
    (playerChoice === 'wood' && (computerChoice === 'earth' || computerChoice === 'iron')) ||
    (playerChoice === 'iron' && (computerChoice === 'wood' || computerChoice === 'air'))
  ) {
    result = `You have succeeded this trial, Shadow Warrior! ${playerChoice} beats ${computerChoice}.`;
    playerScore++; 
    console.log('playerwins');
    let roundWinner = 'player';
  } else {
    result = `Your actions have doomed the world, Shadow Warrior! ${computerChoice} beats ${playerChoice}.`;
    computerScore++;
    console.log('computerwins');
    let roundWinner = 'computer'; 
  }
  console.log('player score', playerScore);
  console.log('computer score', computerScore);
  console.log('result', result);

  document.getElementById('result').innerText = result;
  updateScoreDisplay();
}

function updateScore();

if roundWinner = 'player' 










// if computer win update computer score by 1
// if draw no change
// if player wins update player score by 1













// logic for game-name.html

// Retrieve the player name from local storage
var playerName = localStorage.getItem("playerName");

// Display the welcome message with the player's name
var welcomeMessage = document.getElementById("welcomeMessage");
if (welcomeMessage) {
  welcomeMessage.textContent = "Welcome, " + playerName + "!";
}

// logic for the timer
let roundDuration = 5;
let timer;
let timeLeft = roundDuration;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      timeLeft = roundDuration;
      updateTimerDisplay();
      // Add any additional logic you want to run at the end of each round
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  timeLeft = roundDuration;
  updateTimerDisplay();
}

// Event listeners for buttons
if (startBtn && stopBtn && resetBtn) {
  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);
  resetBtn.addEventListener("click", resetTimer);
}

// Initialize the timer display
if (timerDisplay) {
  updateTimerDisplay();
}
// the audio player
document.addEventListener("DOMContentLoaded", function () {
  var backgroundAudio = document.getElementById("backgroundAudio");
  var toggleAudio = document.getElementById("toggleAudio");

  // Set the volume to a lower value (0.5 = 50% volume)
  backgroundAudio.volume = 0.5;

  // Check if the audio should be playing based on the stored state
  var isPlaying = localStorage.getItem("audioPlaying");
  if (isPlaying === "true") {
    backgroundAudio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
    toggleAudio.textContent = "Turn Off Audio";
  } else {
    toggleAudio.textContent = "Turn On Audio";
  }

  // Toggle audio on button click
  toggleAudio.addEventListener("click", function () {
    if (backgroundAudio.paused) {
      backgroundAudio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      toggleAudio.textContent = "Turn Off Audio";
      localStorage.setItem("audioPlaying", "true");
    } else {
      backgroundAudio.pause();
      toggleAudio.textContent = "Turn On Audio";
      localStorage.setItem("audioPlaying", "false");
    }
  });
});

//   ...

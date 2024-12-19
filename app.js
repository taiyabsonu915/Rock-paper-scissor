let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate computer's choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * options.length);
  return options[randIdx];
};

// Function to handle a draw game
const drawGame = () => {
  msg.innerText = "It's a draw! Play again.";
  msg.style.backgroundColor = "#081b31";
};

// Function to update scores and display winner message
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "red";
  }
};

// Function to play the game
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    const rules = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    const userWin = rules[userChoice] === compChoice;
    showWinner(userWin, userChoice, compChoice);
  }
};

// Event listeners for each choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

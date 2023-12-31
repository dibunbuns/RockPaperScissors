let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
// underscore says its an DOM tag
const scoreBoard_div = document.querySelector(".scoreboard");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
//caching the DOM makes it so we don't have to type it out every time
//AND so the computer doesn't have to either

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function convertToWord(choice) {
  if (choice === "rock") return "Rock";
  if (choice === "paper") return "Paper";
  if (choice === "scissors") return "Scissors";
}
//there is def a better way to capitalize first letter.
function checkIfSomeoneWon() {
  if (userScore === 5) {
    results_p.innerText = `You win! Congrats!`;
    scoreBoard_div.classList.add("green-glow");
    setTimeout(() => scoreBoard_div.classList.remove("green-glow"), 1500);
    resetScore();
  } else if (computerScore === 5) {
    results_p.innerText = `Oh no! You lost to a computer! L.`;
    scoreBoard_div.classList.add("red-glow");
    setTimeout(() => scoreBoard_div.classList.remove("red-glow"), 1500);
    resetScore();
  }
}
function resetScore() {
  userScore = 0;
  computerScore = 0;
  setTimeout(() => (userScore_span.innerText = userScore), 1500);
  setTimeout(() => (computerScore_span.innerText = computerScore), 1500);
}

function win(userChoice, computerChoice) {
  userScore += 1;
  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;
  const userChoice_div = document.getElementById(userChoice);
  results_p.innerText = `${convertToWord(userChoice)} beats ${convertToWord(
    computerChoice
  )}. Round won!`;
  checkIfSomeoneWon();
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 500);
}

function lose(userChoice, computerChoice) {
  computerScore += 1;
  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;
  const userChoice_div = document.getElementById(userChoice);
  results_p.innerText = `${convertToWord(userChoice)} loses to ${convertToWord(
    computerChoice
  )}. Round lost!`;
  checkIfSomeoneWon();
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
}

function tie(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  results_p.innerText = `${convertToWord(userChoice)} = ${convertToWord(
    computerChoice
  )}. It's a tie!`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("rock"));
  paper_div.addEventListener("click", () => game("paper"));
  scissors_div.addEventListener("click", () => game("scissors"));
}

main();

//I really don't know what order to write my code.
//I would also like to know why my images r not gucci.

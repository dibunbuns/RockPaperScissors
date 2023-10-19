let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

//to test:
// let result = getComputerChoice();
// console.log(result);
function game() {
  while (playerScore < 5 && computerScore < 5) {
    const playerSelection = prompt("Choose: ROCK, PAPER, or SCISSORS");
    if (
      playerSelection === null ||
      !["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())
    ) {
      alert("No. Try again.");
      continue;
    }
    const computerSelection = getComputerChoice();
    alert(
      playRound(
        playerSelection,
        computerSelection
      )
    );
  }
  if (playerScore === 5) {
    alert("You won the game!");
  } else if (computerScore ===5){
    ("You lost the game. Better luck next time.");
  }
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  ) {
    playerScore += 1;
    return `You win this round! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore += 1;
    return `You lost this round! ${computerSelection} beats ${playerSelection}`;
  }
}
game();

//console.log(playRound(playerSelection, computerSelection)

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return "It's a tie!";
//   } else if (playerSelection === "rock" && computerSelection === "Scissors") {
//     playerScore += 1;
//     return "You win this round! ${playerSelection} beats ${computerSelection}";
//   } else if (playerSelection === "paper" && computerSelection === "Rock") {
//     playerScore += 1;
//     return "You win this round! ${playerSelection} beats ${computerSelection}";
//   } else if (playerSelection === "scissors" && computerSelection === "Paper") {
//     playerScore += 1;
//     return "You win this round! ${playerSelection} beats ${computerSelection}";
//   } else {
//     computerScore += 1;
//     return "You lost this round! ${computerSelection} beats ${playerSelection}";
//   }
// }


need to fix tie mechanic it is case sensitive atm
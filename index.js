window.addEventListener("DOMContentLoaded", (e) => {
  let playerScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
  }

  function game() {
    while (playerScore < 5 && computerScore < 5) {
      let playerSelect = prompt("Choose: ROCK, PAPER, or SCISSORS");
      if (!playerSelect) {
        alert("Hey don't leave me :(");
        return;
      }
      let playerSelection =
        playerSelect.charAt(0).toUpperCase() +
        playerSelect.slice(1).toLowerCase();
      if (
        playerSelection !== "Rock" &&
        playerSelection !== "Paper" &&
        playerSelection !== "Scissors"
      ) {
        alert("nope, try again.");
        continue;
      }
      const computerSelection = getComputerChoice();
      alert(playRound(playerSelection, computerSelection));
    }
    if (playerScore === 5) {
      alert("You won the game!");
    } else if (computerScore === 5) {
      alert("You lost the game. Better luck next time.");
    }
  }
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return `It's a tie! Score: ${playerScore}:${computerScore}`;
    } else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
      playerScore += 1;
      return `You win this round! ${playerSelection} beats ${computerSelection}! Score: ${playerScore}:${computerScore}`;
    } else {
      computerScore += 1;
      return `You lost this round! ${computerSelection} beats ${playerSelection}! Score: ${playerScore}:${computerScore}`;
    }
  }
  game();
});

//to test:
// let result = getComputerChoice();
// console.log(result);

//console.log(playRound(playerSelection, computerSelection)

//need to fix tie mechanic it is case sensitive atm

//if you hit okay it add a default otherwise it goes without you
//now even banana counts against you smh

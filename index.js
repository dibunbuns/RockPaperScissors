function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

//to test:
// let result = getComputerChoice2();
// console.log(result);

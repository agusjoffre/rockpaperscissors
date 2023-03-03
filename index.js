let choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function getPlayerChoice() {
  let input = prompt();
  if (input !== null) {
    input = input.toLowerCase();
  }
  let isValidInput = choices.includes(input);

  while (!isValidInput) {
    console.log("Invalid input. Please choose rock, paper or scissor");
    input = prompt().toLowerCase();
    isValidInput = choices.includes(input);
  }

  return input;
}

function playRound(computerSelection, playerSelection) {
  let answer;
  if (computerSelection === "rock" && playerSelection === "paper") {
    answer = "You win! Paper beats Rock";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    answer = "You lose! Paper beats Rock";
  } else if (computerSelection === "rock" && playerSelection === "scissor") {
    answer = "You lose! Rock beats Scissor";
  } else if (computerSelection === "scissor" && playerSelection === "rock") {
    answer = "You win! Rock beats Scissor";
  } else if (computerSelection === "paper" && playerSelection === "scissor") {
    answer = "You win! Scissor beats paper";
  } else if (computerSelection === "scissor" && playerSelection === "paper") {
    answer = "You lose! Scissor beats Paper";
  } else if (computerSelection === playerSelection) {
    answer = "Its a tie. " + computerSelection + " vs " + playerSelection;
  }
  return answer;
}

function winnerAnnounce(playerScore, computerScore) {
  let answer;
  if (playerScore > computerScore) {
    answer = "You are the winner";
  } else if (playerScore < computerScore) {
    answer = "The PC is the winner";
  } else if (playerScore === computerScore) {
    answer = "Its a tie";
  }
  return answer;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let answer = playRound(playerSelection, computerSelection);
    if (answer.includes("win")) {
      playerScore++;
    } else if (answer.includes("lose")) {
      computerScore++;
    }
  }
  console.log(
    "Your Score " + playerScore,
    "The PC Score " + computerScore,
    winnerAnnounce(playerScore, computerScore)
  );
}
game()
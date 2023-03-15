const choices = ['rock', 'paper', 'scissors']
const winners = []

function game(){
    for(let i = 0; i < 5; i++) {
        playRound(i)
    }
    showWinner()
}

function playRound(round){
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()
    const winner = checkWhoWins(playerSelection, computerSelection)
    winners.push(winner)
    showRounds(playerSelection, computerSelection, winner, round)
}


function getPlayerChoice(){
    let input = prompt('rock, paper, scissors')
    input = input.toLowerCase()
    while(input == null){
        input = prompt('rock, paper, scissors')
    }
    let check = isValidInput(input)
    while (check == false) {
       input = prompt('write again')
    }
    while(input == null){
        input = prompt('rock, paper, scissors')
    }     
    input = input.toLowerCase()
    check = isValidInput(input)
    return input
}

function getComputerChoice(){
    let random = choices[Math.floor(Math.random() * choices.length)]
    return random
}


function isValidInput (input){
    if (choices.includes(input)){
        return true
    }
}

function checkWhoWins (playerSelection, computerSelection){
    let answer
    if (playerSelection === computerSelection){
        answer = 'It`s a tie!'
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'paper' && computerSelection === 'rock') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        answer = `You win! ${playerSelection} beats ${computerSelection}!`
    } else {
        answer = `You lose! ${computerSelection} beats ${playerSelection}!`
    }
    return answer
}

function showWinner(){
    let playerWins = winners.filter((item) => item.includes('You win!')).length
    let computerWins = winners.filter((item) => item.includes('You lose!')).length
    let tie = winners.filter((item) => item === 'It`s a tie!').length
    console.log("results:")
    console.log("player score ", playerWins)
    console.log("computer score ", computerWins)
    console.log("ties ", tie)
}

function showRounds(playerSelection, computerSelection, winner, round){
    console.log("Round: ", round)
    console.log("You choose ", playerSelection)
    console.log("Computer choose ", computerSelection)
    console.log('--------------------------------------')
}

game()
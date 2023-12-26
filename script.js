

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log('It is a tie!')
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
        console.log('rock beats scissors')
    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        console.log("scissors beats paper")    
    }else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        console.log("paper beats rock")
    }else{
        console.log(computerSelection+" beats "+ playerSelection.toLowerCase())
    }
}

function getComputerChoice() {
    const moves = ["rock","scissors","paper"]
    let randomItem = moves[Math.floor(Math.random()*moves.length)];
    let ComputerChoice = randomItem;   
    return ComputerChoice
}

const computerSelection = getComputerChoice();


function Game() {
   
    for(let i = 0; i< 5;i++){
        let playerSelection = prompt("Make your move! rock, scissors, paper ")
        playRound(playerSelection,computerSelection)
    }

    
}

console.log(Game())
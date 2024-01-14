playerScore =0;
computerScore = 0;
function playRound(playerSelection, computerSelection) {
    if (playerScore > 4 || computerScore >4 ) {
        computerScore = 0;
        playerScore = 0;
        
    }
    else {
          if (playerSelection === computerSelection) {
            result.textContent= 'It is a tie!';
            playerScore +=0

        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            result.textContent= 'You win! Rock beats scissors.';
            playerScore += 1

        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            result.textContent= 'You win! Scissors beats paper.';
            playerScore += 1

        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            result.textContent= 'You win! Paper beats rock.';
            playerScore += 1
        } else {
            result.textContent='You lose! Try again.' ;
            computerScore += 1
        } 
    } 
  
    endResult.textContent = playerScore;
    computerResult.textContent = computerScore;

   
}

function getComputerChoice() {
    const moves = ['rock', 'scissors', 'paper'];
    let randomItem = moves[Math.floor(Math.random() * moves.length)];
    let computerChoice = randomItem;
    return computerChoice;
}

function Game(playerSelection) {
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

}

let container = document.getElementById('buttonContainer');
const result = document.createElement('div');
const endResult = document.getElementById('endResult')
const computerResult = document.getElementById('computerResult');




const rock = document.createElement('button');
rock.textContent = 'rock';
const paper = document.createElement('button');
paper.textContent = 'paper';
const scissors = document.createElement('button');
scissors.textContent = 'scissors';


//container.appendChild(computerResult);
//container.appendChild(endResult)
container.appendChild(result);
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);


rock.classList.add('btnRock');
paper.classList.add('btnPaper');
scissors.classList.add('btnScissors');




rock.addEventListener('click', function () {
    let playerSelection = 'rock';
    Game(playerSelection);
});

paper.addEventListener('click', function () {
    let playerSelection = 'paper';
    Game(playerSelection);
});

scissors.addEventListener('click', function () {
    let playerSelection = 'scissors';
    Game(playerSelection);
});

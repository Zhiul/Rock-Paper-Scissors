function computerPlay(){
 let computerPlay = (Math.floor(Math.random() * 3) + 1);

    if (computerPlay === 1){
        computerPlay = 'Rock'
    } else if (computerPlay === 2){
        computerPlay = 'Paper'
    } else computerPlay = 'Scissors'

 return computerPlay;
}

let playerSelection;
let computerSelection;
let playerVictories = 0;
let computerVictories = 0;

function playRound(){
    computerSelection = computerPlay();
    playerSelection = prompt('Paper Rock Scissors!');
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        playerVictories += 1;
        alert('You win, Rock beats Scissors.')
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        playerVictories += 1;
        alert('You win, Paper beats Rock.');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        playerVictories += 1;
        alert('You win, Scissors beats Paper.')
    } else if (playerSelection === computerSelection){
        alert("It's a tie!");
    } else if (playerSelection != 'Rock' || playerSelection != 'Paper' || playerSelection != 'Scissors'){
        alert('Enter a valid value');
        playRound();
    }
    else{
        computerVictories += 1;
        alert(`You lose, ${computerSelection} beats ${playerSelection}`);
    }
}

function game(){
    for(i = 0; i <= 4; i++){
        playRound()
    }

    if (playerVictories > computerVictories){
        alert('You win');
    } else if (computerVictories > playerVictories){
        alert('You lose');
    } else{
        alert("Tie");
    }
}

game();


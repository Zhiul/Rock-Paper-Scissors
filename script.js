const playerSelectionButtons = document.querySelectorAll('.player-selection');
const playerPoints = document.querySelector('.player-points');
const computerPoints = document.querySelector('.computer-points');
const playerImg = document.getElementById('player-image');
const computerImg = document.getElementById('computer-image');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const results = document.querySelector('.results');
const playerOptions = document.querySelector('.player-options');
const modalContainer = document.getElementById('modal-container');
const close = document.getElementById('close');
const playAgainButton = document.querySelector('.play-again');

let playerSelection;
let computerSelection;
let playerVictories = 0;
let computerVictories = 0;
let winner;

playerSelectionButtons.forEach((playerButton => {
    playerButton.addEventListener('click', () => {
        if(gameHasEnded() === false){
            playerSelection = playerButton.getAttribute('id');
            playRound(playerSelection);
        } else{
            openModal();
            playerButton.classList.add('nohover');
            setTimeout((() =>{
                playerButton.classList.remove('nohover');
            }), 300)
        }
    })
}))

playAgainButton.addEventListener('click', () =>{
    if(winner === 'player-choice'){
        computerChoice.style.display = 'inline-block';
    } else{
        playerChoice.style.display = 'inline-block';
    }

    playerPoints.textContent = 'Player';
    computerPoints.textContent = 'Computer';
    playerVictories = 0;
    computerVictories = 0;

    closeModal();
})

close.addEventListener('click', closeModal);

function openModal(){
    modalContainer.classList.add('show');
    document.body.style.overflowY = 'hidden';
}

function closeModal(){
    modalContainer.classList.remove('show');
    document.body.style.overflowY = 'scroll';
}

function gameHasEnded(){
    if (playerVictories === 5 || computerVictories === 5){
        return true;
    } else return false;;
}

function setWinner(){
    if (playerVictories === 5){
        winner = 'player-choice';
        showWinner(winner);

    } else if (computerVictories === 5){
        winner = 'computer-choice';
        showWinner(winner);
    }
}

function showWinner(winner){
    if (winner === 'player-choice' && results.contains(computerChoice)){
        computerChoice.style.display = 'none';
        playerPoints.textContent = 'Player Wins!'
    }

    if (winner === 'computer-choice' && results.contains(playerChoice)){
        playerChoice.style.display = 'none'
        computerPoints.textContent = 'Computer Wins!'
    }
}

function changeResult(points, victories){
    if (victories > 1){
        points.textContent = points.textContent.slice(0, -3)
    }
    pointsText = `${points.textContent}: ${victories}`;
    points.textContent = pointsText;
}

function changePlayersImages(computerSelection, playerSelection){
    playerImg.setAttribute("class", `${playerSelection}`);
    computerImg.setAttribute("class", `${computerSelection}`);
}

function computerPlay(){
    let computerPlay = (Math.floor(Math.random() * 3) + 1);
   
       if (computerPlay === 1){
           computerPlay = 'Rock'
       } else if (computerPlay === 2){
           computerPlay = 'Paper'
       } else computerPlay = 'Scissors'
   
       return computerPlay;
   } 
   
function playRound(playerSelection){
    computerSelection = computerPlay();
    playerSelection = playerSelection;

    if(gameHasEnded() === false){
        if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
            playerSelection === 'Paper' && computerSelection === 'Rock' || 
            playerSelection === 'Scissors' && computerSelection === 'Paper'){
            playerVictories += 1;
            changeResult(playerPoints, playerVictories);
        } else if (playerSelection === computerSelection){
            changePlayersImages(computerSelection, playerSelection);
        } else{
            computerVictories += 1;
            changeResult(computerPoints, computerVictories)
        }

        changePlayersImages(computerSelection, playerSelection);
        setWinner();
    } 
}

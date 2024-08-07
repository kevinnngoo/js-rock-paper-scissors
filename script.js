const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors') ? "You win!" : "You lose!";
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? "You win!" : "You lose!";
                break;
            case 'scissors':
                result = (computerChoice === 'paper') ? "You win!" : "You lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    if (result === "You win!") {
        resultDisplay.classList.add('greenText');
        resultDisplay.classList.remove('redText');
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "You lose!") {
        resultDisplay.classList.add('redText');
        resultDisplay.classList.remove('greenText');
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } else {
        resultDisplay.classList.remove('greenText', 'redText');
    }
}



let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    let picks = ["rock", "paper", "scissors"];
    let picksLen = picks.length;
    let i = Math.floor(Math.random()*picksLen);
    return picks[i];
}

function playRound(playerSelect, compSelect) {
    let winner = checkMatchup(playerSelect, compSelect);
    if (winner == "draw") {
        return "It's a draw!";
    }
    else if (winner == "player") {
        playerScore++;
        return "Player wins!";
    } else {
        compScore++;
        return "Computer wins!";
    }
}

function checkMatchup(playerSelect, compSelect) {
    if (playerSelect == compSelect) {
        return "draw"
    }
    if (playerSelect == "rock" && compSelect == "scissors"
    || playerSelect == "scissors" && compSelect == "paper"
    || playerSelect == "paper" && compSelect == "rock") {
        return "player";
    } else {
        return "computer";
    }
}

function printPoints() {
    // Scoreboard
    const playerPoints = document.querySelector('#playerPoints');
    playerPoints.textContent = "Player: " + playerScore;
    const compPoints = document.querySelector('#compPoints');
    compPoints.textContent = "Computer: " + compScore;
    if (playerScore == 5 || compScore == 5) {
        endGame();
    }

}

function endGame() {
    const winnerText = document.querySelector('#winnerName');
    let winner = (playerScore == 5 ? "Player" : "Computer");
    winnerText.textContent = winner + " has won the game!";

    buttons.forEach((button) => {
        button.disabled = true;
    })
}

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
            button.addEventListener('click', () => {
                // Player's pick
                const playerChoice = button.id;
                const content = document.querySelector('#playerChoice');
                content.textContent = "Player chooses " + button.id;

                // Computer's pick
                const compChoice = getComputerChoice();
                const content2 = document.querySelector('#compChoice');
                content2.textContent = "Computer chooses " + compChoice;

                // Round results
                const roundText = document.querySelector('#roundResult');
                const roundResult = playRound(playerChoice, compChoice);
                roundText.textContent = roundResult;

                printPoints();
            });
        });
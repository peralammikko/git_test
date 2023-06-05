let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    let picks = ["rock", "paper", "scissors"];
    let picksLen = picks.length;
    let i = Math.floor(Math.random()*picksLen);
    return picks[i];
}

function playRound(playerSelect, compSelect) {
    console.log("Player: ", playerSelect);
    console.log("Computer: ", compSelect);
    let winner = checkMatchup(playerSelect, compSelect);
    if (winner == "draw") {
        console.log("It's a draw!")
    }
    else if (winner == "player") {
        playerScore++;
        console.log("Player wins! Total score: ", playerScore);
    } else {
        compScore++;
        console.log("Computer wins! Total score: ", compScore);
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

function game() {
    for (let i = 1; i < 6; i++) {
        const playerSelect = prompt("Enter your choice").toLowerCase();
        const compSelect = getComputerChoice();
        console.log("Round: ", i, "/ 5")
        console.log(playRound(playerSelect, compSelect));
    }
    console.log("The winner is... ");
    if (playerScore > compScore) {
        console.log("Player!");
    } else {
        console.log("Computer!");
    }
}

game();
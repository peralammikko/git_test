
function getComputerChoice() {
    let picks = ["rock", "paper", "scissors"];
    let picksLen = picks.length;
    let i = Math.floor(Math.random()*picksLen);
    return picks[i];
}

function playRound(playerSelect, compSelect) {
    console.log("Player: ", playerSelect);
    console.log("Computer: ", compSelect);
    let winner = whoWon(playerSelect, compSelect);
    console.log(winner);
}

function whoWon(playerSelect, compSelect) {
    if (playerSelect == compSelect) {
        return "It's a draw!"
    }

    if (playerSelect == "rock" && compSelect == "scissors"
    || playerSelect == "scissors" && compSelect == "paper"
    || playerSelect == "paper" && compSelect == "rock") {
        return "Player wins";
    } else {
        return "Computer wins";
    }
}

const playerSelect = prompt("Enter your choice");
const compSelect = getComputerChoice();
console.log(playRound(playerSelect, compSelect));
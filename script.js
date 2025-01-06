function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function check(computerChoice, humanChoice) {
    let text;
    let result;
    if(computerChoice == "rock" && humanChoice == "paper") {
        text = "Paper beats rock. You won!";
        result = 0;
    }
    else if(computerChoice == "rock" && humanChoice == "scissors") {
        text = "Rock beats scissors. You lost!";
        result = 1;
    }
    else if(computerChoice == "paper" && humanChoice == "rock") {
        text = "Paper beats rock. You lost!";
        result = 1;
    }
    else if(computerChoice == "paper" && humanChoice == "scissors") {
        text = "Scissors beats paper. You won!";
        result = 0;
    }
    else if(computerChoice == "scissors" && humanChoice == "rock") {
        text = "Rock beats scissors. You won!";
        result = 0;
    }
    else if(computerChoice == "scissors" && humanChoice == "paper") {
        text = "Scissors beats paper. You lost!";
        result = 1;
    }
    else {
        text = "It's a draw.";
        result = 2;
    }
    const toUpdate = document.querySelector(".result");
    toUpdate.textContent = text;
    if(text.endsWith("t!")) {
        toUpdate.style["color"] = "red";
    }
    else if(text.endsWith("n!")) {
        toUpdate.style["color"] = "green";
    }
    else {
        toUpdate.style["color"] = "black";
    }
    return result;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    const playerText = document.querySelector(".player");
    const computerText = document.querySelector(".computer");
    const buttons = document.querySelectorAll("img");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if(playerScore == 5 || computerScore == 5) {
                return;
            }
            const computerChoice = getComputerChoice();
            const playerChoice = button.classList;
            const winner = check(computerChoice, playerChoice);
            if(winner == 0) {
                playerScore++;
                playerText.textContent = "Player score: " + playerScore;
            }
            else if(winner === 1) {
                computerScore++;
                computerText.textContent = "Computer score: " + computerScore;
            } 
        

            if(playerScore == 5) {
                setTimeout(() => alert("You won! Congratulations. Refresh this page to play again!"), 0);
            }
            else if(computerScore == 5) {
                setTimeout(() => alert("You lost! Better luck next time. Refresh this page to play again!"), 0);
            }

        });
    });
}

playGame();
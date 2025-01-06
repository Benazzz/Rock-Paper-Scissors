function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function check() {

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
            }
            else if(winner === 1) {
                computerScore++;
            } 
            
            if(playerScore == 5) {
                alert("You won! Congratulations")
            }
            else if(computerScore == 5) {
                alert("You lost! Better luck next time")
            }
        });
    });
}

playGame();
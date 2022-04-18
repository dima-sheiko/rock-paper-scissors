const images = document.querySelectorAll(".card-image");
const message = document.querySelector(".message");
const scorePlayer = document.querySelector(".player-score");
const scoreComputer = document.querySelector(".computer-score");
const selectionPlayer = document.querySelector(".player-selection");
const selectionComputer = document.querySelector(".computer-selection");

let playerScore = 0;
let computerScore = 0;

/* Start game when user clicks on an image */

images.forEach((image) =>
    image.addEventListener("click", () => {
        if(playerScore >= 5 || computerScore >= 5) {
            return;
        }
        game(image.dataset.image);
    })
);

/* Game Logic */

function computerPlay() {
    const items = ["Rock", "Paper", "Scissors"];
    return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection, computerSelection) {
    let result = "";

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            result = "You lose! Paper beats Rock.";
        } else if (computerSelection === "Scissors") {
            result = "You win! Rock beats Scissors.";
        } else {
            result = "It's a tie!";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            result = "You win! Paper beats Rock.";
        } else if (computerSelection === "Scissors") {
            result = "You lose! Scissors beat Paper.";
        } else {
            result = "It's a tie!";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            result = "You lose! Rock beats Scissors.";
        } else if (computerSelection === "Paper") {
            result = "You win! Scissors beat Paper.";
        } else {
            result = "It's a tie!";
        }
    }

    return result;
}

function createParag(text) {
    const p = document.createElement("p");
    p.textContent = text;

    return p;
}

function game(playerSelect) {
    let playerSelection = playerSelect;
    let computerSelection = computerPlay();

    let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.search("You win!") > -1) {
        playerScore++;
    } else if (roundResult.search("You lose!") > -1) {
        computerScore++;
    }

    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    message.textContent = roundResult;
    selectionPlayer.appendChild(createParag(playerSelection));
    selectionComputer.appendChild(createParag(computerSelection));

    if (playerScore >= 5 && computerScore < 5) {
        message.textContent = "Game Over. You Win!";
    } else if (playerScore < 5 && computerScore >= 5) {
        message.textContent = "Game Over. You Lose!";
    }
}

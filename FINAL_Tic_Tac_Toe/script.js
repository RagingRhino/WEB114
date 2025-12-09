// Dylan Gregory  12-08-2025
// WEB114 Final Project - Pokemon Tic-Tac-Toe


// ----- VARIABLES -----
// Player icons
const PLAYER_X = "pikachu";     // Pikachu icon
const PLAYER_O = "pokeball";    // Pokéball icon

// State vars
let currentPlayer = PLAYER_X;
let board = ["", "", "", "", "", "", "", "", ""];

// HTML elements
const statusText = document.getElementById("status");
const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("resetBtn");
const homeBtn = document.getElementById("homeBtn");

// Possible winning combos
const winningCombos = [
    [0,1,2], // top row
    [3,4,5], // middle row
    [6,7,8], // bottom row
    [0,3,6], // left column
    [1,4,7], // middle column
    [2,5,8], // right column
    [0,4,8], // -diagonal
    [2,4,6]  // +diagonal
];

// Starting screen elements
const startScreen = document.getElementById("startScreen");
const pvpBtn = document.getElementById("pvpBtn");
const cpuBtn = document.getElementById("cpuBtn");


let gameMode = ""; // "pvp" or "cpu"

pvpBtn.addEventListener("click", () => {
    gameMode = "pvp";
    startGame();
});

cpuBtn.addEventListener("click", () => {
    gameMode = "cpu";
    startGame();
});

// ----- EVENT LISTENERS -----
cells.forEach(cell => {
    cell.addEventListener("click", cellClicked);
});
resetBtn.addEventListener("click", resetGame);
homeBtn.addEventListener("click", goHome);


// ----- FUNCTIONS -----
// Set up the board
function startGame() {
    // hide start
    startScreen.style.display = "none";

    // show board
    document.querySelector("main").style.display = "flex";

    resetGame();

    if (gameMode === "cpu") {
        statusText.textContent = "Current Player: Pikachu (X)";
    }
}

// Runs whenever a cell is clicked
function cellClicked(event) {
    const cell = event.target;
    const index = cell.getAttribute("data-index");

    // Ignore if filled
    if (board[index] !== "") return; 

    // Update our array
    board[index] = currentPlayer;

    // write the symbol inside the clicked cell
    cell.innerHTML = `<img src="images/${currentPlayer}.png" alt="${currentPlayer}" class="icon">`;

    // Store which player placed this move
    const winner = currentPlayer;

    // Check win
    const winningCombo = checkWinner();
    if (winningCombo) {
        // highlight the winning cells
        winningCombo.forEach(index => {
            cells[index].classList.add("win");
        });

        statusText.textContent = winner === PLAYER_X
            ? "Pikachu (X) Wins!"
            : "Pokéball (O) Wins!";

        disableBoard();
        return;
    }

    // Check draw (board full)
    if (!board.includes("")) {
        statusText.textContent = "It's a draw!";
        return;
    }

    // If CPU mode is off, just switch players
    if (gameMode === "pvp") {
        currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        statusText.textContent = currentPlayer === PLAYER_X
            ? "Current Player: Pikachu (X)"
            : "Current Player: Pokéball (O)";
        return;
    }

    // CPU MODE
    currentPlayer = PLAYER_O;
    statusText.textContent = "CPU is thinking...";
    setTimeout(cpuMove, 400);
}

function cpuMove() {
    if (gameMode !== "cpu") return;

    // if game already ended
    if (checkWinner() || !board.includes("")) return;

    // get available empty spots
    const emptyIndexes = board
        .map((val, idx) => val === "" ? idx : null)
        .filter(val => val !== null);

    // pick a random empty cell
    const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];

    // place CPU move
    board[randomIndex] = PLAYER_O;
    cells[randomIndex].innerHTML = `<img src="images/${PLAYER_O}.png" class="icon">`;
    cells[randomIndex].disabled = true;

    // check win
    const winnerCombo = checkWinner();
    if (winnerCombo) {
        winnerCombo.forEach(i => cells[i].classList.add("win"));
        statusText.textContent = "Pokéball (O) Wins!";
        disableBoard();
        return;
    }

    // check draw
    if (!board.includes("")) {
        statusText.textContent = "It's a draw!";
        return;
    }

    // switch back to player
    currentPlayer = PLAYER_X;
    statusText.textContent = "Current Player: Pikachu (X)";
}

/* Check if someone has won */
function checkWinner() {
    for (let combo of winningCombos) {
        let [a, b, c] = combo;

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            return combo;  // ✨ return the winning combination
        }
    }
    return null;  // no win
}

// Disable clicking after the game ends
function disableBoard() {
    cells.forEach(cell => cell.disabled = true);
}

// Reset game
function resetGame() {
    currentPlayer = PLAYER_X;
    board = ["","","","","","","","",""];

    cells.forEach(cell => {
        cell.textContent = "";
        cell.disabled = false;
        cell.classList.remove("win");
    });

    statusText.textContent = "Current Player: " + currentPlayer;
}

// Go back to Home
function goHome() {
    // hide the board
    document.querySelector("main").style.display = "none";

    // show start screen again
    startScreen.style.display = "flex";

    // reset everything so new mode starts clean
    resetGame();
    gameMode = "";
}
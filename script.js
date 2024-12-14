let board = ['', '', '', '', '', '', '', '', '']; // Represents the board state
let currentPlayer = 'X'; // Player X starts the game
let isGameOver = false;

// Elements
const squares = document.querySelectorAll('.square');
const resetButton = document.getElementById('reset-btn');

// Add click event to each square
squares.forEach((square, index) => {
    square.addEventListener('click', () => handleSquareClick(index));
});

// Handle square click
function handleSquareClick(index) {
    if (board[index] || isGameOver) return; // Prevent making a move on an occupied or game-over square
    board[index] = currentPlayer;
    document.getElementById(`square-${index}`).innerText = currentPlayer;
    if (checkWin()) {
        alert(`${currentPlayer} wins!`);
        isGameOver = true;
    } else if (board.every(cell => cell)) {
        alert("It's a tie!");
        isGameOver = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch players
    }
}

// Check for winning combinations
function checkWin() {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

// Reset game
resetButton.addEventListener('click', () => {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameOver = false;
    squares.forEach(square => {
        square.innerText = '';
    });
});

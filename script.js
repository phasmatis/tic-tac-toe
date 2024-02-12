// // initialize the game board
// const board = document.getElementById("board");
// const cells = [];
// let currentPlayer = "X";
// let gameActive = true;

// // Create the cells and add event listeners
// for (let i = 0; i < 9; i++) {
//   const cell = document.createElement("div");
//   cell.classList.add("cell");
//   cell.dataset.index = i;
//   cell.addEventListener("click", handleCellClick);
//   cell.push(cell);
//   board.appendChild(cell);
// }

// // Handle cell click

// function handleCellClick(event) {
//   if (!gameActive) return;

//   const clickedCell = event.target;
//   const cellIndex = clickedCell.dataset.index;

//   // check for a win or draw
//   if (checkWin() || checkDraw()) {
//     alert(`Player ${currentPlayer} wins!`);
//     gameActive = false;
//   } else {
//     // switch to next player
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
//   }
// }

// // Check for win
// function checkWin() {
//   const winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8], // Rows

//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8], // Columns

//     [0, 4, 8],
//     [2, 4, 6], // Diagonals
//   ];

//   for (const combo of winningCombinations) {
//     const [a, b, c] = combo;
//     if (
//       cells[a].textContent &&
//       cells[a].textContent === cells[b].textContent &&
//       cells[a].textContent === cells[c].textContent
//     ) {
//       return true; //Winner!
//     }
//   }
//   return false;
// }

// //check for draw
// function checkDraw() {
//   return cells.every((cell) => cell.textContent);
// }

const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let gameActive = true;

function handleCellClick(index) {
  if (!gameActive) return;

  const cell = cells[index];

  if (!cell.textContent) {
    cell.textContent = currentPlayer;

    if (checkWin() || checkDraw()) {
      alert(`Player ${currentPlayer} wins!`);
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns

    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      return true; //Winner!
    }
  }

  return false;
}

function checkDraw() {
  return Array.from(cells).every((cell) => cell.textContent);
}

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

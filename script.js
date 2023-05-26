var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = 'X';
var gameOver = false;

function makeMove(index) {
  if (!gameOver && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    if (checkWin(currentPlayer)) {
      alert(currentPlayer + ' wins!');
      gameOver = true;
    } else if (board.indexOf('') === -1) {
      alert('It\'s a tie!');
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin(player) {
  var winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (var i = 0; i < winCombinations.length; i++) {
    var [a, b, c] = winCombinations[i];
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }

  return false;
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}

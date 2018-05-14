document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: []
}

var row, col;
for (row = 0; row < 5; row++) {
  for (col = 0; col < 5; col++) {
    board.cells.push({
      row: row,
      col: col,
      isMine: Math.random() <= 0.2,
      isMarked: false,
      hidden: true
    });
  }
}





function startGame () {
  // Don't remove this function call: it makes the game work!
  var i;
  for (i = 0; i < board.cells.length; i++) {
    var numMines = countSurroundingMines (board.cells[i]); 
    board.cells[i].surroundingMines = numMines;
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var numMines = 0;
  var surroundingCells = getSurroundingCells(cell.row, cell.col);
  var i;
  for (i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine) {
      numMines++;
    }
  }

  return numMines;
}


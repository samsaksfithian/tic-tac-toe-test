/* eslint-disable no-console */
const { prettifyBoard } = require('./board');

const displayTurn = (board, player) => {
  console.log(prettifyBoard(board));
  console.log(`${player} it is your turn`);
};

const displayWin = (board, player) => {
  console.log(prettifyBoard(board));
  console.log(`Congratulations! ${player} wins`);
};

const displayTie = board => {
  console.log(prettifyBoard(board));
  console.log(`It's a tie! No one wins`);
};

const displayError = error => {
  console.error(error.message);
};

module.exports = { displayTurn, displayWin, displayTie, displayError };

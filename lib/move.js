const readlineSync = require('readline-sync');
const { parseIntBase10 } = require('./utils');
const { displayError } = require('./ui');

const validateMove = (move, board) => {
  const [row, col] = move.split(' ').map(parseIntBase10);
  if ([row, col].some(coord => !coord && coord !== 0))
    throw Error('Invalid move! Move must have syntax "row col"');
  if ([row, col].some(coord => coord < 0 || coord >= board.length))
    throw Error('Invalid move! Move must be in bounds of board');
  if (board[row][col] !== ' ')
    throw Error('Invalid move! This space is already occupied');

  return [row, col];
};

const getValidMoveFromPlayer = board => {
  try {
    const move = readlineSync.question('Where would you like to go? ');
    return validateMove(move, board);
  } catch (err) {
    displayError(err.message);
    return getValidMoveFromPlayer(board);
  }
};

module.exports = { getValidMoveFromPlayer };

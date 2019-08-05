/*
 * move.js
 *
 * Functions for asking the user to input a move via the console.
 * NOTE: this module has a number of side effects including writing to the console and receiving input from the console.
 * Write your tests accordingly!
 */

const readlineSync = require('readline-sync');
const { parseIntBase10 } = require('./utils');
const { displayError } = require('./ui');

/**
 * Checks if move input is in proper form ("row col") and is valid (within bounds, not in an occupied square).
 * @param {string} move Move string that should be in the form "row col".
 * @param {string[][]} board tic-tac-toe board.
 * @throws `Error('Invalid move! Move must have syntax "row col"')` if invalid syntax.
 * @throws `Error('Invalid move! Move must be in bounds of board')` if move out of bounds.
 * @throws `Error('Invalid move! This space is already occupied')` if intended space is already occupied.
 * @returns {[number, number]} Tuple of accepted move coordinates with shape (row, col)
 */
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

/**
 * Asks the player for a move and validates accordingly.
 * This function will recursively continue to exectue until the user inputs a valid move.
 *
 * **Note:** this function has side effects of getting input from the console _and_ outputting to the console
 *
 * @param {string[][]} board tic-tac-toe board
 * @returns {[number, number]} tuple of move coordinates with shape (row, col)
 */
const getValidMoveFromPlayer = board => {
  try {
    const move = readlineSync.question('Where would you like to go? ');
    return validateMove(move, board);
  } catch (err) {
    displayError(err.message);
    return getValidMoveFromPlayer(board);
  }
};

module.exports = { validateMove, getValidMoveFromPlayer };

/**
 * board.js
 *
 * Contains functions for prettifing the board, creating an empty board, and updating existing boards.
 */

const { pad } = require('./utils');

/**
 * Takes a row (array) of tiles and returns a prettified string
 * where each tile padded by a space and separated by a pipe
 * @param {string[]} row Row of tic-tac-toe tiles
 * @returns {string} Prettified row
 * @example
 * prettifyRow(['X', 'O', 'X']) // → ' X | O | X '
 */
const prettifyRow = row => row.map(pad).join('|');

/**
 * Constant used in `prettifyBoard` to separate rows
 */
const separator = `\n---|---|---\n`;

/**
 * Returns a prettified string representation of the board.
 * @param {string[][]} board Tic-tac-toe board
 */
const prettifyBoard = board => board.map(prettifyRow).join(separator);

/**
 * Generates an `n` x `n` array filled with spaces
 * @param {number} n Dimensionality of the board
 * @returns {string[][]} empty board
 */
const generateStartingBoard = (n = 3) =>
  Array(n)
    .fill()
    .map(() => Array(n).fill(' '));

/**
 * Updates the board with a new move.
 * **Note:** this function does not check if the move is valid.
 * @param {string[][]} board tic-tac-toe board
 * @param {number[]} coords coordinate tuple of (row, col)
 * @param {string} player the current player making the move
 */
const updateBoard = (board, [row, col], player) => {
  const newBoard = [...board];
  newBoard[row][col] = player;
  return newBoard;
};

module.exports = {
  prettifyRow,
  prettifyBoard,
  generateStartingBoard,
  updateBoard,
};

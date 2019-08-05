const { flatZip, purge, pad } = require('./utils');

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
 * Creates an array of strings for dilineating rows in a prettified tic-tac-toe board.
 * @param {number} size Number of rows to generate
 */
const generateSeparatorRows = size => Array(size).fill(`---|---|---`);

const prettifyBoard = board => {
  const prettyRows = board.map(prettifyRow);
  const blankRows = generateSeparatorRows(2);
  const boardArr = purge(flatZip(prettyRows, blankRows));

  return boardArr.join(`\n`);
};

const generateStartingBoard = (n = 3) =>
  Array(n)
    .fill()
    .map(() => Array(n).fill(' '));

const updateBoard = (board, [row, col], player) => {
  const newBoard = [...board];
  newBoard[row][col] = player;
  return newBoard;
};

module.exports = {
  generateSeparatorRows,
  prettifyRow,
  prettifyBoard,
  generateStartingBoard,
  updateBoard,
};

/*
 * win.js
 *
 * Logic for checking if the board contains a win or a tie.
 */

const {
  isUniform,
  doesNotInclude,
  satisfies,
  columns,
  diagonals,
} = require('./utils');

/**
 * Checks if `arr` contains an element that is just a space (`' '`)
 * @param {string[]} arr
 * @returns {boolean}
 * @example
 * const arr = ['a', 'b', ' '];
 * doesNotIncludeSpace(arr); // → false
 */
const doesNotIncludeSpace = doesNotInclude(' ');

/**
 * Checks if `arr` does not include a space character _and_ checks if every character is the same.
 * __Note:__ while the this is named `isThreeInARow`, the function can be used on an array of any length.
 * @param {string[]} arr Array to check
 * @returns {boolean}
 * @example
 * const arr = ['X', 'X', 'X'];
 * isThreeInARow(arr); // → true
 */
const isThreeInARow = satisfies(doesNotIncludeSpace, isUniform);

/**
 * Checks if the `board` contains a win in the vertical direction
 * @param {string[][]} board tic-tac-toe board
 */
const isVerticalWin = board => columns(board).some(isThreeInARow);

/**
 * Checks if the `board` contains a win in the horizontal direction
 * @param {string[][]} board tic-tac-toe board
 */
const isHorizontalWin = board => board.some(isThreeInARow);

/**
 * Checks if the `board` contains a win in the diagonal direction (top left to bottom right _or_ top right to bottom left)
 * @param {string[][]} board tic-tac-toe board
 */
const isDiagonalWin = board => diagonals(board).some(isThreeInARow);

/**
 * Checks if the `board` contains a win
 * @param {string[][]} board tic-tac-toe board
 */
const isWin = board =>
  isVerticalWin(board) || isHorizontalWin(board) || isDiagonalWin(board);

/**
 * Checks if the `board` contains a tie (i.e. it is completely filled but there is no win)
 * @param {string[][]} board tic-tac-toe board
 */
const isTie = board => board.every(doesNotIncludeSpace);

module.exports = {
  isVerticalWin,
  isHorizontalWin,
  isDiagonalWin,
  isWin,
  isTie,
};

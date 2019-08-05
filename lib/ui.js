/* eslint-disable no-console */
/*
 * ui.js
 *
 * Functions for displaying game state to the user.
 * NOTE: every function in this module has the side effect of writing to the console.
 * Write your tests accordingly.
 */

const { prettifyBoard } = require('./board');

/**
 * Displays the current state of the board and tells current player it is their turn.
 * @param {string[][]} board tic-tac-toe board
 * @param {string} player The current player (`X` or `O`)
 */
const displayTurn = (board, player) => {
  console.log(prettifyBoard(board));
  console.log(`${player} it is your turn`);
};

/**
 * Displays the current state of the board and tells the player they won.
 * @param {string[][]} board tic-tac-toe board
 * @param {string} player The current player (`X` or `O`)
 */
const displayWin = (board, player) => {
  console.log(prettifyBoard(board));
  console.log(`Congratulations! ${player} wins`);
};

/**
 * Displays the current state of the board and tells the players there was a tie.
 * @param {string[][]} board tic-tac-toe board
 */
const displayTie = board => {
  console.log(prettifyBoard(board));
  console.log(`It's a tie! No one wins`);
};

/**
 * Displays an error message
 * @param {Error} error
 */
const displayError = error => {
  console.error(error.message);
};

module.exports = { displayTurn, displayWin, displayTie, displayError };

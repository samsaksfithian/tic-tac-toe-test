/*
 * play.js
 *
 * Contains the main logic for playing tic-tac-toe
 */

const { generateStartingBoard, updateBoard } = require('./board');
const { getValidMoveFromPlayer } = require('./move');
const { isWin, isTie } = require('./win');
const { displayTurn, displayWin, displayTie } = require('./ui');

/**
 * Calculates who should play next based on who is currently playing.
 * If passed `X` returns `O`, otherwise returns `X`
 * @param {string} currPlayer The current player. Can be `X` or `O`
 */
const nextPlayer = currPlayer => (currPlayer === 'X' ? 'O' : 'X');

/**
 * Recursively plays one turn of tic-tac-toe. Displays board, asks for move, updates.
 * Also will check if there is a win or a tie and end accordingly.
 * Else, the turn plays on, passing to the next player.
 * @param {string[][]} board The current tic-tac-toe board
 * @param {string} player The current player.
 * @returns {void}
 */
const play = (board = generateStartingBoard(), player = 'X') => {
  displayTurn(board, player);

  const updatedBoard = updateBoard(
    board,
    getValidMoveFromPlayer(board),
    player
  );

  if (isWin(updatedBoard)) return displayWin(updatedBoard, player);
  if (isTie(updatedBoard)) return displayTie(updatedBoard);
  return play(updatedBoard, nextPlayer(player));
};

module.exports = { play, nextPlayer };

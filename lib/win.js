const {
  isUniform,
  doesNotInclude,
  satisfies,
  columns,
  diagonals,
} = require('./utils');

const doesNotIncludeSpace = doesNotInclude(' ');

const isThreeInARow = satisfies(doesNotIncludeSpace, isUniform);

const isVerticalWin = board => columns(board).some(isThreeInARow);

const isHorizontalWin = board => board.some(isThreeInARow);

const isDiagonalWin = board => diagonals(board).some(isThreeInARow);

const isWin = board =>
  isVerticalWin(board) || isHorizontalWin(board) || isDiagonalWin(board);

const isTie = board => board.every(doesNotIncludeSpace);

module.exports = {
  isVerticalWin,
  isHorizontalWin,
  isDiagonalWin,
  isWin,
  isTie,
};

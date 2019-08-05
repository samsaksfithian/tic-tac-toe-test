const readlineSync = require('readline-sync');
const { validateMove, getValidMoveFromPlayer } = require('../lib/move');

describe('validateMove', () => {
  const board = [['X', 'O', ' '], [' ', 'O', 'X'], ['X', 'X', 'O']];

  test('should throw an error if invalid input syntax', () => {
    expect(() => {
      validateMove('1,', board);
    }).toThrowError();
    expect(() => {
      validateMove(1, board);
    }).toThrowError();
    expect(() => {
      validateMove([], board);
    }).toThrowError();
  });

  test('should throw an error if move is out of bounds', () => {
    expect(() => {
      validateMove('0 5', board);
    }).toThrowError();
    expect(() => {
      validateMove('5 0', board);
    }).toThrowError();
    expect(() => {
      validateMove('-1 0', board);
    }).toThrowError();
    expect(() => {
      validateMove('0 -1', board);
    }).toThrowError();
  });

  test('should throw an error if intented space is already occupied', () => {
    expect(() => {
      validateMove('0 0', board);
    }).toThrowError();
    expect(() => {
      validateMove('1 1', board);
    }).toThrowError();
  });
  test('should return array of coordinates if its valid', () => {
    const result = validateMove('0 2', board);
    expect(result).toEqual([0, 2]);
  });
});

jest.mock('readline-sync');
describe('getValidMoveFromPlayer', () => {
  console.error = jest.fn();

  afterEach(() => {
    readlineSync.question.mockClear();
    console.error.mockClear();
  });

  const board = [['X', 'O', ' '], [' ', 'O', 'X'], ['X', 'X', 'O']];

  test('should return tuple when player inputs valid coordinates', () => {
    readlineSync.question.mockReturnValueOnce('1 0');
    const result = getValidMoveFromPlayer(board);
    expect(result).toEqual([1, 0]);
  });

  test('should print an error message and try again if player puts invalid coordinates', () => {
    readlineSync.question
      .mockReturnValueOnce('5 0')
      .mockReturnValueOnce('0')
      .mockReturnValueOnce('1 0');
    const result = getValidMoveFromPlayer(board);
    expect(result).toEqual([1, 0]);
    expect(console.error).toHaveBeenCalledTimes(2);
    expect(console.error).toHaveBeenCalledWith(
      'Invalid move! Move must be in bounds of board',
    );
    expect(console.error).toHaveBeenCalledWith(
      'Invalid move! Move must have syntax "row col"',
    );
  });
});

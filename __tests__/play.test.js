const { play, nextPlayer } = require('../lib/play');
let { getValidMoveFromPlayer } = require('../lib/move');
const ui = require('../lib/ui');

describe('play', () => {
  getValidMoveFromPlayer = jest.fn();
  jest.mock(ui);

  afterEach(() => {
    getValidMoveFromPlayer.mockClear();
    ui.displayTurn.mockClear();
    ui.displayWin.mockClear();
    ui.displayTie.mockClear();
  });

  test('should print out a win if there is a winning move', () => {});
  test('should print out a tie if there is tie game', () => {});
  test('should keep running if theres no winner or tie', () => {});
});

describe('nextPlayer', () => {});

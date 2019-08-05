const {
  prettifyRow,
  prettifyBoard,
  generateStartingBoard,
  updateBoard,
} = require('../lib/board');

describe('prettifyRow', () => {
  test('should return correct string when given valid input array', () => {
    expect(prettifyRow(['X', 'O', 'X'])).toBe(' X | O | X ');
    expect(prettifyRow(['X', 'O'])).toBe(' X | O ');
    expect(prettifyRow(['X', 'O', 'X', 'O'])).toBe(' X | O | X | O ');
  });

  test('should return empty string when given an empty array', () => {
    const result = prettifyRow([]);
    expect(result).toBe('');
  });

  test('should return a string with only a space-padded letter and no pipes when given single element array', () => {
    const result = prettifyRow(['X']);
    expect(result).toBe(' X ');
    expect(prettifyRow(['o'])).toBe(' o ');
    expect(prettifyRow([''])).toBe('  ');
  });

  test('should throw an error if passed non-array input', () => {
    expect(() => {
      prettifyRow('a string,,,');
    }).toThrowError();
    expect(() => {
      prettifyRow(5);
    }).toThrowError();
    expect(() => {
      prettifyRow({ key: 'value' });
    }).toThrowError();
    expect(() => {
      prettifyRow(undefined);
    }).toThrowError();
  });
});

describe('prettifyBoard', () => {
  test('should return a valid, pretty board when passed correct input', () => {
    // [['X', 'O'], ['O']] ==> map into prettifyRow
    // ['X', 'O'], then ['O'] get passed into prettifyRow
    // prettifyRow returns ' X | O ', and ' O '
    // result of prettifyRow is put into the array created by map
    // return of map function = [' X | O ', ' O ']
    // then that array is `join`-ed with the separator to create one string
    // which results in a single string: ' X | O \n---|---|---\n O '
    const input = [['X', 'O'], ['O']];
    const result = prettifyBoard(input);
    expect(result).toBe(` X | O \n---|---|---\n O `);
  });

  test('should throw an error if passed something that is not a 2D array', () => {
    expect(() => {
      prettifyBoard(['X', 'O']);
    }).toThrowError();
    expect(() => {
      prettifyBoard(undefined);
    }).toThrowError();
    expect(() => {
      prettifyBoard('a string');
    }).toThrowError();
    expect(() => {
      prettifyBoard(89);
    }).toThrowError();
    expect(() => {
      prettifyBoard({});
    }).toThrowError();
  });

  test('should return an empty string when given an empty array or 2D array', () => {
    const result1D = prettifyBoard([]);
    expect(result1D).toBe('');
    const result2D = prettifyBoard([[]]);
    expect(result2D).toBe('');
  });

  test('should return a single row/line with no separator when given a single-element 2D array', () => {
    // [['X', 'O']] ==> map into prettifyRow
    // ['X', 'O'] gets passed into prettifyRow
    // prettifyRow returns ' X | O '
    // result of prettifyRow is put into the array created by map
    // return of map function = [' X | O ']
    // then that array is `join`-ed with the separator to create one string
    // which results in a single string: ' X | O '
    const result = prettifyBoard([['X', 'O']]);
    expect(result).toBe(' X | O ');
  });
});

describe('generateStartingBoard', () => {
  test('should return a 2D array of any specified size filled with spaces', () => {
    let length = 5;
    const result5 = generateStartingBoard(length);
    expect(result5).toHaveLength(length);
    result5.forEach(innerArray => {
      expect(innerArray).toHaveLength(length);
      expect(innerArray.every(element => element === ' ')).toBeTruthy();
    });
    length = 2;
    const result2 = generateStartingBoard(length);
    expect(result2).toHaveLength(length);
    result2.forEach(innerArray => {
      expect(innerArray).toHaveLength(length);
      expect(innerArray.every(element => element === ' ')).toBeTruthy();
    });
  });

  test('should create a 3x3 array of all spaces if given no input', () => {
    const result = generateStartingBoard();
    expect(result).toHaveLength(3);
    result.forEach(innerArray => {
      expect(innerArray).toHaveLength(3);
      expect(innerArray.every(element => element === ' ')).toBeTruthy();
    });
  });

  test('should throw an error if given negative input', () => {
    expect(() => {
      generateStartingBoard(-1);
    }).toThrowError();
  });

  test('should create an empty array if given size 0', () => {
    const result = generateStartingBoard(0);
    expect(result).toEqual([]);
  });
});

describe('updateBoard', () => {
  test('should update designated square but nothing else', () => {
    const board = [['X', 'O', ' '], [' ', 'O', 'X'], ['X', 'X', 'O']];
    const row = 1;
    const col = 0;
    const player = 'O';
    const updated = updateBoard(board, [row, col], player);
    expect(updated).toHaveLength(board.length);
    updated.forEach((innerArray, r) => {
      expect(innerArray).toHaveLength(board[r].length);
      innerArray.forEach((square, c) => {
        if (r === row && c === col) {
          expect(square).toBe(player);
        } else {
          expect(square).toBe(board[r][c]);
        }
      });
    });
  });
  /*
  (0, 0) | (1, 0) | (2, 0)
     X   |        |   O
  -------|--------|-------
  (0, 1) | (1, 1) | (2, 1)
     O   |   X    |
  
     update [1, 0] with Z ==> 

  (0, 0) | (1, 0) | (2, 0)
     X   |   Z    |   O
  -------|--------|-------
  (0, 1) | (1, 1) | (2, 1)
     O   |   X    |
  */

  // NOTE: currently not testable because the function itself doesn't handle
  //       validation, and javascript tries to be too helpful
  test.todo('should throw an error if given coordinates outside of the board');
});

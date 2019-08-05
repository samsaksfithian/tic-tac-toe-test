/*
 * utils.js
 *
 * This file contains miscellaneous functions for arrays, numbers, and strings.
 */

/**
 * Gets all the columns of a 2d array. Essentially transposes the original array.
 * @param {string[][]} arr 2d array
 * @returns {string[][]} columns
 * @example
 * const arr = [ [1,2,3], ['a','b','c'] ];
 * columns(arr) // → [ [1, 'a'], [2, 'b'], [3, 'c']]
 */
const columns = arr => arr[0].map((_, col) => arr.map(row => row[col]));

/**
 * Gets the diagonal from top left corner to bottom right.
 * @param {string[][]} arr 2d array
 * @returns {string[]} diagonal
 * @example
 * const arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
 * leftToRightDiag(arr); // → [ [1, 5, 9] ];
 */
const leftToRightDiag = arr =>
  arr.map((row, i) => row.find((col, j) => i === j));

/**
 * Gets the diagonal from top right corner to bottom left.
 * @param {string[][]} arr 2d array
 * @returns {string[]} diagonal
 * @example
 * const arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
 * rightToLeftDiag(arr); // → [ [3, 5, 7] ];
 */
const rightToLeftDiag = arr =>
  arr.map((row, i) => row.find((col, j) => i === row.length - j - 1));

/**
 * Gets both of the diagonals of a 2d array.
 * @param {string[][]} arr 2d array
 * @returns {string[][]} diagonals
 * @example
 * const arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
 * diagonals(arr); // → [ [1, 5, 9], [3, 5, 7] ];
 */
const diagonals = arr => [leftToRightDiag(arr), rightToLeftDiag(arr)];

/**
 * Checks if every element in the array is the same
 * @param {Array} arr array of any kind of element
 * @returns {boolean}
 */
const isUniform = arr => arr.every(elem => elem === arr[0]);

/**
 * Returns a curried function which will accept an array and check if `value` is in that array
 * @param {any} value
 */
const doesNotInclude = value => arr => !arr.includes(value);

/**
 * Parses a string into a number using base 10. This is essentially just a wrapper for `parseInt(x, 10)`
 * @param {string} num
 */
const parseIntBase10 = num => parseInt(num, 10);

/**
 * Returns curried function which will accept an element and check if all of the `fns` return true for that element.
 * @param  {...Function} fns any number of comma separated functions
 * @example
 * function greaterThan10(num) { return num > 10 }
 * function lessThan20(num) { return num < 20 }
 * const between10and20 = satisfies(greaterThan10, lessThan20);
 * between10and20(15); // → true
 * between10and20(100); // → false
 */
const satisfies = (...fns) => elem => fns.every(fn => fn(elem));

/**
 * Puts an extra space on either side of `str`
 * @param {string} str
 * @example
 * pad('a'); // → ' a '
 */
const pad = str => ` ${str} `;

module.exports = {
  isUniform,
  parseIntBase10,
  doesNotInclude,
  satisfies,
  columns,
  diagonals,
  pad,
};

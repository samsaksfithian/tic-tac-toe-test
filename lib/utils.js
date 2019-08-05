const purge = arr => arr.filter(elem => elem);

const flatZip = (arrA, arrB) => arrA.map((elem, i) => [elem, arrB[i]]).flat();

const columns = arr => arr[0].map((_, col) => arr.map(row => row[col]));

const leftToRightDiag = arr =>
  arr.map((row, i) => row.find((col, j) => i === j));

const rightToLeftDiag = arr =>
  arr.map((row, i) => row.find((col, j) => i === row.length - j - 1));

const diagonals = arr => [leftToRightDiag(arr), rightToLeftDiag(arr)];

const isUniform = arr => arr.every(elem => elem === arr[0]);

const doesNotInclude = value => arr => !arr.includes(value);

const parseIntBase10 = num => parseInt(num, 10);

const satisfies = (...fns) => elem => fns.every(fn => fn(elem));

const pad = str => ` ${str} `;

module.exports = {
  purge,
  flatZip,
  isUniform,
  parseIntBase10,
  doesNotInclude,
  satisfies,
  columns,
  diagonals,
  pad,
};

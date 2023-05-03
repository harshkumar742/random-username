import generateRandomUsername from './src/esm/index.js';

const userInput = 'user';
const options = {
  length: 12,
  separator: '-',
  wordList: 'default', // You can add and use custom word lists
  ensureUnique: false,
};

const username = generateRandomUsername(userInput, options);
console.log(username);
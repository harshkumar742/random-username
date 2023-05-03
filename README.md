# Random Username Generator

A random username generator with customization options. Generate unique and complex usernames based on user input, different word lists, and custom separators.

## Installation

Install the package using npm:

\`\`\`bash
npm install random-username-gen
\`\`\`

## Usage


### Using import (ECMAScript modules)

```javascript
import generateRandomUsername from 'random-username-gen';

const userInput = 'user';
const options = {
  length: 12,
  separator: '-',
  wordList: 'default', // You can add and use custom word lists
  ensureUnique: false,
};

const username = generateRandomUsername(userInput, options);
console.log(username);
```

### Using require (CommonJS modules)

```javascript
const generateRandomUsername = require('random-username-gen');

const userInput = 'user';
const options = {
  length: 12,
  separator: '-',
  wordList: 'default', // You can add and use custom word lists
  ensureUnique: false,
};

const username = generateRandomUsername(userInput, options);
console.log(username);
```

## Options

- `length` (default: 12): The desired length of the generated username. The final username might be shorter if the user input, word list, or separator result in a longer string.
- `separator` (default: '-'): The character used to separate the different parts of the username.
- `wordList` (default: 'default'): The word list to use for generating the username. You can add custom word lists to the `index.js` file.
- `ensureUnique` (default: false): If set to `true`, a unique suffix will be added to the username to ensure uniqueness.

## License

This project is licensed under the MIT License.

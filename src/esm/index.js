import { adjectives as importedAdjectives } from './adjectives.js';
import { nouns as importedNouns } from './nouns.js';

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomUsername(userInput, options = {}) {
    const {
        length = 50,
        separator = '-',
        wordList = 'default',
        ensureUnique = false,
    } = options;

    let wordLists = {
        default: {
            adjectives: importedAdjectives,
            nouns: importedNouns,
        },
    };

    if (!wordLists[wordList]) {
        throw new Error(`Invalid word list: ${wordList}`);
    }

    const { adjectives, nouns } = wordLists[wordList];
    const uniqueSuffix = ensureUnique ? Date.now().toString(36) : '';

    let username;
    do {
        const randomAdjective = getRandomElement(adjectives);
        const randomNoun = getRandomElement(nouns);
        const randomNumber = Math.floor(Math.random() * 1000);
        username = `${userInput}${separator}${randomAdjective}${separator}${randomNoun}${separator}${randomNumber}${uniqueSuffix}`.substr(0, length);
    } while (ensureUnique && !isUsernameUnique(username));

    return username;
}

function isUsernameUnique(username) {
    // Implement a check against your database or other data sources to ensure the username is unique
    // For demonstration purposes, this function always returns true
    return true;
}

export default generateRandomUsername;
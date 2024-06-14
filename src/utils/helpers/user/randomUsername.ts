import { randomInteger } from '../randomInteger';

const ADJECTIVES = ['Happy', 'Lovely', 'Joyful', 'Impressive'];
const NOUNS = ['Elephant', 'Giraffe', 'Lion', 'Duck'];

export const randomUsername = () =>
  `${ADJECTIVES[randomInteger(0, ADJECTIVES.length - 1)]} ${NOUNS[randomInteger(0, NOUNS.length - 1)]}`;

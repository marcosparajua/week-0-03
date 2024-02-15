// 1. Crea una función que elimine el primer y último carácter de un string recibido por parámetros.
export const eliminateFirstAndLast = (addString) => {
  const newString = addString.slice(1, -1);

  return newString;
};
console.log(eliminateFirstAndLast('aloha'));

// 2. Escribe una función que reciba una palabra y revise si es un palíndromo.
export const isPalindrome = (inputWord) => {
  const reversedStr = inputWord.split('').reverse('').join('');

  return inputWord === reversedStr;
};
console.log(isPalindrome('aguacate'));
// 3. Crea una función que cuente las vocales que contiene una palabra dada por parámetros.
export const countVowels = (howManyVowels) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < howManyVowels.length; i++) {
    const character = howManyVowels[i];
    if (vowels.includes(character)) {
      count++;
    }
  }
  return count;
};
console.log(countVowels('agua'));

// 4. Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).
export const checkAbcString = (inputText) => {
  const abc = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const uniqueCharacters = [];
  for (let i = 0; i < inputText.length; i++) {
    const characters = inputText[i];
    if (abc.includes(characters) && !uniqueCharacters.includes(characters)) {
      uniqueCharacters.push(characters);
    }
  }
  return uniqueCharacters.length === abc.length;
};
console.log(checkAbcString('abcdefghijmnopqrstuvwxyz'));

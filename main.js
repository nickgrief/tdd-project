export function capitalize(string = '') {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string = '') {
  return string.split('').reverse().toString().replaceAll(',', '');
}

export const Calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

export function caesarCipher(string = '', shift = 1) {
  let letters = [
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
  let encripted = '';
  for (let char of string) {
    const isLetter = char.toLowerCase() !== char.toUpperCase();
    if (isLetter) {
      const isUpperCase = char.toUpperCase() === char;
      const letterIndex = letters.indexOf(char.toLowerCase());
      let encriptedIndex = letterIndex + shift;
      if (encriptedIndex > letters.length - 1) {
        encriptedIndex = encriptedIndex - letters.length;
      }
      if (isUpperCase) {
        encripted += letters[encriptedIndex].toUpperCase();
      } else {
        encripted += letters[encriptedIndex];
      }
    } else {
      encripted += char;
    }
  }
  return encripted;
}

export function analyzeArray(array = []) {
  let average;
  let min;
  let max;
  let length = array.length;

  if (length > 0) {
    array.forEach((element, index) => {
      if (index === 0) {
        average = element;
        min = element;
        max = element;
        return;
      }
      average += element;
      if (element < min) {
        min = element;
      }
      if (element > max) {
        max = element;
      }
    });
    average /= length;
  }
  return {
    average,
    min,
    max,
    length,
  };
}

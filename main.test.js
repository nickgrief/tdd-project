import { describe, it, expect } from 'vitest';
import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from './main';

describe('capitalize', () => {
  it('works on normal word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  it('works on already capitalized word', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });
  it('doesnt break on empty string', () => {
    expect(capitalize('')).toBe('');
  });
  it('doesnt break on string that starts with a number', () => {
    expect(capitalize('100 roubles')).toBe('100 roubles');
  });
  it('doesnt break on string that starts with a whitespace', () => {
    expect(capitalize(' hello')).toBe(' hello');
  });
});

describe('reverseString', () => {
  it('works on normal word', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  it('works on sentence word', () => {
    expect(reverseString('Hello how are you?')).toBe('?uoy era woh olleH');
  });
  it('works on empty string', () => {
    expect(reverseString('')).toBe('');
  });
  it('works on whitespace only string', () => {
    expect(reverseString('   ')).toBe('   ');
  });
  it('works on whitespace surrounded string', () => {
    expect(reverseString('  hello how are you?   ')).toBe(
      '   ?uoy era woh olleh  '
    );
  });
});

describe('Calculator Addition', () => {
  it('works on positive numbers', () => {
    expect(Calculator.add(3, 5)).toBe(8);
  });
  it('works on negative numbers', () => {
    expect(Calculator.add(-3, -5)).toBe(-8);
  });
  it('works on positive and negative numbers', () => {
    expect(Calculator.add(-3, 5)).toBe(2);
  });
  it('works with two zeroes', () => {
    expect(Calculator.add(0, 0)).toBe(0);
  });
  it('works with one zero', () => {
    expect(Calculator.add(3, 0)).toBe(3);
  });
  it('works on floating point numbers', () => {
    expect(Calculator.add(3.5, 5.7)).toBe(9.2);
  });
});

describe('Calculator Subtraction', () => {
  it('works on positive numbers', () => {
    expect(Calculator.subtract(3, 5)).toBe(-2);
  });
  it('works on negative numbers', () => {
    expect(Calculator.subtract(-3, -5)).toBe(2);
  });
  it('works on positive and negative numbers', () => {
    expect(Calculator.subtract(-3, 5)).toBe(-8);
  });
  it('works with two zeroes', () => {
    expect(Calculator.subtract(0, 0)).toBe(0);
  });
  it('works with one zero', () => {
    expect(Calculator.subtract(3, 0)).toBe(3);
  });
  it('works on floating point numbers', () => {
    expect(Calculator.subtract(3.5, 5.7)).toBe(-2.2);
  });
});

describe('Calculator Division', () => {
  it('works on positive numbers', () => {
    expect(Calculator.divide(3, 5)).toBe(0.6);
  });
  it('works on negative numbers', () => {
    expect(Calculator.divide(-3, -5)).toBe(0.6);
  });
  it('works on positive and negative numbers', () => {
    expect(Calculator.divide(-3, 5)).toBe(-0.6);
  });
  it('works with two zeroes', () => {
    expect(Calculator.divide(0, 0)).toBe(NaN);
  });
  it('works with one zero', () => {
    expect(Calculator.divide(3, 0)).toBe(Infinity);
  });
  it('works on floating point numbers', () => {
    expect(Calculator.divide(3.5, 5.7)).toBe(0.6140350877192983);
  });
  it('works on wholly divisible numbers', () => {
    expect(Calculator.divide(6, 2)).toBe(3);
  });
});

describe('Calculator Multiplication', () => {
  it('works on positive numbers', () => {
    expect(Calculator.multiply(3, 5)).toBe(15);
  });
  it('works on negative numbers', () => {
    expect(Calculator.multiply(-3, -5)).toBe(15);
  });
  it('works on positive and negative numbers', () => {
    expect(Calculator.multiply(-3, 5)).toBe(-15);
  });
  it('works with two zeroes', () => {
    expect(Calculator.multiply(0, 0)).toBe(0);
  });
  it('works with one zero', () => {
    expect(Calculator.multiply(3, 0)).toBe(0);
  });
  it('works on floating point numbers', () => {
    expect(Calculator.multiply(3.5, 5.7)).toBe(19.95);
  });
});

describe('caesarCipher', () => {
  it('works on normal word', () => {
    expect(caesarCipher('hello', 5)).toBe('mjqqt');
  });
  it('works on sentence word', () => {
    expect(caesarCipher('Hello how are you?', 5)).toBe('Mjqqt mtb fwj dtz?');
  });
  it('works on empty string', () => {
    expect(caesarCipher('', 5)).toBe('');
  });
  it('works on whitespace only string', () => {
    expect(caesarCipher('   ', 5)).toBe('   ');
  });
  it('works on whitespace surrounded string', () => {
    expect(caesarCipher('  hello how are you?   ', 5)).toBe(
      '  mjqqt mtb fwj dtz?   '
    );
  });
  it('works with capitalization', () => {
    expect(caesarCipher('WoW YoU ArE So NiCe', 5)).toBe('BtB DtZ FwJ Xt SnHj');
  });
  it('doesnt break with punctuation', () => {
    expect(caesarCipher('. / @ ! , ; :', 5)).toBe('. / @ ! , ; :');
  });
  it('works with numbers', () => {
    expect(caesarCipher('1234567890', 5)).toBe('1234567890');
  });
  it("doesnt break on 'Z'", () => {
    expect(caesarCipher('azaza', 5)).toBe('fefef');
  });
  it('works with shift one', () => {
    expect(caesarCipher('hello', 1)).toBe('ifmmp');
  });
});

describe('analyzeArray', () => {
  it('works with normal array', () => {
    expect(analyzeArray([1, 2, 3])).toStrictEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 3,
    });
  });
  it('works with empty array', () => {
    expect(analyzeArray([])).toStrictEqual({
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0,
    });
  });
  it('works with some negative numbers', () => {
    expect(analyzeArray([1, 2, 3, -4])).toStrictEqual({
      average: 0.5,
      min: -4,
      max: 3,
      length: 4,
    });
  });
  it('works with all negative numbers', () => {
    expect(analyzeArray([-1, -2, -3])).toStrictEqual({
      average: -2,
      min: -3,
      max: -1,
      length: 3,
    });
  });
  it('works with one element', () => {
    expect(analyzeArray([1])).toStrictEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 1,
    });
  });
});

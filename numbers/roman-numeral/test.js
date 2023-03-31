/*
* @author: Chisimdi Damian Ezeanieto
* @date: 16/03/2023
*/
const romanToInt = require('./index');

describe('Phone key pad match', () => {
  test('romanToInt function is defined', () => {
    expect(typeof romanToInt).toEqual('function');
  });
  test('Convert roman to int for "I" === 1', () => {
    expect(romanToInt('I')).toEqual(1);
  });
  test('Convert roman to int for "III" === 3', () => {
    expect(romanToInt('III')).toEqual(3);
  });
  test('Convert roman to int for "LVIII" === 58', () => {
    expect(romanToInt("LVIII")).toEqual(58);
  });
  test('Convert roman to int for "MCMXCIV" === 1994', () => {
    expect(romanToInt("MCMXCIV")).toEqual(1994);
  });
});

/*
* @author: Chisimdi Damian Ezeanieto
* @date: 30/03/2023
*/
const longestCommonPrefix = require('./index');

describe('Phone key pad match', () => {
  test('longestCommonPrefix function is defined', () => {
    expect(typeof longestCommonPrefix).toEqual('function');
  });
  test('Convert roman to int for "["flower","flow","flight"]" === "fl"', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toEqual('fl');
  });
  test('Convert roman to int for "["dog","racecar","car"]" === ""', () => {
    expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("");
  });
  test('Convert roman to int for "["","b"]" === ""', () => {
    expect(longestCommonPrefix(["","b"])).toEqual("");
  });
  test('Convert roman to int for "[""]" === ""', () => {
    expect(longestCommonPrefix([""])).toEqual("");
  });
  test('Convert roman to int for "["c"]" === "c"', () => {
    expect(longestCommonPrefix(["c"])).toEqual("c");
  });
  test('Convert roman to int for "["chibuzor","chidera","chidi", "amaka", "amara"]" === "chi', () => {
    expect(longestCommonPrefix(["chibuzor","chidera","chidi", "amaka", "amara"])).toEqual("chi");
  });
});

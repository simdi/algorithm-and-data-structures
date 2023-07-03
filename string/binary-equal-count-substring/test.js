/*
* @author: Chisimdi Damian Ezeanieto
* @date: 03/07/2023
*/
const findEqualCountSubstrings = require('./index');
test('findEqualCountSubstrings is a function', () => {
  expect(typeof findEqualCountSubstrings).toEqual('function');
});
test("findEqualCountSubstrings '00110' to give 3", () => {
  expect(findEqualCountSubstrings('00110')).toEqual(3);
});
test("findEqualCountSubstrings '10011000' to give 5", () => {
  expect(findEqualCountSubstrings('10011000')).toEqual(5);
});
test("findEqualCountSubstrings '0001111001' to give 6", () => {
  expect(findEqualCountSubstrings('0001111001')).toEqual(6);
});
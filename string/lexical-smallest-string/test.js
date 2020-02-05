/*
* @author: Chisimdi Damian Ezeanieto
* @date: 05/02/2020
*/
const lexicographicallySmallestString = require('./index');
test('lexicographicallySmallestString is a function', () => {
  expect(typeof lexicographicallySmallestString).toEqual('function');
});
test('lexicographicallySmallestString "abczd" to give abcd', () => {
  expect(lexicographicallySmallestString("abczd")).toEqual('abcd');
});
test('lexicographicallySmallestString "klmoyp" to give klmop', () => {
  expect(lexicographicallySmallestString("klmoyp")).toEqual("klmop");
});
test('lexicographicallySmallestString "fghixj" to give "fghij"', () => {
  expect(lexicographicallySmallestString("fghixj")).toEqual("fghij");
});
/*
* @author: Chisimdi Damian Ezeanieto
* @date: 05/02/2020
*/
const lexicalSmallestString = require('./index');
test('lexicalSmallestString is a function', () => {
  expect(typeof lexicalSmallestString).toEqual('function');
});
test('lexicalSmallestString "abczd" to give abcd', () => {
  expect(lexicalSmallestString("abczd")).toEqual('abcd');
});
test('lexicalSmallestString "klmoyp" to give klmop', () => {
  expect(lexicalSmallestString("klmoyp")).toEqual("klmop");
});
test('lexicalSmallestString "fghixj" to give "fghij"', () => {
  expect(lexicalSmallestString("fghixj")).toEqual("fghij");
});
/*
* @author: Chisimdi Damian Ezeanieto
* @date: 23/01/2020
*/
const minMoveToObtainString = require('./index');
test('minMoveToObtainString is a function', () => {
  expect(typeof minMoveToObtainString).toEqual('function');
});
test('minMoveToObtainString "baaaaa" to give 1', () => {
  expect(minMoveToObtainString("baaaaa")).toEqual(1);
});
test('minMoveToObtainString "baaabbaabbba" to give 2', () => {
  expect(minMoveToObtainString("baaabbaabbba")).toEqual(2);
});
test('minMoveToObtainString "baabab" to give 0', () => {
  expect(minMoveToObtainString("baabab")).toEqual(0);
});
test('minMoveToObtainString "baaaaabaaabbaabbba" to give 3', () => {
  expect(minMoveToObtainString("baaaaabaaabbaabbba")).toEqual(3);
});
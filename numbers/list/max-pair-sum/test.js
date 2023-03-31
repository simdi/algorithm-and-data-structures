/*
* @author: Chisimdi Damian Ezeanieto
* @date: 23/01/2020
*/
const maxPairNumberSum = require('./index');
test('maxPairNumberSum is a function', () => {
  expect(typeof maxPairNumberSum).toEqual('function');
});
test('maxPairNumberSum [51, 71, 17, 42] to give [51, 42]', () => {
  expect(maxPairNumberSum([51, 71, 17, 42])).toEqual([51, 42]);
});
test('maxPairNumberSum [42, 33, 60] to give [42, 60]', () => {
  expect(maxPairNumberSum([42, 33, 60])).toEqual([42, 60]);
});
test('maxPairNumberSum [51, 32, 43] to give -1', () => {
  expect(maxPairNumberSum([51, 32, 43])).toEqual(-1);
});
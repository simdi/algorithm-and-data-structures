/*
* @author: Chisimdi Damian Ezeanieto
* @date: 01/04/2023
*/
const countUniqueValues = require('./index');
test('countUniqueValues is a function', () => {
  expect(typeof countUniqueValues).toEqual('function');
});
test('countUniqueValues([1,1,1,1,1,2]) to give 2', () => {
  expect(countUniqueValues([1,1,1,1,1,2])).toEqual(2);
});
test('countUniqueValues([1,2,3,4,4,4,7,7,7,12,12,13]) to give 7', () => {
  expect(countUniqueValues([1,2,3,4,4,4,7,7,7,12,12,13])).toEqual(7);
});
test('countUniqueValues([1,1,1,1,1,1,1,1]) to give 1', () => {
  expect(countUniqueValues([1,1,1,1,1,1,1,1])).toEqual(1);
});
test('countUniqueValues([-2,-1,0,1,2,5]) to give 6', () => {
  expect(countUniqueValues([-2,-1,0,1,2,5])).toEqual(6);
});
test('countUniqueValues([]) to give 0', () => {
  expect(countUniqueValues([])).toEqual(0);
});
/*
* @author: Chisimdi Damian Ezeanieto
* @date: 06/07/2023
*/
const mergeSortedArray = require('./index');
test('mergeSortedArray is a function', () => {
  expect(typeof mergeSortedArray).toEqual('function');
});
test("mergeSortedArray '[1,2,3,0,0,0], 3, [3,4,5], 3' to give [ 1, 2, 3, 3, 4, 5 ]", () => {
  expect(mergeSortedArray([1,2,3,0,0,0], 3, [3,4,5], 3)).toEqual([ 1, 2, 3, 3, 4, 5 ]);
});
test("mergeSortedArray '[1,2,4,5,6,0], 5, [3], 1' to give [ 1, 2, 3, 4, 5, 6 ]", () => {
  expect(mergeSortedArray([1,2,4,5,6,0], 5, [3], 1)).toEqual([ 1, 2, 3, 4, 5, 6 ]);
});
test("mergeSortedArray '[0], 0, [1], 1' to give [1]", () => {
  expect(mergeSortedArray([0], 0, [1], 1)).toEqual([1]);
});
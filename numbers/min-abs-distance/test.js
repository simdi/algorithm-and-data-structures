/*
* @author: Chisimdi Damian Ezeanieto
* @date: 05/07/2023
*/
const minAbsoluteDistanceDifference = require('./index');
test('minAbsoluteDistanceDifference is a function', () => {
  expect(typeof minAbsoluteDistanceDifference).toEqual('function');
});
test("minAbsoluteDistanceDifference '[2,-2, 4]' to give 2", () => {
  expect(minAbsoluteDistanceDifference([2,-2, 4])).toEqual(2);
});
test("minAbsoluteDistanceDifference '[3, -7, 0]' to give 3", () => {
  expect(minAbsoluteDistanceDifference([3, -7, 0])).toEqual(3);
});
test("minAbsoluteDistanceDifference '[-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]' to give 1", () => {
  expect(minAbsoluteDistanceDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])).toEqual(1);
});
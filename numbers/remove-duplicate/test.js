/*
* @author: Chisimdi Damian Ezeanieto
* @date: 07/07/2023
*/
const removeDuplicate = require('./index');
test('removeDuplicate is a function', () => {
  expect(typeof removeDuplicate).toEqual('function');
});
test("removeDuplicate '[0,0,1,1,1,2,2,3,3,4]' to give 5", () => {
  expect(removeDuplicate([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
});
test("removeDuplicate '[1,1,2]' to give 2", () => {
  expect(removeDuplicate([1,1,2])).toEqual(2);
});
test("removeDuplicate '[1,1,2,2,2,2,3,3,3,3,4,5,6,7,7,7]' to give 7", () => {
  expect(removeDuplicate([1,1,2,2,2,2,3,3,3,3,4,5,6,7,7,7])).toEqual(7);
});
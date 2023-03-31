/*
* @author: Chisimdi Damian Ezeanieto
* @date: 31/03/2023
*/
const same = require('./index');
test('same is a function', () => {
  expect(typeof same).toEqual('function');
});
test('same([1,2,1], [1,4,4]) to give false', () => {
  expect(same([1,2,1], [1,4,4])).toEqual(false);
});
test('same([1,2,3], [1,4,4]) to give false', () => {
  expect(same([1,2,3], [1,4,4])).toEqual(false);
});
test('same([1,2,4], [1,4,16]) to give true', () => {
  expect(same([1,2,4], [1,4,16])).toEqual(true);
});
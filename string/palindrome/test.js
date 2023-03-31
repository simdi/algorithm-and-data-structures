/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/
const palindrome = require('./index');
const minAdjacentSwap = require('./min-adjacent-swap');
test('Palindrome is a function', () => {
  expect(typeof palindrome).toEqual('function');
});
test('Palindrome Hello to give false', () => {
  expect(palindrome('Hello')).toEqual(false);
});
test('Palindrome abba to give true', () => {
  expect(palindrome('abba')).toEqual(true);
});
test('Palindrome ababa to give true', () => {
  expect(palindrome('ababa')).toEqual(true);
});
test(`Palindrome '' to give undefined`, () => {
  expect(palindrome('')).toEqual(undefined);
});

// test('minAdjacentSwap is a function', () => {
//   expect(typeof minAdjacentSwap).toEqual('function');
// });
// test('minAdjacentSwap mamad to give 3', () => {
//   expect(minAdjacentSwap('mamad')).toEqual(3);
// });
// test('minAdjacentSwap asflkj to give -1', () => {
//   expect(minAdjacentSwap('asflkj')).toEqual(-1);
// });
// test('minAdjacentSwap aabb to give 2', () => {
//   expect(minAdjacentSwap('aabb')).toEqual(2);
// });
// test(`minAdjacentSwap ntiin to give 1`, () => {
//   expect(minAdjacentSwap('ntiin')).toEqual(1);
// });
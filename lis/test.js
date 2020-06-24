/*
* @author: Chisimdi Damian Ezeanieto
* @date: 23/06/2020
*/
const lis = require('./index');

describe('Longest Increasing Subsequence Tests', () => {
  test('lis function is defined', () => {
    expect(typeof lis).toEqual('function');
  });
  test('Calculate correct lis value for [5,7,4,-3,9,1,10,4,5,8,9,3] === 6', () => {
    expect(lis([5,7,4,-3,9,1,10,4,5,8,9,3])).toEqual(6);
  });
  test('Calculate correct lis value for [1,10,-3,4,15,2,3,5,11,12,13] === 7', () => {
    expect(lis([1,10,-3,4,15,2,3,5,11,12,13])).toEqual(7);
  });
  test('Calculate correct lis value for [4,5,6,2,1,0,-5,3,10,20,19,11] === 5', () => {
    expect(lis([4,5,6,2,1,0,-5,3,10,20,19,11])).toEqual(5);
  });
});

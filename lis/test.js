/*
* @author: Chisimdi Damian Ezeanieto
* @date: 23/06/2020
*/
const lis = require('./index');

describe('Longest Increasing Subsequence Tests', () => {
  test('lis function is defined', () => {
    expect(typeof lis).toEqual('function');
  });
  it('Calculate correct lis value for [5,7,4,-3,9,1,10,4,5,8,9,3] === 6', () => {
    expect(lis([5,7,4,-3,9,1,10,4,5,8,9,3])).toEqual(6);
  });
});

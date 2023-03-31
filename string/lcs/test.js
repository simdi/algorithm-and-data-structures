/*
* @author: Chisimdi Damian Ezeanieto
* @date: 24/06/2020
*/
const lcs = require('./index');

describe('Longest Common Subsequence Tests', () => {
  test('lcs function is defined', () => {
    expect(typeof lcs).toEqual('function');
  });
  test('Calculate correct lcs value for "AGGTAB" & "GXTXAB" === 4', () => {
    expect(lcs('AGGTAB', 'GXTXAB')).toEqual(4);
  });
  // test('Calculate correct lcs value for "bcdbcda" & "abecbab" === 4', () => {
  //   expect(lcs('bcdbcda', 'abecbab')).toEqual(4);
  // });
  // test('Calculate correct lcs value for "aaaa" & "aa" === 2', () => {
  //   expect(lcs('aaaa', 'aa')).toEqual(2);
  // });
});

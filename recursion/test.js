/*
* @author: Chisimdi Damian Ezeanieto
* @date: 11/03/2023
*/
const phoneKeyPadMatch = require('./index');

describe('Phone key pad match', () => {
  test('phoneKeyPadMatch function is defined', () => {
    expect(typeof phoneKeyPadMatch).toEqual('function');
  });
  test('Calculate correct phoneKeyPadMatch value for "23" === ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
    expect(phoneKeyPadMatch('23')).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
  });
  test("Calculate correct phoneKeyPadMatch value for '234' === [ 'ad', 'ae', 'af', 'ag','ah', 'ai', 'bd', 'be','bf', 'bg', 'bh', 'bi','cd', 'ce', 'cf', 'cg','ch', 'ci']", () => {
    expect(phoneKeyPadMatch('234')).toEqual([
      'ad', 'ae', 'af', 'ag','ah', 'ai', 'bd', 'be','bf', 'bg', 'bh', 'bi','cd', 'ce', 'cf', 'cg','ch', 'ci'
    ]);
  });
  test("Calculate correct phoneKeyPadMatch value for 'aaaa' & 'aa' === ['dg', 'dh', 'di', 'eg', 'eh', 'ei', 'fg', 'fh', 'fi']", () => {
    expect(phoneKeyPadMatch('34')).toEqual(['dg', 'dh', 'di', 'eg', 'eh', 'ei', 'fg', 'fh', 'fi']);
  });
});

/*
* @author: Chisimdi Damian Ezeanieto
* @date: 11/03/2023
*/
const generateCombinations = require('./index');

describe('Phone key pad match', () => {
  test('generateCombinations function is defined', () => {
    expect(typeof generateCombinations).toEqual('function');
  });
  test('Calculate correct generateCombinations value for "23" === ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
    expect(generateCombinations('23')).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
  });
  test("Calculate correct generateCombinations value for '234' === ['adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi']", () => {
    expect(generateCombinations('234')).toEqual(['adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi']);
  });
  test("Calculate correct generateCombinations value for 'aaaa' & 'aa' === ['dg', 'dh', 'di', 'eg', 'eh', 'ei', 'fg', 'fh', 'fi']", () => {
    expect(generateCombinations('34')).toEqual(['dg', 'dh', 'di', 'eg', 'eh', 'ei', 'fg', 'fh', 'fi']);
  });
});

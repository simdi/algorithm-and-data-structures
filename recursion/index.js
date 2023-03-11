/* 
* @author: Chisimdi Damian Ezeanieto
* @data: 11/03/2023
*/

// Given an input '23', return all possible character match in a key pad match
// e.g input: '23', output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
const phoneDigits = {
  "2": ['a', 'b', 'c'],
  "3": ['d', 'e', 'f'],
  "4": ['g', 'h', 'i'],
  "5": ['j', 'k', 'l'],
  "6": ['m', 'n', 'o'],
  "7": ['p', 'q', 'r', 's'],
  "8": ['t', 'u', 'v'],
  "9": ['w', 'x', 'y', 'z'],
};
const phoneKeyPadMatch = (digit) => {
  const firstDigit = digit[0];
  const remainingDigit = digit.substring(1);

  let chars = [];
  phoneDigits[firstDigit].map(firstChar => {
    for (let i = 0; i < remainingDigit.length; i++) {
      let remainingPhoneDigit = phoneDigits[remainingDigit[i]];

      const combination = remainingPhoneDigit.map(comb => firstChar + comb);
      chars.push(combination);
    }
  });
  return chars.flatMap(x => x);
};

module.exports = phoneKeyPadMatch;
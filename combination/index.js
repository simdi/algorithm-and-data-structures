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
// const generateCombinations = (digit) => {
//   const firstDigit = digit[0];
//   const remainingDigit = digit.substring(1);

//   let chars = [];
//   phoneDigits[firstDigit].map(firstChar => {
//     for (let i = 0; i < remainingDigit.length; i++) {
//       let remainingPhoneDigit = phoneDigits[remainingDigit[i]];

//       const combination = remainingPhoneDigit.map(comb => firstChar + comb);
//       chars.push(combination);
//     }
//   });
//   return chars.flatMap(x => x);
// };

// Another solution
// const generateCombinations = (digits) => {
//   let combinations = [''];
  
//   for (let digit of digits) {
//     const letters = phoneDigits[digit];
//     const newCombinations = [];
    
//     for (let combination of combinations) {
//       for (let letter of letters) {
//         newCombinations.push(combination + letter);
//       }
//     }
    
//     combinations = newCombinations;
//   }
  
//   return combinations;
// }

// Using recursion to solve this generate combination problem.
const generateCombinations = (digit) => {
  // define base class
  if (digit.length === 0) return [''];

  const firstChar = digit[0];
  const remainingChars = digit.slice(1);

  const result = phoneDigits[firstChar].flatMap(x => {
    const combination = generateCombinations(remainingChars);
    return combination.map(comb => x + comb);
  });

  return result;
};

module.exports = generateCombinations;
/*
 * @author: Chisimdi Ezeanieto
 * @date: 29/03/2023
 * 
 * @param {string} s
 * @return {number}
 */
const symbolValue = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};
const romanToInt = function(s) {
  // Convert each roman numeral to number and place each in an array.
  const numbers = s.split('').reduce((curr, value) => {
      curr.push(symbolValue[value]);
      return curr;
  }, []);
  // Loop through the array and check if the current roman is greater than the next
  let total = 0;
  let i = 0;
  
  while (i < numbers.length) {
      if (i < numbers.length - 1) {
          if (numbers[i] > numbers[i + 1]) {
            total += numbers[i];
            i++;
          } else if (numbers[i] === numbers[i+1]) {
            total += (numbers[i + 1] + numbers[i]);
            i+=2;
          } else {
            total += (numbers[i + 1] - numbers[i]);
            i+=2;
          }
      } else {
          total += numbers[i];
          i++;
      }
  }
  return total;
};

module.exports = romanToInt;
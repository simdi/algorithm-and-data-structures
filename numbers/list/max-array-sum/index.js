/*
* @author: Chisimdi Ezeanieto
* @date: 01/04/2023
*/

const maxSubArraySum = (arr, size) => {
  if (arr.length === 0 || size > arr.length) return null;
  let i = 0;
  let j = size - 1;
  let sum = -Infinity;

  while (j < arr.length) {
    const total = arr.slice(i, j+1);
    const sumTotal = total.reduce((a, b) => a + b);
    if (sumTotal > sum) {
      sum = sumTotal;
    }
    i++;
    j++;
  }
  return sum;
};

module.exports = maxSubArraySum;
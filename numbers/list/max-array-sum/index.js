/*
* @author: Chisimdi Ezeanieto
* @date: 01/04/2023
*/

const maxSubArraySum = (arr, size) => {
  // if (arr.length === 0 || size > arr.length) return null;
  // let i = 0;
  // let j = size - 1;
  // let sum = -Infinity;

  // while (j < arr.length) {
  //   const total = arr.slice(i, j+1);
  //   const sumTotal = total.reduce((a, b) => a + b);
  //   if (sumTotal > sum) {
  //     sum = sumTotal;
  //   }
  //   i++;
  //   j++;
  // }
  // return sum;

  // Another solution
  // This solutions performance is O(n)
  if (arr.length === 0 || size > arr.length) return null;
  let tempSum = 0;
  // Add the first size elements of the array
  for (let i = 0; i < size; i++) {
    tempSum += arr[i];
  }
  let maxSum = tempSum;
  let i = size;
  // Loop through the elements from the size of the array
  while (i < arr.length) {
    // Minus the first element and add the size position of the array
    tempSum = tempSum - arr[i - size] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
    i++;
  }
  return maxSum;
};


module.exports = maxSubArraySum;
/*
* @author: Chisimdi Ezeanieto
* @date: 31/03/2023
*/

const zeroSum = (arr) => {
  let result = [];
  // Using 2 pointers one on the left and one on the right
  let left = 0;
  let right = arr.length - 1;
  // Loop through the array
  while (left < right) {
    // if the sum is = 0, push the values into the result array and return the array
    if (arr[left] + arr[right] === 0) {
      result.push(arr[left])
      result.push(arr[right])
      return result;
    }
    // if the sum is greater than 0, move the right pointer
    if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      // else move the left pointer
      left++;
    }
  }

  return result;
}
// [-4,-3,-2,1,0,2,3,5] => [-3, 3]
module.exports = zeroSum;
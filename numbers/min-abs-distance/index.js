/**
 * @author: Chisimdi Damian Ezeanieto
 * @date: 05/07/2023
 */

function minAbsoluteDistanceDifference(arr) {
  let minDistance = Infinity;

  // Big O(n^2)
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = i+1; j < arr.length; j++) {
  //     const abs = eval(Math.abs(arr[i] - arr[j]));
  //     minDistance = Math.min(minDistance, abs);
  //   }
  // }
  
  // Big O(n)
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    const abs = eval(Math.abs(arr[i] - arr[i+1]));
    minDistance = Math.min(minDistance, abs);
  }
  
  return minDistance;
}

module.exports = minAbsoluteDistanceDifference;
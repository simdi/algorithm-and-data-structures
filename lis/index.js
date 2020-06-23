/*
* @author: Chisimdi Damian Ezeanieto
* @date: 23/06/2020
*/
// Find the longest increasing subsequence in a given array.
// Longest Increasing Subsequence
const lis = (arr) => {
  if (arr.length < 1) return undefined;
  // Fill an array of length arr.length with 1;
  const lis = Array(arr.length).fill(1);

  let n = arr.length;
  for(let i = 1; i <= n; i++) {
    for(let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        lis[i] = Math.max(lis[j] + 1, lis[i]);
      }
    }
  }

  return Math.max(...lis);
};

module.exports = lis;
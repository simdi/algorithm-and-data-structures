/*
* @author: Chisimdi Damian Ezeanieto
* @date: 03/07/2023
*/

function findEqualCountSubstrings(binaryString) {
  let result = [];
  // Have two pointers that will move together
  let i = 0;
  let j = 1;
  
  while(j < binaryString.length) {
    const ith = binaryString[i];
    const jth = binaryString[j];
    // when their values are the opposite, then push those values into an array
    if (ith !== jth) {
      result.push([ith+jth]);
      let k = i - 1;
      let l = j + 1;

      // and then check their subsequent forward and backward values of the two respective pointers are not the same
      while(k >= 0 && l !== binaryString.length && binaryString[k] !== binaryString[l] && binaryString[l] === binaryString[l-1]) {
        result.push([binaryString.slice(k, l+1)])
        k--;
        l++;
      }
      
    }
    // if they are the same, they should move one step ahead
    // They shouldn't move to the last item in the list
    i++;
    j++;
  }
  return result.length;
}

module.exports = findEqualCountSubstrings;

/**
 * @author: Chisimdi Damian Ezeanieto
 * @date: 07/07/2023
 */

function removeDuplicate(arr) {
  // I will have two pointers i and j, j will lead the charge
  let i = 0;
  let j = 1;
  
  while(j < arr.length) {
    const ith = arr[i];
    const jth = arr[j];
    // if the values in i and j are not the same, swap the value in j with i+1
    // increment i
    if (ith !== jth) {
      [arr[j], arr[i+1]] = [arr[i+1], arr[j]];
      i++;
    }
    j++;
  }
  // return i;
  return i+1;
}

module.exports = removeDuplicate;
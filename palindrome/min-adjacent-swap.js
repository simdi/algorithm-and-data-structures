/*
* @author: Chisimdi Damian Ezeanieto
* @date: 29/01/2020
*/

const isPalindrome = (arr) => {
  // const reversedArr = arr.reverse();
  // console.log('Resversed', reversedArr);
  // if (arr === reversedArr) {
  //   return true;
  // }
  return arr.every((char, i) => char === arr[arr.length - i - 1]);
}

const minAdjacentSwap = (str) => {
  // Edge case: if the length of a string passed is equal to Zero, return undefined;
  if (str.length === 0) return -1;
  let arr = str.split('');
  let count = 0;
  let i = 0;
  let j = arr.length-1;
  let k;
  let done = true;

  const isPal = isPalindrome(arr);
  console.log('IsPal', isPal);
  while(i < j) {
    if (isPalindrome(arr)) {
      done = false;
    }
    // Check if the first and last item are equal,
    // then, move i forward and j backward.
    if (arr[i] === arr[j]) {
      i++;
      j--;
    }
    const first = arr[i];
    const subarr = arr.indexOf(first, i+1);
    // Start swapping from where is find the element.
    // if (subarr > -1) {
    //   if (i === j) {
    //     done = false;
    //   }
    //   // start swap
    //   k = subarr;
    //   [arr[k], arr[k+1]] = [arr[k+1], arr[k]];
    //   count++;
    //   if (isPalindrome(arr)) {
    //     done = false;
    //   }
    //   console.log('after arr', arr);
    // } else {
    //   // Start swapping from the beginning
    //   [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    //   count++;
    //   i++;
    //   console.log('arr', arr);
    //   // check if array is palindrome
    //   if (isPalindrome(arr)) {
    //     done = false;
    //   }
    // }

    
    // if (i === j) {
    //   done = false;
    // }
    // i++;
    i++;
    j--;
  }

  return count;
};

module.exports = minAdjacentSwap;
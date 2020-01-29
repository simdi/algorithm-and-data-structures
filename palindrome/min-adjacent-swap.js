/*
* @author: Chisimdi Damian Ezeanieto
* @date: 29/01/2020
*/

const isPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('');
  console.log('Resversed', reversedStr);
  if (str === reversedStr) {
    return true;
  }
  return false;
}

const minAdjacentSwap = (str) => {
  // Edge case: if the length of a string passed is equal to Zero, return undefined;
  if (str.length === 0) return -1;
  let count = 0;
  let i = 0;
  let j = str.length-1;
  let k;
  let done = true;

  const isPal = isPalindrome(str);
  console.log('IsPal', isPal);
  while(done) {
    if (isPalindrome(str)) {
      done = false;
    }
    const first = str[i];
    const substr = str.indexOf(first, i+1);
    // Start swapping from where is find the element.
    if (substr > -1) {
      if (i == j) {
        done = false;
      }
      // start swap
      k = substr;
      [str[k], str[k+1]] = [str[k+1], str[k]];
      count++;
      if (isPalindrome(str)) {
        done = false;
      }
    } else {
      // Start swapping from the beginning
      [str[i], str[i+1]] = [str[i+1], str[i]];
      count++;
      i++;
      console.log('Str', str);
      // check if string is palindrome
      // const reversedStr = str.split('').reverse().join('');
      // console.log('Resversed', reversedStr);
      if (isPalindrome(str)) {
        done = false;
      }
    }
  }

  return count;
};

module.exports = minAdjacentSwap;
/*
* @author: Chisimdi Ezeanieto
* @date: 01/04/2023
*/

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  // // Using multiple pointers, one keeping track of the unique pointers, and the other checking numbers ahead
  // let i = 0;
  // let j = 1;
  // // loop through the array and
  // while (j < arr.length) {
  //   // since it's a sorted array, if value in position j is greater than position i, move the value in j to i+1 and then move j,
  //   const iVal = arr[i];
  //   const jVal = arr[j];
  //   if (jVal > iVal) {
  //     i++;
  //     [arr[i], arr[j]] = [arr[j], arr[i]];
  //     j++;
  //   } else {
  //     // else, move only j
  //     j++;
  //   }
  // }
  // // return the position of i as the number of unique values
  // return i+1;

  // Another Solution
  // Keep a count of every value in an object and return the count of the keys.
  let obj = {};

  for (let val of arr) {
    obj[val] ? obj[val]++ : obj[val] = 1;
  }

  return Object.keys(obj).length;
}

module.exports = countUniqueValues;
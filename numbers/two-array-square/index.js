/*
* @author: Chisimdi Ezeanieto
* @date: 31/03/2023
*/

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  // Naive solution O(n2)
  // // create a copy of the second array
  // let copyArr2 = arr2;
  // // loop through the first array
  // for (let val of arr1) {
  //   const squareVal = val*val;
  //   // if the square of each of the value is in the copied array, then continue
  //   const idxSqaVal = copyArr2.indexOf(squareVal);
  //   if (idxSqaVal >= 0) {
  //   // reduce the second array
  //     copyArr2.splice(idxSqaVal, 1);
  //   } else {
  //   // else return false
  //     return false;
  //   }
  // }
  // // if everything goes fine, return true
  // return true;

  let lookup = {};

  for (let val of arr1) {
    lookup[val] ? lookup[val]++ : lookup[val] = 1;
  }
  
  for (let val of arr2) {
    if (lookup[Math.sqrt(val)] === undefined) {
      return false;
    }
    if (!lookup[Math.sqrt(val)]) {
      return false;
    }
    if (lookup[Math.sqrt(val)]) {
      lookup[Math.sqrt(val)]--;
    }
  }
  return true;
};

module.exports = same;
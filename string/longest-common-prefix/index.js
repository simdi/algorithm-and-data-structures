/*
 * @author: Chisimdi Ezeanieto
 * @date: 30/03/2023
 * 
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  const obj = {};
  let result = "";
  let highestNumber = 0;
  // Loop through each of the strings
  for (let str of strs) {
      let i = 0;

  // For each string, I will loop through each character and put it in an object starting from the second character.
      while (i < str.length) {
          const subStr = str.substring(0, i+1);
          if (obj[subStr] === undefined) {
              obj[subStr] = 0;
          } else {
              obj[subStr]+=1;
          }
          i++;
      }
  }
  const objArr = Object.entries(obj);
  console.log(obj, objArr.length);
  // Loop through the object and get the key with the highest number of characters found.
  if (objArr.length > 1) {
    for (let [key, val] of objArr) {
      if (val > 0 && val >= highestNumber) {
          result = key;
          highestNumber = val;
      }
    }
  } else {
    result = objArr.length === 0 ? "" : objArr[0][0];
  }
  return result;
};

module.exports = longestCommonPrefix;
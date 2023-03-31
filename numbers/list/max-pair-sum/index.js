/*
* @author: Chisimdi Damian Ezeanieto
* @date: 23/01/2020
*/

const MaxPairNumberSum = (arr) => {
  /*
  * Steps: 
  * 1. Define, 2. Represent, 3. Approach/Strategy, 4. Algorithm, 5. Analyse, 6. Experiment
  */
  // ([51, 71, 17, 42])).toEqual([51, 42]) 
  // pick pairs, calculate digits, compare pairs
  let i = 0;
  let max = 0;
  let pair = [];
  while(i < (arr.length - 1)) {
    let j = i + 1;
    let jLength = arr.slice(j);
    while(j < jLength.length) {
      let iItem = arr[i];
      let jItem = jLength[j];
      let addIDigit = (iItem).toString().split('').reduce((a, b) => a+Number(b), 0);
      let addJDigit = (jItem).toString().split('').reduce((a, b) => a+Number(b), 0);
      if (addIDigit === addJDigit) {
        max = Math.max((iItem + jItem), max);
        pair.push(iItem, jItem);
      }
      // Keep max
      j++;
    }
    i++;
  }

  if (pair.length > 0) {
    return pair;
  }

  return -1;
}

module.exports = MaxPairNumberSum;
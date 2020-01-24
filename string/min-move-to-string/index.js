/*
* @author: Chisimdi Damian Ezeanieto
* @date: 23/01/2020
*/

const minMoveToObtainString = (str) => {
  /*
  * Steps: 
  * 1. Define, 2. Represent, 3. Approach/Strategy, 4. Algorithm, 5. Analyse, 6. Experiment
  */
  // "baaaaa" => 2
  let count = 0;
  let i = 1;
  let j = str.length - 2;
  while(i < j) {
    let beforeIth = str[i-1];
    let ith = str[i];
    let i1 = str[i+1];
    let i2= str[i+2];
    // console.log(ith);
    if ((beforeIth === i1) && (ith === i1) && (i1 === i2)) {
      // Swap i + 1
      (str[i] === "a") ? str[i] = "b" : str[i] = "a";
      i = i+2;
    } else if((ith === i1) && (i1 === i2)) {
      //swap
      (str[i] === "a") ? str[i] = "b" : str[i] = "a";
      count++;
      i++;
    } else {
      i++;
    }
  }

  return count;
}

module.exports = minMoveToObtainString;
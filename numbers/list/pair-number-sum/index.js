/*
* @author: Chisimdi Damian Ezeanieto
* @date: 22/01/2020
*/

const pairNumberSum = (arr, k) => {
  const result = [];
  // Naive solution
  // Use two loops to loop through the array.
  let i = 0;
  while(i < arr.length) {
    let deficit = k - arr[i];
    let newArray = arr.slice(i);
    let findIndex = newArray.indexOf(deficit);
    if (findIndex > -1) {
      let findItem = newArray[findIndex];
      let pairs = [arr[i], findItem];
      result.push(pairs);
    }
    i++;
  }
  return result;
}

module.exports = pairNumberSum;
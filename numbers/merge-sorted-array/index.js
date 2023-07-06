/**
 * @author: Chisimdi Damian Ezeanieto
 * @date: 06/06/2023
 */

const mergeSortedArray = function(arr1, m, arr2, n) {
  arr1.splice(n > m ? m : n < m ? m : n, n, ...arr2);
  const result = arr1.sort((a,b) => a-b);
  return result;
};

module.exports = mergeSortedArray;
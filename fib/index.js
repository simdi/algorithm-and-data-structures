/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/

// Fibonacci Series
const fibonacci = (n, cache) => {
  // // 0 (n^2) not performant
  // if (n < 3) {
  //   return 1;
  // } else {
  //   return fibonacci(n - 2) + fibonacci(n - 1);
  // }

  // O(n) performant
  cache = cache || [];
  if (cache[n]) return cache[n];
  else {
    if (n < 3) {
      return 1;
    } else {
      cache[n] = fibonacci(n - 2, cache) + fibonacci(n - 1, cache);
    }
  }
  return cache[n];
};

module.exports = fibonacci;
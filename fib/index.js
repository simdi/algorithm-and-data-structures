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

  // O(n) using recursion
  // cache = cache || [];
  // if (cache[n]) return cache[n];
  // else {
  //   if (n < 3) {
  //     return 1;
  //   } else {
  //     cache[n] = fibonacci(n - 2, cache) + fibonacci(n - 1, cache);
  //   }
  // }
  // return cache[n];

  // O(n) using loop and memoization
  const mem = [];
  mem[0] = 0;
  mem[1] = 1;
  mem[2] = 1;
  let i = 3;
  while(i <= n) {
    mem[i] = mem[i-1] + mem[i-2];
    i++;
  }

  return mem[n];
};

module.exports = fibonacci;
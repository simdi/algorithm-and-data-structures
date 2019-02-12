/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/

// Fibonacci Series
const fibonacci = (n, cache) => {
    // // 0 (n^2) not performant
    if (n < 3) {
        return 1;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }

    // // O(n) performant
    // cache = cache || [];
    // if (cache[idx]) return cache[idx];
    // else {
    //   if (idx < 3) {
    //     return 1;
    //   } else {
    //     cache[idx] = fibonacci(idx - 2, cache) + fibonacci(idx - 1, cache);
    //   }
    // } 

    // return cache[idx];
};

module.exports = fibonacci;
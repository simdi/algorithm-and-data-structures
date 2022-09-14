// Function to generate random note


// Input Array of English words ['apple', 'banana', 'cabbage'];
// Rules: 1. The word that you generate should start with a, b, or c,
// 2. The word should only end with e or a
// 3. a, next letter can only be p, n, b, or g
// sample: .'abage', 'bage', 'capple', 'a'

// Possible Solution
// Pick the first character in each word
// Pick the last unique characters in each word
// Function that would generate successive characters.

const generateSucc = (str, arr) => {
  // 'a', ['apple']
  // {“a”:[“p”, “n”, “b”, “g”]}
  // {“b”:[“b”, “a”]}
  // {“c”:[“a”]}
  const succCharacters = arr.reduce((acc, curr) => {
    const find = arr
  }, {});
}

const randomGenerator = (input) => {
  const firstCharacters = input.map(x => x[0]);
  const lastCharacters = input.map(x => x[x.length - 1]);
}
/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/

// --- Directions
/*
    Given a string, return true if the string is a palindrome or false if it's not a palindrome.
    A palindrome is a word that when reversed gives the the same word.
    --- Examples
    palindrome('abba') === true;
    palindrome('absjdueikd') === false;
*/
const palindrome = (str) => {
    // Edge case: if the length of a string passed is equal to Zero, return undefined;
    if (str.length === 0) return undefined;
    // Naive algorithm.
    // Big(O) = N
    // let reversedStr = '';
    // for (let char of str) {
    //     reversedStr = char + reversedStr;
    // }

    // return reversedStr === str ? true : false;

    // Naive algorithm.
    // Big(O) = N
    // return (str.split('').reduce((a,b) => b + a, '') === str) ? true : false;

    // Naive algorithm.
    // Big(O) = log N
    // Multiple pointers pattern
    // let i = 0;
    // let j = str.length - 1;
    // while (i <= j) {
    //     console.log(str[i]);
    //     // Short circuit if i !== j
    //     if (str[i] !== str[j]) return false;
    //     i++;
    //     j--;
    // }
    // return true;

    // Big(O) = log N
    // Multiple pointers pattern with every() array function
    // return str.split('').every((char, i) => char === str[str.length - i - 1]);

    // Big(O) = log N
    if (str.length === 0) return false;
    let i = 0;
    let j = Math.floor((str.length) / 2);
    while(i < j) {
      if(str[j] !== str[str.length - j - 1]) return false;
      j--;
    }
    return true;
};

module.exports = palindrome;
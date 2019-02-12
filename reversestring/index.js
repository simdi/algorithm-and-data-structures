/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/

const reverseString = (str) => {
    // Edge case: If string length is equal to an empty string, return an empty string.
    if (str.length === 0) return str;
    // Naive algorithm.
    // Big(O) = N
    // let reversedStr = '';
    // for(let char of str) {
    //     reversedStr = char + reversedStr;
    // }
    // return reversedStr;

    // Another solution
    // Big(O) = N
    return str.split('').reduce((a,b) => b + a, '');
};

module.exports = reverseString;
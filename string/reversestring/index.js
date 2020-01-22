/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/

const reverseString = (str) => {
    // Edge case: If string length is equal to an empty string, return an empty string.
    if (str.length === 0) return str;
    // Convert string into an array
    str = str.split('');
    // Naive algorithm.
    // Big(O) = N
    // let reversedStr = '';
    // for(let char of str) {
    //     reversedStr = char + reversedStr;
    // }
    // return reversedStr;

    // Another solution
    // Big(O) = N
    // return str.split('').reduce((a,b) => b + a, '');

    // Switch positions as I loop through the string.
    // Big(O) = log N
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        [str[i], str[str.length-1-i]] = [str[str.length-1-i], str[i]];
    }
    return str.join('');
};

module.exports = reverseString;
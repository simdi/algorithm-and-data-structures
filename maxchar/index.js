/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/

const maxChar = (str) => {
    const chars = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        chars[char] = chars[char] || 0;
        chars[char]++;

        if (chars[char] > max) {
            max = chars[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/

// --- Directions
/*
    Given an integer, return the reversed value.
    
    -- Examples
    reverseInt(51) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
*/
const reverseInt = (int) => {
    // convert the integer into a string.
    str = int.toString();
    // Naive algorithm.
    // Big(O) = N
    let reversedStr = '';
    for(let char of str) {
        reversedStr = char + reversedStr;
    }

    return parseInt(reversedStr) * Math.sign(int);
};

module.exports = reverseInt;
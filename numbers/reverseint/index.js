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
    // Convert the string into an array.
    str = str.split('');
    // Naive algorithm.
    // Big(O) = N
    // let reversedStr = '';
    // for(let char of str) {
    //     reversedStr = char + reversedStr;
    // }

    // return parseInt(reversedStr) * Math.sign(int);

    // Switch positions as I loop through the string.
    // Big(O) = log N
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        [str[i], str[str.length-1-i]] = [str[str.length-1-i], str[i]];
    }

    return parseInt(str.join('')) * Math.sign(int);
};

module.exports = reverseInt;
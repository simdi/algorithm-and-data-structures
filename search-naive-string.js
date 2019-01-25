/*
* @author: Chisimdi Damian Ezeanieto
* @date: 25/01/2019
*/
function naiveStringSearch(longStr, str) {
    let count = 0;
    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (longStr[i + j] !== str[j]) break;
            if (j === str.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveStringSearch('lorie loled', 'lol'));
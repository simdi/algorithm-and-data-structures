/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/

// --- Directions
/*
    Given an array, count and return the maximum consecutive characters.
    --- Example
    consecutiveCharacter(['bxx', 'xxbx', 'x']) return 5 === word[0] + word[2] + word[5] ===  'bxxxxxbx';
*/

const consecutiveCharacter = (arr) => {
    if (arr.length === 0) return  0;
    // const str = arr.join('');
    // console.log('String', str);
    // let i = 0;
    // let counter = 0;
    // for(let j = 1; j < str.length; j++) {
    //     if (str[i] !== str[j]) {
    //         console.log(i, j);
    //         if ((j - i) > counter) {
    //             counter = j - i;
    //         }
    //         i = j;
    //     }
    // }

    // ['bxx', 'xxbx', 'x']
    // i
    // a b a a a a a b z
    //   j
    // counter = 1

    
    let i = 0;
    let counter = 0;
    for(let a = 0; a < arr.length; a++) {
        arr = arr.sort(function(a, b){return 0.5 - Math.random()});
        // arr = arr.sort(function(a, b){return a-b});
        const str = arr.join('');
        console.log('String', str);
        for(let j = 1; j < str.length; j++) {
            if (str[i] !== str[j]) {
                console.log(i, j);
                if ((j - i) > counter) {
                    counter = j - i;
                }
                i = j;
            }
        }
    }

    return counter;
};

module.exports = consecutiveCharacter;
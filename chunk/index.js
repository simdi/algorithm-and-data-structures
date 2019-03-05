/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/

const chunk = (arr, size) => {
    let result = [];
    let chunk = [];

    // Big (O) = N;
    for (let i = 0; i < arr.length; i++) {
        chunk.push(arr[i]);
        if (chunk.length === size) {
            result.push(chunk);
            chunk = [];
        }

        if ((arr.length-1 === i) && chunk.length > 0) {
            result.push(chunk);
        }
    }

    return result;
}

module.exports = chunk;
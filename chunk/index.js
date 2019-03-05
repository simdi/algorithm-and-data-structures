/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/

const chunk = (arr, size) => {
    const result = [];
    // let chunk = [];

    // Big (O) = N;
    // for (let i = 0; i < arr.length; i++) {
    //     chunk.push(arr[i]);
    //     if (chunk.length === size) {
    //         result.push(chunk);
    //         chunk = [];
    //     }

    //     if ((arr.length-1 === i) && chunk.length > 0) {
    //         result.push(chunk);
    //     }
    // }

    // Performant 
    // Big (O) = Log N;
    const recursion = (array) => {
        // Base case
        if (array.length === 0) return;
        result.push(array.splice(0, size));
        recursion(array);
    }
    recursion(arr);

    return result;
}

module.exports = chunk;
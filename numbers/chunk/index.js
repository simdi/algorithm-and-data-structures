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

    // Big (O) = N;
    // for (let item of arr) {
    //     const last = result[result.length - 1];

    //     if (!last || last.length === size) {
    //         result.push([item]);
    //     } else {
    //         last.push(item);
    //     }
    // }

    // Performant 
    // Big (O) = Log N;
    let i = 0;
    while (i < arr.length) {
        result.push(arr.slice(i, i + size));
        i += size;
    }

    // Performant 
    // Big (O) = Log N;
    // const recursion = (array) => {
    //     // Base case
    //     if (array.length === 0) return;
    //     result.push(array.splice(0, size));
    //     recursion(array);
    // }
    // recursion(arr);

    return result;
}

module.exports = chunk;
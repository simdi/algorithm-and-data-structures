/*
* @author: Chisimdi Damian Ezeanieto
* @date: 25/01/2019
*/

// Bubble sort
// Naive solution
// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 // Swap
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//             }
//         }
//     }
//     return arr;
// };
// Optimized solution one
// const bubbleSort = (arr) => {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < (i - 1); j++) {
//             console.log(arr[j], arr[j+1]);
//             if (arr[j] > arr[j+1]) {
//                 // Swap
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//             }
//         }
//         console.log('One pass complete');
//     }
//     return arr;
// };
// Optimized solution one
const bubbleSort = (arr) => {
    let noSwaps = false;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < (i - 1); j++) {
            console.log(arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                // Swap
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
        console.log('One pass complete');
    }
    return arr;
};

console.log(bubbleSort([34,1,3,5,7,8,9]));
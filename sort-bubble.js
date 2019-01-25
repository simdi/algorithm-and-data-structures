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
// Optimized solution
const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < (i - 1); j++) {
            console.log(arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                // Swap
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
        console.log('One pass complete');
    }
    return arr;
};

console.log(bubbleSort([3,1,5,7,2,8,34,9]));
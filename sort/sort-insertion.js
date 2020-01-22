/*
* @author: Chisimdi Damian Ezeanieto
* @date: 25/01/2019
*/

// Insertion sort
// Time complexity is O(n^2);
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i-1; j >= 0 && arr[j+1] < arr[j]; j--) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            }
        }
        console.log('Break');
    } 

    return arr;
};

console.log(insertionSort([34,5,11,2,3]));
/*
* @author: Chisimdi Damian Ezeanieto
* @date: 24/01/2019
*/
// This works best on a sorted array.
function binarySearch(arr, item) {
    arr = arr.sort((a,b) => a-b);
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    while (arr[middle] !== item && left <= right) {
        (arr[middle] > item) ? right = middle - 1 : left = middle + 1;
        middle = Math.floor((left + right) / 2);
    }

    return arr[middle] === item ? middle : -1;
}

console.log(binarySearch([2,5,6,7,8,23,45,87,100,86,37], 46));
// [2,5,6,7,8,23,87,100,86,37,45]
//  0          5                 11
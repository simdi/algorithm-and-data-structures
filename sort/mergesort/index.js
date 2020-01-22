/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const half = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, half));
    const right = mergeSort(arr.slice(half));
    return merge(left, right);
};

const merge = (arr1, arr2) => {
    const result = [];

    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        console.log(i, j);
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    console.log('Result', result);
    return result;
}

module.exports = mergeSort;
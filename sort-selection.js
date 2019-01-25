/*
* @author: Chisimdi Damian Ezeanieto
* @date: 25/01/2019
*/

// Selection sort
// Time complexity is O(n^2);
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[min] > arr[j]) min = j;
        }
        // Swap values if end of array.
        console.log(arr, arr[i], arr[min]);
        console.log('SWAP');
        if (i !== min) [arr[min], arr[i]] = [arr[i], arr[min]];
    } 

    return arr;
};

console.log(selectionSort([34,45,15,13,10,5,7,11,2,3]));
/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/

/*
    A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

    For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

    Write a function:

    function solution(N);

    that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

    For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

    Write an efficient algorithm for the following assumptions:

    N is an integer within the range [1..2,147,483,647].
*/

function binaryGap(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(!Number(N)) return 0;
    /*
    * This is not optimal
    */
    // Convert to binary.
    // N = N.toString(2);
    // let a = N.length - 2;
    // let b = N.length - 1;
    // let arr = N.split('');
    // let spliced;
    // let isComplete = true;
    // console.log('a', a, 'b', b);
    // console.log('arr', arr);
    // // Remove zero from the right
    // while(isComplete) {
    //     if (arr[b] === '1') {
    //         spliced = arr;
    //         isComplete = false;
    //         break;
    //     }
        
    //     if (arr[a] !== arr[b]) {
    //         // Splice array
    //         spliced = arr.splice(0, b);
    //         isComplete = false;
    //         break;
    //     }
    //     a--;
    //     b--;
    // }
    // console.log('Spliced', spliced);
    // N = spliced.join('');
    
    // let i = 0;
    // let counter = 0;
    // for (let j = 1; j < N.length; j++) {
    //     if (N[i] !== N[j]) {
    //         if ((j - i) > counter) {
    //             counter = j - i;
    //         }
    //         i = j;
    //     }
    // }
    // return counter;


    /*
    * This is optimal compared to the one above.
    */
    let bi = (N >>> 0).toString(2);
    let maxGap = 0;
    let i = 0;
    let j = 1;
    console.log('Binary', bi);
    // Use sliding window.
    // Keep an index of i and j.
    // Loop through the string,
    while(j <= bi.length) {
      if (bi[j] == 1 && 1 ==  bi[i]) {
        console.log(i, j);
        let tempMax = (j - i) - 1;
        maxGap = Math.max(tempMax, maxGap);
        console.log('Temp', maxGap);
        i = j;
        j++;
      } else if (bi[i] == 1 && bi[j] == 0) {
        j++;
      } else {
        i++;
        j++;
      }
    }
    // when you encounter a zero, start counting until you reach a one
    // reset the maxGap to the current if current is greater
    // return maxGap
    return maxGap;
};

module.exports = binaryGap;
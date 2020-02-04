/**
 * --- Examples
 *  step(2)
 *  '# '
 *  '##'
 *  step(3)
 *  '#  '
 *  '## '
 *  '###'
 *  step(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

const steps = (N, row = 0, stair = '') => {
  let i = 0;
  let j = 1;
  let result = '';

  // while(i <= N) {
  //   let stair = '\n';
  //   while(j <= N) {
  //     if (i <= j) {
  //       stair += '#'.repeat(j);
  //     } else {
  //       stair += ' '.repeat(N-j);
  //     }
  //     if (j < N) {
  //       stair += '\n';
  //     }
  //     j++;
  //   }
  //   result += stair;
  //   i++;
  // }

  // O(N)
  // while(i < N) {
  //   let stair = '';
  //   stair += '#'.repeat(i+1);
  //   stair += ' '.repeat(N-i-1);
  //   stair += '';
  //   result += stair;
  //   i++;
  // }

  // Try using recursion
  // if (N === row) return result;
  // if (stair.length === N) {
  //   result += stair;
  //   return steps(N, row + 1);
  // }

  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }

  // steps(N, row, stair);
} 

module.exports = steps;
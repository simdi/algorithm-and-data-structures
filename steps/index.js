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

const steps = (N) => {
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

  while(i < N) {
    let stair = '';
    stair += '#'.repeat(i+1);
    stair += ' '.repeat(N-i-1);
    stair += '';
    result += stair;
    i++;
  }
  return result;
} 

module.exports = steps;
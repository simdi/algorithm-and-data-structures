/*
* @author: Chisimdi Damian Ezeanieto
* @date: 24/06/2020
*/
// Find the longest common subsequence in a given array.
// Longest Common Subsequence
const lcs = (str1, str2) => {
  if (str1.length < 1 || str2.length < 1) return 0;

  // Naive solution
  // Pick the string with the smallest length;
  const result = [];

  let current = 0;
  // 'AGGTAB', 'GXTXAB'
  for(let i = 0; i < str1.length; i++) {
    let tempStr = "";

    for(let j = current; j < str2.length; j++) {
      let index = str2.indexOf(str1[i]);
      console.log('Cur', current, str1[i], str2[j], str1[i] === str2[j]);
      if (str1[i] === str2[j]) {
        console.log('Found', str1[i], index);
        tempStr += str1[i];
        current = index;
        console.log('TempStr', tempStr);
        break;
      } else {
        current++;
      }
    }
    result.push(tempStr);
  }

  console.log('Result', result);

  // str1 = str1.split('');
  // str2 = str2.split('');
  // let m = str1.length;
  // let n = str2.length;
  // let lcs = [];
  // console.log('LCS B', lcs);
  // for(let i = 0; i < m; i++) {
  //   for(let j = 0; j < n; j++) {
  //     if (i === 0 || j === 0) {
  //       lcs[i][j] = 0;
  //     } else if (str1[i-1] === str2[j-1]) {
  //       lcs[i][j] = lcs[i-1][j-1] + 1;
  //     } else {
  //       lcs[i][j] = Math.max(lcs[i-1][j], lcs[i][j-1]);
  //     }
  //   }
  // }
  // console.log('LCS E', lcs);
  // return lcs[m][n];
};

module.exports = lcs;
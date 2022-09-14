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


// users
// id  name  password  roleId
// 10  John  password  1
// 22  Doe   asdklasd  2
// 32  Ben   asdas     2

// Roles
// id  name
// 1   frontdesk
// 4   SuperAdmin
// 2   pharmacist
// 3   Diagnostic

// Patients
// id  name     email                age  status
// 2   Affleck  email@yahoo.com      23   active

// Pharmacy
// id itemname     cost
// 1  Paracetamol  300
// 2  Choloroquine  200

// Ward
// id name type cost
// 1  general all 300

// wardTransaction
// id patientId  wardId startDate endDate
// 1  2          1      today     tomorrow

// Billing
// id  patientId  type  pharmId ward_id lab_id cost action
// 1   2          ward  null    1       null   300  paid
// 2   2          pharm 3       null           2000 unpaid
// 3   2          pharm 1       null           2000 paid
// 4   2          pharm 2       null           2000 unpaid
// 5   2          pharm null    1              300  unpaid
// 5   2          pharm 1       null    null   300  unpaid
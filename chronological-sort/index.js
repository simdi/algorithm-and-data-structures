/*
* @author: Chisimdi Damian Ezeanieto
* @date: 18/06/2019
*/

const chronologicalSort = (arr, order = 'old') => {
  if (arr.length === 0) return false;
  return arr.sort((a, b) => {
    if(order === 'old') {
        return new Date(b).getTime() - new Date(a).getTime();
    } else {
        return new Date(a).getTime() - new Date(b).getTime();
    }
  });
}

module.exports = chronologicalSort;
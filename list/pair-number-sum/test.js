/*
* @author: Chisimdi Damian Ezeanieto
* @date: 22/01/2020
*/
const pairNumberSum = require('./index');
test('pairNumberSum is a function', () => {
    expect(typeof pairNumberSum).toEqual('function');
});
test('pairNumberSum [8,2,54,65,23,7,45] to give [2,7,8,23,45,54,65]', () => {
    expect(pairNumberSum([1, 9, 11, 13, 2, 3, 7, 5], 12)).toEqual([[1, 11], [9,3], [7, 5]]);
});
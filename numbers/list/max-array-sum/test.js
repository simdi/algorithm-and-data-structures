/*
* @author: Chisimdi Damian Ezeanieto
* @date: 01/04/2023
*/
const maxSubArraySum = require('./index');
test('maxSubArraySum is a function', () => {
    expect(typeof maxSubArraySum).toEqual('function');
});
test('maxSubArraySum [8,2,54,65,23,7,45] to give 109', () => {
    expect(maxSubArraySum([8,2,54,65,23,7,45], 2)).toEqual(119);
});
test('maxSubArraySum [1, 9, 11, 13, 2, 3, 7, 5] to give 33', () => {
    expect(maxSubArraySum([1, 9, 11, 13, 2, 3, 7, 5], 3)).toEqual(33);
});
test('maxSubArraySum [] to give null', () => {
    expect(maxSubArraySum([], 3)).toEqual(null);
});
test('maxSubArraySum [-10,-9,-3,-5,-100,-56,0] to give -17', () => {
    expect(maxSubArraySum([-10,-9,-3,-5,-100,-56,0], 3)).toEqual(-17);
});
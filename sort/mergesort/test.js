/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/
const mergeSort = require('./index');
test('mergeSort is a function', () => {
    expect(typeof mergeSort).toEqual('function');
});
test('mergeSort [8,2,54,65,23,7,45] to give [2,7,8,23,45,54,65]', () => {
    expect(mergeSort([8,2,54,65,23,7,45])).toEqual([2,7,8,23,45,54,65]);
});
test('mergeSort [100,50,23,60,70,38,659,34] to give [23,34,38,50,60,70,100,659]', () => {
    expect(mergeSort([100,50,23,60,70,38,659,34])).toEqual([23,34,38,50,60,70,100,659]);
});
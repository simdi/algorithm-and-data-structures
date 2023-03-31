/*
* @author: Chisimdi Damian Ezeanieto
* @date: 03/03/2019
*/
const chunk = require('./index');
test('chunk is a function', () => {
    expect(typeof chunk).toEqual('function');
});
test('chunk ([1,2,3,4], 2) to give [[1,2], [3,4]]', () => {
    expect(chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]]);
});
test('chunk ([1,2,3,4, 5], 2) to give [[1,2], [3,4], [5]]', () => {
    expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
});
test('chunk ([1,2,3,4,5,6,7,8],3) to give [[1,2,3],[4,5,6],[7,8]]',() => {
    expect(chunk([1,2,3,4,5,6,7,8],3)).toEqual([[1,2,3],[4,5,6],[7,8]]);
});
test('chunk ([1,2,3,4,5],4) to give [[1,2,3,4],[5]]',() => {
    expect(chunk([1,2,3,4,5],4)).toEqual([[1,2,3,4],[5]]);
});
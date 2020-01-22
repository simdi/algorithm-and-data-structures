/*
* @author: Chisimdi Damian Ezeanieto
* @date: 05/03/2019
*/
const anagram = require('./index');
test('anagram is a function', () => {
    expect(typeof anagram).toEqual('function');
});
test('anagram ([1,2,3,4], 2) to give [[1,2], [3,4]]', () => {
    expect(anagram([1,2,3,4], 2)).toEqual([[1,2],[3,4]]);
});
test('anagram ([1,2,3,4, 5], 2) to give [[1,2], [3,4], [5]]', () => {
    expect(anagram([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
});
test('anagram ([1,2,3,4,5,6,7,8],3) to give [[1,2],[3,4],[5,6],[7,8]]',() => {
    expect(anagram([1,2,3,4,5,6,7,8],3)).toEqual([[1,2,3],[4,5,6],[7,8]]);
});
test('anagram ([1,2,3,4,5],4) to give [[1,2,3,4],[5]]',() => {
    expect(anagram([1,2,3,4,5],4)).toEqual([[1,2,3,4],[5]]);
});
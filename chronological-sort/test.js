/*
* @author: Chisimdi Damian Ezeanieto
* @date: 18/06/2019
*/
const chronologicalSort = require('./index');
test('anagram is a function', () => {
    expect(typeof chronologicalSort).toEqual('function');
});
test('chronologicalSort to be sorted in chronological order', () => {
    expect(
        chronologicalSort(["2019-06-19T17:58:23.000Z", "2019-06-20T17:58:23.000Z", "2019-06-12T17:58:23.000Z", "2019-06-9T17:58:23.000Z"], 'old')
        ).toEqual(["2019-06-20T17:58:23.000Z","2019-06-19T17:58:23.000Z","2019-06-12T17:58:23.000Z", "2019-06-9T17:58:23.000Z"]);
});
test('chronologicalSort to be sorted in chronological order', () => {
    expect(
        chronologicalSort(["2019-06-19T17:58:23.000Z", "2019-06-20T17:58:23.000Z", "2019-06-12T17:58:23.000Z", "2019-06-09T17:58:23.000Z", "2019-06-19T17:58:23.000Z"], 'new')
        ).toEqual(["2019-06-09T17:58:23.000Z", "2019-06-12T17:58:23.000Z", "2019-06-19T17:58:23.000Z", "2019-06-19T17:58:23.000Z", "2019-06-20T17:58:23.000Z"]);
});
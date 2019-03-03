/*
* @author: Chisimdi Damian Ezeanieto
* @date: 03/03/2019
*/
const maxChar = require('./index');
test('maxChar is a function', () => {
    expect(typeof maxChar).toEqual('function');
});
test('maxChar Hello world to give l', () => {
    expect(maxChar('Hello world')).toEqual('l');
});
test('maxChar abcddddde to give d', () => {
    expect(maxChar('abcddddde')).toEqual('d');
});
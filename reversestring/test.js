/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/
const reverseString = require('./index');
test('ReverseString is a function', () => {
    expect(typeof reverseString).toEqual('function');
});
test('Reverse Hello to give olleH', () => {
    expect(reverseString('Hello')).toEqual('olleH');
});
test('Reverse Apple to give elppA', () => {
    expect(reverseString('Apple')).toEqual('elppA');
});
test(`Reverse I love Programming's way to give olleH`, () => {
    expect(reverseString(`I love Programming's way`)).toEqual(`yaw s'gnimmargorP evol I`);
});
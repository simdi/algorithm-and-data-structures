/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/
const palindrome = require('./index');
test('Palindrome is a function', () => {
    expect(typeof palindrome).toEqual('function');
});
test('Palindrome Hello to give false', () => {
    expect(palindrome('Hello')).toEqual(false);
});
test('Palindrome abba to give true', () => {
    expect(palindrome('abba')).toEqual(true);
});
test('Palindrome ababa to give true', () => {
    expect(palindrome('ababa')).toEqual(true);
});
test(`Palindrome '' to give undefined`, () => {
    expect(palindrome('')).toEqual(undefined);
});
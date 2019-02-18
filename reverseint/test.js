/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/
const reverseInt = require('./index');
test('reverseInt is a function', () => {
    expect(typeof reverseInt).toEqual('function');
});
test('reverseInt 15 to give 51', () => {
    expect(reverseInt(15)).toBe(51);
});
test('reverseInt 981 to give 189', () => {
    expect(reverseInt(981)).toBe(189);
});
test('reverseInt 500 to give 5', () => {
    expect(reverseInt(500)).toBe(5);
});
test(`reverseInt -15 to give -51`, () => {
    expect(reverseInt(-15)).toEqual(-51);
});
test(`reverseInt -90 to give -9`, () => {
    expect(reverseInt(-90)).toEqual(-9);
});
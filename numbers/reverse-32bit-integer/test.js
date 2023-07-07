/*
* @author: Chisimdi Damian Ezeanieto
* @date: 07/07/2023
*/
const reverse32BitInteger = require('./index');
test('reverse32BitInteger is a function', () => {
  expect(typeof reverse32BitInteger).toEqual('function');
});
test("reverse32BitInteger '1534236469' to give 0", () => {
  expect(reverse32BitInteger(1534236469)).toEqual(0);
});
test("reverse32BitInteger '123' to give 321", () => {
  expect(reverse32BitInteger(123)).toEqual(321);
});
test("reverse32BitInteger '-321' to give -123", () => {
  expect(reverse32BitInteger(-321)).toEqual(-123);
});
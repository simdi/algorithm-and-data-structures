/*
* @author: Chisimdi Damian Ezeanieto
* @date: 05/07/2023
*/
const getObjectPath = require('./index');
test('getObjectPath is a function', () => {
  expect(typeof getObjectPath).toEqual('function');
});
test("getObjectPath '{j: { a: { b: { c: 1, f: 2 }, g: 3 }, d: 2 }, a: { r: { f: 3}}}' to give 3", () => {
  expect(getObjectPath({j: { a: { b: { c: 1, f: 2 }, g: 3 }, d: 2 }, a: { r: { f: 3}}})).toEqual({
    'j.a.b.c': 1,
    'j.a.b.f': 2,
    'j.a.g': 3,
    'j.d': 2,
    'a.r.f': 3
  });
});
test("getObjectPath '{ a: { b: { c: 1, f: 2 }, g: 3 }, d: 2 }' to give 5", () => {
  expect(getObjectPath({ a: { b: { c: 1, f: 2 }, g: 3 }, d: 2 })).toEqual({
    'a.b.c': 1,
    'a.b.f': 2,
    'a.g': 3,
    d: 2
  });
});
test("getObjectPath '{ b: { c: 1, f: 2 }, g: 3 }' to give 6", () => {
  expect(getObjectPath({ b: { c: 1, f: 2 }, g: 3 })).toEqual({ 'b.c': 1, 'b.f': 2, g: 3 });
});

// {j: { a: { b: { c: 1, f: 2 }, g: 3 }, d: 2 }, a: { r: { f: 3}}} to give 


//  to give

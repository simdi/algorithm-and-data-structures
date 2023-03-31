/*
* @author: Chisimdi Damian Ezeanieto
* @date: 16/03/2023
*/
const findPath = require('./index');

const obj = {
  a: {
    b: {
      c: 12,
      j: false
    },
    k: null
  }
};

describe('Phone key pad match', () => {
  test('findPath function is defined', () => {
    expect(typeof findPath).toEqual('function');
  });
  test('Find Path for "a.b.d" === undefined', () => {
    expect(findPath(obj, 'a.b.d')).toEqual(undefined);
  });
  test('Find Path for "a.b.c" === 12', () => {
    expect(findPath(obj, 'a.b.c')).toEqual(12);
  });
  test('Find Path for "a.b.j" === false', () => {
    expect(findPath(obj, 'a.b.j')).toEqual(false);
  });
  test('Find Path for "a.b.j.k" === undefined', () => {
    expect(findPath(obj, 'a.b.j.k')).toEqual(undefined);
  });
  test('Find Path for "a.c" === undefined', () => {
    expect(findPath(obj, 'a.c')).toEqual(undefined);
  });
  test('Find Path for "a.b.c.d.e" === undefined', () => {
    expect(findPath(obj, 'a.b.c.d.e')).toEqual(undefined);
  });
  test('Find Path for "a.k" === null', () => {
    expect(findPath(obj, 'a.k')).toEqual(null);
  });
});

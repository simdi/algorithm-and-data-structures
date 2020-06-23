/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/
const fib = require('./index');

describe('Fibonacci Tests', () => {
  test('Fib function is defined', () => {
    expect(typeof fib).toEqual('function');
  });
  it('Calculate correct fib value for 1 === 1', () => {
    expect(fib(1)).toEqual(1);
  });
  it('Calculate correct fib value for 2 === 1', () => {
    expect(fib(2)).toEqual(1);
  });
  it('Calculate correct fib value for 5 === 5', () => {
    expect(fib(5)).toEqual(5);
  });
  test('Calculate correct fib value for 6 === 8', () => {
    expect(fib(6)).toEqual(8);
  });
  test('Calculate correct fib value for 50 === 12586269025', () => {
    expect(fib(50)).toEqual(12586269025);
  });
});

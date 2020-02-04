/*
* @author: Chisimdi Damian Ezeanieto
* @date: 04/02/2020
*/
const steps = require('./index');
test('steps is a function', () => {
  expect(typeof steps).toEqual('function');
});
test('steps(2) to give 1', () => {
  expect(steps(2)).toBe(`# ##`);
});
test('steps(3) to give 1', () => {
  expect(steps(3)).toBe(`#  ## ###`);
});
test('steps(4) to give 1', () => {
  expect(steps(4)).toBe(`#   ##  ### ####`);
});
/*
* @author: Chisimdi Damian Ezeanieto
* @date: 31/03/2023
*/
const zeroSum = require('./index');
test('zeroSum is a function', () => {
  expect(typeof zeroSum).toEqual('function');
});
test('zeroSum([-4,-3,-2,1,0,2,3,5]) to give [-3,3]', () => {
  expect(zeroSum([-4,-3,-2,1,0,2,3,5])).toEqual([-3,3]);
});
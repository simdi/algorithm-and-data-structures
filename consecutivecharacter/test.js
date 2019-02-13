/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/
const consecutivecharacter = require('./index');
test('consecutivecharacter is a function', () => {
    expect(typeof consecutivecharacter).toEqual('function');
});
test(`consecutivecharacter ['bxx', 'xxbx', 'x'] to give 5`, () => {
    expect(consecutivecharacter(['bxx', 'xxbx', 'x'])).toEqual(5);
});
test(`consecutivecharacter ['0001000','00100','0000'] to == 9`, () => {
    expect(consecutivecharacter(['0001000','00100','0000'])).toEqual(9);
});
test(`consecutivecharacter ['abaaa', 'aaa', 'aab'] to == 8`, () => {
    expect(consecutivecharacter(['abaaa', 'aaa', 'aab'])).toEqual(8);
});
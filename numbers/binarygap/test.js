/*
* @author: Chisimdi Damian Ezeanieto
* @date: 12/02/2019
*/
const binaryGap = require('./index');
test('binaryGap is a function', () => {
    expect(typeof binaryGap).toEqual('function');
});
test(`binaryGap 1041 to give 5`, () => {
    expect(binaryGap(1041)).toEqual(5);
});
test(`binaryGap 15 to == 0`, () => {
    expect(binaryGap(15)).toEqual(0);
});
test(`binaryGap 32 to == 0`, () => {
    expect(binaryGap(32)).toEqual(0);
});
test(`binaryGap 20 to == 1`, () => {
    expect(binaryGap(20)).toEqual(1);
});
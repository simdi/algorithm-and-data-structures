const fib = require('./index');

test('Fib function is defined', _=> {
    expect(typeof fib).toEqual('function');
});
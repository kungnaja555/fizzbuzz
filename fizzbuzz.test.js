const fizzbuzz = require('./fizzbuzz')

test('test 1', () => {
    expect(fizzbuzz(1)).toBe(1);
});

test('test 2', () => {
    expect(fizzbuzz(3)).toBe("fizz");
});

test('test 3', () => {
    expect(fizzbuzz(5)).toBe("buzz");
});

test('test 4', () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
});

test('test 5', () => {
    expect(fizzbuzz(6)).toBe("fizz");
});

test('test 6', () => {
    expect(fizzbuzz(10)).toBe("buzz");
});

test('test 7', () => {
    expect(fizzbuzz(0)).toBe("false");
});

test('test 8', () => {
    expect(fizzbuzz(101)).toBe("false");
});

test('test 9', () => {
    expect(fizzbuzz(11)).toBe(11);
});
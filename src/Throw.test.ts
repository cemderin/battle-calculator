import Throw from './Throw';

test('Test Throw class', () => {
    const testThrow = new Throw();
    expect(testThrow).toBeTruthy();
});

test('Test throw roll', () => {
    const testThrow = new Throw();
    expect(testThrow.roll(1)).toBe(1);
})
import Hit from './Hit';
import Model from '../Model';

test('Test Hit class', () => {
    const testThrow = new Hit();
    expect(testThrow).toBeTruthy();
});

test('Test hit roll', () => {
    const testThrow = new Hit();
    testThrow.attacker = new Model();
    testThrow.attacker.weaponskill = 3;

    expect(testThrow.roll(1)).toBe(1/6*4);
});
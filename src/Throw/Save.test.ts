import Save from './Save';
import Model from '../Model';

test('Test Save class', () => {
    const testThrow = new Save();
    expect(testThrow).toBeTruthy();
});

test('Test save roll', () => {
    const testThrow = new Save();
    testThrow.defender = new Model();
    testThrow.attacker = new Model();
    testThrow.defender.save = 3;

    expect(testThrow.roll(1)).toBe(1/6*2);
})

test('Test save roll with armour pircing', () => {
    const testThrow = new Save();
    testThrow.defender = new Model();
    testThrow.attacker = new Model();
    testThrow.attacker.weapon.armorPiercing = -2;
    testThrow.defender.save = 3;

    expect(testThrow.roll(1)).toBe(1/6*4);
});

test('Test save roll with armour pircing above dice faces', () => {
    const testThrow = new Save();
    testThrow.defender = new Model();
    testThrow.attacker = new Model();
    testThrow.attacker.weapon.armorPiercing = -20;
    testThrow.defender.save = 3;

    expect(testThrow.roll(1)).toBe(1/6*5);
});
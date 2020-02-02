import Wound from './Wound';
import Model from '../Model';
import Weapon from '../Weapon'

test('Test Wound class', () => {
    const testModel = new Wound();
    expect(testModel).toBeTruthy();
});

test('Test wound roll for equal strength and toughness', () => {
    const testThrow = new Wound();
    testThrow.attacker = new Model();
    testThrow.attacker.weapon = new Weapon();
    testThrow.attacker.weapon.strength = 4;
    
    testThrow.defender = new Model();
    testThrow.defender.toughness = 4;

    expect(testThrow.roll(1)).toBe(1/6*3);
});

test('Test wound roll for lower strength', () => {
    const testThrow = new Wound();
    testThrow.attacker = new Model();
    testThrow.attacker.weapon = new Weapon();
    testThrow.attacker.weapon.strength = 4;
    
    testThrow.defender = new Model();
    testThrow.defender.toughness = 5;

    expect(testThrow.roll(1)).toBe(1/6*2);
});

test('Test wound roll for higher strength', () => {
    const testThrow = new Wound();
    testThrow.attacker = new Model();
    testThrow.attacker.weapon = new Weapon();
    testThrow.attacker.weapon.strength = 5;
    
    testThrow.defender = new Model();
    testThrow.defender.toughness = 4;

    expect(testThrow.roll(1)).toBe(1/6*4);
});

test('Test wound roll for two time higher strength', () => {
    const testThrow = new Wound();
    testThrow.attacker = new Model();
    testThrow.attacker.weapon = new Weapon();
    testThrow.attacker.weapon.strength = 6;
    
    testThrow.defender = new Model();
    testThrow.defender.toughness = 3;

    expect(testThrow.roll(1)).toBe(1/6*5);
});
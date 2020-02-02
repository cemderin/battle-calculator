import Weapon from './Weapon';

test('Test Weapon class', () => {
    const testWeapon = new Weapon();
    expect(testWeapon).toBeTruthy();
});
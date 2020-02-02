import {Phase, Model, Weapon, Throw, Logger} from './index';

test('Test exports', () => {
    expect(Phase).toBeTruthy();
    expect(Model).toBeTruthy();
    expect(Weapon).toBeTruthy();
    expect(Throw).toBeTruthy();
    expect(Logger).toBeTruthy();
});
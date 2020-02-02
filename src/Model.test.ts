import Model from './Model';

test('Test Model class', () => {
    const testModel = new Model();
    expect(testModel).toBeTruthy();
});
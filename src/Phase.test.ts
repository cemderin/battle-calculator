import Phase from './Phase';

test('Test Phase class', () => {
    const testPhase = new Phase();
    expect(testPhase).toBeTruthy();
});

test('Test phase handling', () => {
    const testPhase = new Phase();
    expect(testPhase.handle()).toBeTruthy(); 
});
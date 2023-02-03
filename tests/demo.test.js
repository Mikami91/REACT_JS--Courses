describe('FIRST TESTS', () => {
  test('Test 01', () => {
    if (1 === 0) {
      throw new Error('Found an error');
    }
  });

  test('Test 02', () => {
    // Init
    const msg1 = 'Dark Souls';

    // Stimulate
    const msg2 = msg1.trim();

    // Expected
    expect(msg1).toBe(msg2);
  });
});

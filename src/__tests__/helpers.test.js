const mock = () => 1;

describe('Testing', () => {
  it('Test is working', () => {
    return expect(mock()).toBe(1);
  });
});

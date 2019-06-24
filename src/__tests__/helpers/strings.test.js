import { truncate, toCurrency } from '../../helpers/Strings';

describe('truncate()', () => {
  it('Should truncate strings bigger than 5 characters', () => {
    return expect(
      truncate('Lorem ipsum ipsum lorem ipsum lorem ipsum', 5)
    ).toBe('Lorem...');
  });

  it('Should not truncate strings lesser than 10 characters', () => {
    return expect(truncate('Lorem', 10)).toBe('Lorem');
  });
});

describe('toCurrency()', () => {
  it('Should format 1000 cents into 1 BRL', () => {
    return expect(toCurrency(1000)).toBe('R$ 10,00');
  });
});

import { parseBooks } from '../../../store/ducks/books/selectors';
import { sampleBook, sampleBookParsed } from '../../../__mocks__/sample';


describe('Book parser', () => {
  test('Handle an default sample response from API', () => {
    expect(parseBooks(sampleBook)).toEqual(sampleBookParsed);
  });

  test('Handle an book without image response from API', () => {
    sampleBook.volumeInfo.imageLinks = null;
    sampleBookParsed.image = 'http://i.imgur.com/sJ3CT4V.gif';
    expect(parseBooks(sampleBook)).toEqual(sampleBookParsed);
  });
});

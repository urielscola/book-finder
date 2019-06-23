import { combineReducers } from 'redux';

import books from './books';
import filters from './filters';
import favorites from './favorites';

export default combineReducers({
  books,
  filters,
  favorites
});

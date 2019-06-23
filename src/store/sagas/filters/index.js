import { all, takeEvery, put } from 'redux-saga/effects';

import { Types as FiltersTypes } from '../../ducks/filters';
import { Creators as BooksActions } from '../../ducks/books';

export function* setSearchTerm({ payload }) {
  yield put(BooksActions.getBooks(payload));
}

export default function* filtersSaga() {
  yield all([takeEvery(FiltersTypes.SET_SEARCH_TERM, setSearchTerm)]);
}

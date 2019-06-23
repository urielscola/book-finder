import { all } from 'redux-saga/effects';

import booksSaga from './books';
import filtersSaga from './filters';
import favoritesSaga from './favorites';

export default function* rootSaga() {
  yield all([filtersSaga(), booksSaga(), favoritesSaga()]);
}

import { all } from 'redux-saga/effects';

import booksSaga from './books';
import filtersSaga from './filters';

export default function* rootSaga() {
  yield all([filtersSaga(), booksSaga()]);
}

import { all, takeLatest, call, put } from 'redux-saga/effects';
import { BooksService } from '../../../services';

import {
  Creators as BooksActions,
  Types as BooksTypes
} from '../../ducks/books';

export function* getBooks({ payload }) {
  try {
    const { data } = yield call(BooksService.list, payload);
    if (data.totalItems) {
      yield put(BooksActions.getBooksSuccess(data));
    }
  } catch (err) {
    yield put(BooksActions.getBooksFailure);
  }
}

export default function* booksSaga() {
  yield all([takeLatest(BooksTypes.GET_BOOKS, getBooks)]);
}

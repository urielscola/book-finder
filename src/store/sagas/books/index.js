import { all, takeLatest, call, put } from 'redux-saga/effects';
import { BooksService } from '../../../services';

import {
  Creators as BooksActions,
  Types as BooksTypes
} from '../../ducks/books';

export function* getBooks({ payload }) {
  try {
    console.log({ payload });
    const { data } = yield call(BooksService.list, { q: payload });
    const items = data.totalItems ? data : { items: [] };
    console.log({ items });
    yield put(BooksActions.getBooksSuccess(items));
  } catch (err) {
    yield put(BooksActions.getBooksFailure);
  }
}

export function* loadMoreBooks({ payload: { title, step, page } }) {
  try {
    const nextPage = page + 1;
    const startIndex = step * nextPage;
    const { data } = yield call(BooksService.list, { q: title, startIndex });
    if (data.items) {
      yield put(
        BooksActions.loadMoreBooksSuccess({ items: data.items, page: nextPage })
      );
    } else {
      yield put(BooksActions.loadMoreBooksFinish());
    }
  } catch (err) {
    yield put(BooksActions.getBooksFailure);
  }
}

export default function* booksSaga() {
  yield all([
    takeLatest(BooksTypes.GET_BOOKS, getBooks),
    takeLatest(BooksTypes.LOAD_MORE_BOOKS, loadMoreBooks)
  ]);
}

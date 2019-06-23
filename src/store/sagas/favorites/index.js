import { all, takeEvery, put, select } from 'redux-saga/effects';

import {
  Types as FavoritesTypes,
  Creators as FavoritesActions
} from '../../ducks/favorites';

const localStorageKey = 'favorites';

export function* rehydrateFavorites() {
  const favorites = JSON.parse(localStorage.getItem(localStorageKey)) || [];
  yield put(FavoritesActions.setFavorites(favorites));
}

export function* updateLocalStorage() {
  const { list } = yield select(state => state.favorites);
  localStorage.setItem(localStorageKey, JSON.stringify(list));
}

export default function* filtersSaga() {
  yield all([
    takeEvery(FavoritesTypes.ADD_FAVORITE, updateLocalStorage),
    takeEvery(FavoritesTypes.REMOVE_FAVORITE, updateLocalStorage),
    takeEvery(FavoritesTypes.GET_FAVORITES, rehydrateFavorites)
  ]);
}

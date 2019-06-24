import reducer, {
  INITIAL_STATE,
  Types as FavoritesTypes
} from '../../../store/ducks/books';

describe('Books Reducer', () => {
  test('Handle initial state', () => {
    expect(reducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });

  test('Handle GET_BOOKS action', () => {
    const action = {
      type: FavoritesTypes.GET_BOOKS
    };

    const output = {
      list: [],
      page: 1,
      step: 10,
      loading: true,
      error: false,
      detail: null,
      lastItem: false
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(output);
  });

  test('Handle GET_BOOKS_SUCCESS action', () => {
    const action = {
      type: FavoritesTypes.GET_BOOKS_SUCCESS,
      payload: { items: [{ id: 1}] }
    };

    const output = {
      list: [{ id: 1}],
      page: 1,
      step: 10,
      loading: false,
      error: false,
      detail: null,
      lastItem: false
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(output);
  });

  test('Handle GET_BOOKS_FAILURE action', () => {
    const action = {
      type: FavoritesTypes.GET_BOOKS_FAILURE
    };

    const output = {
      list: [],
      page: 1,
      step: 10,
      loading: false,
      error: true,
      detail: null,
      lastItem: false
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(output);
  });

  test('Handle LOAD_MORE_BOOKS_SUCCESS action', () => {
    const action = {
      type: FavoritesTypes.LOAD_MORE_BOOKS_SUCCESS,
      payload: { items: [{ id: 1 }], page: 3}
    };

    const output = {
      list: [{ id: 1 }],
      page: 3,
      step: 10,
      loading: false,
      error: false,
      detail: null,
      lastItem: false
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(output);
  });

  test('Handle LOAD_MORE_BOOKS_FINISH action', () => {
    const action = {
      type: FavoritesTypes.LOAD_MORE_BOOKS_FINISH
    };

    const output = {
      list: [],
      page: 1,
      step: 10,
      loading: false,
      error: false,
      detail: null,
      lastItem: true
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(output);
  });

  test('Handle GET_BOOK_DETAIL action', () => {
    const action = {
      type: FavoritesTypes.GET_BOOK_DETAIL
    };

    const output = {
      list: [],
      page: 1,
      step: 10,
      loading: true,
      error: false,
      detail: null,
      lastItem: false
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(output);
  });

  test('Handle GET_BOOK_DETAIL_SUCCESS action', () => {
    const action = {
      type: FavoritesTypes.GET_BOOK_DETAIL_SUCCESS,
      payload: { id: 1}
    };

    const output = {
      list: [],
      page: 1,
      step: 10,
      loading: false,
      error: false,
      detail: { id: 1},
      lastItem: false
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(output);
  });

  test('Handle GET_BOOK_DETAIL_FAILURE action', () => {
    const action = {
      type: FavoritesTypes.GET_BOOK_DETAIL_FAILURE
    };

    const output = {
      list: [],
      page: 1,
      step: 10,
      loading: false,
      error: true,
      detail: null,
      lastItem: false
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(output);
  });

  test('Handle SET_BOOK_DETAIL action', () => {
    const action = {
      type: FavoritesTypes.SET_BOOK_DETAIL,
      payload: { id: 1}
    };

    const output = {
      list: [],
      page: 1,
      step: 10,
      loading: false,
      error: false,
      detail: { id: 1},
      lastItem: false
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(output);
  });
});

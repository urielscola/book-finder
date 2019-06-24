export const Types = {
  GET_BOOKS: '@books/GET_BOOKS',
  GET_BOOKS_SUCCESS: '@books/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: '@books/GET_BOOKS_FAILURE',
  LOAD_MORE_BOOKS: '@books/LOAD_MORE_BOOKS',
  LOAD_MORE_BOOKS_SUCCESS: '@books/LOAD_MORE_BOOKS_SUCCESS',
  LOAD_MORE_BOOKS_FINISH: '@books/LOAD_MORE_BOOKS_FINISH',
  GET_BOOK_DETAIL: '@books/GET_BOOK_DETAIL',
  GET_BOOK_DETAIL_SUCCESS: '@books/GET_BOOK_DETAIL_SUCCESS',
  GET_BOOK_DETAIL_FAILURE: '@books/GET_BOOK_DETAIL_FAILURE',
  SET_BOOK_DETAIL: '@books/SET_BOOK_DETAIL'
};

export const Creators = {
  getBooks: payload => ({ type: Types.GET_BOOKS, payload }),
  getBooksSuccess: payload => ({
    type: Types.GET_BOOKS_SUCCESS,
    payload
  }),
  getBooksFailure: () => ({ type: Types.GET_BOOKS_FAILURE }),
  loadMoreBooks: payload => ({ type: Types.LOAD_MORE_BOOKS, payload }),
  loadMoreBooksSuccess: payload => ({
    type: Types.LOAD_MORE_BOOKS_SUCCESS,
    payload
  }),
  loadMoreBooksFinish: () => ({ type: Types.LOAD_MORE_BOOKS_FINISH }),
  getBookDetail: payload => ({ type: Types.GET_BOOK_DETAIL, payload }),
  getBookDetailSuccess: payload => ({
    type: Types.GET_BOOK_DETAIL_SUCCESS,
    payload
  }),
  getBookDetailsFailure: () => ({ type: Types.GET_BOOK_DETAILS_FAILURE }),
  setBookDetail: payload => ({ type: Types.SET_BOOK_DETAIL, payload })
};

export const INITIAL_STATE = {
  list: [],
  page: 1,
  step: 10,
  loading: false,
  error: false,
  detail: null,
  lastItem: false
};

export default function books(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.GET_BOOKS:
      return { ...state, loading: true, lastItem: false };
    case Types.GET_BOOKS_SUCCESS:
      return {
        ...state,
        list: payload.items,
        loading: false
      };
    case Types.GET_BOOKS_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.LOAD_MORE_BOOKS_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...payload.items],
        page: payload.page
      };
    case Types.LOAD_MORE_BOOKS_FINISH:
      return { ...state, lastItem: true };
    case Types.GET_BOOK_DETAIL:
      return { ...state, loading: true };
    case Types.GET_BOOK_DETAIL_SUCCESS:
      return {
        ...state,
        detail: payload,
        loading: false
      };
    case Types.GET_BOOK_DETAIL_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.SET_BOOK_DETAIL:
      return { ...state, detail: payload };
    default:
      return state;
  }
}

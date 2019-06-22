export const Types = {
  GET_BOOKS: '@books/GET_BOOKS',
  GET_BOOKS_SUCCESS: '@books/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: '@books/GET_BOOKS_FAILURE'
  /*   GET_BOOK_DETAIL: '@books/GET_BOOK_DETAIL',
  GET_BOOK_DETAIL_SUCCESS: '@books/GET_BOOK_DETAIL_SUCCESS',
  GET_BOOK_DETAIL_FAILURE: '@books/GET_BOOK_DETAIL_FAILURE',
  SET_BOOK_DETAIL: '@books/SET_BOOK_DETAIL',
  REMOVE_BOOK_DETAIL: '@books/REMOVE_BOOK_DETAIL' */
};

export const Creators = {
  getBooks: payload => ({ type: Types.GET_BOOKS, payload }),
  getBooksSuccess: payload => ({
    type: Types.GET_BOOKS_SUCCESS,
    payload
  }),
  getBooksFailure: () => ({ type: Types.GET_BOOKS_FAILURE })
};

const INITIAL_STATE = {
  list: [],
  loading: false,
  error: false,
  detail: null
};

export default function books(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.GET_BOOKS:
      return { ...state, loading: true };
    case Types.GET_BOOKS_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...payload.items],
        loading: false
      };
    case Types.GET_BOOKS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

/* {
  favorites: [],  
  filter: {
    searchTerm: '',
    activeCategory: '',
  },
} */

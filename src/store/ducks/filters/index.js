export const Types = {
  SET_SEARCH_TERM: '@filters/SET_SEARCH_TERM',
};

export const Creators = {
  setSearchTerm: payload => ({ type: Types.SET_SEARCH_TERM, payload })
};

export const INITIAL_STATE = {
  searchTerm: ''
};

export default function filters(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.SET_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
}

export const Types = {
  SET_SEARCH_TERM: '@filters/SET_SEARCH_TERM',
  SET_ACTIVE_CATEGORY: '@filters/SET_ACTIVE/CATEGORY'
};

export const Creators = {
  setSearchTerm: payload => ({ type: Types.SET_SEARCH_TERM, payload }),
  setActiveCategory: payload => ({ type: Types.SET_ACTIVE_CATEGORY, payload })
};

const INITIAL_STATE = {
  searchTerm: '',
  activeCategory: ''
};

export default function filters(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.SET_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case Types.SET_ACTIVE_CATEGORY:
      return { ...state, activeCategory: payload };
    default:
      return state;
  }
}

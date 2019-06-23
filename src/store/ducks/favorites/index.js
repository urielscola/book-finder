export const Types = {
  ADD_FAVORITE: '@favorites/ADD_FAVORITE',
  REMOVE_FAVORITE: '@favorites/REMOVE_FAVORITE',
  SET_FAVORITES: '@favorites/SET_FAVORITES',
  GET_FAVORITES: '@favorites/GET_FAVORITES'
};

export const Creators = {
  addFavorite: payload => ({ type: Types.ADD_FAVORITE, payload }),
  removeFavorite: payload => ({ type: Types.REMOVE_FAVORITE, payload }),
  getFavorites: () => ({ type: Types.GET_FAVORITES }),
  setFavorites: payload => ({ type: Types.SET_FAVORITES, payload })
};

const INITIAL_STATE = {
  list: []
};

export default function favorites(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.ADD_FAVORITE:
      return { ...state, list: [...state.list, payload] };
    case Types.REMOVE_FAVORITE:
      return {
        ...state,
        list: state.list.filter(favorite => favorite.id !== payload)
      };
    case Types.SET_FAVORITES:
      return { ...state, list: payload };
    default:
      return state;
  }
}

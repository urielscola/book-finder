import reducer, {
  INITIAL_STATE,
  Types as FavoritesTypes
} from '../../../store/ducks/favorites';

describe('Favorites Reducer', () => {
  test('Handle initial state', () => {
    expect(reducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });

  test('Handle ADD_FAVORITE action', () => {
    const action = {
      type: FavoritesTypes.ADD_FAVORITE,
      payload: { id: 1 }
    };

    const output = {
      list: [{ id: 1 }]
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(output);
  });

  test('Handle REMOVE_FAVORITE action', () => {
    const initialstate = {
      list: [{ id: 1 }]
    };
    const action = {
      type: FavoritesTypes.REMOVE_FAVORITE,
      payload: 1
    };

    const output = {
      list: []
    };

    expect(reducer(initialstate, action)).toEqual(output);
  });

  test('Handle SET_FAVORITES action', () => {
    const action = {
      type: FavoritesTypes.SET_FAVORITES,
      payload: [{ id: 1 }]
    };

    const output = {
      list: [{ id: 1 }]
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(output);
  });
});

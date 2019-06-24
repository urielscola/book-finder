import reducer, {
  INITIAL_STATE,
  Types as FavoritesTypes
} from '../../../store/ducks/filters';

describe('Filters Reducer', () => {
  test('Handle initial state', () => {
    expect(reducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });

  test('Handle SET_SEARCH_TERM action', () => {
    const action = {
      type: FavoritesTypes.SET_SEARCH_TERM,
      payload: "reactjs"
    };

    const output = {
      searchTerm: "reactjs"
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(output);
  });
});

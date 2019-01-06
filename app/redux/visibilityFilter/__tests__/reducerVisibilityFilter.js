// @flow

import { setVisibilityFilter } from '../actionVisibilityFilter';
import visibilityFilter from '../reducerVisibilityFilter';

describe('visibilityFilter', () => {
  it('should handle initial state', () => {
    expect(visibilityFilter(undefined, { type: '@@INIT' })).toEqual('SHOW_ALL');
  });

  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(
      visibilityFilter(undefined, setVisibilityFilter('SHOW_ACTIVE')),
    ).toEqual('SHOW_ACTIVE');
  });
});

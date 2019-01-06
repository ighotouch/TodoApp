// @flow

import reducer from '../combineReducers';

describe('root reducer', () => {
  it('should combine all reducers', () => {
    expect(reducer({}, { type: '@@INIT' })).toEqual({
      todos: [],
      visibilityFilter: 'SHOW_ALL',
    });
  });
});

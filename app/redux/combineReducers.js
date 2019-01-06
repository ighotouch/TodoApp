// @flow
import { combineReducers } from 'redux';

import todos from './todos/reducerTodos';
import visibilityFilter from './visibilityFilter/reducerVisibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter,
});

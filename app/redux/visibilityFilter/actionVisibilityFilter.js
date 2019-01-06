// @flow

import { SET_VISIBILITY_FILTER } from './reducerVisibilityFilter';

export const setVisibilityFilter = (
  filter: VisibilityFilter,
): VisibilityFilterAction => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export default setVisibilityFilter;

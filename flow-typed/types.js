// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

export type Id = number;

export type Text = string;

export type Todo = {
  +id: Id,
  +text: Text,
  +completed: boolean,
};

export type Todos = Array<Todo>;

export type TodosState = {
  +todos: Todos,
};

export type TodosAction =
  | { type: 'ADD_TODO', +id: Id, +text: Text }
  | { type: 'TOGGLE_TODO', +id: Id };

export type VisibilityFilter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

export type VisibilityFilterState = {
  +visibilityFilter: VisibilityFilter,
};

export type VisibilityFilterAction = {
  type: 'SET_VISIBILITY_FILTER',
  +filter: VisibilityFilter,
};

export type ReduxInitAction = { type: '@@INIT' };

export type State = TodosState & VisibilityFilterState;

export type Action = ReduxInitAction | TodosAction | VisibilityFilterAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;

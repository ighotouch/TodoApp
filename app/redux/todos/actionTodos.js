// @flow
import { ADD_TODO, TOGGLE_TODO } from './reducerTodos';

let nextTodoId: Id = 0;

export const addTodo = (text: Text): TodosAction => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id: Id): TodosAction => ({
  type: TOGGLE_TODO,
  id,
});

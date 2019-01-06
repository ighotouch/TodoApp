// @flow

import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import { App } from './App';

const store: Store = createStore();

export const Todo = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Todo;

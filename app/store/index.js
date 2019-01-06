import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../redux/combineReducers';

const log = createLogger({ diff: true, collapsed: true });

export default (initialState = {}) => {
  const middleware = [thunk, log];
  const enhancers = [];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
    ...enhancers,
  );

  return store;
};

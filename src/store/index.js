import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { cloneDeep } from 'lodash';
import rootReducer from '../reducers';
import { initialState as counterInitialState } from '../reducers/counter';

export const history = createBrowserHistory();

/* eslint-disable no-underscore-dangle */
const reduxDevTools =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  function noop(f) {
    return f;
  };
/* eslint-disable no-underscore-dangle */
export const createInitialState = siteConfig => {
  const state = {
    counter: cloneDeep(counterInitialState)
  };
  // handle site-config if present
  if (siteConfig) {
    return state;
  }
  return state;
};

export default function(initialState) {
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(
      applyMiddleware(routerMiddleware(history), thunkMiddleware),
      reduxDevTools
    )
  );
}

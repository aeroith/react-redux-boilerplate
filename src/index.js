import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import createStore, { createInitialState } from './store';
import App from './containers/App';

const renderApp = () => {
  const initialState = createInitialState();
  const store = createStore(initialState);
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
  );
};

renderApp();

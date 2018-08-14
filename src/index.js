import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import createStore, { history, createInitialState } from './store';
import App from './containers/App';

const renderApp = () => {
  const initialState = createInitialState();
  const store = createStore(initialState);
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp();

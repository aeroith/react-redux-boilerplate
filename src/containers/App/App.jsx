import React from 'react';
import { hot } from 'react-hot-loader';
import Counter from 'containers/Counter';
import '../../assets/stylesheets/main.scss';
import './app.scss';

const App = () => (
  <div className="applicationMain">
    <Counter />
  </div>
);

export default hot(module)(App);

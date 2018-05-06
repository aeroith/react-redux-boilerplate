import React from 'react';
import { hot } from 'react-hot-loader';
import Counter from 'containers/Counter';
import FitMan from 'images/fitman.svg';
import '../../assets/stylesheets/main.scss';
import styles from './app.scss';

const App = () => (
  <div className={styles.applicationMain}>
    <img className={styles.image} src={FitMan} alt="A fit person" />
    <Counter />
  </div>
);

export default hot(module)(App);

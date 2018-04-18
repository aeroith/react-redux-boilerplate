import React from 'react';
import PropTypes from 'prop-types';
import styles from './counter.scss';

const Counter = ({
  increment, decrement, incrementAsync, counter,
}) => (
  <div className={styles.wrapper}>
    <p className={styles.count}>{counter}</p>
    <button onClick={increment}>INCREMENT</button>
    <button onClick={decrement}>DECREMENT</button>
    <button onClick={incrementAsync}>INCREMENT ASYNC</button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
};

export default Counter;

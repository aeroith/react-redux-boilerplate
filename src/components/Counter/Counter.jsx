import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './counter.scss';

const Counter = ({
  increment, decrement, incrementAsync, counter,
}) => (
  <div className={styles.wrapper}>
    <p className={styles.count}>{counter}</p>
    <div className={styles.buttonContainer}>
      <Button className={styles.counterButton} type="primary" onClick={increment}>increment</Button>
      <Button className={styles.counterButton} type="primary" onClick={decrement}>decrement</Button>
      <Button className={styles.counterButton} type="primary" onClick={incrementAsync}>increment async</Button>
    </div>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
};

export default Counter;

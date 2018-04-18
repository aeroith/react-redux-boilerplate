import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionCreators as counterActions } from 'reducers/counter';
import styles from './counter.scss';

@connect(
  state => ({
    counter: state.counter.counter,
  }),
  dispatch => ({
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
    incrementAsync: () => dispatch(counterActions.incrementAsync()),
  }),
)
export default class Counter extends React.PureComponent {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <p className={styles.count}>{this.props.counter}</p>
        <button onClick={this.props.increment}>INCREMENT</button>
        <button onClick={this.props.decrement}>DECREMENT</button>
        <button onClick={this.props.incrementAsync}>INCREMENT ASYNC</button>
      </div>
    );
  }
}

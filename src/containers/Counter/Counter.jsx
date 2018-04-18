import React from 'react';
import { connect } from 'react-redux';
import Counter from 'components/Counter';
import { actionCreators as counterActions } from 'reducers/counter';
import injectProps from 'hocs/injectProps';

@injectProps({ hasPropInjected: true })
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
export default class CounterContainer extends React.PureComponent {
  render() {
    return (
      <Counter {...this.props} />
    );
  }
}

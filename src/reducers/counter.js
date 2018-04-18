import createReducer from './createReducer';

const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  INCREMENT_ASYNC: 'INCREMENT_ASYNC',
};

export const initialState = {
  counter: 0,
};

const actionsMap = {
  [actions.INCREMENT]: state => ({ ...state, counter: state.counter + 1 }),
  [actions.INCREMENT_ASYNC]: state => ({ ...state, counter: state.counter + 1 }),
  [actions.DECREMENT]: state =>
    ({ ...state, counter: state.counter === 0 ? 0 : state.counter - 1 }),
  [actions.RESET]: state => ({ ...state, ...initialState }),
};

const increment = () => ({ type: actions.INCREMENT });
const decrement = () => ({ type: actions.DECREMENT });
const incrementAsync = () => dispatch =>
  setTimeout(() => dispatch({ type: actions.INCREMENT_ASYNC }), 400);

export const actionCreators = {
  increment,
  decrement,
  incrementAsync,
};

export default createReducer(initialState, actionsMap);

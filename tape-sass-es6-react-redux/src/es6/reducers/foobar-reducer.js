import { CLICKED_FOO, CLICKED_BAR } from '../actions/action-types';

// Default values
const initialState = {
  a: 0,
  b: 0,
  c: 0,
};

// New values
function getNewState(state) {
  return {
    a: state.a + 10,
    b: state.b + 10,
    c: state.c + 10,
  };
}

const fooBarReducer = function (state = initialState, action) {
  switch (action.type) {
    case CLICKED_FOO:
      return Object.assign({}, getNewState(state));
    case CLICKED_BAR:
      return Object.assign({}, getNewState(state));
    default: break;
  }
  return state;
};

export default fooBarReducer;

import * as types from '../actions/action-types';

const initialState = {
  user: {
    fname: 'Dan',
    lname: 'Carr',
  },
};

const appReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_USER:
      return Object.assign({}, state, action);
    default: break;
  }
  return state;
};

export default appReducer;

import { combineReducers } from 'redux';

// Reducers
import appReducer from './app-reducer';
import fooBarReducer from './foobar-reducer';

// Combine Reducers
const reducers = combineReducers({
  appState: appReducer,
  fooBarState: fooBarReducer,
});

export default reducers;

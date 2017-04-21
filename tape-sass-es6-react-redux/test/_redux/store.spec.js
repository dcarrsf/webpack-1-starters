import { describe } from 'tape-plus';

// Store and Reducers
import store from '../../src/es6/store.js';
import fooBarReducer from '../../src/es6/reducers/foobar-reducer.js';

// Run Tests
describe('Store', it => {

  // --------------------
  // Unit Testing:

  it.group('combineReducers', test => {

    test('it contains appState and fooBarState objects.', (t) => {
      // Set initial state
      fooBarReducer(undefined, {});
      // Creates the expected state
      const state = store.getState();
      // Test: state exists?
      t.equal(state.appState !== undefined, true);
      t.equal(state.fooBarState !== undefined, true);

      t.comment('---------------');
    });
  });
});

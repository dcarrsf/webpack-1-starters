import { describe } from 'tape-plus';

// Reducers and types
import fooBarReducer from '../../src/es6/reducers/foobar-reducer.js';
import { CLICKED_FOO, CLICKED_BAR } from '../../src/es6/actions/action-types.js';

// Fixtures
let expectedResult;

// Run Tests
describe('Reducers', it => {

  // --------------------
  // Unit Testing:

  it.group('fooBarReducer', test => {

    // Clean up
    test.afterEach(t => {
      expectedResult = null;
    });

    // Test: Reducers
    test('it returns the initial state.', (t) => {
      // Fixture
      expectedResult = {
        a: 0,
        b: 0,
        c: 0,
      }
      // Creates the expected result?
      t.deepEqual(fooBarReducer(undefined, {}), expectedResult);
    });

    test('it updates the a, b, and c state when called.', (t) => {
      // Fixtures
      const state = {
        a: 0,
        b: 0,
        c: 0,
      }
      expectedResult = {
        a: 10,
        b: 10,
        c: 10,
      }
      // Creates the expected result?
      t.deepEqual(fooBarReducer(state, { type: CLICKED_FOO }), expectedResult);
      t.deepEqual(fooBarReducer(state, { type: CLICKED_BAR }), expectedResult);

      t.comment('---------------');
    });
  });
});

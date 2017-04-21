import { describe } from 'tape-plus';

// Action creators and types
import getFooBarAction from '../../src/es6/actions/creators/foobar-actions.js';
import { CLICKED_FOO, CLICKED_BAR } from '../../src/es6/actions/action-types.js';

// Fixtures
let expectedAction;

// Run Tests
describe('Actions', it => {

  // --------------------
  // Unit Testing:

  it.group('getFooBarAction', test => {

    // Clean up
    test.afterEach(t => {
      expectedAction = null;
    });

    test('it creates a CLICKED_FOO action.', (t) => {
      // Fixture
      expectedAction = {
        type: CLICKED_FOO,
      }
      // Creates the expected action
      t.deepEqual(getFooBarAction('Foo'), expectedAction);
    });

    test('it creates a CLICKED_BAR action.', (t) => {
      // Fixture
      expectedAction = {
        type: CLICKED_BAR,
      }
      // Creates the expected action
      t.deepEqual(getFooBarAction('Bar'), expectedAction);

      t.comment('---------------');
    });
  });
});

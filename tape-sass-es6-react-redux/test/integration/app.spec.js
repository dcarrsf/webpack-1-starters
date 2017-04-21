import React from 'react';
import { describe } from 'tape-plus';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

// Store
import store from '../../src/es6/store.js';

// Component (top level)
import App from '../../src/es6/containers/App.jsx';

// Enzyme
let wrapper;

// Bindings
function getProvider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// Run Tests
describe('<App />', it => {

  // --------------------
  // Integration Testing:

  it.group('Integration', test => {

    // Hooks
    test.beforeEach(t => {
      wrapper = mount(getProvider());
    });

    test.afterEach(t => {
      wrapper.unmount();
    });

    // Test: Sub Components
    test('it contains a FooBar component.', (t) => {
      // Contains FooBar component
      t.equal(wrapper.find('FooBar').length === 1, true);

      t.comment('---------------');
    });
  });
});

import React from 'react';
import { describe } from 'tape-plus';
import { shallow } from 'enzyme';

// Component
import Foo from '../../src/es6/components/foo/Foo.jsx';

// Enzyme
let wrapper

// Run tests
describe('<Foo />', it => {

  // --------------------
  // Unit Test:

  it.group('Unit', test => {
    test.beforeEach(t => {
      wrapper = shallow(<Foo a={ 2 } b={ 2 } />)
    })
    // Test: Addition of props
    test('it adds two numbers.', (t) => {
      t.equal(wrapper.text(), 'Foo: 4');
    })
  })
})

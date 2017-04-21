import React from 'react';
import { describe } from 'tape-plus';
import { shallow } from 'enzyme';

// Component
import Bar from '../../src/es6/components/bar/Bar.jsx';

// Enzyme
let wrapper

// Run tests
describe('<Bar />', it => {

  // --------------------
  // Unit Test:

  it.group('Unit', test => {
    test.beforeEach(t => {
      wrapper = shallow(<Bar a={ 2 } b={ 2 } c={2} />)
    })
    // Test: Addition of props
    test('it adds three numbers.', (t) => {
      t.equal(wrapper.text(), 'Bar: 6');
    })
  })
})

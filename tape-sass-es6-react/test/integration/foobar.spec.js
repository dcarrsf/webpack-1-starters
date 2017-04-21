import React from 'react'
import { describe } from 'tape-plus'
import { mount } from 'enzyme'

// Component
import FooBar from '../../src/es6/containers/foobar/FooBar.jsx'

// Enzyme
let wrapper = mount(<FooBar />)

// Run Tests
describe('<FooBar />', it => {

  // --------------------
  // Integration Testing:

  it.group('Integration', test => {
    test.beforeEach(t => {
      // ...
    })
    test.afterEach(t => {
      // ...
    })
    // Test: Sub Components
    test('it contains Foo and Bar components.', (t) => {
      // Contains Foo and Bar components
      t.equal(wrapper.find('Foo').length === 1, true)
      t.equal(wrapper.find('Bar').length === 1, true)
    })
    // Test: State & Props
    test('it contains a, b, and c state and props.', (t) => {
      // Contains default state
      const fooBarState = wrapper.state();
      t.equal(fooBarState.a === 0, true)
      t.equal(fooBarState.b === 0, true)
      t.equal(fooBarState.c === 0, true)
      // Contains default props in Foo
      const fooProps = wrapper.find('Foo').props()
      t.equal(fooProps.a === 0, true)
      t.equal(fooProps.b === 0, true)
      // Contains default props in Bar
      const barProps = wrapper.find('Bar').props()
      t.equal(barProps.a === 0, true)
      t.equal(barProps.b === 0, true)
      t.equal(barProps.c === 0, true)

      t.comment('---------------')
    })
  })

  // --------------------
  // Behavior Testing:

  it.group('Behavior', test => {
    test.beforeEach(t => {
      // ...
    })
    test.afterEach(t => {
      // ...
    })
    test('it updates a, b, and c values when clicked.', (t) => {
      // Cache values
      let a = wrapper.state().a
      let b = wrapper.state().b
      let c = wrapper.state().c
      // Simulate click
      wrapper.find('Foo').find('h1').simulate('click')
      // Test value has changed
      t.notEqual(wrapper.state().a === a, true)
      t.notEqual(wrapper.state().b === b, true)
      t.notEqual(wrapper.state().c === c, true)
      // Cache values
      a = wrapper.state().a
      b = wrapper.state().b
      c = wrapper.state().c
      // Simulate click
      wrapper.find('Bar').find('h1').simulate('click')
      // Test value has changed
      t.notEqual(wrapper.state().a === a, true)
      t.notEqual(wrapper.state().b === b, true)
      t.notEqual(wrapper.state().c === c, true)

      t.comment('---------------')
    })
  })
})

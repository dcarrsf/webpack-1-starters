import React from 'react';
import { connect } from 'react-redux';
import Foo from '../../components/foo/Foo.jsx';
import Bar from '../../components/bar/Bar.jsx';
import getFooBarAction from '../../actions/creators/foobar-actions.js';

/**
 * *******************************************************
 *
 *  The controller for the FooBar section of the page.
 *
 *  @author     Dan Carr
 *  @date       January 2017
 *
 * *******************************************************
 */
class FooBar extends React.Component {
  // Lifecycle...
  render() {
    // Calculations...
    return (
      <div className='foobar card'>
        <div className='pull-left'><Foo {...this.props} /></div>
        <div className='pull-right'><Bar {...this.props} /></div>
      </div>
    );
  }
}

// Redux props (bindings)
const mapStateToProps = function(store) {
  return {
    a: store.fooBarState.a,
    b: store.fooBarState.b,
    c: store.fooBarState.c,
  };
};

// Redux dispatch (bindings)
const mapDispatchToProps = function(dispatch) {
  return {
    clickHandler: (id) => {
      dispatch(getFooBarAction(id));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FooBar);

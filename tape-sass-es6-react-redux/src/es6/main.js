import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Components
import App from './containers/App.jsx';
import store from './store.js';

// SASS
import '../sass/main.scss';

/**
 * *******************************************************
 *
 *  The main.js file renders the app to the DOM (bundling entry point).
 *
 *  @author     Dan Carr
 *  @date       January 2017
 *
 * *******************************************************
 */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

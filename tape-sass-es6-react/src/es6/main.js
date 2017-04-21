import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.jsx';
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
  <App />,
  document.getElementById('root')
);

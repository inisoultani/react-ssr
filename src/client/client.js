// entry point for the client side
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../redux/store';

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,

  document.querySelector('#root'),
);

console.log('client entry point');

// entry point for the client side
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from '../redux/store';
import { renderRoutes } from 'react-router-config';

// console.log(module);

ReactDOM.hydrate(
  // no need to pass down the req object
  // since cookie header only needed by server-side store
  <Provider store={createStore()}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,

  document.querySelector('#root'),
);

console.log('client entry point');

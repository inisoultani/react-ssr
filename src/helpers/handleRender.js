import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { renderRoutes, matchRoutes } from 'react-router-config';

const handleRender = (req, res) => {
  // console.log(matchRoutes(Routes, req.path));
  // sample output of matchRoutes
  // [
  //   {
  //     route: {
  //       path: '/users',
  //       loadData: [Function: loadData],
  //       component: [Function: UsersList]
  //     },
  //     match: { path: '/users', url: '/users', isExact: true, params: {} }
  //   }
  // ]
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then((values) => {
    // console.log(values);

    // translate es2015 syntax into common js, so that node.js server recognize it
    const htmlContent = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>,
    );

    // grab initial state from Redux store
    const intialState = store.getState();
    res.send(renderFullPage(htmlContent, intialState));
  });
};

// always keep in mind, the window.__PRELOADED_STATE__ must be declared before script bundle.js
const renderFullPage = (html, reduxInitialState) => {
  return `
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>SSR</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(
          reduxInitialState,
        ).replace(/</g, '\\u003c')}
      </script>
      <script src="bundle.js"></script>
    </body>
  </html> 
  `;
};

export default handleRender;

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { createStore } from '../redux/store';
import { Provider } from 'react-redux';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Helmet } from 'react-helmet';

import App from '../client/components/App';

const handleRender = (req, res) => {
  // ref on handling ssr styled-component - https://styled-components.com/docs/advanced#server-side-rendering
  const sheet = new ServerStyleSheet();
  const store = createStore(req);
  const context = {};
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

  Promise.all([...promises]).then((values) => {
    // console.log(values);

    // translate es2015 syntax into common js, so that node.js server recognize it
    const htmlContent = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <StyleSheetManager sheet={sheet.instance}>
            <div>{renderRoutes(Routes)}</div>
          </StyleSheetManager>
        </StaticRouter>
      </Provider>,
    );

    // whenever <Redirect /> rendered it will push some data to context
    // if context.url exist, then we need to redirect to the url instead send the HTML.
    // if (context.url) {
    //   return res.redirect(301, context.url);
    // }

    if (context.notFound) res.status(404);

    // grab style generated from styled-component
    const styleTags = sheet.getStyleTags();
    sheet.seal();

    // grab initial state from Redux store
    const intialState = store.getState();
    res.send(renderFullPage(htmlContent, styleTags, intialState));
  });
};

// always keep in mind, the window.__PRELOADED_STATE__ must be declared before script bundle.js
const renderFullPage = (html, styleTags, reduxInitialState) => {
  const helmet = Helmet.renderStatic();

  return `
  <html>
    <head>
      <meta charset="UTF-8" />
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <title>SSR</title>
      ${styleTags}
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

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import Comment from '../redux/Comment';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

const handleRender = (req, res) => {
  // translate es2015 syntax into common js, so that node.js server recognize it
  const htmlContent = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>,
  );

  const intialState = {
    comments: [new Comment('comment from server')],
  };

  res.send(renderFullPage(htmlContent, intialState));
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

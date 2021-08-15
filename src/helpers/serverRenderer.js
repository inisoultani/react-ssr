import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {
  // translate es2015 syntax into common js, so that node.js server recognize it
  const content = renderToString(<Home />);
  return `
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>SSR</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html> 
  `;
};

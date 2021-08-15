import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  // translate es2015 syntax into common js, so that node.js server recognize it
  const content = renderToString(<Home />);
  const html = `
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
  res.send(html);
});

app.listen(3000, () => {
  console.log('Start listenting on port 3000');
});

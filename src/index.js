const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req, res) => {
  // translate es2015 syntax into common js, so that node.js server recognize it
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(3000, () => {
  console.log('Start listenting on port 3000');
});

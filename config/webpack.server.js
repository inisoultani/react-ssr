const path = require('path');
const merge = require('webpack-merge').merge;
const commonConfig = require('./webpack.common.js');
const webpackNodeExternals = require('webpack-node-externals');

const serverConfig = {
  // inform webpack that we are building bundle.js
  // for nodejs rather than for the browser
  target: 'node',

  // inform webpack the root file of our
  // server application
  entry: './src/index.js',

  // inform webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(`${__dirname}/..`, 'build'),
    clean: true,
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(commonConfig, serverConfig);

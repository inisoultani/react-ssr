const path = require('path');
const merge = require('webpack-merge').merge;
const commonConfig = require('./webpack.common.js');

const clientConfig = {
  // inform webpack the root file of our
  // client entry point for the application
  entry: './src/client/client.js',

  // inform webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(`${__dirname}/..`, 'public'),
    clean: true,
  },
};
module.exports = merge(clientConfig, commonConfig);

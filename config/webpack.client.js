const path = require('path');
const merge = require('webpack-merge').merge;
const commonConfig = require('./webpack.common.js');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

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

  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
      },
    }),
  ],
};

module.exports = merge(clientConfig, commonConfig);

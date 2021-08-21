const path = require('path');
const merge = require('webpack-merge').merge;
const commonConfig = require('./webpack.common.js');
const webpackNodeExternals = require('webpack-node-externals');
// const {
//   withModuleFederation,
//   MergeRuntime,
//   ModuleFederationPlugin,
// } = require('@module-federation/nextjs-mf');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

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

  // webpack: (config, options) => {
  //   const { buildId, dev, isServer, defaultLoaders, webpack } = options;
  //   const mfConf = {
  //     name: 'container',
  //     library: { type: config.output.libraryTarget, name: 'container' },
  //     filename: 'build/remoteEntry.js',
  //     remotes: {
  //       marketing:
  //         '/Users/muhammadsoultani/Documents/code/reactjs/mfp/marketing/dist/remoteEntry.js',
  //     },
  //     exposes: {},
  //     shared: [],
  //   };

  //   // Configures ModuleFederation and other Webpack properties
  //   withModuleFederation(config, options, mfConf);

  //   if (!isServer) {
  //     config.output.publicPath = 'http://localhost:3001/_next/';
  //   }

  //   config.plugins.push(new MergeRuntime());

  //   return config;
  // },

  // plugins: [
  //   new ModuleFederationPlugin({
  //     name: 'container',
  //     // library: { type: config.output.libraryTarget, name: 'container' },
  //     // filename: 'build/remoteEntry.js',
  //     remotes: {
  //       marketing:
  //         '/Users/muhammadsoultani/Documents/code/reactjs/mfp/marketing/dist/remoteEntry.js',
  //     },
  //   }),
  // ],
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
      },
    }),
  ],

  externals: [webpackNodeExternals()],
};

module.exports = merge(commonConfig, serverConfig);

const path = require('path');

module.exports = {
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
  },

  // inform webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            // '@babel/preset-stage-0',
            [
              '@babel/preset-env',
              { targets: { browsers: ['last 2 versions'] } },
            ],
          ],
        },
      },
    ],
  },
};

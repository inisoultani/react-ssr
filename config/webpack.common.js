const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  devtool: 'source-map',

  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
      },
    }),
  ],

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
          // below plugin for the async/await or createAsyncThunk to work on ssr
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
    ],
  },
};

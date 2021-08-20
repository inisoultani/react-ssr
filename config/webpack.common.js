const {
  withModuleFederation,
  MergeRuntime,
  ModuleFederationPlugin,
} = require('@module-federation/nextjs-mf');

module.exports = {
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
  devtool: 'source-map',

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

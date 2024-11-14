// micro-frontend-1/webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'microFrontend1',
      filename: 'microFrontend1RemoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: {
        react: {
          singleton: true,
          eager: false,
          shareScope: 'default',
          strictVersion: true,
        },
        'react-dom': {
          singleton: true,
          eager: false,
          shareScope: 'default',
          strictVersion: true,
        },
      },
    }),
  ],
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};

// micro-frontend-2/webpack.config.js
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
      name: 'microFrontend2',
      filename: 'microFrontend2RemoteEntry.js', // Unique filename
      exposes: {
        './App': './src/App',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '18.0.0',
          eager: false,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '18.0.0',
          eager: false,
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

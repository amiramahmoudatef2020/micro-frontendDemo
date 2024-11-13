import federation from '@originjs/vite-plugin-federation';

export default {
  plugins: [
    federation({
      name: 'micro-frontend-3',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};

import federation from '@originjs/vite-plugin-federation';

export default {
  plugins: [
    federation({
      name: 'host-app',
      remotes: {
        microFrontend1: 'http://localhost:3001/assets/remoteEntry.js',
        microFrontend2: 'http://localhost:3002/assets/remoteEntry.js',
        microFrontend3: 'http://localhost:3003/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};
